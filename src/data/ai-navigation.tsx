import { Category } from "../types";
import { RiRobot2Line } from "react-icons/ri";

export const aiNavigation: Category = {
  id: "ai-navigation",
  name: "AI Nav",
  description: "AI 工具与服务导航",
  icon: <RiRobot2Line className="text-lg" />,
  subcategories: [
    {
      id: "ai-chat",
      name: "模型服务商",
      description: "主流大模型官方入口",
      websites: [
        {
          name: "OpenAI ChatGPT",
          url: "https://chatgpt.com/",
          description: "OpenAI 官方对话与创作助手",
          icon: "https://www.google.com/s2/favicons?domain=chatgpt.com&sz=64",
        },
        {
          name: "Anthropic Claude",
          url: "https://claude.ai/",
          description: "Anthropic 编程这块难寻敌手",
          icon: "https://www.google.com/s2/favicons?domain=claude.ai&sz=64",
        },
        {
          name: "Google Gemini",
          url: "https://gemini.google.com/",
          description: "Google Gemini 便宜好用",
          icon: "https://www.google.com/s2/favicons?domain=gemini.google.com&sz=64",
        },
        {
          name: "DeepSeek AI Chat",
          url: "https://chat.deepseek.com/",
          description: "DeepSeek 国产之光，未来可期",
          icon: "https://www.google.com/s2/favicons?domain=chat.deepseek.com&sz=64",
        },
        {
          name: "Kimi AI",
          url: "https://www.kimi.com/",
          description: "Moonshot AI 推出的长文本助手",
          icon: "https://www.google.com/s2/favicons?domain=kimi.com&sz=64",
        },
        {
          name: "Perplexity AI",
          url: "https://www.perplexity.ai/",
          description: "Perplexity 搜索和问答平台",
          icon: "https://www.google.com/s2/favicons?domain=perplexity.ai&sz=64",
        },
        {
          name: "PygmalionAI",
          url: "https://pygmalion.chat/chat",
          description: "社区驱动的AI角色扮演聊天平台",
          icon: "https://www.google.com/s2/favicons?domain=pygmalion.chat&sz=64",
        },
        {
          name: "Character.AI",
          url: "https://character.ai/",
          description: "与AI角色进行对话和互动的平台",
          icon: "https://www.google.com/s2/favicons?domain=character.ai&sz=64",
        },
        {
          name: "Emochi",
          url: "https://emochi.com/",
          description: "与喜爱的AI角色持续聊天的陪伴助手",
          icon: "https://www.google.com/s2/favicons?domain=emochi.com&sz=64",
        },
      ],
    },
    {
      id: "ai-access",
      name: "AI 访问渠道",
      description: "获取大模型服务的代理与镜像渠道",
      websites: [
        {
          name: "AI Code Mirror",
          url: "https://www.aicodemirror.com/register?invitecode=JA40CE",
          description: "Claude Code 官方镜像服务",
          icon: "https://www.google.com/s2/favicons?domain=aicodemirror.com&sz=64",
        },
        {
          name: "Any Router",
          url: "https://anyrouter.top/register?aff=9wG6",
          description: "Claude 访问路由与分发平台",
          icon: "https://www.google.com/s2/favicons?domain=anyrouter.top&sz=64",
        },
      ],
    },
    {
      id: "ai-tools",
      name: "AI 排行榜",
      description: "AI 模型排行榜与评测",
      websites: [
        {
          name: "SuperClue AI",
          url: "https://www.superclueai.com/",
          description: "中文大模型综合性测评基准，专业的中文AI模型评测平台",
          icon: "https://www.google.com/s2/favicons?domain=superclueai.com&sz=64",
        },
        {
          name: "LMArena AI 对话竞技场",
          url: "https://lmarena.ai/leaderboard",
          description: "AI 模型对战排行榜，比较不同大语言模型的表现",
          icon: "https://www.google.com/s2/favicons?domain=lmarena.ai&sz=64",
        },
        {
          name: "Hugging Face Open LLM Leaderboard",
          url: "https://huggingface.co/open-llm-leaderboard",
          description:
            "Hugging Face 官方开源大模型排行榜，覆盖最新的社区评测结果",
          icon: "https://www.google.com/s2/favicons?domain=huggingface.co&sz=64",
        },
        {
          name: "OpenRouter 排行榜",
          url: "https://openrouter.ai/rankings",
          description: "AI 模型性能排行榜，比较各种大语言模型的能力",
          icon: "https://www.google.com/s2/favicons?domain=openrouter.ai&sz=64",
        },
      ],
    },
    {
      id: "ai-services",
      name: "AI 平台与服务",
      description: "提供大模型能力与云端服务的平台",
      websites: [
        {
          name: "Context7",
          url: "https://context7.com/",
          description: "AI 驱动的智能服务平台",
          icon: "https://www.google.com/s2/favicons?domain=context7.com&sz=64",
        },
        {
          name: "Firebase",
          url: "https://firebase.google.com/?hl=zh-cn",
          description: "Google 应用开发平台，提供 ML Kit 与生成式 AI 支持",
          icon: "https://www.google.com/s2/favicons?domain=firebase.google.com&sz=64",
        },
      ],
    },
    {
      id: "mcp-tools",
      name: "MCP 工具",
      description: "Model Context Protocol 相关工具与资源",
      websites: [
        {
          name: "Playbooks MCP",
          url: "https://playbooks.com/mcp",
          description: "MCP 相关工具和资源平台",
          icon: "https://www.google.com/s2/favicons?domain=playbooks.com&sz=64",
        },
        {
          name: "Cursor MCP 目录",
          url: "https://cursor.directory/mcp",
          description: "Cursor MCP 服务器目录，浏览和添加 MCP 服务器",
          icon: "https://www.google.com/s2/favicons?domain=cursor.directory&sz=64",
        },
        {
          name: "VS Code MCP 服务器",
          url: "https://code.visualstudio.com/mcp",
          description: "VS Code 官方 MCP 服务器目录，扩展代理模式功能",
          icon: "https://www.google.com/s2/favicons?domain=code.visualstudio.com&sz=64",
        },
      ],
    },
    {
      id: "dev-docs",
      name: "开发资源",
      description: "AI 开发文档与辅助工具",
      websites: [
        {
          name: "Cursor 文档",
          url: "https://docs.cursor.com/welcome",
          description: "Cursor AI 代码编辑器官方文档，学习如何使用 Cursor",
          icon: "https://www.google.com/s2/favicons?domain=docs.cursor.com&sz=64",
        },
        {
          name: "Anthropic 文档",
          url: "https://docs.anthropic.com/en/docs/intro",
          description: "Anthropic Claude AI 官方文档和 API 指南",
          icon: "https://www.google.com/s2/favicons?domain=docs.anthropic.com&sz=64",
        },
        {
          name: "RIPER-5",
          url: "https://github.com/NeekChaw/RIPER-5",
          description: "生成项目文档和系统设计",
          icon: "https://www.google.com/s2/favicons?domain=github.com&sz=64",
        },
      ],
    },
    {
      id: "prompt-engineering",
      name: "提示词工程",
      description: "提示词相关的工具、社区和指南",
      websites: [
        {
          name: "FlowGPT",
          url: "https://flowgpt.com/",
          description: "发现、分享和使用最佳AI提示词的社区平台",
          icon: "https://www.google.com/s2/favicons?domain=flowgpt.com&sz=64",
        },
        {
          name: "OpenAI Prompting Guide",
          url: "https://help.openai.com/en/articles/6654000-best-practices-for-prompt-engineering-with-the-openai-api",
          description: "OpenAI 官方提供的提示词工程最佳实践指南",
          icon: "https://www.google.com/s2/favicons?domain=openai.com&sz=64",
        },
      ],
    },
    {
      id: "rag",
      name: "RAG",
      description: "RAG",
      websites: [
        {
          name: "OpenRAG 基础中文介绍文档",
          url: "https://openrag.notion.site/OpenRAG-Base-Chinese-Introduction-299807c528bc46d9af0d9060dcd46f6b#ed69d920d29846b2bff2ee0be283acb9",
          description: "检索增强生成技术指南",
          icon: "https://www.google.com/s2/favicons?domain=openrag.notion.site&sz=64",
        },
      ],
    },
  ],
};
