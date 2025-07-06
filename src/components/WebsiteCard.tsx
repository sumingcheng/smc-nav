import * as Avatar from '@radix-ui/react-avatar';
import * as Tooltip from '@radix-ui/react-tooltip';
import { useDashboardStore } from '../store/dashboardStore';
import { isReadonlyCategory } from '../constants/categories';
import toast from 'react-hot-toast';

interface Website {
  name: string;
  url: string;
  description: string;
  icon: string;
}

interface WebsiteCardProps {
  website: Website;
  categoryId: string;
  isRounded?: boolean; // 用于博主的圆形头像
  showAddButton?: boolean; // 控制是否显示加号按钮
}

export default function WebsiteCard({ website, categoryId, isRounded = false, showAddButton }: WebsiteCardProps) {
  const { addToDashboard, isInDashboard } = useDashboardStore();

  // 自动判断是否显示加号按钮：如果没有明确传入showAddButton，则根据分类判断
  const shouldShowAddButton = showAddButton !== undefined ? showAddButton : !isReadonlyCategory(categoryId);

  const handleAddToDashboard = () => {
    if (isInDashboard(website.name)) {
      toast.error(`${website.name} 已在看板中`);
      return;
    }

    addToDashboard({
      name: website.name,
      url: website.url,
      description: website.description,
      icon: website.icon,
      category: categoryId,
    });
  };

  return (
    <div className="group relative bg-gray-900/50 backdrop-blur-sm rounded-md p-2 hover:bg-gray-800/60 transition-all duration-200 hover:shadow-md border border-white/10 hover:border-white/20">
      {/* 加号按钮 - 只在shouldShowAddButton为true时显示 */}
      {shouldShowAddButton && (
        <Tooltip.Root>
          <Tooltip.Trigger asChild>
            <button
              onClick={handleAddToDashboard}
              disabled={isInDashboard(website.name)}
              className={`absolute -top-1 -right-1 w-5 h-5 rounded-full text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center ${
                isInDashboard(website.name) ? 'bg-green-500 text-white cursor-not-allowed' : 'bg-blue-500 text-white hover:bg-blue-600 cursor-pointer'
              }`}
            >
              {isInDashboard(website.name) ? '✓' : '+'}
            </button>
          </Tooltip.Trigger>
          <Tooltip.Portal>
            <Tooltip.Content
              className="data-[state=delayed-open]:data-[side=top]:animate-slideDownAndFade data-[state=delayed-open]:data-[side=right]:animate-slideLeftAndFade data-[state=delayed-open]:data-[side=left]:animate-slideRightAndFade data-[state=delayed-open]:data-[side=bottom]:animate-slideUpAndFade text-xs select-none rounded-md bg-black px-2 py-1 text-white shadow-sm"
              sideOffset={5}
            >
              {isInDashboard(website.name) ? '已在看板中' : '添加到看板'}
              <Tooltip.Arrow className="fill-black" />
            </Tooltip.Content>
          </Tooltip.Portal>
        </Tooltip.Root>
      )}

      <a href={website.url} target="_blank" rel="noopener noreferrer" className="block">
        <div className="flex items-center space-x-2">
          <Avatar.Root
            className={`inline-flex h-10 w-10 select-none items-center justify-center overflow-hidden ${
              isRounded ? 'rounded-full' : 'rounded-md'
            } bg-gray-800/80 border border-white/20`}
          >
            <Avatar.Image className={`h-full w-full ${isRounded ? 'rounded-full' : 'rounded-md'} object-cover`} src={website.icon} alt={website.name} />
            <Avatar.Fallback className="text-sm leading-1 flex h-full w-full items-center justify-center bg-gray-700 text-white">{website.name.charAt(0)}</Avatar.Fallback>
          </Avatar.Root>
          <div className="flex-1 min-w-0">
            <h4 className="text-xs font-medium text-white group-hover:text-white transition-colors truncate mb-1">{website.name}</h4>
            <p className="text-xs text-[#a0a0a0] leading-relaxed">{website.description}</p>
          </div>
        </div>
      </a>
    </div>
  );
}
