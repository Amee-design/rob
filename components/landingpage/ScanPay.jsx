import React from "react";
import ContainerLayout from "../../Layouts/ContainerLayout";
import build from "../../assets/png/build.png"
import gain from "../../assets/png/gain.png"
import stay from "../../assets/png/stay.png"

import Image from "next/image"
const ScanPay = () => {
  return (
    <ContainerLayout>
      <div className="w-full flex-col">
        <div className="w-full flex mt-[200px] md:flex-row flex-col ">
          <div className="md:w-7/12 w-full">
            <h1
              className="text-[40px] font-bold sora mt-3 text-blackText dark:text-white"
              data-aos="fade-up"
              data-aos-duration="2000"
            >
              BOOK, PAY & GO
            </h1>
          </div>
          <div className=" w-full md:w-5/12 flex flex-col">
            <p
              className="text-lg dark:text-white text-blackB  mb-4"
              data-aos="fade-up"
              data-aos-duration="2000"
            >
              Enjoy a frictionless travel and tour experience.
            </p>
            <p
              className="text-lg dark:text-white text-blackB mb-4"
              data-aos="fade-up"
              data-aos-duration="2000"
            >
              Avoid unsuccessful and stressfull bookings, waiting for credit or debit alerts
              or payment receipts from agencies, Simply Book, Pay and Go with ROB Travels and Tours
              unique services.
            </p>
          </div>
        </div>
       
      </div>
    </ContainerLayout>
  );
};

export default ScanPay