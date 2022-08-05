// Libraries
import { ChangeEvent, FC, useCallback, useState } from 'react';

interface TextFieldProps {
  className?: string;
  label?: string;
  placeholder?: string;
  name: string;
  type: string;
  defaultValue: string | number;
  [props: string]: string | undefined | number;
}

const TextField: FC<TextFieldProps> = ({
  className,
  label,
  placeholder,
  name,
  type,
  defaultValue,
  ...props
}) => {
  const [value, setValue] = useState<string | number>(defaultValue);

  const handleChange = useCallback((event: ChangeEvent) => {
    const newValue = (event.currentTarget as HTMLInputElement).value;
    setValue(newValue);
  }, []);

  return (
    <div className="flex flex-col">
      {label && (
        <label className="mb-2" htmlFor={name}>
          {label}:{' '}
        </label>
      )}
      <input
        id={name}
        name={name}
        className={['indent-2 px-2 py-3 text-sm rounded', className].join('')}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
        {...props}
      />
    </div>
  );
};

export default TextField;
