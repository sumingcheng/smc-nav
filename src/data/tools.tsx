import { Category } from "../types";
import { RiToolsLine } from "react-icons/ri";

export const tools: Category = {
  id: "tools",
  name: "工具",
  description: "开发与服务工具集合",
  icon: <RiToolsLine className="text-lg" />,
  subcategories: [
    {
      id: "api-tools",
      name: "API 工具",
      description: "API 相关开发工具与服务",
      websites: [
        {
          name: "SerpAPI",
          url: "https://serpapi.com/dashboard",
          description: "搜索引擎 API 服务，获取 Google 搜索结果",
          icon: "https://www.google.com/s2/favicons?domain=serpapi.com&sz=64",
        },
      ],
    },
    {
      id: "translation-tools",
      name: "翻译工具",
      description: "在线翻译服务与工具",
      websites: [
        {
          name: "Google 翻译",
          url: "https://translate.google.com/?hl=zh-CN&sl=en&tl=zh-CN&op=translate",
          description: "Google 在线翻译服务，支持多种语言互译",
          icon: "https://www.google.com/s2/favicons?domain=translate.google.com&sz=64",
        },
        {
          name: "PDF2ZH",
          url: "https://pdf2zh.com/",
          description: "PDF 文档翻译工具，支持将 PDF 文件翻译成中文",
          icon: "https://www.google.com/s2/favicons?domain=pdf2zh.com&sz=64",
        },
      ],
    },
    {
      id: "status-monitoring",
      name: "状态监控",
      description: "服务状态监控平台",
      websites: [
        {
          name: "OpenAI Status",
          url: "https://status.openai.com/",
          description: "OpenAI 服务状态监控，查看 API 和服务可用性",
          icon: "https://www.google.com/s2/favicons?domain=status.openai.com&sz=64",
        },
        {
          name: "Scamalytics",
          url: "https://scamalytics.com/",
          description: "IP 地址欺诈检测和状态测试，检查 IP 风险评分",
          icon: "https://www.google.com/s2/favicons?domain=scamalytics.com&sz=64",
        },
        {
          name: "Google AI Studio Status",
          url: "https://aistudio.google.com/status",
          description:
            "Google AI Studio 服务状态监控，查看 AI 开发平台的服务可用性",
          icon: "https://www.google.com/s2/favicons?domain=aistudio.google.com&sz=64",
        },
        {
          name: "Anthropic Claude Status",
          url: "https://status.anthropic.com/",
          description:
            "Claude AI 服务状态监控，查看 Claude API、Web 端和控制台的服务状态",
          icon: "https://www.google.com/s2/favicons?domain=status.anthropic.com&sz=64",
        },
      ],
    },
    {
      id: "dev-reference",
      name: "开发参考",
      description: "开发者参考手册与速查表",
      websites: [
        {
          name: "Linux 命令手册",
          url: "https://wangchujiang.com/linux-command/",
          description: "全面的 Linux 命令查询手册，包含612个常用命令详解",
          icon: "https://www.google.com/s2/favicons?domain=wangchujiang.com&sz=64",
        },
        {
          name: "Devhints",
          url: "https://devhints.io/",
          description: "开发者速查表集合，涵盖多种编程语言和工具",
          icon: "https://www.google.com/s2/favicons?domain=devhints.io&sz=64",
        },
        {
          name: "Docker镜像源汇总",
          url: "https://www.coderjia.cn/archives/dba3f94c-a021-468a-8ac6-e840f85867ea",
          description: "目前国内可用Docker镜像源汇总",
          icon: "https://www.google.com/s2/favicons?domain=coderjia.cn&sz=64",
        },
      ],
    },
    {
      id: "online-editors",
      name: "在线编辑器",
      description: "在线代码与数据编辑工具",
      websites: [
        {
          name: "JSON Crack",
          url: "https://jsoncrack.com/editor",
          description: "JSON 可视化编辑器，支持复杂 JSON 数据结构可视化",
          icon: "https://www.google.com/s2/favicons?domain=jsoncrack.com&sz=64",
        },
        {
          name: "SQLime",
          url: "https://sqlime.org/",
          description: "在线 SQL 编辑器和数据库管理工具",
          icon: "https://www.google.com/s2/favicons?domain=sqlime.org&sz=64",
        },
      ],
    },
    {
      id: "config-tools",
      name: "配置工具",
      description: "服务器与应用配置工具",
      websites: [
        {
          name: "NGINX 配置工具",
          url: "https://www.digitalocean.com/community/tools/nginx",
          description:
            "DigitalOcean 提供的 NGINX 配置生成器，简化服务器配置过程",
          icon: "https://www.google.com/s2/favicons?domain=digitalocean.com&sz=64",
        },
      ],
    },
    {
      id: "image-tools",
      name: "图像工具",
      description: "在线图像处理工具",
      websites: [
        {
          name: "Cleanup.Pictures",
          url: "https://cleanup.pictures/",
          description: "AI 驱动的图像清理工具，可移除图片中不需要的元素",
          icon: "https://www.google.com/s2/favicons?domain=cleanup.pictures&sz=64",
        },
      ],
    },
  ],
};
