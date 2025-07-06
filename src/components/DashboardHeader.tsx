import * as AlertDialog from '@radix-ui/react-alert-dialog';
import { useDashboardStore } from '../store/dashboardStore';

interface DashboardHeaderProps {
  itemCount: number;
}

export default function DashboardHeader({ itemCount }: DashboardHeaderProps) {
  const { clearDashboard } = useDashboardStore();

  return (
    <div className="mb-3">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="w-1 h-1 bg-white rounded-full" />
          <h3 className="text-sm font-medium text-white">我的收藏</h3>
        </div>
        <div className="flex items-center space-x-2">
          <span className="text-xs text-[#a0a0a0]">{itemCount} 项</span>
          {itemCount > 0 && (
            <AlertDialog.Root>
              <AlertDialog.Trigger asChild>
                <button className="text-xs text-red-400 hover:text-red-300 transition-colors duration-200 hover:underline">清空</button>
              </AlertDialog.Trigger>
              <AlertDialog.Portal>
                <AlertDialog.Overlay className="bg-black/60 data-[state=open]:animate-overlayShow fixed inset-0 z-50" />
                <AlertDialog.Content className="data-[state=open]:animate-contentShow fixed top-[50%] left-[50%] max-h-[85vh] w-[90vw] max-w-[500px] translate-x-[-50%] translate-y-[-50%] rounded-lg bg-[#1A1C2F] p-6 shadow-lg focus:outline-none z-50 border border-white/10">
                  <AlertDialog.Title className="text-white text-lg font-medium mb-4">清空看板</AlertDialog.Title>
                  <AlertDialog.Description className="text-[#a0a0a0] text-sm mb-6">确定要清空看板吗？此操作不可恢复，所有 {itemCount} 个项目都将被移除。</AlertDialog.Description>
                  <div className="flex justify-end gap-3">
                    <AlertDialog.Cancel asChild>
                      <button className="bg-transparent hover:bg-white/10 text-[#a0a0a0] hover:text-white px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200">
                        取消
                      </button>
                    </AlertDialog.Cancel>
                    <AlertDialog.Action asChild>
                      <button className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200" onClick={clearDashboard}>
                        确定清空
                      </button>
                    </AlertDialog.Action>
                  </div>
                </AlertDialog.Content>
              </AlertDialog.Portal>
            </AlertDialog.Root>
          )}
        </div>
      </div>
    </div>
  );
}
