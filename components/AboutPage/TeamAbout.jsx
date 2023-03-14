import { Container } from 'postcss'
import React from 'react'
import ContainerLayout from '../../Layouts/ContainerLayout'
import Image from 'next/image'
import team from "../../assets/img/city2.jpeg"
import Link from 'next/link'
const TeamAbout = () => {
  return (
    <ContainerLayout>
      <div className="w-full flex mt-[150px] md:flex-row flex-col">
        <div className="w-full md:w-6/12">
          <Image
            alt="team"
            src={team}
            className="w-full md:w-9/12 h-auto rounded-[32px]"
            data-aos="zoom-in"
            data-aos-duration="2000"
          />
        </div>
        <div
          className="w-full md:w-6/12"
          data-aos="fade-up"
          data-aos-duration="2000"
        >
          <h1 className="text-black dark:text-white sora mt-12 md:mt-0 md:text-[40px] font-bold">
            Our Mission
          </h1>
          <p className="text-blackB dark:text-white mt-6 2xl:w-10/12 leading-9">
            ROB Travels and Tours Company's mission is to provide our clients with exceptional travel experiences, 
            creating unforgettable memories that will last a lifetime. We are dedicated to delivering high-quality 
            services that exceed the expectations of our clients. We strive to promote cultural awareness and understanding 
            by introducing our clients to diverse destinations, people, and customs around the world. We are committed to conducting
             our business with integrity, transparency, and respect for the environment and the communities we visit. 
             




          </p>
          <Link
            href="/coming-soon"
            //className="btn px-8 py-3 mt-4 text-white flex justify-center w-10/12 md:w-fit"
          >
           
          </Link>
        </div>
      </div>
    </ContainerLayout>
  );
}

export default TeamAbout