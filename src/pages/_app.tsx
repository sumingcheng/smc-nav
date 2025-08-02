import '@/styles/globals.css';
import '@/styles/cyberpunk.css';
import 'nprogress/nprogress.css';
import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { Toaster } from 'react-hot-toast';
import NProgress from 'nprogress';
import { useRouteCacheStore } from '@/store/routeCacheStore';

// 配置 NProgress
NProgress.configure({
  showSpinner: false,
  trickleSpeed: 200,
  minimum: 0.3,
});

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const { addVisitedRoute, hasVisitedRoute } = useRouteCacheStore();

  useEffect(() => {
    const handleStart = (url: string) => {
      // 如果是已访问过的路由，可以跳过加载指示器
      if (!hasVisitedRoute(url)) {
        NProgress.start();
      }
    };

    const handleStop = (url: string) => {
      NProgress.done();
      // 记录已访问的路由
      addVisitedRoute(url);
    };

    router.events.on('routeChangeStart', handleStart);
    router.events.on('routeChangeComplete', handleStop);
    router.events.on('routeChangeError', handleStop);

    // 记录初始路由
    addVisitedRoute(router.pathname);

    return () => {
      router.events.off('routeChangeStart', handleStart);
      router.events.off('routeChangeComplete', handleStop);
      router.events.off('routeChangeError', handleStop);
    };
  }, [router, addVisitedRoute, hasVisitedRoute]);

  return (
    <>
      <Component {...pageProps} />
      <Toaster
        position="top-center"
        toastOptions={{
          duration: 2000,
          style: {
            background: '#1A1C2F',
            color: '#e7e9ea',
            border: '1px solid #2f3336',
            borderRadius: '8px',
            fontSize: '14px',
          },
          success: {
            iconTheme: {
              primary: '#4AFF8C',
              secondary: '#1A1C2F',
            },
          },
          error: {
            iconTheme: {
              primary: '#FF4A4A',
              secondary: '#1A1C2F',
            },
          },
        }}
      />
    </>
  );
}
