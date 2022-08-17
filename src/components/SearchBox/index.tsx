import { FC, memo } from 'react';
import Image from 'next/future/image';
import TextField from '@components/TextField';
import { TextFieldTypes } from '@common-types/textfield';
import { internalLoader } from '@helpers/image';

interface SearchBoxProps {
  className?: string;
  onChange: (value: string) => void;
}

const SearchBox: FC<SearchBoxProps> = ({ className = '', onChange }) => {
  return (
    <div className={`relative w-96 pl-12 mt-10${className && ` ${className}`}`}>
      <TextField
        name="search-box"
        type={TextFieldTypes.text}
        className="border-gray-200 border-2 w-full pl-4 pr-10 py-2 rounded-2xl shadow-2xl"
        onChange={onChange}
      />
      <div className="absolute w-6 right-4 top-2.5">
        <Image
          loader={internalLoader}
          src="/icons/search.svg"
          alt="Search Icon"
          width={20}
          height={10}
          style={{ width: '100%', height: 'auto' }}
        />
      </div>
    </div>
  );
};

export default memo(SearchBox);
