import Link from 'next/link';
import { FC, ReactNode } from 'react';

interface MenuItemProps {
  children: ReactNode;
  className?: string;
  href: string;
}

const MenuItem: FC<MenuItemProps> = ({ children, href, className = '' }) => (
  <li className={`inline-block${className && ` ${className}`}`}>
    <Link href={href}>
      <a className="text-gray-300">{children}</a>
    </Link>
  </li>
);

export default MenuItem;
