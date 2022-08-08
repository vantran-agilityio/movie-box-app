import Navbar from '@components/Navbar';
import { useRouter } from 'next/router';
import { FC, memo, ReactNode } from 'react';

interface LayoutProps {
  children: ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => {
  const { pathname } = useRouter();

  return (
    <>
      {pathname !== '/login' && <Navbar />}
      <main>{children}</main>
      {/* TODO: Implement Footer */}
      {/* {pathname !== '/login' && <Footer />} */}
    </>
  );
};

export default memo(Layout);
