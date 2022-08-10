import { FC, memo } from 'react';
import Image from 'next/future/image';
import TextField from '@components/TextField';
import { TextFieldTypes } from '@common-types/textfield';

interface SearchBoxProps {
  className?: string;
  onChange: (value: string) => void;
}

const SearchBox: FC<SearchBoxProps> = ({ className = '', onChange }) => {
  return (
    <div className={`relative${className && ` ${className}`}`}>
      <TextField
        name="search-box"
        type={TextFieldTypes.text}
        className="border-gray-300 border-2 w-full px-1 py-2"
        onChange={onChange}
      />
      <Image
        src="/icons/search.svg"
        alt="Search Icon"
        width={20}
        height={10}
        className="absolute right-2 top-3 text-gray-300"
      />
    </div>
  );
};

export default memo(SearchBox);
