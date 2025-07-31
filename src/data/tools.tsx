import { Category } from '../types';
import { RiToolsLine } from 'react-icons/ri';

export const tools: Category = {
  id: 'tools',
  name: '工具',
  description: '开发与服务工具集合',
  icon: <RiToolsLine className="text-lg" />,
  subcategories: [
    {
      id: 'api-tools',
      name: 'API 工具',
      description: 'API 相关开发工具与服务',
      websites: [
        {
          name: 'SerpAPI',
          url: 'https://serpapi.com/dashboard',
          description: '搜索引擎 API 服务，获取 Google 搜索结果',
          icon: 'https://www.google.com/s2/favicons?domain=serpapi.com&sz=64',
        },
      ],
    },
    {
      id: 'translation-tools',
      name: '翻译工具',
      description: '在线翻译服务与工具',
      websites: [
        {
          name: 'Google 翻译',
          url: 'https://translate.google.com/?hl=zh-CN&sl=en&tl=zh-CN&op=translate',
          description: 'Google 在线翻译服务，支持多种语言互译',
          icon: 'https://www.google.com/s2/favicons?domain=translate.google.com&sz=64',
        },
      ],
    },
    {
      id: 'status-monitoring',
      name: '状态监控',
      description: '服务状态监控平台',
      websites: [
        {
          name: 'OpenAI Status',
          url: 'https://status.openai.com/',
          description: 'OpenAI 服务状态监控，查看 API 和服务可用性',
          icon: 'https://www.google.com/s2/favicons?domain=status.openai.com&sz=64',
        },
        {
          name: 'Scamalytics',
          url: 'https://scamalytics.com/',
          description: 'IP 地址欺诈检测和状态测试，检查 IP 风险评分',
          icon: 'https://www.google.com/s2/favicons?domain=scamalytics.com&sz=64',
        },
        {
          name: 'Google AI Studio Status',
          url: 'https://aistudio.google.com/status',
          description: 'Google AI Studio 服务状态监控，查看 AI 开发平台的服务可用性',
          icon: 'https://www.google.com/s2/favicons?domain=aistudio.google.com&sz=64',
        },
        {
          name: 'Anthropic Claude Status',
          url: 'https://status.anthropic.com/',
          description: 'Claude AI 服务状态监控，查看 Claude API、Web 端和控制台的服务状态',
          icon: 'https://www.google.com/s2/favicons?domain=status.anthropic.com&sz=64',
        },
      ],
    },
  ],
};
