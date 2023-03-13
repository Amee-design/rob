import React, { useEffect } from "react";
import DesktopNav from "../Navbars/DesktopNav";
import ContainerLayout from "../../Layouts/ContainerLayout";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";
import MobileNav from "../Navbars/MobileNav";
import virtual from "../../assets/svgs/virtual.svg"
import Link from "next/link";
import pay from "../../assets/png/international.png";
const VirtualHero = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
    AOS.refresh();
  }, []);
  return (
    <ContainerLayout>
      <div className="w-full flex flex-col z-1 h-full  ">
        <DesktopNav />
        <MobileNav />
        <div className="w-full mt-16 flex justify-center items-center">
          <div className="w-full md:w-6/12 flex flex-col relative">
            <div className="red z-1"></div>
            <h1 className="sora text-[28px] font-bold md:text-[40px]  2xl:text-[64px] text-center">
              Virtual Cards
            </h1>
            <p className="w-full md:w-9/12 mx-auto text-lg text-blackText text-center">
              To pay your international bills and more, easy funding and
              spending
            </p>
            <Link
              href="/coming-soon"
              className="btn px-8 py-3 mt-4 text-white flex justify-center w-10/12 md:w-fit mx-auto"
            >
              Create virtual card
            </Link>
            <Image
              src={virtual}
              alt="virual"
              className="w-full h-auto mt-10"
              data-aos="zoom-in-right"
              data-aos-duration="2000"
            />
          </div>
        </div>
        <div className="w-full flex md:flex-row-reverse flex-col-reverse  my-[50px]">
          <div className="w-full md:w-1/2 flex justify-end relative">
            <div className="red-1 z-1"></div>
            <div className="green-1 z-1"></div>
            <Image
              src={pay}
              alt="enjoy"
              className="w-8/12 h-auto z-10"
              data-aos="zoom-in-right"
              data-aos-duration="2000"
            />
          </div>
          <div
            className="w-full md:w-1/2 flex flex-col  justify-center "
            data-aos="zoom-in-left"
            data-aos-duration="2000"
          >
            <h1 className="sora font-bold text-[24px] md:text-[40px]  2xl:w-10/12 w-11/12">
              Pay International bills from anywhere with our virtual cards.
            </h1>
            <p className="text-blackB dark:text-white mt-6 mb-9 2xl:w-10/12">
              Enjoy a frictionless buying experience.Avoid standing in long
              queues, waiting for credit or debit alerts or payment receipts
              from vendors, Simply Scan, Pay and Go with the unique vendors tag
              available at the checkout.
            </p>
            <Link
              href="/coming-soon"
              className="btn px-8 py-3 text-white flex justify-center w-fit"
            >
              Create an account
            </Link>
          </div>
        </div>
      </div>
    </ContainerLayout>
  );
};

export default VirtualHero;
