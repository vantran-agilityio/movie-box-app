// Libraries
import { FC, memo, ReactNode } from 'react';

// Types
import { TabOption } from '@common-types/tabs';

interface TabsProps {
  children: ReactNode;
  currentTab: TabOption;
  options: TabOption[];
  onClick: (key: TabOption) => void;
}

const Tabs: FC<TabsProps> = ({ currentTab, options, children, onClick }) => (
  <div className="flex flex-wrap mt-5">
    <div className="w-full">
      <ul className="border-b border-gray-200">
        {options.map((option: TabOption) => (
          <li
            className={`inline-block px-6 py-2.5 cursor-pointer ${
              option === currentTab
                ? 'text-red-100 border-b-2 border-red-100'
                : 'text-gray-200'
            }`}
            key={option}
            onClick={() => onClick(option)}
          >
            {option}
          </li>
        ))}
      </ul>
      <div>{children}</div>
    </div>
  </div>
);

export default memo(Tabs);
