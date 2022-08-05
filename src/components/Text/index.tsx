import { FC, memo } from 'react';

interface TextProps {
  content: string;
  className?: string;
}

const Text: FC<TextProps> = ({ content, className }) => (
  <p className={['text-default text-sm', className && className].join('')}>
    {content}
  </p>
);

export default memo(Text);
