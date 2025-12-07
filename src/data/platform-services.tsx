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
          description: { zh: 'Next.js官方，前端部署首选', en: 'Next.js official, top frontend deployment' },
          icon: 'https://www.google.com/s2/favicons?domain=vercel.com&sz=64',
        },
        {
          name: { zh: 'Netlify', en: 'Netlify' },
          url: 'https://www.netlify.com/',
          description: { zh: '老牌前端部署，CI/CD丝滑', en: 'Veteran frontend deployment, smooth CI/CD' },
          icon: 'https://www.google.com/s2/favicons?domain=netlify.com&sz=64',
        },
        {
          name: { zh: 'Firebase', en: 'Firebase' },
          url: 'https://firebase.google.com/',
          description: { zh: 'Google后端全家桶', en: 'Google backend suite' },
          icon: 'https://www.google.com/s2/favicons?domain=firebase.google.com&sz=64',
        },
        {
          name: { zh: 'Supabase', en: 'Supabase' },
          url: 'https://supabase.com/',
          description: { zh: 'Firebase开源替代', en: 'Open source Firebase alternative' },
          icon: 'https://www.google.com/s2/favicons?domain=supabase.com&sz=64',
        },
        {
          name: { zh: 'Railway', en: 'Railway' },
          url: 'https://railway.app/',
          description: { zh: '全栈一键部署，体验极佳', en: 'One-click fullstack deployment' },
          icon: 'https://www.google.com/s2/favicons?domain=railway.app&sz=64',
        },
        {
          name: { zh: 'Render', en: 'Render' },
          url: 'https://render.com/',
          description: { zh: 'Heroku最佳替代', en: 'Best Heroku alternative' },
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
          description: { zh: '开发者最爱VPS', en: 'Most popular dev VPS' },
          icon: 'https://www.google.com/s2/favicons?domain=digitalocean.com&sz=64',
        },
        {
          name: { zh: 'Vultr', en: 'Vultr' },
          url: 'https://www.vultr.com/',
          description: { zh: '性价比高，机房覆盖广', en: 'Great value, global coverage' },
          icon: 'https://www.google.com/s2/favicons?domain=vultr.com&sz=64',
        },
        {
          name: { zh: 'Linode', en: 'Linode' },
          url: 'https://www.linode.com/',
          description: { zh: '老牌稳定VPS', en: 'Veteran reliable VPS' },
          icon: 'https://www.google.com/s2/favicons?domain=linode.com&sz=64',
        },
        {
          name: { zh: 'RackNerd', en: 'RackNerd' },
          url: 'https://racknerd.club/zh-CN/kvm-vps',
          description: { zh: '超低价VPS年付10刀起', en: 'Ultra-cheap VPS from $10/year' },
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
          description: { zh: '全球支付首选', en: 'Global payment leader' },
          icon: 'https://www.google.com/s2/favicons?domain=stripe.com&sz=64',
        },
        {
          name: { zh: 'Lemon Squeezy', en: 'Lemon Squeezy' },
          url: 'https://app.lemonsqueezy.com/dashboard',
          description: { zh: '独立开发者友好，自带税务', en: 'Indie-friendly with tax handling' },
          icon: 'https://www.google.com/s2/favicons?domain=lemonsqueezy.com&sz=64',
        },
        {
          name: { zh: 'PayPal', en: 'PayPal' },
          url: 'https://www.paypal.com/',
          description: { zh: '老牌在线支付', en: 'Veteran payment platform' },
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
          description: { zh: '最火现代认证方案', en: 'Hottest modern auth' },
          icon: 'https://www.google.com/s2/favicons?domain=clerk.com&sz=64',
        },
        {
          name: { zh: 'Auth0', en: 'Auth0' },
          url: 'https://auth0.com/',
          description: { zh: '企业级认证服务', en: 'Enterprise-grade auth' },
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
          description: { zh: 'Serverless MySQL', en: 'Serverless MySQL' },
          icon: 'https://www.google.com/s2/favicons?domain=planetscale.com&sz=64',
        },
        {
          name: { zh: 'MongoDB Atlas', en: 'MongoDB Atlas' },
          url: 'https://www.mongodb.com/atlas',
          description: { zh: 'NoSQL数据库首选', en: 'Leading NoSQL database' },
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
          description: { zh: '免费CDN+DNS', en: 'Free CDN and DNS' },
          icon: 'https://www.google.com/s2/favicons?domain=cloudflare.com&sz=64',
        },
        {
          name: { zh: 'Namecheap', en: 'Namecheap' },
          url: 'https://www.namecheap.com/',
          description: { zh: '便宜域名注册', en: 'Affordable domain registration' },
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
          description: { zh: '错误监控标配', en: 'Standard error monitoring' },
          icon: 'https://www.google.com/s2/favicons?domain=sentry.io&sz=64',
        },
        {
          name: { zh: 'Google Analytics', en: 'Google Analytics' },
          url: 'https://analytics.google.com/',
          description: { zh: '网站流量分析', en: 'Website traffic analysis' },
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
          description: { zh: '独立开发者工具集合', en: 'Indie hacker toolset' },
          icon: 'https://www.google.com/s2/favicons?domain=github.com&sz=64',
        },
      ],
    },
  ],
};
