interface MarkdownRendererProps {
  content: string;
  size?: 'sm' | 'base' | 'lg' | 'xl';
  color?: 'slate' | 'gray' | 'zinc' | 'stone';
  className?: string;
}

export default function MarkdownRenderer({ 
  content, 
  size = 'lg', 
  color = 'slate',
  className = ''
}: MarkdownRendererProps) {
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
      className={`prose ${sizeClasses[size]} ${colorClasses[color]} dark:prose-invert mx-auto max-w-none ${className}`}
      dangerouslySetInnerHTML={{ __html: content }}
    />
  );
}