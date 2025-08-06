import { Category } from '../types';
import { MdOutlineCloudQueue } from 'react-icons/md';

export const platformServices: Category = {
  id: 'platform-services',
  name: '平台服务',
  description: '各类云服务与平台资源',
  icon: <MdOutlineCloudQueue className="text-lg" />,
  subcategories: [
    {
      id: 'vps-services',
      name: 'VPS服务',
      description: '虚拟专用服务器提供商',
      websites: [
        {
          name: 'RackNerd',
          url: 'https://racknerd.club/zh-CN/kvm-vps',
          description: '提供高性价比KVM VPS服务，支持多种支付方式',
          icon: 'https://www.google.com/s2/favicons?domain=racknerd.club&sz=64',
        },
      ],
    },
    {
      id: 'developer-services',
      name: '开发者服务',
      description: '面向开发者的各类平台与工具资源',
      websites: [
        {
          name: 'Lemon Squeezy',
          url: 'https://app.lemonsqueezy.com/dashboard',
          description: '为开发者和创作者提供数字产品销售、订阅和授权服务的平台。',
          icon: 'https://www.google.com/s2/favicons?domain=lemonsqueezy.com&sz=64',
        },
        {
          name: 'Indie Hacker Tools',
          url: 'https://github.com/weijunext/indie-hacker-tools',
          description: '独立开发者必备工具集合，涵盖开发、设计、营销等多个方面。',
          icon: 'https://www.google.com/s2/favicons?domain=github.com&sz=64',
        },
      ],
    },
  ],
};
