import React from 'react'
import ContainerLayout from '../../Layouts/ContainerLayout'
import com from "../../assets/png/com-photo.png"
import Link from 'next/link'
import Image from 'next/image'
const Offer = () => {
  return (
    <ContainerLayout>
      <div className="w-full mt-[120px] mb-[200px] flex flex-col">
        <h1
          className="sora text-blackText dark:text-white font-bold  text-2xl text-center md:text-4xl"
          data-aos="fade-up"
          data-aos-duration="2000"
        >
          What our community offers
        </h1>
        <div className="w-full flex md:flex-row flex-col mt-10 md:mt-[90px] ">
          <div className="md:w-1/2 w-full">
            <Image
              src={com}
              alt="communities"
              className="md:w-9/12 h-auto"
              data-aos="zoom-in"
              data-aos-duration="2000"
            />
          </div>
          <div className="md:w-1/2 w-full flex flex-col md:mt-0 mt-12">
            <h1
              className="text-xl sora  md:text-2xl text-blackText dark:text-white font-bold mb-6 "
              data-aos="fade-up"
              data-aos-duration="2000"
            >
              What our community offers
            </h1>
            <p
              className="text-base md:text-lg text-blackC dark:text-white md:w-7/12"
              data-aos="fade-up"
              data-aos-duration="2000"
            >
              Versuspay community is about money management and we know it can
              be a bit complex, so on Fridays, we break down investment terms in
              relatable tones so you can understand how investment works.
            </p>
            <Link
              href="/"
              target="_blank"
              rel="noreferrer"
              className="btn text-white px-6 text-base dark:text-white py-3 mt-6 md:w-fit flex justify-center  "
              data-aos="zoom-in"
              data-aos-duration="2000"
            >
              Join the Community
            </Link>
          </div>
        </div>
      </div>
    </ContainerLayout>
  );
}

export default Offer