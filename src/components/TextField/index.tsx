// Libraries
import { TextFieldTypes } from '@common-types/textfield';
import Text from '@components/Text';
import { ChangeEvent, forwardRef, memo, useCallback, useState } from 'react';

interface TextFieldProps {
  className?: string;
  label?: string;
  placeholder?: string;
  name: string;
  type: TextFieldTypes;
  defaultValue?: string | number;
  errorMessage?: string;
}

const TextField = forwardRef<HTMLInputElement, TextFieldProps>(
  (
    {
      className,
      label,
      placeholder,
      name,
      type,
      defaultValue = '',
      errorMessage = ''
    },
    ref = null
  ) => {
    const [value, setValue] = useState<string | number>(defaultValue);

    const handleChange = useCallback((event: ChangeEvent) => {
      const newValue = (event.currentTarget as HTMLInputElement).value;
      setValue(newValue);
    }, []);

    return (
      <div className="flex flex-col mb-4">
        {label && (
          <label className="mb-2 text-start" htmlFor={name}>
            {label}
          </label>
        )}
        <input
          id={name}
          name={name}
          className={['indent-2 px-2 py-3 text-sm rounded', className].join('')}
          type={type}
          placeholder={placeholder}
          value={value}
          ref={ref}
          onChange={handleChange}
        />
        <Text
          content={errorMessage}
          className=" text-sm text-highlight text-start h-4 pt-1"
        />
      </div>
    );
  }
);

TextField.displayName = 'TextField';

export default memo(TextField);
