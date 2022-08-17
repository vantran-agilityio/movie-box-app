import { FC } from 'react';
import Image from 'next/future/image';
import { internalLoader } from '@helpers/image';

const PlayButton: FC = () => (
  <div className="bg-gray-400 rounded-xl w-1/3 h-[30vh] flex justify-center relative">
    <div className="w-28 flex align-middle">
      <Image
        loader={internalLoader}
        src="/icons/play.svg"
        alt="Play icon"
        width="100"
        height="100"
        className="cursor-pointer"
        style={{ width: '100%', height: 'auto' }}
      />
    </div>
  </div>
);

export default PlayButton;
