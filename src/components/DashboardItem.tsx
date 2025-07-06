import * as Avatar from '@radix-ui/react-avatar';
import * as Tooltip from '@radix-ui/react-tooltip';
import { DashboardItem as DashboardItemType } from '../store/dashboardStore';

interface DashboardItemProps {
  item: DashboardItemType;
  isDragging: boolean;
  isDragOver: boolean;
  onDragStart: (e: React.DragEvent, item: DashboardItemType) => void;
  onDragEnd: (e: React.DragEvent) => void;
  onDragOver: (e: React.DragEvent) => void;
  onDragEnter: (e: React.DragEvent, item: DashboardItemType) => void;
  onDragLeave: (e: React.DragEvent) => void;
  onDrop: (e: React.DragEvent, item: DashboardItemType) => void;
  onRemove: (id: string) => void;
}

export default function DashboardItem({ item, isDragging, isDragOver, onDragStart, onDragEnd, onDragOver, onDragEnter, onDragLeave, onDrop, onRemove }: DashboardItemProps) {
  return (
    <div
      draggable
      onDragStart={(e) => onDragStart(e, item)}
      onDragEnd={onDragEnd}
      onDragOver={onDragOver}
      onDragEnter={(e) => onDragEnter(e, item)}
      onDragLeave={onDragLeave}
      onDrop={(e) => onDrop(e, item)}
      className={`group relative bg-gray-900/50 backdrop-blur-sm rounded-md p-2 transition-all duration-200 cursor-move border ${
        isDragging
          ? 'border-cyan-400 shadow-lg shadow-cyan-400/20 scale-105'
          : isDragOver
          ? 'border-yellow-400 shadow-lg shadow-yellow-400/20 scale-105 bg-yellow-400/10'
          : 'border-white/10 hover:border-white/20 hover:bg-gray-800/60 hover:shadow-md'
      }`}
    >
      {/* 拖拽状态指示器 */}
      {isDragging && (
        <div className="absolute -top-2 -right-2 w-6 h-6 bg-cyan-400 rounded-full flex items-center justify-center animate-pulse">
          <span className="text-black text-xs">📦</span>
        </div>
      )}

      {/* 放置目标指示器 */}
      {isDragOver && (
        <div className="absolute -top-2 -left-2 w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center animate-bounce">
          <span className="text-black text-xs">📍</span>
        </div>
      )}

      {/* 删除按钮 - 拖拽时隐藏 */}
      {!isDragging && (
        <Tooltip.Root>
          <Tooltip.Trigger asChild>
            <button
              onClick={() => onRemove(item.id)}
              className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white rounded-full text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-200 hover:bg-red-600 flex items-center justify-center z-10"
            >
              ×
            </button>
          </Tooltip.Trigger>
          <Tooltip.Portal>
            <Tooltip.Content
              className="data-[state=delayed-open]:data-[side=top]:animate-slideDownAndFade data-[state=delayed-open]:data-[side=right]:animate-slideLeftAndFade data-[state=delayed-open]:data-[side=left]:animate-slideRightAndFade data-[state=delayed-open]:data-[side=bottom]:animate-slideUpAndFade text-xs select-none rounded-md bg-black px-2 py-1 text-white shadow-sm"
              sideOffset={5}
            >
              从看板移除
              <Tooltip.Arrow className="fill-black" />
            </Tooltip.Content>
          </Tooltip.Portal>
        </Tooltip.Root>
      )}

      <a href={item.url} target="_blank" rel="noopener noreferrer" className="block" onClick={(e) => e.stopPropagation()}>
        <div className="flex items-center space-x-2">
          <Avatar.Root
            className={`inline-flex h-10 w-10 select-none items-center justify-center overflow-hidden ${
              item.category === 'crypto-bloggers' ? 'rounded-full' : 'rounded-md'
            } bg-gray-800/80 border border-white/20`}
          >
            <Avatar.Image className={`h-full w-full ${item.category === 'crypto-bloggers' ? 'rounded-full' : 'rounded-md'} object-cover`} src={item.icon} alt={item.name} />
            <Avatar.Fallback className="text-sm leading-1 flex h-full w-full items-center justify-center bg-gray-700 text-white">{item.name.charAt(0)}</Avatar.Fallback>
          </Avatar.Root>
          <div className="flex-1 min-w-0">
            <h4 className="text-xs font-medium text-white transition-colors truncate mb-1">{item.name}</h4>
            <p className="text-xs text-[#a0a0a0] leading-relaxed">{item.description}</p>
          </div>
        </div>
      </a>
    </div>
  );
}
