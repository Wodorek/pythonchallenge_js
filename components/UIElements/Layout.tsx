import { useState } from 'react';
import Sidebar from '../Navigation/Sidebar';
import SidebarIcon from '../Navigation/SidebarIcon';

const Layout: React.FC = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="mx-auto 2xl:w-2/3 xl:w-11/12 lg:w-4/5">
      <div className="flex lg:gap-x-4">
        <Sidebar isOpen={isOpen} />
        <div className="overflow-hidden">{props.children}</div>
      </div>
      <SidebarIcon open={() => setIsOpen((prev) => !prev)} isOpen={isOpen} />
    </div>
  );
};

export default Layout;
