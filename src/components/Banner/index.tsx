// Libraries
import { FC, memo } from 'react';
import Image from 'next/future/image';

// Types
import { TitleVariants } from '@common-types/title';

// Components
import Title from '@components/Title';

const Banner: FC = () => (
  <div className="h-screen overflow-hidden">
    <Image
      src="/images/banner.jpg"
      width={1440}
      height={475}
      style={{ width: '100%', height: 'auto' }}
      placeholder="blur"
      blurDataURL="/images/blur.jpg"
      alt="login background"
    />
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
