import { Category } from '../types';
import { RiDashboard3Line } from 'react-icons/ri';

export const dashboard: Category = {
  id: 'dashboard',
  name: '个人看板',
  description: '自定义自己的导航看板',
  icon: <RiDashboard3Line className="text-lg" />,
  subcategories: [], // 看板不需要子分类
}; 