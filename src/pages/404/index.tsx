// Libraries
import Image from 'next/future/image';
import Link from 'next/link';

// Components
import Text from '@components/Text';

// Constants
import { ROUTES } from '@constants/constants';

// Helpers
import { internalLoader } from '@helpers/image';

const Custom404 = () => (
  <main className="absolute top-0 right-0 left-0 bottom-0 w-screen h-screen z-0">
    <Image
      loader={internalLoader}
      src="/images/404.jpg"
      sizes="100vw"
      alt="Page not found!"
      width="100"
      height="100"
      className="absolute w-1/3 top-1/3 right-1/3"
    />
    <div className="text-center mt-32 z-10">
      <Text
        content="404 - Page Not Found"
        className="text-red-100 font-bold text-2xl"
      />

      <Link href={ROUTES.MOVIES}>HOME PAGE</Link>
    </div>
  </main>
);

export default Custom404;
