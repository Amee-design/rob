import React,{useEffect,useState} from 'react'
import ContainerLayout from "../../Layouts/ContainerLayout";
import Image from 'next/image';
import enjoy from "../../assets/svgs/service-1.svg"
import pay from "../../assets/png/international.png"
import darkmode from "../../assets/png/dark-mode-spiral.png"
import lightmode from "../../assets/png/light-mode-spiral.png"
import Link from 'next/link';
import { useTheme } from "next-themes";
const Services = () => {
   const { systemTheme, theme, setTheme } = useTheme();
   const [mounted, setMounted] = useState(false);

   useEffect(() => {
     setMounted(true);
   }, []);

   if (!mounted) return null;
   const currentTheme = theme === "system" ? systemTheme : theme;
  return (
    <ContainerLayout>
      <div className="w-full flex flex-col mt-[300px] mb-[100px] ">
        {/* section one */}
        <div className="w-full flex md:flex-row flex-col">
          <div className="w-full md:w-1/2 relative">
            <Image
              src={enjoy}
              alt="enjoy"
              className="w-8/12 h-auto z-10"
              data-aos="zoom-in"
              data-aos-duration="2000"
            />
            <div className="red z-1"></div>
            <div className="green z-1"></div>
          </div>
          <div
            className="w-full md:w-1/2 flex flex-col  justify-center "
            data-aos="fade-up"
            data-aos-duration="2000"
          >
            <h1 className="sora font-bold text-[24px] md:text-[40px]  2xl:w-9/12 w-11/12">
              Enjoy Cashless Convenience, Spend Easy & Spend Smart.
            </h1>
            <p className="text-blackB dark:text-white mt-6 mb-9">
              Experience a new world of simplified, secured and super fast
              payments every time you use Versuspay to send money, receive
              funds, make payments and plan your finances.
            </p>
            <Link
              href="/coming-soon"
              className="btn px-8 py-3 text-white flex justify-center w-fit"
            >
              Create an account
            </Link>
          </div>
        </div>

        {/* end of session One */}
        {/* section one */}
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
              Pay seamlessly anywhere with the VersusPay Virtual Card.
            </h1>
            <p className="text-blackB dark:text-white mt-6 mb-9 2xl:w-10/12">
              Leverage your Versuspay virtual card to safely authorize online
              purchases on various e-commerce platforms and enjoy a secured,
              cost-effective and frictionless experience.
            </p>
            <Link
              href="/coming-soon"
              className="btn px-8 py-3 text-white flex justify-center w-fit"
            >
              Get Virtual Card
            </Link>
          </div>
        </div>

        {/* end of session One */}
        {/* section one */}
        <div className="w-full flex flex-col md:flex-row  my-[50px]">
          <div className="w-full md:w-1/2 relative">
            <Image
              src={enjoy}
              alt="enjoy"
              className="w-8/12 h-auto"
              data-aos="zoom-in"
              data-aos-duration="2000"
            />
            <div className="red z-1"></div>
            <div className="green z-1"></div>
          </div>
          <div
            className="w-full md:w-1/2 flex flex-col  justify-center "
            data-aos="zoom-in-left"
            data-aos-duration="2000"
          >
            <h1 className="sora font-bold text-[24px] md:text-[40px]  2xl:w-9/12 w-11/12">
              Make Cross-Border Payments with Ease.
            </h1>
            <p className="text-blackB dark:text-white mt-6 mb-9">
              Send money to anyone, anywhere with the international wire
              transfer feature that allows you send funds across our list of
              supported countries with no hidden fees.
            </p>
            <Link
              href="/coming-soon"
              className="btn px-8 py-3 text-white flex justify-center w-fit"
            >
              Send Money
            </Link>
          </div>
        </div>

        {/* end of session One */}
      </div>
    </ContainerLayout>
  );
}

export default Services