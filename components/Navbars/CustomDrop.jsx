import React, { useState, useEffect } from "react";
import { IoMdArrowDropleft, IoMdArrowDropdown } from "react-icons/io";
import { ClickOutside } from "@jyoketsu/click-outside-react";
const CustomDrop = ({ children, title }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <ClickOutside
      onClickOutside={() => {
      
        setIsOpen(false);
      }}
      style={{ width: "100%" }}
    >
      <div className="flex flex-col w-fit relative">
        <div
          className="hover:bg-lightBlue space-x-1 flex px-4 text-black dark:text-white justify-between py-3 rounded-sm cursor-pointer"
          onClick={toggleOpen}
        >
          <p className="">{title}</p>

          <div className="flex items-center justify-center">
            {isOpen ? (
              <IoMdArrowDropleft className="text-2xl" />
            ) : (
              <IoMdArrowDropdown className="text-2xl" />
            )}
          </div>
        </div>
        {isOpen && (
          <div className=" z-10 rounded-md shadow-md regular text-md w-[600px] max-w-[300px] p-6  top-12 md:absolute left-0 bg-white dark:bg-black ">
            {children}
          </div>
        )}
      </div>
    </ClickOutside>
  );
};

export default CustomDrop;
