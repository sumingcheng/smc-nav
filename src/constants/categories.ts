// 定义不能添加到看板的只读分类
export const READONLY_CATEGORIES = [
  'tutorial',      // 新手教程
  'crypto-bloggers' // 加密博主
] as const;

// 判断分类是否为只读
export const isReadonlyCategory = (categoryId: string): boolean => {
  return READONLY_CATEGORIES.includes(categoryId as any);
}; 