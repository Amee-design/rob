import React,{useEffect} from 'react'
import DesktopNav from '../Navbars/DesktopNav'
import ContainerLayout from "../../Layouts/ContainerLayout"
import Image from 'next/image'
import barcode from "../../assets/svgs/barcode.svg"
import AOS from "aos";
import "aos/dist/aos.css";
import MobileNav from '../Navbars/MobileNav'
const Hero = () => {
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
          {/* content */}
          <div className="flex w-full mt-20 flex-col md:flex-row  ">
            <div className=" w-full md:w-1/2">
              <h1
                className="text-[44px] md:text-[64px] text-blackText dark:text-white w-full 2xl:w-full font-bold sora"
                data-aos="fade-down"
                data-aos-duration="2000"
              >
                Making payments simpler, quicker and secured.
              </h1>
              <p
                className="text-base md:text-lg mt-10  md:mt-6 w-full md:w-9/12"
                data-aos="fade-up"
                data-aos-duration="2000"
              >
                Say hello to the <span className="font-bold">new cool </span> of
                digital payments with Versuspay’s uniquely encrypted QR codes.
                Send and receive money easily, quickly and securely to anyone,
                anywhere .
              </p>
              <div className="flex space-x-4 mt-10 md:mt-4">
                <a
                  href="https://play.google.com/store/apps/details?id=com.softdroom.versuspay&hl=en&gl=US"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src="/google.svg" alt="gogle" />
                </a>
                <a
                  href="https://apps.apple.com/ng/app/versuspay/id1602067247"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src="/apple.svg" alt="gogle" />
                </a>
                <img src="/scanner.png" alt="image" className="w-12 h-auto hidden md:block" />
              </div>
            </div>
            <div className="w-full md:w-1/2  flex justify-center relative mt-12 md:mt-0">
              <div className="red z-1"></div>
              <div className="green z-1"></div>
              <img
                src="/heroo.svg"
                alt="hello"
                // width={700}
                // height={700}
                className="w-11/12 mx-auto md:w-8/12 h-auto z-1"
                data-aos="zoom-in"
                data-aos-duration="2000"
              />
            </div>
          </div>
          {/* Contries */}
          <div
            className="w-full flex flex-col mt-12"
            // data-aos="fade-up"
            // data-aos-duration="2000"
          >
            <p className="text-blackText dark:text-white text-center mb-6">
              Countries We Are Live In
            </p>
            <div className="w-full ">

            <img
              src="/countries-live.png"
              alt="countries"
              className="w-[1000px] md:w-full  md:h-auto"
              />
              </div>
          </div>
        </div>
      </ContainerLayout>
    );
}

export default Hero