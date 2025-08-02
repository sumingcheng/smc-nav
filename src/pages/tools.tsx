import { Geist } from 'next/font/google';
import LeftSidebar from '../components/LeftSidebar';
import RightContent from '../components/RightContent';
import { categories } from '../data';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

export default function Tools() {
  const currentCategory = categories.find((cat) => cat.id === 'tools');

  return (
    <div className={`${geistSans.className} min-h-screen bg-black text-[#e7e9ea] relative overflow-hidden`}>
      {/* 网格背景 */}
      <div className="absolute inset-0 w-full h-full overflow-hidden z-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: 'linear-gradient(rgba(47, 51, 54, 0.3) 1px, transparent 1px), linear-gradient(to right, rgba(47, 51, 54, 0.3) 1px, transparent 1px)',
            backgroundSize: '24px 24px',
          }}
        ></div>
      </div>

      {/* 主布局 */}
      <div className="relative z-10 h-screen flex gap-[3px]">
        <LeftSidebar categories={categories} />
        <RightContent currentCategory={currentCategory} />
      </div>

      {/* 顶部装饰线 */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent z-20" />

      {/* 底部装饰线 */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent z-20" />
    </div>
  );
} 