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
      name: { zh: "对话模型", en: "Chat Models" },
      description: { zh: "", en: "" },
      websites: [
        {
          name: { zh: "OpenAI ChatGPT", en: "OpenAI ChatGPT" },
          url: "https://chatgpt.com/",
          description: { zh: "OpenAI官方对话模型，GPT-4领先全球，创作助手首选", en: "OpenAI's official chat model with leading GPT-4, top choice for creation" },
          icon: "https://www.google.com/s2/favicons?domain=chatgpt.com&sz=64",
        },
        {
          name: { zh: "Anthropic Claude", en: "Anthropic Claude" },
          url: "https://claude.ai/",
          description: { zh: "编程领域难逢敌手，代码理解和生成能力顶尖", en: "Unmatched in coding with top-tier code understanding and generation" },
          icon: "https://www.google.com/s2/favicons?domain=claude.ai&sz=64",
        },
        {
          name: { zh: "Google Gemini", en: "Google Gemini" },
          url: "https://gemini.google.com/",
          description: { zh: "Google出品，性价比高，多模态能力强大", en: "Google's offering with great value and powerful multimodal capabilities" },
          icon: "https://www.google.com/s2/favicons?domain=gemini.google.com&sz=64",
        },
        {
          name: { zh: "DeepSeek AI", en: "DeepSeek AI" },
          url: "https://chat.deepseek.com/",
          description: { zh: "国产之光，技术实力强劲，未来可期", en: "China's rising star with strong technical capabilities and great potential" },
          icon: "https://www.google.com/s2/favicons?domain=chat.deepseek.com&sz=64",
        },
        {
          name: { zh: "Kimi AI", en: "Kimi AI" },
          url: "https://www.kimi.com/",
          description: { zh: "Moonshot AI出品，长文本处理能力突出", en: "By Moonshot AI with outstanding long-context processing" },
          icon: "https://www.google.com/s2/favicons?domain=kimi.com&sz=64",
        },
        {
          name: { zh: "Perplexity AI", en: "Perplexity AI" },
          url: "https://www.perplexity.ai/",
          description: { zh: "AI搜索引擎，实时联网搜索+智能问答结合", en: "AI search engine combining real-time web search with intelligent Q&A" },
          icon: "https://www.google.com/s2/favicons?domain=perplexity.ai&sz=64",
        },
      ],
    },
    {
      id: "ai-entertainment",
      name: { zh: "AI娱乐/陪伴", en: "AI Entertainment" },
      description: { zh: "", en: "" },
      websites: [
        {
          name: { zh: "Character.AI", en: "Character.AI" },
          url: "https://character.ai/",
          description: { zh: "最火的AI角色对话平台，与各种虚拟角色互动", en: "Most popular AI character chat platform, interact with virtual characters" },
          icon: "https://www.google.com/s2/favicons?domain=character.ai&sz=64",
        },
        {
          name: { zh: "PygmalionAI", en: "PygmalionAI" },
          url: "https://pygmalion.chat/chat",
          description: { zh: "社区驱动的AI角色扮演平台，自由度高", en: "Community-driven AI roleplay platform with high freedom" },
          icon: "https://www.google.com/s2/favicons?domain=pygmalion.chat&sz=64",
        },
        {
          name: { zh: "Emochi", en: "Emochi" },
          url: "https://emochi.com/",
          description: { zh: "AI陪伴助手，与喜爱的AI角色持续聊天", en: "AI companion for continuous chat with your favorite AI characters" },
          icon: "https://www.google.com/s2/favicons?domain=emochi.com&sz=64",
        },
      ],
    },
    {
      id: "ai-access",
      name: { zh: "访问工具/代理", en: "Access Tools" },
      description: { zh: "", en: "" },
      websites: [
        {
          name: { zh: "AI Code Mirror", en: "AI Code Mirror" },
          url: "https://www.aicodemirror.com/register?invitecode=JA40CE",
          description: { zh: "Claude Code官方镜像服务，稳定访问", en: "Official Claude Code mirror service for stable access" },
          icon: "https://www.google.com/s2/favicons?domain=aicodemirror.com&sz=64",
        },
        {
          name: { zh: "Any Router", en: "Any Router" },
          url: "https://anyrouter.top/register?aff=9wG6",
          description: { zh: "Claude访问路由与分发平台，智能切换节点", en: "Claude access routing platform with intelligent node switching" },
          icon: "https://www.google.com/s2/favicons?domain=anyrouter.top&sz=64",
        },
        {
          name: { zh: "Claude Code Group", en: "Claude Code Group" },
          url: "https://ctok.ai/claude-code-group",
          description: { zh: "Claude Code社群入口，获取镜像与使用指南", en: "Claude Code community hub with mirrors and usage guides" },
          icon: "https://www.google.com/s2/favicons?domain=ctok.ai&sz=64",
        },
      ],
    },
    {
      id: "ai-leaderboards",
      name: { zh: "AI排行榜", en: "AI Leaderboards" },
      description: { zh: "", en: "" },
      websites: [
        {
          name: { zh: "SuperClue AI", en: "SuperClue AI" },
          url: "https://www.superclueai.com/",
          description: { zh: "中文大模型综合测评基准，中文AI评测权威", en: "Comprehensive Chinese LLM benchmark, authoritative Chinese AI evaluation" },
          icon: "https://www.google.com/s2/favicons?domain=superclueai.com&sz=64",
        },
        {
          name: { zh: "LMArena", en: "LMArena" },
          url: "https://lmarena.ai/leaderboard",
          description: { zh: "AI模型对战竞技场，实时对比大语言模型表现", en: "AI model battle arena with real-time LLM performance comparison" },
          icon: "https://www.google.com/s2/favicons?domain=lmarena.ai&sz=64",
        },
        {
          name: { zh: "Hugging Face Leaderboard", en: "Hugging Face Leaderboard" },
          url: "https://huggingface.co/open-llm-leaderboard",
          description: { zh: "开源大模型排行榜，覆盖最新社区评测", en: "Open-source LLM leaderboard with latest community evaluations" },
          icon: "https://www.google.com/s2/favicons?domain=huggingface.co&sz=64",
        },
        {
          name: { zh: "OpenRouter Rankings", en: "OpenRouter Rankings" },
          url: "https://openrouter.ai/rankings",
          description: { zh: "AI模型性能排行，各种大语言模型能力对比", en: "AI model performance rankings comparing various LLM capabilities" },
          icon: "https://www.google.com/s2/favicons?domain=openrouter.ai&sz=64",
        },
      ],
    },
    {
      id: "ai-platforms",
      name: { zh: "AI平台服务", en: "AI Platforms" },
      description: { zh: "", en: "" },
      websites: [
        {
          name: { zh: "Novita AI", en: "Novita AI" },
          url: "https://novita.ai/?utm_source=moge.ai",
          description: { zh: "大模型API、GPU云与模型托管一体化平台", en: "All-in-one platform for LLM APIs, GPU cloud and model hosting" },
          icon: "https://www.google.com/s2/favicons?domain=novita.ai&sz=64",
        },
        {
          name: { zh: "Context7", en: "Context7" },
          url: "https://context7.com/",
          description: { zh: "AI驱动的智能文档和知识库服务", en: "AI-powered intelligent documentation and knowledge base service" },
          icon: "https://www.google.com/s2/favicons?domain=context7.com&sz=64",
        },
      ],
    },
    {
      id: "dev-tools",
      name: { zh: "开发者工具", en: "Developer Tools" },
      description: { zh: "", en: "" },
      websites: [
        {
          name: { zh: "Cursor MCP Directory", en: "Cursor MCP Directory" },
          url: "https://cursor.directory/mcp",
          description: { zh: "Cursor MCP服务器目录，浏览和添加MCP服务器", en: "Cursor MCP server directory to browse and add MCP servers" },
          icon: "https://www.google.com/s2/favicons?domain=cursor.directory&sz=64",
        },
        {
          name: { zh: "VS Code MCP Servers", en: "VS Code MCP Servers" },
          url: "https://code.visualstudio.com/mcp",
          description: { zh: "VS Code官方MCP服务器目录，扩展AI能力", en: "VS Code official MCP server directory for extended AI capabilities" },
          icon: "https://www.google.com/s2/favicons?domain=code.visualstudio.com&sz=64",
        },
        {
          name: { zh: "Playbooks MCP", en: "Playbooks MCP" },
          url: "https://playbooks.com/mcp",
          description: { zh: "MCP工具和资源集合平台", en: "MCP tools and resources collection platform" },
          icon: "https://www.google.com/s2/favicons?domain=playbooks.com&sz=64",
        },
        {
          name: { zh: "Cursor Docs", en: "Cursor Docs" },
          url: "https://docs.cursor.com/welcome",
          description: { zh: "Cursor AI编辑器官方文档，学习使用Cursor", en: "Official Cursor AI editor documentation and learning resources" },
          icon: "https://www.google.com/s2/favicons?domain=docs.cursor.com&sz=64",
        },
        {
          name: { zh: "Anthropic Docs", en: "Anthropic Docs" },
          url: "https://docs.anthropic.com/en/docs/intro",
          description: { zh: "Anthropic Claude官方文档和API指南", en: "Official Anthropic Claude documentation and API guide" },
          icon: "https://www.google.com/s2/favicons?domain=docs.anthropic.com&sz=64",
        },
        {
          name: { zh: "RIPER-5", en: "RIPER-5" },
          url: "https://github.com/NeekChaw/RIPER-5",
          description: { zh: "自动生成项目文档和系统设计", en: "Automatically generate project documentation and system design" },
          icon: "https://www.google.com/s2/favicons?domain=github.com&sz=64",
        },
      ],
    },
    {
      id: "prompt-engineering",
      name: { zh: "提示词工程", en: "Prompt Engineering" },
      description: { zh: "", en: "" },
      websites: [
        {
          name: { zh: "FlowGPT", en: "FlowGPT" },
          url: "https://flowgpt.com/",
          description: { zh: "最大的AI提示词社区，发现分享优质提示词", en: "Largest AI prompt community to discover and share quality prompts" },
          icon: "https://www.google.com/s2/favicons?domain=flowgpt.com&sz=64",
        },
        {
          name: { zh: "OpenAI Prompting Guide", en: "OpenAI Prompting Guide" },
          url: "https://help.openai.com/en/articles/6654000-best-practices-for-prompt-engineering-with-the-openai-api",
          description: { zh: "OpenAI官方提示词工程最佳实践指南", en: "OpenAI's official prompt engineering best practices guide" },
          icon: "https://www.google.com/s2/favicons?domain=openai.com&sz=64",
        },
      ],
    },
  ],
};
