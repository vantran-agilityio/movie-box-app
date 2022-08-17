// Libraries
import { FC, ReactNode } from 'react';

// Components
import Footer from '@components/Footer';
import Navbar from '@components/Navigation';

interface LayoutProps {
  children: ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => (
  <>
    <Navbar />
    <main>{children}</main>
    <Footer />
  </>
);

export default Layout;
