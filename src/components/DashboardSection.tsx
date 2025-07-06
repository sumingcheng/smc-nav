import { useState } from 'react';
import * as Tooltip from '@radix-ui/react-tooltip';
import { useDashboardStore, DashboardItem } from '../store/dashboardStore';
import DashboardHeader from './DashboardHeader';
import DashboardItem from './DashboardItem';

export default function DashboardSection() {
  const { dashboardItems, removeFromDashboard, reorderDashboard } = useDashboardStore();
  const [draggedItem, setDraggedItem] = useState<DashboardItem | null>(null);
  const [dragOverItem, setDragOverItem] = useState<string | null>(null);

  const handleDragStart = (e: React.DragEvent, item: DashboardItem) => {
    setDraggedItem(item);
    e.dataTransfer.effectAllowed = 'move';
    e.currentTarget.style.opacity = '0.5';
  };

  const handleDragEnd = (e: React.DragEvent) => {
    setDraggedItem(null);
    setDragOverItem(null);
    e.currentTarget.style.opacity = '1';
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'move';
  };

  const handleDragEnter = (e: React.DragEvent, targetItem: DashboardItem) => {
    e.preventDefault();
    if (draggedItem && draggedItem.id !== targetItem.id) {
      setDragOverItem(targetItem.id);
    }
  };

  const handleDragLeave = (e: React.DragEvent) => {
    if (!e.currentTarget.contains(e.relatedTarget as Node)) {
      setDragOverItem(null);
    }
  };

  const handleDrop = (e: React.DragEvent, targetItem: DashboardItem) => {
    e.preventDefault();
    if (!draggedItem || draggedItem.id === targetItem.id) return;

    const items = [...dashboardItems];
    const draggedIndex = items.findIndex(item => item.id === draggedItem.id);
    const targetIndex = items.findIndex(item => item.id === targetItem.id);

    items.splice(draggedIndex, 1);
    items.splice(targetIndex, 0, draggedItem);

    reorderDashboard(items);
    setDraggedItem(null);
    setDragOverItem(null);
  };

  const handleRemove = (id: string) => {
    removeFromDashboard(id);
  };

  if (dashboardItems.length === 0) {
    return (
      <div className="space-y-3">
        <div className="bg-black/30 backdrop-blur-sm rounded-lg p-8 border border-white/10 text-center">
          <div className="text-4xl mb-4">📋</div>
          <h3 className="text-sm font-medium text-white mb-2">看板为空</h3>
          <p className="text-xs text-[#a0a0a0]">
            从链上数据、新闻媒体、打狗工具中点击 + 号添加到看板
          </p>
        </div>
      </div>
    );
  }

  return (
    <Tooltip.Provider>
      <div className="space-y-3">
        <div className="bg-black/30 backdrop-blur-sm rounded-lg p-3 border border-white/10 hover:border-white/20 transition-all duration-200">
          <DashboardHeader itemCount={dashboardItems.length} />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2">
            {dashboardItems
              .sort((a, b) => a.order - b.order)
              .map((item) => (
                <DashboardItem
                  key={item.id}
                  item={item}
                  isDragging={draggedItem?.id === item.id}
                  isDragOver={dragOverItem === item.id}
                  onDragStart={handleDragStart}
                  onDragEnd={handleDragEnd}
                  onDragOver={handleDragOver}
                  onDragEnter={handleDragEnter}
                  onDragLeave={handleDragLeave}
                  onDrop={handleDrop}
                  onRemove={handleRemove}
                />
            ))}
          </div>
        </div>
      </div>
    </Tooltip.Provider>
  );
} 