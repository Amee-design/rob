
import React, { useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import ContainerLayout from '../../Layouts/ContainerLayout'
import ratings from "../../assets/svgs/customer-rating.svg"
import abel from "../../assets/png/abel.png"
import victor from "../../assets/png/Victor.png"
import Image from "next/image";
const Testimonial = () => {
         const [translate, setTranslate] = useState(0);
         const handleRightTranslate = () => {
           if (translate < -400) {
             setTranslate(0);
           } else {
             setTranslate(translate - 50);
           }
         };
         const handleLeftTranslate = () => {
           if (translate === 0) {
             setTranslate(0);
           } else {
             setTranslate(translate + 50);
           }
         };
  return (
    <ContainerLayout>
      <div className="w-full mb-[200px] mt-[100px]">
        <h1 className="text-blue text-base text-center">Testimonial</h1>
        <h1 className="text-black dark:text-white text-center md:text-[36px] 2xl:text-[40px] sora font-extrabold mb-6 ">
          Why our Customers love ROB Travels and Tours Services 🤗
        </h1>

        <div className="w-full flex space-x-4 items-center justify-center ">
          {/* circular */}
          {/* <div className="w-fit h-auto p-4 hidden md:flex justify-center items-center rounded-full shadow-md bg-white ">
            <IoIosArrowBack className="text-blue text-2xl" />
          </div> */}
          {/* cards */}
          <div className="w-full md:w-10/12 grid-cols-1 grid md:grid-cols-2 gap-y-8 md:gap-x-8">
            {/* card */}
            <div className="w-full rounded-[16px] review-shadow p-3 md:p-6 flex md:flex-row flex-col space-x-4 h-auto dark:bg-[#0E0F0F]">
              <div className=" w-3/12 md:w-3/12">
                <Image
                  className="w-full h-auto mb-3 "
                  alt="person"
                  src={abel}
                ></Image>
              </div>
              <div className="w-full md:w-9/12 flex flex-col space-y-4">
                <h1 className="text-black dark:text-white font-bold text-base md:text-lg">
                  Baba Ote
                </h1>
                <p className="text-md textblackText">Brand Ambassador</p>
                <Image src={ratings} alt="ratings" className="w-fit h-auto" />
                <p className="text-black dark:text-white text-base">
                  "ROB Travels and Tours is so extraordinary their services are unique"
                </p>
              </div>
            </div>
            {/* end of card */}
            {/* card */}
            <div className="w-full h-full rounded-[16px] review-shadow p-4 md:p-6 flex md:flex-row flex-col space-x-4 dark:bg-[#0E0F0F] ">
              <div className="w-3/12 ">
                <Image
                  className="w-full h-auto mb-3"
                  alt="person"
                  src={victor}
                ></Image>
              </div>
              <div className="w-full md:w-9/12 flex flex-col space-y-4">
                <h1 className="text-black dark:text-white font-bold text-base md:text-lg">
                  Jejeniwa
                </h1>
                <p className="text-md textblackText">Brand Ambassador</p>
                <Image src={ratings} alt="ratings" className="w-fit h-auto" />
                <p className="text-black dark:text-white text-base">
                  "Uniqueness at its peak"
                </p>
              </div>
            </div>
            {/* end of card */}
          </div>

          {/* circular */}
          {/* <div className="w-fit h-auto p-4 hidden md:flex justify-center items-center rounded-full shadow-md bg-white">
            <IoIosArrowForward className="text-blue text-2xl" />
          </div> */}
        </div>
      </div>
    </ContainerLayout>
  );
}

export default Testimonial