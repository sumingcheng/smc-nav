/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  
  // 静态导出配置
  output: 'export',
  
  // 图片优化配置（静态导出时需要）
  images: {
    unoptimized: true,
    domains: [
      'www.google.com',
      'pbs.twimg.com',
    ],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.google.com',
        pathname: '/s2/favicons/**',
      },
      {
        protocol: 'https',
        hostname: 'pbs.twimg.com',
        pathname: '/profile_images/**',
      },
    ],
  },
  
  // 禁用服务端功能（静态导出时需要）
  trailingSlash: true,
  
  // 基础路径配置（GitHub Pages需要）
  basePath: process.env.NODE_ENV === 'production' ? '/smc-nav' : '',
  
  // 资源路径配置
  assetPrefix: process.env.NODE_ENV === 'production' ? '/smc-nav/' : '',
};

module.exports = nextConfig; 