import { Category } from '../types';
import { RiSearchLine } from 'react-icons/ri';

export const seo: Category = {
  id: 'seo',
  name: { zh: 'SEO', en: 'SEO' },
  description: { zh: 'SEO分析与网站流量工具', en: 'SEO analysis and website traffic tools' },
  icon: <RiSearchLine className="text-lg" />,
  subcategories: [
    {
      id: 'keyword-research',
      name: { zh: '关键词研究', en: 'Keyword Research' },
      description: { zh: '', en: '' },
      websites: [
        {
          name: { zh: 'Ahrefs', en: 'Ahrefs' },
          url: 'https://ahrefs.com/',
          description: { zh: 'SEO工具天花板', en: 'Top-tier SEO tool' },
          icon: 'https://www.google.com/s2/favicons?domain=ahrefs.com&sz=64',
        },
        {
          name: { zh: 'Semrush', en: 'Semrush' },
          url: 'https://www.semrush.com/',
          description: { zh: '最全面SEO套件', en: 'Most comprehensive SEO suite' },
          icon: 'https://www.google.com/s2/favicons?domain=semrush.com&sz=64',
        },
        {
          name: { zh: 'Google Keyword Planner', en: 'Google Keyword Planner' },
          url: 'https://ads.google.com/home/tools/keyword-planner/',
          description: { zh: 'Google官方关键词工具', en: 'Official Google keyword tool' },
          icon: 'https://www.google.com/s2/favicons?domain=google.com&sz=64',
        },
      ],
    },
    {
      id: 'traffic-analytics',
      name: { zh: '流量分析', en: 'Traffic Analytics' },
      description: { zh: '', en: '' },
      websites: [
        {
          name: { zh: 'Google Analytics', en: 'Google Analytics' },
          url: 'https://analytics.google.com/',
          description: { zh: '网站流量分析标配', en: 'Standard traffic analysis' },
          icon: 'https://www.google.com/s2/favicons?domain=google.com&sz=64',
        },
        {
          name: { zh: 'Google Search Console', en: 'Google Search Console' },
          url: 'https://search.google.com/search-console',
          description: { zh: 'Google官方SEO工具', en: "Google's official SEO tool" },
          icon: 'https://www.google.com/s2/favicons?domain=google.com&sz=64',
        },
        {
          name: { zh: 'Bing Webmaster Tools', en: 'Bing Webmaster Tools' },
          url: 'https://www.bing.com/webmasters',
          description: { zh: '必应网站管理工具', en: 'Bing webmaster tools' },
          icon: 'https://www.google.com/s2/favicons?domain=bing.com&sz=64',
        },
        {
          name: { zh: 'SimilarWeb', en: 'SimilarWeb' },
          url: 'https://www.similarweb.com/',
          description: { zh: '竞品流量分析', en: 'Competitive traffic analysis' },
          icon: 'https://www.google.com/s2/favicons?domain=similarweb.com&sz=64',
        },
        {
          name: { zh: 'Google Trends', en: 'Google Trends' },
          url: 'https://trends.google.com/trends/',
          description: { zh: '搜索趋势分析', en: 'Search trend analysis' },
          icon: 'https://www.google.com/s2/favicons?domain=google.com&sz=64',
        },
        {
          name: { zh: 'Keyworddit', en: 'Keyworddit' },
          url: 'https://www.highervisibility.com/seo/tools/keyworddit/',
          description: { zh: '从Reddit挖掘关键词', en: 'Extract keywords from Reddit' },
          icon: 'https://www.google.com/s2/favicons?domain=highervisibility.com&sz=64',
        },
      ],
    },
    {
      id: 'technical-seo',
      name: { zh: '技术SEO与性能', en: 'Technical SEO & Performance' },
      description: { zh: '', en: '' },
      websites: [
        {
          name: { zh: 'Screaming Frog', en: 'Screaming Frog' },
          url: 'https://www.screamingfrog.co.uk/seo-spider/',
          description: { zh: '网站爬虫分析工具', en: 'Website crawler tool' },
          icon: 'https://www.google.com/s2/favicons?domain=screamingfrog.co.uk&sz=64',
        },
        {
          name: { zh: 'PageSpeed Insights', en: 'PageSpeed Insights' },
          url: 'https://pagespeed.web.dev/',
          description: { zh: 'Google官方性能测试', en: "Google's performance tool" },
          icon: 'https://www.google.com/s2/favicons?domain=google.com&sz=64',
        },
        {
          name: { zh: 'GTmetrix', en: 'GTmetrix' },
          url: 'https://gtmetrix.com/',
          description: { zh: '详细性能报告和优化建议', en: 'Detailed performance reports' },
          icon: 'https://www.google.com/s2/favicons?domain=gtmetrix.com&sz=64',
        },
        {
          name: { zh: 'Cloudflare', en: 'Cloudflare' },
          url: 'https://dash.cloudflare.com/',
          description: { zh: 'CDN加速+DDoS防护', en: 'CDN and DDoS protection' },
          icon: 'https://www.google.com/s2/favicons?domain=cloudflare.com&sz=64',
        },
      ],
    },
    {
      id: 'website-monetization',
      name: { zh: '网站变现', en: 'Monetization' },
      description: { zh: '', en: '' },
      websites: [
        {
          name: { zh: 'Google AdSense', en: 'Google AdSense' },
          url: 'https://adsense.google.com/',
          description: { zh: '谷歌广告联盟平台', en: "Google's ad platform" },
          icon: 'https://www.google.com/s2/favicons?domain=google.com&sz=64',
        },
      ],
    },
    {
      id: 'seo-learning',
      name: { zh: 'SEO学习与指南', en: 'SEO Learning & Guides' },
      description: { zh: '', en: '' },
      websites: [
        {
          name: { zh: 'Google SEO 指南', en: 'Google SEO Guide' },
          url: 'https://developers.google.com/search/docs/fundamentals/seo-starter-guide?hl=zh-cn',
          description: { zh: 'Google官方SEO入门指南', en: "Google's official SEO guide" },
          icon: 'https://www.google.com/s2/favicons?domain=google.com&sz=64',
        },
        {
          name: { zh: 'Shopify SEO 优化指南', en: 'Shopify SEO Guide' },
          url: 'https://www.shopify.com/zh/blog/seo-checklist-online-store',
          description: { zh: 'Shopify SEO优化清单', en: 'Shopify SEO checklist' },
          icon: 'https://www.google.com/s2/favicons?domain=shopify.com&sz=64',
        },
      ],
    },
  ],
};
