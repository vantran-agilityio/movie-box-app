// Libraries
import { FC } from 'react';

// Types
import { TitleVariants } from '@common-types/title';

interface TitleProps {
  className?: string;
  content: string;
  variant?: TitleVariants;
}

const Title: FC<TitleProps> = ({
  className = '',
  content,
  variant = TitleVariants.default
}) => (
  <div className={`${variant}${className && ` ${className}`}`}>{content}</div>
);

export default Title;
