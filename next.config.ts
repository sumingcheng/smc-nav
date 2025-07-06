import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  
  // 静态导出配置
  output: 'export',
  
  // 图片优化配置（静态导出时需要）
  images: {
    unoptimized: true,
  },
  
  // 禁用服务端功能（静态导出时需要）
  trailingSlash: true,
  
  // 基础路径配置（GitHub Pages需要）
  basePath: process.env.NODE_ENV === 'production' ? '/dogfight-hub' : '',
  
  // 资源路径配置
  assetPrefix: process.env.NODE_ENV === 'production' ? '/dogfight-hub/' : '',
};

export default nextConfig;
