// Libraries
import { FC, memo, ReactNode } from 'react';

// Types
import { ButtonVariants } from '@common-types/button';

interface ButtonProps {
  children: ReactNode;
  variant?: ButtonVariants;
  isDisabled?: boolean;
  onClick: () => void;
}

const Button: FC<ButtonProps> = ({
  children,
  variant = ButtonVariants.default,
  isDisabled = false,
  onClick
}) => (
  <button
    disabled={isDisabled}
    className={[
      'px-5 py-1 leading-8 text-default rounded uppercase',
      `${
        variant === ButtonVariants.default
          ? ' bg-highlight'
          : ' border-2 border-default'
      }`
    ].join('')}
    onClick={onClick}
  >
    {children}
  </button>
);

export default memo(Button);
