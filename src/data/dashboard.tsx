import { Category } from '../types';
import { RiDashboard3Line } from 'react-icons/ri';

export const dashboard: Category = {
  id: 'dashboard',
  name: { zh: '个人看板', en: 'Dashboard' },
  description: { zh: '自定义自己的导航看板，拖拽可重新排序', en: 'Customize your navigation dashboard, drag to reorder' },
  icon: <RiDashboard3Line className="text-lg" />,
  subcategories: [],
}; 