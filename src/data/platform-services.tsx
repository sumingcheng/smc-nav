import { Category } from '../types';
import { MdOutlineCloudQueue } from 'react-icons/md';

export const platformServices: Category = {
  id: 'platform-services',
  name: { zh: '平台', en: 'Platforms' },
  description: { zh: '各类云服务与平台资源', en: 'Cloud services and platform resources' },
  icon: <MdOutlineCloudQueue className="text-lg" />,
  subcategories: [
    {
      id: 'cloud-deployment',
      name: { zh: '云服务/部署', en: 'Cloud & Deployment' },
      description: { zh: '', en: '' },
      websites: [
        {
          name: { zh: 'Vercel', en: 'Vercel' },
          url: 'https://vercel.com/',
          description: { zh: 'Next.js官方平台，前端部署首选，边缘网络极速访问', en: 'Next.js official platform, best choice for frontend deployment with edge network' },
          icon: 'https://www.google.com/s2/favicons?domain=vercel.com&sz=64',
        },
        {
          name: { zh: 'Netlify', en: 'Netlify' },
          url: 'https://www.netlify.com/',
          description: { zh: '老牌前端部署平台，CI/CD流程丝滑，静态站点托管神器', en: 'Veteran frontend deployment platform with smooth CI/CD and static site hosting' },
          icon: 'https://www.google.com/s2/favicons?domain=netlify.com&sz=64',
        },
        {
          name: { zh: 'Firebase', en: 'Firebase' },
          url: 'https://firebase.google.com/',
          description: { zh: 'Google全家桶后端服务，实时数据库+认证+云函数一站式解决', en: 'Google backend suite with realtime database, auth and cloud functions' },
          icon: 'https://www.google.com/s2/favicons?domain=firebase.google.com&sz=64',
        },
        {
          name: { zh: 'Supabase', en: 'Supabase' },
          url: 'https://supabase.com/',
          description: { zh: 'Firebase开源替代方案，Postgres数据库+实时订阅+认证', en: 'Open source Firebase alternative with Postgres, realtime subscriptions and auth' },
          icon: 'https://www.google.com/s2/favicons?domain=supabase.com&sz=64',
        },
        {
          name: { zh: 'Railway', en: 'Railway' },
          url: 'https://railway.app/',
          description: { zh: '全栈部署新秀，一键部署任何项目，开发体验极佳', en: 'Modern fullstack deployment platform with one-click deploy and great DX' },
          icon: 'https://www.google.com/s2/favicons?domain=railway.app&sz=64',
        },
        {
          name: { zh: 'Render', en: 'Render' },
          url: 'https://render.com/',
          description: { zh: '简单易用的云平台，自动化部署和扩展，Heroku替代品', en: 'Simple cloud platform with auto-deploy and scaling, Heroku alternative' },
          icon: 'https://www.google.com/s2/favicons?domain=render.com&sz=64',
        },
      ],
    },
    {
      id: 'vps-services',
      name: { zh: 'VPS服务', en: 'VPS Services' },
      description: { zh: '', en: '' },
      websites: [
        {
          name: { zh: 'DigitalOcean', en: 'DigitalOcean' },
          url: 'https://www.digitalocean.com/',
          description: { zh: '最受开发者欢迎的VPS，文档详细，社区活跃', en: 'Most popular VPS among developers with detailed docs and active community' },
          icon: 'https://www.google.com/s2/favicons?domain=digitalocean.com&sz=64',
        },
        {
          name: { zh: 'Vultr', en: 'Vultr' },
          url: 'https://www.vultr.com/',
          description: { zh: '性价比高，全球机房覆盖广，按小时计费灵活', en: 'High cost-performance with global datacenter coverage and hourly billing' },
          icon: 'https://www.google.com/s2/favicons?domain=vultr.com&sz=64',
        },
        {
          name: { zh: 'Linode', en: 'Linode' },
          url: 'https://www.linode.com/',
          description: { zh: '老牌VPS服务商，稳定可靠，现已被Akamai收购', en: 'Veteran VPS provider with reliable performance, now owned by Akamai' },
          icon: 'https://www.google.com/s2/favicons?domain=linode.com&sz=64',
        },
        {
          name: { zh: 'RackNerd', en: 'RackNerd' },
          url: 'https://racknerd.club/zh-CN/kvm-vps',
          description: { zh: '超高性价比KVM VPS，年付低至10刀，穷人福音', en: 'Ultra-affordable KVM VPS with annual plans starting at $10, budget-friendly' },
          icon: 'https://www.google.com/s2/favicons?domain=racknerd.club&sz=64',
        },
      ],
    },
    {
      id: 'payment-services',
      name: { zh: '支付平台', en: 'Payment Services' },
      description: { zh: '', en: '' },
      websites: [
        {
          name: { zh: 'Stripe', en: 'Stripe' },
          url: 'https://stripe.com/',
          description: { zh: '全球支付首选，API设计优雅，SaaS必备支付方案', en: 'Global payment leader with elegant API, essential for SaaS products' },
          icon: 'https://www.google.com/s2/favicons?domain=stripe.com&sz=64',
        },
        {
          name: { zh: 'Lemon Squeezy', en: 'Lemon Squeezy' },
          url: 'https://app.lemonsqueezy.com/dashboard',
          description: { zh: '独立开发者友好，自带税务处理，数字产品销售神器', en: 'Indie-friendly with built-in tax handling, perfect for digital products' },
          icon: 'https://www.google.com/s2/favicons?domain=lemonsqueezy.com&sz=64',
        },
        {
          name: { zh: 'PayPal', en: 'PayPal' },
          url: 'https://www.paypal.com/',
          description: { zh: '老牌在线支付平台，全球用户基数大，跨境收款方便', en: 'Veteran payment platform with massive user base and easy cross-border transactions' },
          icon: 'https://www.google.com/s2/favicons?domain=paypal.com&sz=64',
        },
      ],
    },
    {
      id: 'auth-services',
      name: { zh: '认证服务', en: 'Authentication' },
      description: { zh: '', en: '' },
      websites: [
        {
          name: { zh: 'Clerk', en: 'Clerk' },
          url: 'https://clerk.com/',
          description: { zh: '最火的现代认证方案，UI组件开箱即用，用户管理完善', en: 'Hottest modern auth solution with ready-to-use UI components and user management' },
          icon: 'https://www.google.com/s2/favicons?domain=clerk.com&sz=64',
        },
        {
          name: { zh: 'Auth0', en: 'Auth0' },
          url: 'https://auth0.com/',
          description: { zh: '企业级认证服务，支持所有主流OAuth提供商，安全可靠', en: 'Enterprise-grade auth service supporting all major OAuth providers' },
          icon: 'https://www.google.com/s2/favicons?domain=auth0.com&sz=64',
        },
      ],
    },
    {
      id: 'database-services',
      name: { zh: '数据库服务', en: 'Database Services' },
      description: { zh: '', en: '' },
      websites: [
        {
          name: { zh: 'PlanetScale', en: 'PlanetScale' },
          url: 'https://planetscale.com/',
          description: { zh: 'Serverless MySQL数据库，分支管理如同Git，扩展性强', en: 'Serverless MySQL with Git-like branching and excellent scalability' },
          icon: 'https://www.google.com/s2/favicons?domain=planetscale.com&sz=64',
        },
        {
          name: { zh: 'MongoDB Atlas', en: 'MongoDB Atlas' },
          url: 'https://www.mongodb.com/atlas',
          description: { zh: 'NoSQL数据库首选，云端托管MongoDB，免费套餐慷慨', en: 'Leading NoSQL database with cloud-hosted MongoDB and generous free tier' },
          icon: 'https://www.google.com/s2/favicons?domain=mongodb.com&sz=64',
        },
      ],
    },
    {
      id: 'domain-dns',
      name: { zh: '域名与DNS', en: 'Domain & DNS' },
      description: { zh: '', en: '' },
      websites: [
        {
          name: { zh: 'Cloudflare', en: 'Cloudflare' },
          url: 'https://www.cloudflare.com/',
          description: { zh: '免费CDN+DNS，网站加速和安全防护，开发者必备', en: 'Free CDN and DNS with site acceleration and security, essential for devs' },
          icon: 'https://www.google.com/s2/favicons?domain=cloudflare.com&sz=64',
        },
        {
          name: { zh: 'Namecheap', en: 'Namecheap' },
          url: 'https://www.namecheap.com/',
          description: { zh: '域名注册便宜，界面友好，免费隐私保护', en: 'Affordable domain registration with user-friendly interface and free privacy' },
          icon: 'https://www.google.com/s2/favicons?domain=namecheap.com&sz=64',
        },
      ],
    },
    {
      id: 'monitoring-analytics',
      name: { zh: '监控与分析', en: 'Monitoring & Analytics' },
      description: { zh: '', en: '' },
      websites: [
        {
          name: { zh: 'Sentry', en: 'Sentry' },
          url: 'https://sentry.io/',
          description: { zh: '错误监控标配，实时捕获异常，快速定位问题', en: 'Standard for error monitoring with real-time exception tracking' },
          icon: 'https://www.google.com/s2/favicons?domain=sentry.io&sz=64',
        },
        {
          name: { zh: 'Google Analytics', en: 'Google Analytics' },
          url: 'https://analytics.google.com/',
          description: { zh: '网站流量分析工具，免费强大，数据详尽', en: 'Website traffic analysis tool, free and powerful with detailed data' },
          icon: 'https://www.google.com/s2/favicons?domain=google.com&sz=64',
        },
      ],
    },
    {
      id: 'developer-tools',
      name: { zh: '开发者工具', en: 'Developer Tools' },
      description: { zh: '', en: '' },
      websites: [
        {
          name: { zh: 'Indie Hacker Tools', en: 'Indie Hacker Tools' },
          url: 'https://github.com/weijunext/indie-hacker-tools',
          description: { zh: '独立开发者工具集合，涵盖开发、设计、营销等全流程', en: 'Comprehensive indie hacker toolset covering dev, design, marketing and more' },
          icon: 'https://www.google.com/s2/favicons?domain=github.com&sz=64',
        },
      ],
    },
  ],
};
