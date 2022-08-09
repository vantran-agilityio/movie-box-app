import Image from 'next/future/image';
import { FC } from 'react';

const Play: FC = () => (
  <div className="bg-gray-400 rounded-xl w-1/3 h-[30vh] flex align-middle justify-center">
    <Image
      src="/icons/play.svg"
      alt="Play icon"
      width="100"
      height="100"
      className="cursor-pointer"
    />
  </div>
);

export default Play;
