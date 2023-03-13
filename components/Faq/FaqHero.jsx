import React from 'react'
import ContainerLayout from '../../Layouts/ContainerLayout'
import DesktopNav from '../Navbars/DesktopNav'
import {BsSearch} from "react-icons/bs"
import MobileNav from '../Navbars/MobileNav'
const FaqHero = () => {
    return (
      <ContainerLayout>
        <div className="w-full flex flex-col">
          <DesktopNav />
          <MobileNav />
          <div className="w-full mt-20">
            <div
              className="grad-bg w-full py-20 px-4 md:px-20 flex flex-col items-center rounded-[32px]"
              data-aos="zoom-in"
              data-aos-duration="2000"
            >
              <h1 className="sora text-center text-[24px] md:text-[40px] text-white dark:text-white">
                Have any questions?
              </h1>

              <div className="flex space-x-4 items-center py-2 border-b border-b-white mt-20 w-full md:w-10/12 xl:w-9/12">
                <BsSearch className="text-white text-xl" />
                <input
                  type="text"
                  className="text-white placeholder:text-white bg-transparent border-none outline-none text-lg dark:text-white"
                  placeholder="Seach here"
                />
              </div>
              <p className="faq-search-btn mt-4 mx-auto md:w-fit px-6 cursor-pointer md:px-10 py-2 dark:text-black">
                Search
              </p>
            </div>
          </div>
        </div>
      </ContainerLayout>
    );
}

export default FaqHero