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
          description: { zh: 'SEO工具天花板，外链分析+关键词研究，专业SEO必备', en: 'Top-tier SEO tool for backlink analysis and keyword research, professional must-have' },
          icon: 'https://www.google.com/s2/favicons?domain=ahrefs.com&sz=64',
        },
        {
          name: { zh: 'Semrush', en: 'Semrush' },
          url: 'https://www.semrush.com/',
          description: { zh: '最全面SEO套件，竞品监控+关键词+排名追踪一站式解决', en: 'Most comprehensive SEO suite with competitor monitoring, keywords and rank tracking' },
          icon: 'https://www.google.com/s2/favicons?domain=semrush.com&sz=64',
        },
        {
          name: { zh: 'Google Keyword Planner', en: 'Google Keyword Planner' },
          url: 'https://ads.google.com/home/tools/keyword-planner/',
          description: { zh: 'Google官方免费关键词工具，搜索量数据最准确的来源', en: 'Official Google free keyword tool with most accurate search volume data' },
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
          description: { zh: '网站流量分析标配，用户行为追踪和数据洞察', en: 'Standard for website traffic analysis with user behavior tracking and insights' },
          icon: 'https://www.google.com/s2/favicons?domain=google.com&sz=64',
        },
        {
          name: { zh: 'Google Search Console', en: 'Google Search Console' },
          url: 'https://search.google.com/search-console',
          description: { zh: '谷歌官方SEO工具，监控搜索表现、索引状态和优化建议', en: "Google's official SEO tool for monitoring search performance, indexing and optimization" },
          icon: 'https://www.google.com/s2/favicons?domain=google.com&sz=64',
        },
        {
          name: { zh: 'Bing Webmaster Tools', en: 'Bing Webmaster Tools' },
          url: 'https://www.bing.com/webmasters',
          description: { zh: '必应网站管理工具，监控必应搜索中的网站表现', en: 'Bing webmaster tools for monitoring site performance in Bing search' },
          icon: 'https://www.google.com/s2/favicons?domain=bing.com&sz=64',
        },
        {
          name: { zh: 'SimilarWeb', en: 'SimilarWeb' },
          url: 'https://www.similarweb.com/',
          description: { zh: '竞品流量分析神器，查看竞争对手的流量来源和策略', en: 'Competitive traffic analysis tool to spy on competitors traffic and strategy' },
          icon: 'https://www.google.com/s2/favicons?domain=similarweb.com&sz=64',
        },
        {
          name: { zh: 'Google Trends', en: 'Google Trends' },
          url: 'https://trends.google.com/trends/',
          description: { zh: '搜索趋势分析工具，洞察热门话题和季节性变化', en: 'Search trend analysis tool for insights on trending topics and seasonality' },
          icon: 'https://www.google.com/s2/favicons?domain=google.com&sz=64',
        },
        {
          name: { zh: 'Keyworddit', en: 'Keyworddit' },
          url: 'https://www.highervisibility.com/seo/tools/keyworddit/',
          description: { zh: '从Reddit挖掘关键词，发现用户真实需求和讨论话题', en: 'Extract keywords from Reddit to discover real user needs and discussion topics' },
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
          description: { zh: '网站爬虫分析工具，找出技术SEO问题和死链，专业必备', en: 'Website crawler for finding technical SEO issues and broken links, essential tool' },
          icon: 'https://www.google.com/s2/favicons?domain=screamingfrog.co.uk&sz=64',
        },
        {
          name: { zh: 'PageSpeed Insights', en: 'PageSpeed Insights' },
          url: 'https://pagespeed.web.dev/',
          description: { zh: 'Google官方性能测试工具，Core Web Vitals评分标准', en: "Google's official performance tool with Core Web Vitals scoring" },
          icon: 'https://www.google.com/s2/favicons?domain=google.com&sz=64',
        },
        {
          name: { zh: 'GTmetrix', en: 'GTmetrix' },
          url: 'https://gtmetrix.com/',
          description: { zh: '详细性能报告和具体优化建议，瀑布图分析清晰', en: 'Detailed performance reports with actionable optimization tips and waterfall analysis' },
          icon: 'https://www.google.com/s2/favicons?domain=gtmetrix.com&sz=64',
        },
        {
          name: { zh: 'Cloudflare', en: 'Cloudflare' },
          url: 'https://dash.cloudflare.com/',
          description: { zh: 'CDN加速+DDoS防护+DNS管理，网站性能和安全一站式', en: 'CDN acceleration, DDoS protection and DNS management in one platform' },
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
          description: { zh: '谷歌广告联盟平台，通过展示广告实现内容变现', en: "Google's ad platform to monetize your content with display ads" },
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
          description: { zh: '谷歌官方SEO入门指南，了解基础知识和最佳实践', en: "Google's official SEO starter guide with fundamentals and best practices" },
          icon: 'https://www.google.com/s2/favicons?domain=google.com&sz=64',
        },
        {
          name: { zh: 'Shopify SEO 优化指南', en: 'Shopify SEO Guide' },
          url: 'https://www.shopify.com/zh/blog/seo-checklist-online-store',
          description: { zh: 'Shopify终极SEO优化清单，38个实用技巧助力流量增长', en: 'Shopify ultimate SEO checklist with 38 practical tips to boost traffic' },
          icon: 'https://www.google.com/s2/favicons?domain=shopify.com&sz=64',
        },
      ],
    },
  ],
};
