// Libraries
import { FC, memo, ReactNode } from 'react';

// Types
import { ButtonVariants } from '@common-types/button';

interface ButtonProps {
  children: ReactNode;
  className?: string;
  variant?: ButtonVariants;
  isDisabled?: boolean;
  onClick?: () => void;
}

const Button: FC<ButtonProps> = ({
  children,
  className = '',
  variant = ButtonVariants.default,
  isDisabled = false,
  onClick = () => null
}) => (
  <button
    disabled={isDisabled}
    className={`px-5 py-1 leading-8 text-white-100 rounded uppercase 
      ${
        variant === ButtonVariants.default
          ? ' bg-red-100'
          : ' border-2 border-white-100'
      }${className && ` ${className}`}`}
    onClick={onClick}
  >
    {children}
  </button>
);

export default memo(Button);
