import { ReactNode } from 'react';

interface SectionContainerProps {
  title: string;
  children: ReactNode;
}

export default function SectionContainer({ title, children }: SectionContainerProps) {
  return (
    <div className="bg-black/30 backdrop-blur-sm rounded-lg p-3 border border-white/10 hover:border-white/20 transition-all duration-200">
      <div className="mb-3">
        <div className="flex items-center space-x-2 mb-1">
          <div className="w-1 h-1 bg-white rounded-full" />
          <h3 className="text-sm font-medium text-white">{title}</h3>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2">
        {children}
      </div>
    </div>
  );
} 