import * as Dialog from '@radix-ui/react-dialog';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';
import toast from 'react-hot-toast';
import { RiCheckLine, RiCopperCoinLine, RiFileCopyLine, RiGithubLine } from 'react-icons/ri';
import { Category } from '../types';

interface LeftSidebarProps {
  categories: Category[];
}

// 图标颜色映射
const iconColors: Record<string, string> = {
  dashboard: '#00ffff', // 青色 - 看板
  tutorial: '#FFA500', // 橙色 - 新手教程
  'chain-data': '#4AFF8C', // 绿色 - 数据
  'news-media': '#FFD166', // 黄色 - 新闻
  'trading-tools': '#FFD700', // 金色 - 打狗
  'crypto-bloggers': '#9C6EFF', // 紫色 - 博主
  'ai-navigation': '#FF6B6B', // 红色 - AI 导航
};

export default function LeftSidebar({ categories }: LeftSidebarProps) {
  const router = useRouter();
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [currentLanguage, setCurrentLanguage] = useState<'zh' | 'en'>('zh');
  const [copied, setCopied] = useState(false);
  
  // 获取当前活跃的分类
  const getActiveCategory = () => {
    const path = router.pathname;
    if (path === '/') return 'dashboard';
    return path.substring(1); // 移除开头的 '/'
  };
  
  const activeCategory = getActiveCategory();

  const solanaAddress = '6JqeXLFe2W6fVzX8awKnSVJoda13EzQwmQzSW7eynpUT';

  const handleLanguageToggle = () => {
    setCurrentLanguage((prev) => (prev === 'zh' ? 'en' : 'zh'));
    // TODO: 实际的语言切换逻辑
  };

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(solanaAddress);
      setCopied(true);
      toast.success('地址已复制到剪贴板');
      setTimeout(() => setCopied(false), 2000);
    } catch {
      toast.error('复制失败，请手动复制');
    }
  };

  return (
    <div className={`${isCollapsed ? 'w-[60px]' : 'w-[180px]'} transition-all duration-300 bg-[#0F1116]/95 backdrop-blur-md rounded-lg h-screen overflow-hidden flex flex-col`}>
      {/* 头部区域：Logo + 切换按钮 */}
      <div className={`${isCollapsed ? 'p-2' : 'p-3'} flex items-center ${isCollapsed ? 'justify-center' : 'justify-between'}`}>
        {/* Logo - 仅在展开状态显示 */}
        {!isCollapsed && (
          <div className="flex items-center space-x-2 ml-1">
            {/* 竖线 Logo */}
            <div className="flex items-center space-x-1">
              <div className="w-1 h-6 bg-gradient-to-b from-[#00ffff] via-[#0080ff] to-[#8b5cf6] rounded-full shadow-sm shadow-cyan-400/20"></div>
              <div className="w-0.5 h-4 bg-gradient-to-b from-[#8b5cf6] to-[#00ffff] rounded-full opacity-60"></div>
            </div>
            <div className="flex flex-col">
              <span className="text-[#e7e9ea] font-semibold text-sm tracking-wide">Dogfight Hub</span>
              <div className="h-[1px] w-full bg-gradient-to-r from-[#00ffff] to-transparent"></div>
            </div>
          </div>
        )}

        {/* 切换按钮 */}
        <button
          onClick={() => setIsCollapsed(!isCollapsed)}
          className={`
            ${isCollapsed ? 'w-10 h-8 bg-[#1A1C2F] border border-[#2f3336] text-[#e7e9ea]' : 'p-2 hover:bg-[#1A1C2F]/50 text-[#a0a0a0] hover:text-[#e7e9ea]'} 
            rounded-md transition-all duration-200 flex items-center justify-center
            hover:shadow-md hover:scale-105
          `}
          aria-label={isCollapsed ? '展开侧边栏' : '收起侧边栏'}
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isCollapsed ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            )}
          </svg>
        </button>
      </div>

      {/* 分类导航 */}
      <div className={`${isCollapsed ? 'p-2' : 'p-3'} flex-1`}>
        <nav className="space-y-1">
          {categories.map((category) => {
            const IconColor = iconColors[category.id] || '#00ffff';
            return (
              <Link
                key={category.id}
                href={category.id === 'dashboard' ? '/' : `/${category.id}`}
                className={`w-full flex items-center ${
                  isCollapsed ? 'justify-center p-2' : 'space-x-3 px-3 py-2'
                } rounded-md text-left transition-all duration-200 transform group ${
                  activeCategory === category.id
                    ? `bg-[#1A1C2F] text-white shadow-sm ${isCollapsed ? '' : 'translate-x-1'}`
                    : `text-[#a0a0a0] hover:bg-[#1A1C2F]/50 hover:text-[#e7e9ea] ${isCollapsed ? '' : 'hover:translate-x-1'}`
                }`}
                title={isCollapsed ? category.name : ''}
              >
                <div
                  className={`transition-transform duration-200 ${activeCategory === category.id ? 'scale-110' : ''} flex items-center justify-center w-5 h-5`}
                  style={{ color: IconColor }}
                >
                  {category.icon}
                </div>
                {!isCollapsed && <span className="font-medium text-sm truncate">{category.name}</span>}
                {activeCategory === category.id && <div className="absolute left-0 w-1 h-6 rounded-r" style={{ backgroundColor: IconColor }} />}
              </Link>
            );
          })}
        </nav>
      </div>

      {/* 底部区域 */}
      <div className={`border-t border-[#2f3336] ${isCollapsed ? 'pt-1 mt-1 p-2' : 'pt-2 mt-2 p-3'}`}>
        <div className="flex flex-col space-y-1">
          {/* 打赏按钮 */}
          <Dialog.Root>
            <Dialog.Trigger asChild>
              <button
                className={`flex items-center p-2 rounded-md hover:bg-[#1A1C2F]/50 transition-colors text-[#a0a0a0] hover:text-[#e7e9ea] w-full text-left ${
                  isCollapsed ? 'justify-center' : ''
                }`}
                title={isCollapsed ? '打赏支持' : ''}
              >
                <div className="flex items-center justify-center w-5 h-5" style={{ color: '#FFD700' }}>
                  <RiCopperCoinLine className="text-lg" />
                </div>
                {!isCollapsed && <span className="ml-3 text-sm font-medium">打赏支持</span>}
              </button>
            </Dialog.Trigger>
            <Dialog.Portal>
              <Dialog.Overlay className="bg-black/60 data-[state=open]:animate-overlayShow fixed inset-0 z-50" />
              <Dialog.Content className="data-[state=open]:animate-contentShow fixed top-[50%] left-[50%] max-h-[85vh] w-[90vw] max-w-[450px] translate-x-[-50%] translate-y-[-50%] rounded-lg bg-[#1A1C2F] p-6 shadow-lg focus:outline-none z-50 border border-white/10">
                <Dialog.Title className="text-white text-xl font-bold mb-2 flex items-center">
                  <RiCopperCoinLine className="text-2xl text-[#FFD700] mr-2" />
                  支持作者
                </Dialog.Title>
                <Dialog.Description className="text-[#a0a0a0] text-sm mb-6">如果 Dogfight Hub 对你有帮助，欢迎通过 Solana 打赏支持！</Dialog.Description>

                {/* Solana 地址卡片 */}
                <div className="bg-black/40 rounded-lg p-4 border border-white/10 mb-4">
                  <div className="flex items-center mb-3">
                    <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center mr-3">
                      <span className="text-white font-bold text-sm">SOL</span>
                    </div>
                    <div>
                      <h3 className="text-white font-medium text-sm">Solana 钱包地址</h3>
                    </div>
                  </div>

                  {/* 地址显示 */}
                  <div className="bg-black/60 rounded-md p-3 mb-3">
                    <code className="text-cyan-400 text-xs break-all font-mono">{solanaAddress}</code>
                  </div>

                  {/* 复制按钮 */}
                  <button
                    onClick={copyToClipboard}
                    className="w-full flex items-center justify-center space-x-2 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white py-2.5 px-4 rounded-md transition-all duration-200 font-medium text-sm"
                  >
                    {copied ? (
                      <>
                        <RiCheckLine className="text-lg" />
                        <span>已复制!</span>
                      </>
                    ) : (
                      <>
                        <RiFileCopyLine className="text-lg" />
                        <span>复制地址</span>
                      </>
                    )}
                  </button>
                </div>

                {/* 提示信息 */}
                <div className="text-center">
                  <p className="text-[#a0a0a0] text-xs mb-3">💡 你的支持是我持续更新的动力</p>
                </div>

                {/* 关闭按钮 */}
                <Dialog.Close asChild>
                  <button
                    className="absolute top-4 right-4 inline-flex h-6 w-6 appearance-none items-center justify-center rounded-full text-[#a0a0a0] hover:text-white hover:bg-white/10 focus:outline-none"
                    aria-label="Close"
                  >
                    ×
                  </button>
                </Dialog.Close>
              </Dialog.Content>
            </Dialog.Portal>
          </Dialog.Root>

          {/* GitHub链接 */}
          <a
            href="https://github.com/sumingcheng/dogfight-hub"
            target="_blank"
            rel="noopener noreferrer"
            className={`flex items-center p-2 rounded-md hover:bg-[#1A1C2F]/50 transition-colors text-[#a0a0a0] hover:text-[#e7e9ea] w-full text-left ${
              isCollapsed ? 'justify-center' : ''
            }`}
            title={isCollapsed ? 'GitHub Repository' : ''}
          >
            <div className="flex items-center justify-center w-5 h-5" style={{ color: '#FFD166' }}>
              <RiGithubLine className="text-lg" />
            </div>
            {!isCollapsed && <span className="ml-3 text-sm font-medium">GitHub</span>}
          </a>

          {/* 语言切换按钮 */}
          <button
            onClick={handleLanguageToggle}
            className={`flex items-center p-2 rounded-md hover:bg-[#1A1C2F]/50 transition-all duration-200 text-[#a0a0a0] hover:text-[#e7e9ea] w-full text-left hover:scale-105 cursor-pointer ${
              isCollapsed ? 'justify-center' : ''
            }`}
            title={isCollapsed ? `${currentLanguage === 'zh' ? '切换至English' : 'Switch to 中文'}` : ''}
          >
            <div className="flex items-center justify-center w-5 h-5" style={{ color: '#9C6EFF' }}>
              <span className="text-sm">🌐</span>
            </div>
            {!isCollapsed && (
              <div className="ml-3 flex items-center space-x-2">
                <span className="text-sm font-medium">{currentLanguage === 'zh' ? '中文' : 'English'}</span>
                <div className="flex items-center space-x-1">
                  <div className={`w-1 h-1 rounded-full transition-colors ${currentLanguage === 'zh' ? 'bg-cyan-400' : 'bg-[#64748B]'}`} />
                  <div className={`w-1 h-1 rounded-full transition-colors ${currentLanguage === 'en' ? 'bg-cyan-400' : 'bg-[#64748B]'}`} />
                </div>
              </div>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
