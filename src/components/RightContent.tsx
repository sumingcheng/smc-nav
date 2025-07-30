import * as Separator from '@radix-ui/react-separator';
import { Category } from '../types';
import NewsMediaSection from './NewsMediaSection';
import TradingToolsSection from './TradingToolsSection';
import CryptoBloggersSection from './CryptoBloggersSection';
import DashboardSection from './DashboardSection';
import TutorialSection from './TutorialSection';
import AINavigationSection from './AINavigationSection';
import ToolsSection from './ToolsSection';
import AirdropSection from './AirdropSection';

interface RightContentProps {
  currentCategory: Category | undefined;
}

// 图标颜色映射 - 与左侧菜单栏保持一致
const iconColors: Record<string, string> = {
  dashboard: '#00ffff', // 青色 - 看板
  tutorial: '#FFA500', // 橙色 - 新手教程
  'news-media': '#FFD166', // 黄色 - 新闻
  'trading-tools': '#FFD700', // 金色 - 打狗
  'crypto-bloggers': '#9C6EFF', // 紫色 - 博主
  'ai-navigation': '#FF6B6B', // 红色 - AI 导航
  'tools': '#4FC3F7', // 浅蓝色 - 工具
  'airdrop': '#FFA500', // 橙色 - 空投撸白
};

export default function RightContent({ currentCategory }: RightContentProps) {
  if (!currentCategory) {
    return (
      <div className="flex-1 min-w-0 flex items-center justify-center">
        <div className="text-center">
          <div className="text-6xl mb-4">🤖</div>
          <h2 className="text-2xl font-bold text-white mb-2">欢迎使用 Dogfight Hub</h2>
          <p className="text-[#a0a0a0]">请选择左侧菜单开始探索</p>
        </div>
      </div>
    );
  }

  const renderContent = () => {
    switch (currentCategory.id) {
      case 'tutorial':
        return <TutorialSection category={currentCategory} />;
      case 'news-media':
        return <NewsMediaSection category={currentCategory} />;
      case 'trading-tools':
        return <TradingToolsSection category={currentCategory} />;
      case 'crypto-bloggers':
        return <CryptoBloggersSection category={currentCategory} />;
      case 'ai-navigation':
        return <AINavigationSection category={currentCategory} />;
      case 'tools':
        return <ToolsSection category={currentCategory} />;
      case 'airdrop':
        return <AirdropSection category={currentCategory} />;
      case 'dashboard':
        return <DashboardSection />;
      default:
        return null;
    }
  };

  // 获取当前分类的图标颜色
  const iconColor = iconColors[currentCategory.id] || '#00ffff';

  return (
    <div className="flex-1 min-w-0 bg-[#0e1015] p-4 overflow-y-auto">
      {/* 页面标题 */}
      <div className="mb-4 flex items-center">
        <div className="mr-2" style={{ color: iconColor }}>
          {currentCategory.icon}
        </div>
        <div>
          <h1 className="text-sm font-medium text-white">{currentCategory.name}</h1>
          <p className="text-xs text-[#a0a0a0]">{currentCategory.description}</p>
        </div>
      </div>
      <Separator.Root className="bg-white/20 data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full mb-4" />

      {/* 渲染对应的分类内容 */}
      {renderContent()}
    </div>
  );
}
