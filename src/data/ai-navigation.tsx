import { Category } from "../types";
import { RiRobot2Line } from "react-icons/ri";

export const aiNavigation: Category = {
  id: "ai-navigation",
  name: { zh: "AI Nav", en: "AI Nav" },
  description: { zh: "AI 工具与服务导航", en: "AI tools and services navigation" },
  icon: <RiRobot2Line className="text-lg" />,
  subcategories: [
    {
      id: "ai-chat",
      name: { zh: "模型服务商", en: "Model Providers" },
      description: { zh: "主流大模型官方入口", en: "Official LLM provider portals" },
      websites: [
        {
          name: { zh: "OpenAI ChatGPT", en: "OpenAI ChatGPT" },
          url: "https://chatgpt.com/",
          description: { zh: "OpenAI 官方对话与创作助手", en: "OpenAI's official chat and creative assistant" },
          icon: "https://www.google.com/s2/favicons?domain=chatgpt.com&sz=64",
        },
        {
          name: { zh: "Anthropic Claude", en: "Anthropic Claude" },
          url: "https://claude.ai/",
          description: { zh: "Anthropic 编程这块难寻敌手", en: "Anthropic's coding powerhouse" },
          icon: "https://www.google.com/s2/favicons?domain=claude.ai&sz=64",
        },
        {
          name: { zh: "Google Gemini", en: "Google Gemini" },
          url: "https://gemini.google.com/",
          description: { zh: "Google Gemini 便宜好用", en: "Google Gemini - affordable and powerful" },
          icon: "https://www.google.com/s2/favicons?domain=gemini.google.com&sz=64",
        },
        {
          name: { zh: "DeepSeek AI Chat", en: "DeepSeek AI Chat" },
          url: "https://chat.deepseek.com/",
          description: { zh: "DeepSeek 国产之光，未来可期", en: "DeepSeek - China's rising star" },
          icon: "https://www.google.com/s2/favicons?domain=chat.deepseek.com&sz=64",
        },
        {
          name: { zh: "Kimi AI", en: "Kimi AI" },
          url: "https://www.kimi.com/",
          description: { zh: "Moonshot AI 推出的长文本助手", en: "Moonshot AI's long-context assistant" },
          icon: "https://www.google.com/s2/favicons?domain=kimi.com&sz=64",
        },
        {
          name: { zh: "Perplexity AI", en: "Perplexity AI" },
          url: "https://www.perplexity.ai/",
          description: { zh: "Perplexity 搜索和问答平台", en: "Perplexity search and Q&A platform" },
          icon: "https://www.google.com/s2/favicons?domain=perplexity.ai&sz=64",
        },
        {
          name: { zh: "PygmalionAI", en: "PygmalionAI" },
          url: "https://pygmalion.chat/chat",
          description: { zh: "社区驱动的AI角色扮演聊天平台", en: "Community-driven AI roleplay chat platform" },
          icon: "https://www.google.com/s2/favicons?domain=pygmalion.chat&sz=64",
        },
        {
          name: { zh: "Character.AI", en: "Character.AI" },
          url: "https://character.ai/",
          description: { zh: "与AI角色进行对话和互动的平台", en: "Chat and interact with AI characters" },
          icon: "https://www.google.com/s2/favicons?domain=character.ai&sz=64",
        },
        {
          name: { zh: "Emochi", en: "Emochi" },
          url: "https://emochi.com/",
          description: { zh: "与喜爱的AI角色持续聊天的陪伴助手", en: "Chat continuously with your favorite AI companions" },
          icon: "https://www.google.com/s2/favicons?domain=emochi.com&sz=64",
        },
      ],
    },
    {
      id: "ai-access",
      name: { zh: "AI 访问渠道", en: "AI Access Channels" },
      description: { zh: "获取大模型服务的代理与镜像渠道", en: "Proxy and mirror channels for LLM services" },
      websites: [
        {
          name: { zh: "AI Code Mirror", en: "AI Code Mirror" },
          url: "https://www.aicodemirror.com/register?invitecode=JA40CE",
          description: { zh: "Claude Code 官方镜像服务", en: "Official Claude Code mirror service" },
          icon: "https://www.google.com/s2/favicons?domain=aicodemirror.com&sz=64",
        },
        {
          name: { zh: "Any Router", en: "Any Router" },
          url: "https://anyrouter.top/register?aff=9wG6",
          description: { zh: "Claude 访问路由与分发平台", en: "Claude access routing and distribution platform" },
          icon: "https://www.google.com/s2/favicons?domain=anyrouter.top&sz=64",
        },
        {
          name: { zh: "Claude Code Group", en: "Claude Code Group" },
          url: "https://ctok.ai/claude-code-group",
          description: { zh: "Claude Code 社群入口，获取镜像与使用指南", en: "Claude Code community hub with mirrors and guides" },
          icon: "https://www.google.com/s2/favicons?domain=ctok.ai&sz=64",
        },
      ],
    },
    {
      id: "ai-tools",
      name: { zh: "AI 排行榜", en: "AI Leaderboards" },
      description: { zh: "AI 模型排行榜与评测", en: "AI model rankings and benchmarks" },
      websites: [
        {
          name: { zh: "SuperClue AI", en: "SuperClue AI" },
          url: "https://www.superclueai.com/",
          description: { zh: "中文大模型综合性测评基准，专业的中文AI模型评测平台", en: "Comprehensive Chinese LLM benchmark platform" },
          icon: "https://www.google.com/s2/favicons?domain=superclueai.com&sz=64",
        },
        {
          name: { zh: "LMArena AI 对话竞技场", en: "LMArena AI Arena" },
          url: "https://lmarena.ai/leaderboard",
          description: { zh: "AI 模型对战排行榜，比较不同大语言模型的表现", en: "AI model battle arena comparing LLM performance" },
          icon: "https://www.google.com/s2/favicons?domain=lmarena.ai&sz=64",
        },
        {
          name: { zh: "Hugging Face Open LLM Leaderboard", en: "Hugging Face Open LLM Leaderboard" },
          url: "https://huggingface.co/open-llm-leaderboard",
          description: { zh: "Hugging Face 官方开源大模型排行榜，覆盖最新的社区评测结果", en: "Official open-source LLM leaderboard with latest community evaluations" },
          icon: "https://www.google.com/s2/favicons?domain=huggingface.co&sz=64",
        },
        {
          name: { zh: "OpenRouter 排行榜", en: "OpenRouter Rankings" },
          url: "https://openrouter.ai/rankings",
          description: { zh: "AI 模型性能排行榜，比较各种大语言模型的能力", en: "AI model performance rankings comparing various LLMs" },
          icon: "https://www.google.com/s2/favicons?domain=openrouter.ai&sz=64",
        },
      ],
    },
    {
      id: "ai-services",
      name: { zh: "AI 平台与服务", en: "AI Platforms & Services" },
      description: { zh: "提供大模型能力与云端服务的平台", en: "Platforms providing LLM capabilities and cloud services" },
      websites: [
        {
          name: { zh: "Context7", en: "Context7" },
          url: "https://context7.com/",
          description: { zh: "AI 驱动的智能服务平台", en: "AI-powered intelligent service platform" },
          icon: "https://www.google.com/s2/favicons?domain=context7.com&sz=64",
        },
        {
          name: { zh: "Novita AI", en: "Novita AI" },
          url: "https://novita.ai/?utm_source=moge.ai",
          description: { zh: "提供大模型 API、GPU 云与模型托管的一体化平台", en: "All-in-one platform for LLM APIs, GPU cloud and model hosting" },
          icon: "https://www.google.com/s2/favicons?domain=novita.ai&sz=64",
        },
        {
          name: { zh: "Firebase", en: "Firebase" },
          url: "https://firebase.google.com/?hl=zh-cn",
          description: { zh: "Google 应用开发平台，提供 ML Kit 与生成式 AI 支持", en: "Google app development platform with ML Kit and Generative AI support" },
          icon: "https://www.google.com/s2/favicons?domain=firebase.google.com&sz=64",
        },
      ],
    },
    {
      id: "mcp-tools",
      name: { zh: "MCP 工具", en: "MCP Tools" },
      description: { zh: "Model Context Protocol 相关工具与资源", en: "Model Context Protocol tools and resources" },
      websites: [
        {
          name: { zh: "Playbooks MCP", en: "Playbooks MCP" },
          url: "https://playbooks.com/mcp",
          description: { zh: "MCP 相关工具和资源平台", en: "MCP tools and resources platform" },
          icon: "https://www.google.com/s2/favicons?domain=playbooks.com&sz=64",
        },
        {
          name: { zh: "Cursor MCP 目录", en: "Cursor MCP Directory" },
          url: "https://cursor.directory/mcp",
          description: { zh: "Cursor MCP 服务器目录，浏览和添加 MCP 服务器", en: "Cursor MCP server directory, browse and add MCP servers" },
          icon: "https://www.google.com/s2/favicons?domain=cursor.directory&sz=64",
        },
        {
          name: { zh: "VS Code MCP 服务器", en: "VS Code MCP Servers" },
          url: "https://code.visualstudio.com/mcp",
          description: { zh: "VS Code 官方 MCP 服务器目录，扩展代理模式功能", en: "VS Code official MCP server directory for extended agentic capabilities" },
          icon: "https://www.google.com/s2/favicons?domain=code.visualstudio.com&sz=64",
        },
      ],
    },
    {
      id: "dev-docs",
      name: { zh: "开发资源", en: "Dev Resources" },
      description: { zh: "AI 开发文档与辅助工具", en: "AI development docs and helper tools" },
      websites: [
        {
          name: { zh: "Cursor 文档", en: "Cursor Docs" },
          url: "https://docs.cursor.com/welcome",
          description: { zh: "Cursor AI 代码编辑器官方文档，学习如何使用 Cursor", en: "Official Cursor AI code editor documentation" },
          icon: "https://www.google.com/s2/favicons?domain=docs.cursor.com&sz=64",
        },
        {
          name: { zh: "Anthropic 文档", en: "Anthropic Docs" },
          url: "https://docs.anthropic.com/en/docs/intro",
          description: { zh: "Anthropic Claude AI 官方文档和 API 指南", en: "Official Anthropic Claude AI docs and API guide" },
          icon: "https://www.google.com/s2/favicons?domain=docs.anthropic.com&sz=64",
        },
        {
          name: { zh: "RIPER-5", en: "RIPER-5" },
          url: "https://github.com/NeekChaw/RIPER-5",
          description: { zh: "生成项目文档和系统设计", en: "Generate project docs and system design" },
          icon: "https://www.google.com/s2/favicons?domain=github.com&sz=64",
        },
      ],
    },
    {
      id: "prompt-engineering",
      name: { zh: "提示词工程", en: "Prompt Engineering" },
      description: { zh: "提示词相关的工具、社区和指南", en: "Prompt-related tools, communities and guides" },
      websites: [
        {
          name: { zh: "FlowGPT", en: "FlowGPT" },
          url: "https://flowgpt.com/",
          description: { zh: "发现、分享和使用最佳AI提示词的社区平台", en: "Community to discover, share and use best AI prompts" },
          icon: "https://www.google.com/s2/favicons?domain=flowgpt.com&sz=64",
        },
        {
          name: { zh: "OpenAI Prompting Guide", en: "OpenAI Prompting Guide" },
          url: "https://help.openai.com/en/articles/6654000-best-practices-for-prompt-engineering-with-the-openai-api",
          description: { zh: "OpenAI 官方提供的提示词工程最佳实践指南", en: "OpenAI's official prompt engineering best practices guide" },
          icon: "https://www.google.com/s2/favicons?domain=openai.com&sz=64",
        },
      ],
    },
    {
      id: "rag",
      name: { zh: "RAG", en: "RAG" },
      description: { zh: "RAG", en: "RAG" },
      websites: [
        {
          name: { zh: "OpenRAG 基础中文介绍文档", en: "OpenRAG Base Chinese Intro" },
          url: "https://openrag.notion.site/OpenRAG-Base-Chinese-Introduction-299807c528bc46d9af0d9060dcd46f6b#ed69d920d29846b2bff2ee0be283acb9",
          description: { zh: "检索增强生成技术指南", en: "Retrieval-Augmented Generation technical guide" },
          icon: "https://www.google.com/s2/favicons?domain=openrag.notion.site&sz=64",
        },
      ],
    },
  ],
};
