import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface CachedRoute {
  path: string;
  timestamp: number;
}

interface RouteCacheState {
  visitedRoutes: CachedRoute[];
  addVisitedRoute: (path: string) => void;
  hasVisitedRoute: (path: string) => boolean;
  clearCache: () => void;
}

// 过期时间设置为10分钟
const CACHE_EXPIRY = 10 * 60 * 1000;

export const useRouteCacheStore = create<RouteCacheState>()(
  persist(
    (set, get) => ({
      visitedRoutes: [],
      
      addVisitedRoute: (path: string) => {
        const currentRoutes = get().visitedRoutes;
        
        // 清除过期的路由
        const now = Date.now();
        const validRoutes = currentRoutes.filter(
          route => now - route.timestamp < CACHE_EXPIRY
        );
        
        // 检查路由是否已存在
        const existingRouteIndex = validRoutes.findIndex(route => route.path === path);
        
        if (existingRouteIndex >= 0) {
          // 更新时间戳
          validRoutes[existingRouteIndex].timestamp = now;
          set({ visitedRoutes: [...validRoutes] });
        } else {
          // 添加新路由
          set({ visitedRoutes: [...validRoutes, { path, timestamp: now }] });
        }
      },
      
      hasVisitedRoute: (path: string) => {
        const currentRoutes = get().visitedRoutes;
        const now = Date.now();
        return currentRoutes.some(
          route => route.path === path && (now - route.timestamp < CACHE_EXPIRY)
        );
      },
      
      clearCache: () => set({ visitedRoutes: [] }),
    }),
    {
      name: 'route-cache',
    }
  )
);