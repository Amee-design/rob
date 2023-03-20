import React,{useEffect} from 'react'
import DesktopNav from '../Navbars/DesktopNav'
import ContainerLayout from "../../Layouts/ContainerLayout"
import Image from 'next/image'
import barcode from "../../assets/svgs/barcode.svg"
import AOS from "aos";
import "aos/dist/aos.css";
import MobileNav from '../Navbars/MobileNav'
import cat from "../../assets/img/makkah.jpg"
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
                An International Travels and Tour Company.
              </h1>
              <p
                className="text-base md:text-lg mt-10  md:mt-6 w-full md:w-9/12"
                data-aos="fade-up"
                data-aos-duration="2000"
              >
                We provide our clients with <span className="font-bold">Exceptional travel Experience </span> that are tailored to their unique needs and preferences.
                 We strive to offer a wide range of high-quality travel services, including flights Booking, tickets, Visa's, accommodations, transportation, 
                 and activities, all while ensuring the safety and comfort of our clients anytime anywhere. 
              </p>
     
            </div>
            <div className="w-full md:w-1/2  flex justify-center relative mt-12 md:mt-0">
              <div className="red z-1"></div>
              <div className="green z-1"></div>
              <Image
                src={cat}
                alt="hello"
                 //width={700}
                 //height={700}
                className="w-11/12 mx-auto md:w-8/12 h-auto z-1"
                data-aos="zoom-in"
                data-aos-duration="2000"
              />
            </div>
          </div>
          {/* Contries */}
        
        </div>
      </ContainerLayout>
    );
}

export default Hero