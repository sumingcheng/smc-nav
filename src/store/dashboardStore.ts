import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { isReadonlyCategory } from '../constants/categories'
import toast from 'react-hot-toast'

export interface DashboardItem {
  id: string
  name: string
  url: string
  description: string
  icon: string
  category: string
  order: number
}

interface DashboardStore {
  dashboardItems: DashboardItem[]
  addToDashboard: (item: Omit<DashboardItem, 'id' | 'order'>) => void
  removeFromDashboard: (id: string) => void
  reorderDashboard: (items: DashboardItem[]) => void
  clearDashboard: () => void
  isInDashboard: (name: string) => boolean
}

export const useDashboardStore = create<DashboardStore>()(
  persist(
    (set, get) => ({
      dashboardItems: [],

      addToDashboard: (item) => {
        if (isReadonlyCategory(item.category)) {
          toast.error(`${item.name} 不能添加到看板`)
          return
        }

        const { dashboardItems } = get()
        const newItem: DashboardItem = {
          ...item,
          id: `dashboard-${Date.now()}-${Math.random()}`,
          order: dashboardItems.length,
        }
        set({ dashboardItems: [...dashboardItems, newItem] })
        toast.success(`已添加 ${item.name} 到看板`)
      },

      removeFromDashboard: (id) => {
        const { dashboardItems } = get()
        const item = dashboardItems.find(item => item.id === id)
        set({ dashboardItems: dashboardItems.filter(item => item.id !== id) })
        if (item) {
          toast.success(`已从看板移除 ${item.name}`)
        }
      },

      reorderDashboard: (items) => {
        const reorderedItems = items.map((item, index) => ({
          ...item,
          order: index,
        }))
        set({ dashboardItems: reorderedItems })
      },

      clearDashboard: () => {
        set({ dashboardItems: [] })
        toast.success('看板已清空')
      },

      isInDashboard: (name) => {
        const { dashboardItems } = get()
        return dashboardItems.some(item => item.name === name)
      },
    }),
    {
      name: 'dogfight-dashboard', // localStorage key
      version: 1,
    }
  )
) 