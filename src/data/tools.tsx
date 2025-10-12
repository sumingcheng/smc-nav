import { Category } from "../types";
import { RiToolsLine } from "react-icons/ri";

export const tools: Category = {
  id: "tools",
  name: { zh: "工具", en: "Tools" },
  description: { zh: "开发与服务工具集合", en: "Development and service tools" },
  icon: <RiToolsLine className="text-lg" />,
  subcategories: [
    {
      id: "api-tools",
      name: { zh: "API 工具", en: "API Tools" },
      description: { zh: "API 相关开发工具与服务", en: "API development tools and services" },
      websites: [
        {
          name: { zh: "SerpAPI", en: "SerpAPI" },
          url: "https://serpapi.com/dashboard",
          description: { zh: "搜索引擎 API 服务，获取 Google 搜索结果", en: "Search engine API service for Google search results" },
          icon: "https://www.google.com/s2/favicons?domain=serpapi.com&sz=64",
        },
      ],
    },
    {
      id: "translation-tools",
      name: { zh: "翻译工具", en: "Translation Tools" },
      description: { zh: "在线翻译服务与工具", en: "Online translation services and tools" },
      websites: [
        {
          name: { zh: "Google 翻译", en: "Google Translate" },
          url: "https://translate.google.com/?hl=zh-CN&sl=en&tl=zh-CN&op=translate",
          description: { zh: "Google 在线翻译服务，支持多种语言互译", en: "Google's translation service supporting multiple languages" },
          icon: "https://www.google.com/s2/favicons?domain=translate.google.com&sz=64",
        },
        {
          name: { zh: "PDF2ZH", en: "PDF2ZH" },
          url: "https://pdf2zh.com/",
          description: { zh: "PDF 文档翻译工具，支持将 PDF 文件翻译成中文", en: "PDF translation tool for translating documents to Chinese" },
          icon: "https://www.google.com/s2/favicons?domain=pdf2zh.com&sz=64",
        },
      ],
    },
    {
      id: "status-monitoring",
      name: { zh: "状态监控", en: "Status Monitoring" },
      description: { zh: "服务状态监控平台", en: "Service status monitoring platforms" },
      websites: [
        {
          name: { zh: "OpenAI Status", en: "OpenAI Status" },
          url: "https://status.openai.com/",
          description: { zh: "OpenAI 服务状态监控，查看 API 和服务可用性", en: "Monitor OpenAI service status and API availability" },
          icon: "https://www.google.com/s2/favicons?domain=status.openai.com&sz=64",
        },
        {
          name: { zh: "Scamalytics", en: "Scamalytics" },
          url: "https://scamalytics.com/",
          description: { zh: "IP 地址欺诈检测和状态测试，检查 IP 风险评分", en: "IP fraud detection and risk scoring" },
          icon: "https://www.google.com/s2/favicons?domain=scamalytics.com&sz=64",
        },
        {
          name: { zh: "Google AI Studio Status", en: "Google AI Studio Status" },
          url: "https://aistudio.google.com/status",
          description: { zh: "Google AI Studio 服务状态监控，查看 AI 开发平台的服务可用性", en: "Monitor Google AI Studio service availability" },
          icon: "https://www.google.com/s2/favicons?domain=aistudio.google.com&sz=64",
        },
        {
          name: { zh: "Anthropic Claude Status", en: "Anthropic Claude Status" },
          url: "https://status.anthropic.com/",
          description: { zh: "Claude AI 服务状态监控，查看 Claude API、Web 端和控制台的服务状态", en: "Monitor Claude AI service status including API and console" },
          icon: "https://www.google.com/s2/favicons?domain=status.anthropic.com&sz=64",
        },
      ],
    },
    {
      id: "dev-reference",
      name: { zh: "开发参考", en: "Developer Reference" },
      description: { zh: "开发者参考手册与速查表", en: "Developer references and cheat sheets" },
      websites: [
        {
          name: { zh: "Linux 命令手册", en: "Linux Command Manual" },
          url: "https://wangchujiang.com/linux-command/",
          description: { zh: "全面的 Linux 命令查询手册，包含612个常用命令详解", en: "Comprehensive Linux command manual with 612 common commands" },
          icon: "https://www.google.com/s2/favicons?domain=wangchujiang.com&sz=64",
        },
        {
          name: { zh: "Devhints", en: "Devhints" },
          url: "https://devhints.io/",
          description: { zh: "开发者速查表集合，涵盖多种编程语言和工具", en: "Developer cheat sheets covering various languages and tools" },
          icon: "https://www.google.com/s2/favicons?domain=devhints.io&sz=64",
        },
        {
          name: { zh: "Docker镜像源汇总", en: "Docker Registry Mirrors" },
          url: "https://www.coderjia.cn/archives/dba3f94c-a021-468a-8ac6-e840f85867ea",
          description: { zh: "目前国内可用Docker镜像源汇总", en: "Available Docker registry mirrors in China" },
          icon: "https://www.google.com/s2/favicons?domain=coderjia.cn&sz=64",
        },
      ],
    },
    {
      id: "online-editors",
      name: { zh: "在线编辑器", en: "Online Editors" },
      description: { zh: "在线代码与数据编辑工具", en: "Online code and data editing tools" },
      websites: [
        {
          name: { zh: "JSON Crack", en: "JSON Crack" },
          url: "https://jsoncrack.com/editor",
          description: { zh: "JSON 可视化编辑器，支持复杂 JSON 数据结构可视化", en: "JSON visualizer for complex data structures" },
          icon: "https://www.google.com/s2/favicons?domain=jsoncrack.com&sz=64",
        },
        {
          name: { zh: "SQLime", en: "SQLime" },
          url: "https://sqlime.org/",
          description: { zh: "在线 SQL 编辑器和数据库管理工具", en: "Online SQL editor and database management tool" },
          icon: "https://www.google.com/s2/favicons?domain=sqlime.org&sz=64",
        },
      ],
    },
    {
      id: "config-tools",
      name: { zh: "配置工具", en: "Config Tools" },
      description: { zh: "服务器与应用配置工具", en: "Server and application configuration tools" },
      websites: [
        {
          name: { zh: "NGINX 配置工具", en: "NGINX Config Tool" },
          url: "https://www.digitalocean.com/community/tools/nginx",
          description: { zh: "DigitalOcean 提供的 NGINX 配置生成器，简化服务器配置过程", en: "DigitalOcean's NGINX config generator for simplified server setup" },
          icon: "https://www.google.com/s2/favicons?domain=digitalocean.com&sz=64",
        },
      ],
    },
    {
      id: "image-tools",
      name: { zh: "图像工具", en: "Image Tools" },
      description: { zh: "在线图像处理工具", en: "Online image processing tools" },
      websites: [
        {
          name: { zh: "Cleanup.Pictures", en: "Cleanup.Pictures" },
          url: "https://cleanup.pictures/",
          description: { zh: "AI 驱动的图像清理工具，可移除图片中不需要的元素", en: "AI-powered image cleanup tool to remove unwanted elements" },
          icon: "https://www.google.com/s2/favicons?domain=cleanup.pictures&sz=64",
        },
      ],
    },
  ],
};
