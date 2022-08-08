import { FC, ReactNode, useCallback, useState } from 'react';

interface TabsProps {
  children: ReactNode;
  options: string[];
}

const Tabs: FC<TabsProps> = ({ options, children }) => {
  const [openTab, setOpenTab] = useState(1);

  const handleClick = useCallback((index: number) => {
    setOpenTab(index);
  }, []);

  return (
    <div className="flex flex-wrap">
      <div className="w-full">
        <ul className="border-b border-gray-200">
          {options.map((option: string, index: number) => (
            <li
              className={`inline-block p-2.5 cursor-pointer ${
                index === openTab
                  ? 'text-red-100 border-b-2 border-red-100'
                  : 'text-gray-200'
              }`}
              key={option}
              onClick={() => handleClick(index)}
            >
              {option}
            </li>
          ))}
        </ul>
        <div>{children}</div>
      </div>
    </div>
  );
};

export default Tabs;
