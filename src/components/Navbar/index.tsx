// Libraries
import { FC } from 'react';
import Link from 'next/link';

const Navbar: FC = () => (
  <div className="h-20 flex items-center absolute">
    <Link href="/">
      <a className="uppercase text-4xl pl-10 text-white-100 z-10">moviebox</a>
    </Link>
  </div>
);

export default Navbar;
