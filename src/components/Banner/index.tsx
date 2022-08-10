// Libraries
import { FC, memo } from 'react';
import Image from 'next/image';

// Types
import { TitleVariants } from '@common-types/title';

// Components
import Title from '@components/Title';

const Banner: FC = () => (
  <div className="h-screen">
    <div className="w-full h-screen z-0 absolute">
      <Image src="/images/banner.jpg" layout="fill" alt="login background" />
    </div>
    <div className="absolute bottom-32 left-10">
      <Title
        content="wrath of the titans"
        className="uppercase"
        variant={TitleVariants.heading}
      />
      <div className="flex">
        <Title
          className="pr-2"
          variant={TitleVariants.subtitle}
          content="Fantasy"
        />
        <Title
          className="pr-2"
          variant={TitleVariants.subtitle}
          content="Animation"
        />
        <Title
          className="pr-2"
          variant={TitleVariants.subtitle}
          content="Family"
        />
        <Title
          className="pr-2"
          variant={TitleVariants.subtitle}
          content="Duration: 1h 52m"
        />
      </div>
    </div>
  </div>
);

export default memo(Banner);
