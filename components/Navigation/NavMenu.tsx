import React, { useState } from 'react';
import HamburgerIcon from '../../icons/hamburger.svg';
import CloseIcon from '../../icons/close.svg';

const NavMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed left-8 top-5 mb-10">
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className="fill-current text-blue-800 z-20 relative"
      >
        {isOpen ? <CloseIcon /> : <HamburgerIcon />}
      </button>
      {isOpen && (
        <div className="w-64 h-sidebar overflow-y-auto bg-purple-400 absolute top-12 left-0 z-10 pointer">
          <div>asdasd</div>
          <div>asdasd</div>
          <div>asdasd</div>

          <div>asdasd</div>
          <div>asdasd</div>
          <div>asdasd</div>
          <div>asdasd</div>
          <div>asdasd</div>
          <div>asdasd</div>
          <div>asdasd</div>
          <div>asdasd</div>
          <div>asdasd</div>
          <div>asdasd</div>
          <div>asdasd</div>

          <div>asdasd</div>
          <div>asdasd</div>
          <div>asdasd</div>
          <div>asdasd</div>
          <div>asdasd</div>
          <div>asdasd</div>
          <div>asdasd</div>
          <div>asdasd</div>
          <div>asdasd</div>
          <div>asdasd</div>
          <div>asdasd</div>
          <div>asdasd</div>
          <div>asdasd</div>
          <div>asdasd</div>
          <div>asdasd</div>
          <div>asdasd</div>
          <div>asdasd</div>
          <div>asdasd</div>
          <div>asdasd</div>
          <div>asdasd</div>
          <div>asdasd</div>
          <div>asdasd</div>
          <div>asdasd</div>
          <div>asdasd</div>
          <div>asdasd</div>
          <div>asdasd</div>
          <div>asdasd</div>
        </div>
      )}
    </div>
  );
};

export default NavMenu;
