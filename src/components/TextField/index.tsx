// Libraries
import { ChangeEvent, forwardRef, memo, useCallback, useState } from 'react';

// Types
import { TextFieldTypes } from '@common-types/textfield';

// Components
import Text from '@components/Text';

interface TextFieldProps {
  className?: string;
  label?: string;
  placeholder?: string;
  name: string;
  type: TextFieldTypes;
  defaultValue?: string | number;
  errorMessage?: string;
  onChange?: (value: string) => void;
}

const TextField = forwardRef<HTMLInputElement, TextFieldProps>(
  (
    {
      className = '',
      label,
      placeholder,
      name,
      type,
      defaultValue = '',
      errorMessage = '',
      onChange = () => null
    },
    ref = null
  ) => {
    const [value, setValue] = useState<string | number>(defaultValue);

    const handleChange = useCallback((event: ChangeEvent) => {
      const newValue = (event.currentTarget as HTMLInputElement).value;
      setValue(newValue);

      onChange && onChange(newValue);
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
      <div className="flex flex-col mb-4">
        {label && (
          <label className="mb-2 text-start text-gray-300" htmlFor={name}>
            {label}
          </label>
        )}
        <input
          id={name}
          name={name}
          className={`indent-2 text-sm rounded${className && ` ${className}`}`}
          type={type}
          placeholder={placeholder}
          value={value}
          ref={ref}
          onChange={handleChange}
        />
        <Text
          content={errorMessage}
          className="text-red-100 text-start h-4 pt-1"
        />
      </div>
    );
  }
);

TextField.displayName = 'TextField';

export default memo(TextField);
