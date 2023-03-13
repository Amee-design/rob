import React from 'react'
import ContainerLayout from '../../Layouts/ContainerLayout'
import lightmode from "../../assets/png/light-mode-spiral.png";
import darkmode from "../../assets/png/dark-mode-spiral.png";
import Image from 'next/image';
const Contact = () => {
  
  return (
    <ContainerLayout>
      <div
        className="w-full grad-bg mt-[120px] dark:bg-black rounded-[32px] mb-[100px] overflow-hidden"
        data-aos="fade-up"
        data-aos-duration="3000"
      >
        <div className="flex justify-center md:flex-row flex-col">
          <div className="2xl:w-9/12 md:w-11/12 w-full mx-auto flex flex-col md:flex-row py-20 md:py-20 px-4">
            <div className="w-full md:w-6/12 relative ">
              <h1 className="text-white text-[24px] md:text-[40px] sora font-bold">
                Contact Us
              </h1>
              <Image
                src={lightmode}
                className="md:w-[350px] top-[200px] md:top-0  left-[-100px] absolute md:bottom-[-220px] md:left-[-190px] "
              />
            </div>
            <div className="w-full md:w-6/12 text-white ">
              <p>
                Address <br /> 447 Broadway, 2nd Floor Suite #1343, New York,
                New York 10013, United States
              </p>
              <p className="mt-3">
                <a
                  href="tel:+23481005567761"
                  target="_blank"
                  rel="noreferrer"
                >

                Phone Number <br /> +234 8100 556 7761
                </a>
              </p>
              <p className="mt-4">
                <a
                  href="mailto:hello@versuspay.co"
                  target="_blank"
                  rel="noreferrer"
                >
                Email <br /> hello@versuspay.co
                </a>{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </ContainerLayout>
  );
}

export default Contact