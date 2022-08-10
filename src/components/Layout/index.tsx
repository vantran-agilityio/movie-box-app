import Footer from '@components/Footer';
import Navbar from '@components/Navbar';
import { ROUTES } from '@constants/constants';
import { useRouter } from 'next/router';
import { FC, memo, ReactNode } from 'react';

interface LayoutProps {
  children: ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => {
  const { pathname } = useRouter();

  return (
    <>
      {pathname !== ROUTES.LOGIN && pathname !== ROUTES[404] && <Navbar />}
      <main>{children}</main>
      {pathname !== ROUTES.LOGIN && pathname !== ROUTES[404] && <Footer />}
    </>
  );
};

export default memo(Layout);
