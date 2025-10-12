import { Category } from '../types';
import { MdOutlineCloudQueue } from 'react-icons/md';

export const platformServices: Category = {
  id: 'platform-services',
  name: { zh: '平台', en: 'Platforms' },
  description: { zh: '各类云服务与平台资源', en: 'Cloud services and platform resources' },
  icon: <MdOutlineCloudQueue className="text-lg" />,
  subcategories: [
    {
      id: 'vps-services',
      name: { zh: 'VPS服务', en: 'VPS Services' },
      description: { zh: '虚拟专用服务器提供商', en: 'Virtual Private Server providers' },
      websites: [
        {
          name: { zh: 'RackNerd', en: 'RackNerd' },
          url: 'https://racknerd.club/zh-CN/kvm-vps',
          description: { zh: '提供高性价比KVM VPS服务，支持多种支付方式', en: 'Affordable KVM VPS hosting with multiple payment options' },
          icon: 'https://www.google.com/s2/favicons?domain=racknerd.club&sz=64',
        },
      ],
    },
    {
      id: 'developer-services',
      name: { zh: '开发者服务', en: 'Developer Services' },
      description: { zh: '面向开发者的各类平台与工具资源', en: 'Developer platforms and tools' },
      websites: [
        {
          name: { zh: 'Lemon Squeezy', en: 'Lemon Squeezy' },
          url: 'https://app.lemonsqueezy.com/dashboard',
          description: { zh: '为开发者和创作者提供数字产品销售、订阅和授权服务的平台。', en: 'Platform for selling digital products, subscriptions and licenses.' },
          icon: 'https://www.google.com/s2/favicons?domain=lemonsqueezy.com&sz=64',
        },
        {
          name: { zh: 'Indie Hacker Tools', en: 'Indie Hacker Tools' },
          url: 'https://github.com/weijunext/indie-hacker-tools',
          description: { zh: '独立开发者必备工具集合，涵盖开发、设计、营销等多个方面。', en: 'Essential tools for indie hackers covering dev, design, marketing and more.' },
          icon: 'https://www.google.com/s2/favicons?domain=github.com&sz=64',
        },
      ],
    },
  ],
};
