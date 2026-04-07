import adapter from "@sveltejs/adapter-node";
import { vitePreprocess } from "@sveltejs/vite-plugin-svelte";
import { mdsvex, escapeSvelte } from "mdsvex";
import { createHighlighter } from "shiki";
import { join } from "path";

const mdxImports = `
    import Callout from '$lib/components/mdx/Callout.svelte';
    import Tabs from '$lib/components/mdx/Tabs.svelte';
    import Tab from '$lib/components/mdx/TabItem.svelte';
    import CodeBlock from '$lib/components/ui/CodeBlock.svelte';
    import Icon from '@iconify/svelte';
`;

// Create a TRUE singleton highlighter instance - initialized once at module load
const highlighterPromise = createHighlighter({
  themes: ["github-dark"],
  langs: [
    "javascript",
    "typescript",
    "bash",
    "sh",
    "json",
    "yaml",
    "text",
  ],
});

const config = {
  extensions: [".svelte", ".mdx"],

  preprocess: [
    {
      markup: async ({ content, filename }) => {
        if (filename && filename.endsWith(".mdx")) {
          let newCode = content;

          if (content.trim().startsWith("---")) {
            const endOfFrontmatter = content.indexOf("---", 3);
            if (endOfFrontmatter !== -1) {
              const before = content.slice(0, endOfFrontmatter + 3);
              const after = content.slice(endOfFrontmatter + 3);
              newCode = `${before}\n<script>${mdxImports}</script>${after}`;
            }
          } else {
            newCode = `<script>${mdxImports}</script>\n${content}`;
          }

          // mdsvex does not process markdown inside Svelte component blocks
          // (Tab, Callout, etc.), so code fences, inline code, and curly
          // braces are passed raw to Svelte and break compilation.
          // Pre-process them here so Svelte only sees safe HTML.
          const highlighter = await highlighterPromise;
          newCode = newCode.replace(
            /<(Tab|Callout)(\s[^>]*)?>[\s\S]*?<\/\1>/g,
            (fullMatch, tag) => {
              const openTagEnd = fullMatch.indexOf(">") + 1;
              const closeTag = `</${tag}>`;
              const closeTagStart = fullMatch.lastIndexOf(closeTag);
              const openTag = fullMatch.slice(0, openTagEnd);
              let inner = fullMatch.slice(openTagEnd, closeTagStart);

              // 1. Highlight fenced code blocks
              inner = inner.replace(
                /```(\w+)\s*\n([\s\S]*?)```/g,
                (_m, lang, code) => {
                  try {
                    let html = escapeSvelte(
                      highlighter.codeToHtml(code.trim(), {
                        lang,
                        theme: "github-dark",
                      })
                    );
                    html = html.replace(
                      /(<pre[^>]*)\s+tabindex="0"/g,
                      "$1"
                    );
                    return `<CodeBlock lang="${lang}">${html}</CodeBlock>`;
                  } catch {
                    return `<CodeBlock lang="${lang}"><pre><code>${escapeSvelte(code.trim())}</code></pre></CodeBlock>`;
                  }
                }
              );

              // 2. Convert inline backtick code to <code> tags
              inner = inner.replace(/`([^`]+)`/g, (_m, code) => {
                const esc = code
                  .replace(/&/g, "&amp;")
                  .replace(/</g, "&lt;")
                  .replace(/>/g, "&gt;")
                  .replace(/{/g, "&#123;")
                  .replace(/}/g, "&#125;");
                return `<code>${esc}</code>`;
              });

              // 3. Escape remaining { and } to prevent Svelte expression parsing
              inner = inner.replace(/{/g, "&#123;").replace(/}/g, "&#125;");

              return openTag + inner + closeTag;
            }
          );

          return { code: newCode };
        }
      },
    },

    vitePreprocess(),
    mdsvex({
      extensions: [".mdx"],
      layout: {
        _: join(process.cwd(), "src/lib/components/mdx/MdxLayout.svelte"),
      },
      highlight: {
        highlighter: async (code, lang = "text") => {
          try {
            const highlighter = await highlighterPromise;
            let html = escapeSvelte(highlighter.codeToHtml(code, { lang, theme: "github-dark" }));
            // Remove tabindex="0" from pre elements for accessibility
            html = html.replace(/(<pre[^>]*)\s+tabindex="0"/g, '$1');
            return `<CodeBlock lang="${lang}">${html}</CodeBlock>`;
          } catch (error) {
            console.error(`Shiki highlighting error for lang "${lang}":`, error);
            // Fallback to plain code block
            return `<CodeBlock lang="${lang}"><pre><code>${escapeSvelte(code)}</code></pre></CodeBlock>`;
          }
        },
      },
    }),
  ],

  kit: {
    adapter: adapter({
      out: "dist",
      precompress: false,
      envPrefix: "",
    }),
  },
};

export default config;
