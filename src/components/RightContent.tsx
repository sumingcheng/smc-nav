// 已移除未使用的导入
import { Category } from '../types';
import DashboardSection from './DashboardSection';
import AINavigationSection from './AINavigationSection';
import ToolsSection from './ToolsSection';
import PlatformServicesSection from './PlatformServicesSection';
import SEOSection from './SEOSection';
import GamesSection from './GamesSection';
import Web3Section from './Web3Section';

interface RightContentProps {
  currentCategory: Category | undefined;
}

// 图标颜色映射 - 与左侧菜单栏保持一致
const iconColors: Record<string, string> = {
  dashboard: '#00ffff', // 青色 - 看板
  'ai-navigation': '#FF6B6B', // 红色 - AI 导航
  tools: '#4FC3F7', // 浅蓝色 - 工具
  'platform-services': '#00BCD4', // 蓝绿色 - 平台服务
  seo: '#3F51B5', // 靛蓝色 - SEO
  games: '#76FF03', // 亮绿色 - 游戏
  web3: '#29B6F6', // 天蓝色 - WEB3
};

export default function RightContent({ currentCategory }: RightContentProps) {
  if (!currentCategory) {
    return (
      <div className="flex-1 min-w-0 flex items-center justify-center">
        <div className="text-center">
          <div className="text-6xl mb-4">🤖</div>
          <h2 className="text-2xl font-bold text-white mb-2">欢迎使用 smc-nav</h2>
          <p className="text-[#a0a0a0]">请选择左侧菜单开始探索</p>
        </div>
      </div>
    );
  }

  const renderContent = () => {
    switch (currentCategory.id) {
      case 'ai-navigation':
        return <AINavigationSection category={currentCategory} />;
      case 'tools':
        return <ToolsSection category={currentCategory} />;
      case 'platform-services':
        return <PlatformServicesSection category={currentCategory} />;
      case 'seo':
        return <SEOSection category={currentCategory} />;
      case 'games':
        return <GamesSection category={currentCategory} />;
      case 'web3':
        return <Web3Section category={currentCategory} />;
      case 'dashboard':
        return <DashboardSection />;
      default:
        return null;
    }
  };

  // 获取当前分类的图标颜色
  const iconColor = iconColors[currentCategory.id] || '#00ffff';

  return (
    <div className="flex-1 min-w-0 bg-[#0e1015] flex flex-col h-full">
      {/* 页面标题 - 固定在顶部 */}
      <div className="p-4 border-b border-white/10">
        <div className="flex items-center">
          <div className="mr-2" style={{ color: iconColor }}>
            {currentCategory.icon}
          </div>
          <div>
            <h1 className="text-sm font-medium text-white">{currentCategory.name}</h1>
            <p className="text-xs text-[#a0a0a0]">{currentCategory.description}</p>
          </div>
        </div>
      </div>

      {/* 内容区域 - 可滚动，内容少时也占满空间 */}
      <div className="flex-1 overflow-y-auto p-4 flex flex-col min-h-0">
        <div className="flex-1">{renderContent()}</div>
      </div>
    </div>
  );
}
