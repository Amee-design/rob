import React from 'react'
import ContainerLayout from '../../Layouts/ContainerLayout'
import DesktopNav from '../Navbars/DesktopNav'
import MobileNav from '../Navbars/MobileNav'
import Link from 'next/link'
import Image from 'next/image'
import com from "../../assets/svgs/community.svg"
const CommunityHero = () => {
  return (
    <ContainerLayout>
      <div className="w-full flex flex-col h-full z-1">
        <DesktopNav />
        <MobileNav />
        <div className="w-full flex md:flex-row flex-col mt-10 md:mt-20 h-full  ">
          <div
            className="w-full md:w-1/2 flex flex-col h-full"
            data-aos="fade-up"
            data-aos-duration="2000"
          >
            <h1 className="sora text-2xl md:text-4xl font-bold dark:text-white text-blackText  md:w-9/12 leading-[45px]">
              Join the Versuspay Telegram Community
            </h1>
            <p className="text-blackTextA mt-6 md:text-lg w-full text-base md:w-9/12">
              The telegram group was built because Versuspay understands that
              the journey to building wealth does not have to be lonely, and
              when you have questions on wealth building and accumulation, you
              don't have to look far. The Versuspay club and its community are
              there to educate you on your spending questions.
            </p>

            <Link
              href="https://t.me/+XxPIoGYPHHk4N2Y0"
              target="_blank"
              rel="noreferrer"
              className="btn text-white px-6 text-base dark:text-white py-3 mt-6 md:w-fit flex justify-center "
            >
              Join the Community
            </Link>
          </div>
          {/* end of first */}
          <div className="md:w-1/2 w-full relative flex justify-end md:mt-0 mt-12">
            <div className="red z-1"></div>
            <div className="green z-1"></div>
            <Image
              src={com}
              alt="commnunities"
              className="w-full md:w-10/12 h-auto z-1"
              data-aos="zoom-in"
              data-aos-duration="2000"
            />
          </div>
          {/* end of first */}
        </div>
      </div>
    </ContainerLayout>
  );
}

export default CommunityHero