export const docsConfig = {
  framework: [
    {
      title: "Getting Started",
      items: [
        { title: "Welcome to AzuraJS", slug: "introduction" },
        { title: "Installation", slug: "framework/getting-started/installation" },
        { title: "Quick Start", slug: "framework/getting-started/quick-start" },
        { title: "Usage with JavaScript", slug: "framework/getting-started/usage-with-javascript" },
        { title: "Configuration", slug: "framework/getting-started/configuration" },
      ],
    },
    {
      title: "Core Concepts",
      items: [
        { title: "Controllers", slug: "framework/concepts/controllers" },
        { title: "Routing", slug: "framework/concepts/routing" },
        { title: "Decorators", slug: "framework/concepts/decorators" },
        { title: "Middleware", slug: "framework/concepts/middleware" },
        { title: "Request & Response", slug: "framework/concepts/http" },
      ],
    },
    {
      title: "Features",
      items: [
        { title: "Validation", slug: "framework/features/validation" },
        { title: "Cookies", slug: "framework/features/cookies" },
        { title: "Logger", slug: "framework/features/logger" },
        { title: "CORS (Cross-Origin Resource Sharing)", slug: "framework/features/cors" },
        { title: "Rate Limiting", slug: "framework/features/rate-limiting" },
        { title: "Proxy", slug: "framework/features/proxy" },
        { title: "Cluster Mode", slug: "framework/features/cluster-mode" },
        { title: "Error Handling", slug: "framework/features/error-handling" },
        { title: "Swagger / OpenAPI", slug: "framework/features/swagger" },
      ],
    },
    {
      title: "Advanced",
      items: [
        { title: "Custom Servers", slug: "framework/advanced/custom-servers" },
        { title: "Type Extensions", slug: "framework/advanced/type-extensions" },
        { title: "Modular Imports", slug: "framework/advanced/modular-imports" },
        { title: "TypeScript Support", slug: "framework/advanced/typescript-support" },
      ],
    },
  ],
  v3: [
    {
      title: "Getting Started",
      items: [
        { title: "Welcome to AzuraJS v3", slug: "introduction-v3" },
        { title: "Installation", slug: "v3/getting-started/installation" },
        { title: "Quick Start", slug: "v3/getting-started/quick-start" },
        { title: "Usage with JavaScript", slug: "v3/getting-started/usage-with-javascript" },
        { title: "Configuration", slug: "v3/getting-started/configuration" },
        { title: "Migrating from v2 to v3", slug: "v3/getting-started/migrating-from-v2" },
      ],
    },
    {
      title: "Core Concepts",
      items: [
        { title: "Controllers", slug: "v3/concepts/controllers" },
        { title: "Routing", slug: "v3/concepts/routing" },
        { title: "Decorators", slug: "v3/concepts/decorators" },
        { title: "Middleware", slug: "v3/concepts/middleware" },
        { title: "Request & Response", slug: "v3/concepts/http" },
      ],
    },
    {
      title: "Features",
      items: [
        { title: "Plugins Overview", slug: "v3/features/plugins" },
        { title: "Validation", slug: "v3/features/validation" },
        { title: "Cookies", slug: "v3/features/cookies" },
        { title: "Logger", slug: "v3/features/logger" },
        { title: "CORS", slug: "v3/features/cors" },
        { title: "Rate Limiting", slug: "v3/features/rate-limiting" },
        { title: "JWT Authentication", slug: "v3/features/jwt" },
        { title: "Security (Helmet)", slug: "v3/features/security" },
        { title: "Compression", slug: "v3/features/compression" },
        { title: "Static Files", slug: "v3/features/static-files" },
        { title: "Proxy", slug: "v3/features/proxy" },
        { title: "Server-Sent Events", slug: "v3/features/sse" },
        { title: "Health Check", slug: "v3/features/health-check" },
        { title: "Error Handling", slug: "v3/features/error-handling" },
        { title: "OpenAPI & Swagger", slug: "v3/features/swagger-openapi" },
      ],
    },
    {
      title: "Advanced",
      items: [
        { title: "Modular Imports", slug: "v3/advanced/modular-imports" },
        { title: "TypeScript Support", slug: "v3/advanced/typescript-support" },
        { title: "Type Extensions", slug: "v3/advanced/type-extensions" },
        { title: "Custom Servers", slug: "v3/advanced/custom-servers" },
      ],
    },
  ],
  cdn: [
    {
      title: "Edge Network",
      items: [
        { title: "AzuraJS CDN", slug: "cdn/edge-network/cdn-basics" },
        { title: "Caching Strategies", slug: "cdn/edge-network/caching-strategies" },
      ],
    },
  ],
};

export const frameworkOptions = [
  { id: "framework", label: "AzuraJS Framework", icon: "lucide:box" },
  { id: "v3", label: "AzuraJS Framework v3", icon: "lucide:zap" },
  { id: "cdn", label: "@azurajs/cdn", icon: "lucide:globe" },
];
