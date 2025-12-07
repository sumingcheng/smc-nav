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
          description: { zh: "GPT-4全球领先", en: "Leading GPT-4 model" },
          icon: "https://www.google.com/s2/favicons?domain=chatgpt.com&sz=64",
        },
        {
          name: { zh: "Anthropic Claude", en: "Anthropic Claude" },
          url: "https://claude.ai/",
          description: { zh: "编程领域天花板", en: "Unmatched in coding" },
          icon: "https://www.google.com/s2/favicons?domain=claude.ai&sz=64",
        },
        {
          name: { zh: "Google Gemini", en: "Google Gemini" },
          url: "https://gemini.google.com/",
          description: { zh: "性价比高多模态强", en: "Great value multimodal" },
          icon: "https://www.google.com/s2/favicons?domain=gemini.google.com&sz=64",
        },
        {
          name: { zh: "DeepSeek AI", en: "DeepSeek AI" },
          url: "https://chat.deepseek.com/",
          description: { zh: "国产之光未来可期", en: "China's rising star" },
          icon: "https://www.google.com/s2/favicons?domain=chat.deepseek.com&sz=64",
        },
        {
          name: { zh: "Kimi AI", en: "Kimi AI" },
          url: "https://www.kimi.com/",
          description: { zh: "长文本处理能力强", en: "Long-context processing" },
          icon: "https://www.google.com/s2/favicons?domain=kimi.com&sz=64",
        },
        {
          name: { zh: "Perplexity AI", en: "Perplexity AI" },
          url: "https://www.perplexity.ai/",
          description: { zh: "AI搜索引擎", en: "AI search engine" },
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
          description: { zh: "最火AI角色对话平台", en: "Most popular AI character chat" },
          icon: "https://www.google.com/s2/favicons?domain=character.ai&sz=64",
        },
        {
          name: { zh: "PygmalionAI", en: "PygmalionAI" },
          url: "https://pygmalion.chat/chat",
          description: { zh: "社区驱动AI角色扮演", en: "Community-driven AI roleplay" },
          icon: "https://www.google.com/s2/favicons?domain=pygmalion.chat&sz=64",
        },
        {
          name: { zh: "Emochi", en: "Emochi" },
          url: "https://emochi.com/",
          description: { zh: "AI陪伴助手", en: "AI companion assistant" },
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
          description: { zh: "Claude Code官方镜像", en: "Claude Code mirror" },
          icon: "https://www.google.com/s2/favicons?domain=aicodemirror.com&sz=64",
        },
        {
          name: { zh: "Any Router", en: "Any Router" },
          url: "https://anyrouter.top/register?aff=9wG6",
          description: { zh: "Claude访问路由", en: "Claude access routing" },
          icon: "https://www.google.com/s2/favicons?domain=anyrouter.top&sz=64",
        },
        {
          name: { zh: "Claude Code Group", en: "Claude Code Group" },
          url: "https://ctok.ai/claude-code-group",
          description: { zh: "Claude Code社群", en: "Claude Code community" },
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
          description: { zh: "中文模型评测权威", en: "Chinese LLM benchmark" },
          icon: "https://www.google.com/s2/favicons?domain=superclueai.com&sz=64",
        },
        {
          name: { zh: "LMArena", en: "LMArena" },
          url: "https://lmarena.ai/leaderboard",
          description: { zh: "AI模型对战竞技场", en: "AI model battle arena" },
          icon: "https://www.google.com/s2/favicons?domain=lmarena.ai&sz=64",
        },
        {
          name: { zh: "Hugging Face Leaderboard", en: "Hugging Face Leaderboard" },
          url: "https://huggingface.co/open-llm-leaderboard",
          description: { zh: "开源模型排行榜", en: "Open-source LLM leaderboard" },
          icon: "https://www.google.com/s2/favicons?domain=huggingface.co&sz=64",
        },
        {
          name: { zh: "OpenRouter Rankings", en: "OpenRouter Rankings" },
          url: "https://openrouter.ai/rankings",
          description: { zh: "模型性能排行", en: "Model performance rankings" },
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
          description: { zh: "模型API+GPU云一体化", en: "LLM APIs and GPU cloud" },
          icon: "https://www.google.com/s2/favicons?domain=novita.ai&sz=64",
        },
        {
          name: { zh: "Context7", en: "Context7" },
          url: "https://context7.com/",
          description: { zh: "AI智能文档服务", en: "AI documentation service" },
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
          description: { zh: "Cursor MCP服务器目录", en: "Cursor MCP server directory" },
          icon: "https://www.google.com/s2/favicons?domain=cursor.directory&sz=64",
        },
        {
          name: { zh: "VS Code MCP Servers", en: "VS Code MCP Servers" },
          url: "https://code.visualstudio.com/mcp",
          description: { zh: "VS Code官方MCP目录", en: "VS Code official MCP directory" },
          icon: "https://www.google.com/s2/favicons?domain=code.visualstudio.com&sz=64",
        },
        {
          name: { zh: "Playbooks MCP", en: "Playbooks MCP" },
          url: "https://playbooks.com/mcp",
          description: { zh: "MCP工具资源集合", en: "MCP tools collection" },
          icon: "https://www.google.com/s2/favicons?domain=playbooks.com&sz=64",
        },
        {
          name: { zh: "Cursor Docs", en: "Cursor Docs" },
          url: "https://docs.cursor.com/welcome",
          description: { zh: "Cursor官方文档", en: "Cursor official docs" },
          icon: "https://www.google.com/s2/favicons?domain=docs.cursor.com&sz=64",
        },
        {
          name: { zh: "Anthropic Docs", en: "Anthropic Docs" },
          url: "https://docs.anthropic.com/en/docs/intro",
          description: { zh: "Claude官方文档", en: "Claude official docs" },
          icon: "https://www.google.com/s2/favicons?domain=docs.anthropic.com&sz=64",
        },
        {
          name: { zh: "RIPER-5", en: "RIPER-5" },
          url: "https://github.com/NeekChaw/RIPER-5",
          description: { zh: "自动生成项目文档", en: "Auto-generate project docs" },
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
          description: { zh: "最大AI提示词社区", en: "Largest AI prompt community" },
          icon: "https://www.google.com/s2/favicons?domain=flowgpt.com&sz=64",
        },
        {
          name: { zh: "OpenAI Prompting Guide", en: "OpenAI Prompting Guide" },
          url: "https://help.openai.com/en/articles/6654000-best-practices-for-prompt-engineering-with-the-openai-api",
          description: { zh: "OpenAI官方提示词指南", en: "OpenAI's prompt guide" },
          icon: "https://www.google.com/s2/favicons?domain=openai.com&sz=64",
        },
      ],
    },
  ],
};
