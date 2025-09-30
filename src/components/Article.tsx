import { ReactNode } from 'react';

interface ArticleProps {
  children: ReactNode;
  size?: 'sm' | 'base' | 'lg' | 'xl';
  color?: 'slate' | 'gray' | 'zinc' | 'stone';
}

export default function Article({
  children,
  size = 'lg',
  color = 'slate'
}: ArticleProps) {
  const sizeClasses = {
    sm: 'prose-sm',
    base: 'prose-base',
    lg: 'prose-lg',
    xl: 'prose-xl'
  };

  const colorClasses = {
    slate: 'prose-slate',
    gray: 'prose-gray',
    zinc: 'prose-zinc',
    stone: 'prose-stone'
  };

  return (
    <article
      className={`prose ${sizeClasses[size]} ${colorClasses[color]} dark:prose-invert mx-auto max-w-none`}
    >
      {children}
    </article>
  );
}
