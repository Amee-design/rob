import React,{useEffect,useState} from 'react'
import ContainerLayout from "../../Layouts/ContainerLayout";
import Image from 'next/image';
import pay from "../../assets/png/international.png"
import darkmode from "../../assets/png/dark-mode-spiral.png"
import lightmode from "../../assets/png/light-mode-spiral.png"
import book from "../../assets/img/kaaba.jpg"
import city from "../../assets/img/city5.jpg"
import back from "../../assets/img/city3.jpg"
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
              src={book}
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
              Enjoy Endless Convenience Hajj and Umurah Services.
            </h1>
            <p className="text-blackB dark:text-white mt-6 mb-9">
              Experience the best of Hajj and Umurah trip, with our first class hotel accomodation and hospitality.
            </p>
            <Link
              href="/coming-soon"
              //className="btn px-8 py-3 text-white flex justify-center w-fit"
            >
              Book your next trip with Us
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
              src={city}
              alt="enjoy"
              //className="w-8/12 h-auto z-10"
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
              Essay Booking and Tickets to any country have fun and explore.
            </h1>
            <p className="text-blackB dark:text-white mt-6 mb-9 2xl:w-10/12">
              Enjoy our extraordinary travel plan, have a safe flight with an outstanding travel itinary.
            </p>
            <Link
              href="/coming-soon"
              //className="btn px-8 py-3 text-white flex justify-center w-fit"
            >
              Contact Us Now
            </Link>
          </div>
        </div>

        {/* end of session One */}
        {/* section one */}
        <div className="w-full flex flex-col md:flex-row  my-[50px]">
          <div className="w-full md:w-1/2 relative">
            <Image
              src={back}
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
              Explore and Evolve the world with us.
            </h1>
            <p className="text-blackB dark:text-white mt-6 mb-9">
              We are tested and trusted, book a trip our click on our contact button lets make your journey a super one for you.
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