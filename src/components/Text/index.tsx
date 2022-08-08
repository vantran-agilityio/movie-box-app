import { FC, memo } from 'react';

interface TextProps {
  content: string | number;
  className?: string;
}

const Text: FC<TextProps> = ({ content, className = '' }) => (
  <p className={`text-sm${className && ` ${className}`}`}>{content}</p>
);

export default memo(Text);
