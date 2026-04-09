export const docsConfig = {
  framework: [
    {
      title: "Começando",
      items: [
        { title: "Bem-vindo ao AzuraJS", slug: "introduction" },
        { title: "Instalação", slug: "framework/comecando/instalacao" },
        { title: "Início Rápido", slug: "framework/comecando/inicio-rapido" },
        { title: "Uso com JavaScript", slug: "framework/comecando/uso-com-javascript" },
        { title: "Configuração", slug: "framework/comecando/configuracao" },
      ],
    },
    {
      title: "Conceitos Principais",
      items: [
        { title: "Controllers", slug: "framework/conceitos/controllers" },
        { title: "Roteamento", slug: "framework/conceitos/routing" },
        { title: "Decorators", slug: "framework/conceitos/decorators" },
        { title: "Middleware", slug: "framework/conceitos/middleware" },
        { title: "Request & Response", slug: "framework/conceitos/http" },
      ],
    },
    {
      title: "Recursos",
      items: [
        { title: "Validação", slug: "framework/recursos/validacao" },
        { title: "Cookies", slug: "framework/recursos/cookies" },
        { title: "Logger", slug: "framework/recursos/logger" },
        { title: "CORS (Cross-Origin Resource Sharing)", slug: "framework/recursos/cors" },
        { title: "Rate Limiting", slug: "framework/recursos/rate-limiting" },
        { title: "Proxy", slug: "framework/recursos/proxy" },
        { title: "Modo Cluster", slug: "framework/recursos/cluster-mode" },
        { title: "Tratamento de Erros", slug: "framework/recursos/error-handling" },
        { title: "Swagger / OpenAPI", slug: "framework/recursos/swagger" },
      ],
    },
    {
      title: "Avançado",
      items: [
        { title: "Servidores Customizados", slug: "framework/avancado/servidores-customizados" },
        { title: "Extensões de Tipo", slug: "framework/avancado/extensoes-de-tipo" },
        { title: "Importações Modulares", slug: "framework/avancado/importacoes-modulares" },
        { title: "Suporte TypeScript", slug: "framework/avancado/suporte-typescript" },
      ],
    },
  ],
  v3: [
    {
      title: "Começando",
      items: [
        { title: "Bem-vindo ao AzuraJS v3", slug: "introduction-v3" },
        { title: "Instalação", slug: "v3/comecando/instalacao" },
        { title: "Início Rápido", slug: "v3/comecando/inicio-rapido" },
        { title: "Uso com JavaScript", slug: "v3/comecando/uso-com-javascript" },
        { title: "Configuração", slug: "v3/comecando/configuracao" },
        { title: "Migração v2 → v3", slug: "v3/comecando/migracao-da-v2" },
      ],
    },
    {
      title: "Conceitos Principais",
      items: [
        { title: "Controllers", slug: "v3/conceitos/controllers" },
        { title: "Roteamento", slug: "v3/conceitos/routing" },
        { title: "Decorators", slug: "v3/conceitos/decorators" },
        { title: "Middleware", slug: "v3/conceitos/middleware" },
        { title: "Request & Response", slug: "v3/conceitos/http" },
      ],
    },
    {
      title: "Recursos",
      items: [
        { title: "Visão Geral dos Plugins", slug: "v3/recursos/plugins" },
        { title: "Validação", slug: "v3/recursos/validacao" },
        { title: "Cookies", slug: "v3/recursos/cookies" },
        { title: "Logger", slug: "v3/recursos/logger" },
        { title: "CORS", slug: "v3/recursos/cors" },
        { title: "Rate Limiting", slug: "v3/recursos/rate-limiting" },
        { title: "Autenticação JWT", slug: "v3/recursos/jwt" },
        { title: "Segurança (Helmet)", slug: "v3/recursos/security" },
        { title: "Compressão", slug: "v3/recursos/compression" },
        { title: "Arquivos Estáticos", slug: "v3/recursos/static-files" },
        { title: "Proxy", slug: "v3/recursos/proxy" },
        { title: "Server-Sent Events", slug: "v3/recursos/sse" },
        { title: "Health Check", slug: "v3/recursos/health-check" },
        { title: "Tratamento de Erros", slug: "v3/recursos/error-handling" },
        { title: "OpenAPI e Swagger", slug: "v3/recursos/swagger-openapi" },
      ],
    },
    {
      title: "Avançado",
      items: [
        { title: "Importações Modulares", slug: "v3/avancado/importacoes-modulares" },
        { title: "Suporte TypeScript", slug: "v3/avancado/suporte-typescript" },
        { title: "Extensões de Tipo", slug: "v3/avancado/extensoes-de-tipo" },
        { title: "Servidores Customizados", slug: "v3/avancado/servidores-customizados" },
      ],
    },
  ],
  cdn: [
    {
      title: "Rede Edge",
      items: [
        { title: "AzuraJS CDN", slug: "cdn/rede-edge/cdn-basico" },
        { title: "Estratégias de Cache", slug: "cdn/rede-edge/estrategias-cache" },
      ],
    },
  ],
};

export const frameworkOptions = [
  { id: "framework", label: "AzuraJS Framework", icon: "lucide:box" },
  { id: "v3", label: "AzuraJS Framework v3", icon: "lucide:zap" },
  { id: "cdn", label: "@azurajs/cdn", icon: "lucide:globe" },
];
