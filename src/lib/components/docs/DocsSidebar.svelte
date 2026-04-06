<script lang="ts">
  import { page } from "$app/stores";
  import { slide } from "svelte/transition";
  import { getDocsConfig, getFrameworkOptions } from "$lib/config/docs";
  import type { FrameworkId } from "$lib/config/docs";
  import Icon from "@iconify/svelte";
  import { onMount } from "svelte";

  export let open = false;
  export let collapsed = false;

  let activeFramework: FrameworkId = "framework";
  let openSections: Record<number, boolean> = {};

  $: currentLang = $page.params.lang || "en";
  $: currentSlug = Array.isArray($page.params.slug) 
    ? $page.params.slug.filter((s: string) => s && s.trim()).join("/")
    : $page.params.slug || "";
  $: docsConfig = getDocsConfig(currentLang);
  $: frameworkOptions = getFrameworkOptions(currentLang);
  $: navItems = docsConfig[activeFramework] || [];

  $: {
    if (currentSlug.startsWith("v3/") || currentSlug === "introduction-v3") {
      if (activeFramework !== "v3") activeFramework = "v3";
    } else if (currentSlug.startsWith("cdn/")) {
      if (activeFramework !== "cdn") activeFramework = "cdn";
    } else if (currentSlug.startsWith("framework/") || currentSlug === "introduction") {
      if (activeFramework !== "framework") activeFramework = "framework";
    }
  }

  function toggleSection(index: number) {
    openSections[index] = !openSections[index];
  }

  $: isActive = (slug: string) => {
    const normalizedCurrent = currentSlug.replace(/\/+$/, "");
    const normalizedItem = slug.replace(/\/+$/, "");
    return normalizedCurrent === normalizedItem;
  };

  function selectFramework(id: FrameworkId) {
    activeFramework = id;
    navItems.forEach((_: any, i: number) => (openSections[i] = true));
  }

  function toggleCollapse() {
    collapsed = !collapsed;
  }

  onMount(() => {
    if (navItems) navItems.forEach((_: any, i: number) => (openSections[i] = true));
  });
</script>

<aside
  class="fixed inset-y-0 left-0 z-50 bg-[#020202] border-r border-white/5 transform transition-all duration-300 lg:translate-x-0 lg:fixed lg:top-16 lg:bottom-0 lg:h-[calc(100vh-4rem)]"
  class:translate-x-0={open}
  class:-translate-x-full={!open}
  class:w-75={!collapsed}
  class:w-16={collapsed}
>
  <div class="flex flex-col h-full">
    <div class="p-4 border-b border-white/5 flex items-center justify-between">
      {#if !collapsed}
        <div class="relative group flex-1">
          <button
            class="w-full flex items-center justify-between bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg px-3 py-2 text-sm font-medium text-white transition-all cursor-pointer"
          >
            <div class="flex items-center gap-2">
              <Icon
                icon={frameworkOptions.find((f) => f.id === activeFramework)?.icon || ""}
                width="16"
                class="text-blue-400"
              />
              {frameworkOptions.find((f) => f.id === activeFramework)?.label}
            </div>
            <Icon icon="lucide:chevrons-up-down" width="14" class="text-neutral-500" />
          </button>

          <div
            class="absolute top-full left-0 w-full mt-1 bg-[#0A0A0A] border border-white/10 rounded-lg shadow-xl overflow-hidden opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform origin-top z-50"
          >
            {#each frameworkOptions as option}
              <button
                on:click={() => selectFramework(option.id as FrameworkId)}
                class="w-full flex items-center gap-2 px-3 py-2 text-sm text-left hover:bg-white/5 transition-colors cursor-pointer
                {activeFramework === option.id ? 'text-blue-400 bg-blue-500/5' : 'text-neutral-400'}"
              >
                <Icon icon={option.icon} width="16" />
                {option.label}
                {#if activeFramework === option.id}
                  <Icon icon="lucide:check" width="14" class="ml-auto" />
                {/if}
              </button>
            {/each}
          </div>
        </div>
      {/if}
      
      <button
        on:click={toggleCollapse}
        class="hidden lg:flex items-center justify-center w-8 h-8 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 transition-all cursor-pointer"
        class:ml-3={!collapsed}
        aria-label={collapsed ? "Expand sidebar" : "Collapse sidebar"}
      >
        <Icon 
          icon={collapsed ? "lucide:chevron-right" : "lucide:chevron-left"} 
          width="16" 
          class="text-neutral-400"
        />
      </button>
    </div>

    {#if !collapsed}
      <div class="flex-1 overflow-y-auto custom-scrollbar p-4 pb-20">
        <nav class="space-y-6">
          {#each navItems as section, index}
            <div>
              <button
                on:click={() => toggleSection(index)}
                class="w-full flex items-center justify-between text-xs font-bold text-neutral-500 uppercase tracking-wider mb-2 hover:text-white transition-colors"
              >
                {section.title}
                <Icon
                  icon="lucide:chevron-down"
                  width="14"
                  class="transition-transform duration-200 {openSections[index] ? 'rotate-180' : ''}"
                />
              </button>

              {#if openSections[index]}
                <ul transition:slide|local={{ duration: 200 }} class="space-y-1 relative">
                  <div class="absolute left-0 top-0 bottom-0 w-px bg-white/5 ml-3"></div>

                  {#each section.items as item}
                    <li>
                      <a
                        href="/docs/{currentLang}/{item.slug}"
                        class="block pl-6 py-1.5 text-sm transition-all border-l-2 -ml-px
                        {isActive(item.slug)
                          ? 'border-blue-500 text-blue-400 font-medium bg-blue-500/5 rounded-r-md'
                          : 'border-transparent text-neutral-400 hover:text-white hover:border-neutral-700'}"
                        on:click={() => (open = false)}
                      >
                        {item.title}
                      </a>
                    </li>
                  {/each}
                </ul>
              {/if}
            </div>
          {/each}
        </nav>
      </div>
    {:else}
      <div class="flex-1 overflow-y-auto p-2 space-y-2">
        {#each navItems as section}
          {#each section.items as item}
            <a
              href="/docs/{currentLang}/{item.slug}"
              class="flex items-center justify-center w-12 h-12 rounded-lg transition-all
              {isActive(item.slug)
                ? 'bg-blue-500/10 text-blue-400 border border-blue-500/20'
                : 'text-neutral-400 hover:text-white hover:bg-white/5'}"
              title={item.title}
            >
              <Icon icon="lucide:file-text" width="20" />
            </a>
          {/each}
        {/each}
      </div>
    {/if}
  </div>
</aside>

{#if open}
  <button
    type="button"
    aria-label="Close sidebar overlay"
    class="fixed inset-0 bg-black/80 backdrop-blur-sm z-40 lg:hidden"
    transition:slide
    on:click={() => (open = false)}
    tabindex="0"
  ></button>
{/if}

<style>
  .custom-scrollbar {
    scrollbar-width: thin;
    scrollbar-color: rgba(255, 255, 255, 0.1) transparent;
  }

  .custom-scrollbar::-webkit-scrollbar {
    width: 6px;
  }

  .custom-scrollbar::-webkit-scrollbar-track {
    background: transparent;
  }

  .custom-scrollbar::-webkit-scrollbar-thumb {
    background: rgba(255, 255, 255, 0.1);
    border-radius: 3px;
  }

  .custom-scrollbar::-webkit-scrollbar-thumb:hover {
    background: rgba(255, 255, 255, 0.2);
  }
</style>