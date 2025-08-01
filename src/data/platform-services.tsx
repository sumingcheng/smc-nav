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
  ],
};