// Libraries
import { FC } from 'react';
import Image from 'next/future/image';

// Types
import { TitleVariants } from '@common-types/title';

// Components
import MenuItem from '@components/MenuItem';
import Text from '@components/Text';
import Title from '@components/Title';

// Constants
import { ROUTES } from '@constants/constants';

// Helpers
import { internalLoader } from '@helpers/image';

const Footer: FC = () => (
  <footer className="px-10 py-8">
    <div className="border-b pb-8">
      <Title
        content="themoviebox"
        variant={TitleVariants.heading}
        className="text-[#494C62] uppercase inline-block"
      />
      <ul className="float-right">
        <MenuItem href={ROUTES.UNDEFINED} className="ml-8" key="about">
          About
        </MenuItem>
        <MenuItem href={ROUTES.UNDEFINED} className="ml-8" key="movies">
          Movies
        </MenuItem>
        <MenuItem href={ROUTES.UNDEFINED} className="ml-8" key="rating">
          Rating
        </MenuItem>
        <MenuItem href={ROUTES.UNDEFINED} className="ml-8" key="contact">
          Contact
        </MenuItem>
      </ul>
    </div>
    <div className="pt-4">
      <Text
        content="Coded by Van Tran: All right reserved."
        className="text-gray-200 inline-block"
      />
      <ul className="float-right">
        <MenuItem href={ROUTES.UNDEFINED} className="ml-4" key="twitter">
          <Image
            loader={internalLoader}
            src="/icons/twitter.svg"
            width="30"
            height="30"
            alt="twitter"
          />
        </MenuItem>
        <MenuItem href={ROUTES.UNDEFINED} className="ml-4" key="pinterest">
          <Image
            loader={internalLoader}
            src="/icons/pinterest.svg"
            width="30"
            height="30"
            alt="pinterest"
          />
        </MenuItem>
        <MenuItem href={ROUTES.UNDEFINED} className="ml-4" key="facebook">
          <Image
            loader={internalLoader}
            src="/icons/facebook.svg"
            width="30"
            height="30"
            alt="facebook"
          />
        </MenuItem>
        <MenuItem href={ROUTES.UNDEFINED} className="ml-4" key="instagram">
          <Image
            loader={internalLoader}
            src="/icons/instagram.svg"
            width="30"
            height="30"
            alt="instagram"
          />
        </MenuItem>
      </ul>
    </div>
  </footer>
);

export default Footer;
