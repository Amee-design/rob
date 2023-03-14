import React from "react";
import DesktopNav from "../Navbars/DesktopNav";
import ContainerLayout from "../../Layouts/ContainerLayout";
import Image from "next/image";
import aboutHero from "../../assets/png/about-hero.png";
import MobileNav from "../Navbars/MobileNav";
import picHero from "../../assets/img/city1.jpeg";
const AboutHero = () => {
  return (
    <div className="about-hero">
      <ContainerLayout>
        <div className="w-full flex flex-col">
          <DesktopNav />
          <MobileNav />
          {/* content */}
          <div className="flex w-full mt-20 md:flex-row flex-col">
            <div className="w-full md:w-1/2">
              <h1
                className="text-[40px] lg:text-[64px] text-blackText dark:text-white w-full 2xl:w-full font-bold sora"
                data-aos="fade-right"
                data-aos-duration="2000"
              >
                Our Vision
              </h1>
              <p
                className=" text-base w-full md:text-lg mt-6 md:w-9/12"
                data-aos="fade-up"
                data-aos-duration="2000"
              >
                ROB Travels and Tours Company's vision is to be a leading international travels and tours company that offers our clients unforgettable travel experiences. We strive to provide our clients with exceptional service, expert knowledge, and personalized attention to create customized itineraries that exceed their expectations.

  We envision our company as a global leader in sustainable tourism, promoting responsible travel practices that benefit local communities and the environment. Our commitment to sustainability is reflected in every aspect of our business, from our partnerships with eco-friendly hotels and transportation providers to our support for local conservation and cultural preservation initiatives..
              </p>
              <p
                className="text-base md:text-lg mt-6 w-full md:w-9/12"
                data-aos="fade-up"
                data-aos-duration="2000"
              >
                Our goal is to inspire travelers to explore the world with a sense of curiosity, wonder, and respect. We aim to foster cultural exchange and understanding, promote personal growth and transformation, and create meaningful connections between people from different backgrounds and cultures.
              </p>
            </div>
            <div className="w-full md:w-1/2">
              <Image
                src={picHero}
                alt="hello"
                //   width={700}
                //   height={700}
                className="w-full md:w-10/12 rounded-[32px] mx-auto h-auto mt-16 md:mt-6"
                data-aos="fade-up"
                data-aos-duration="2000"
              />
            </div>
          </div>
        </div>
      </ContainerLayout>
    </div>
  );
};

export default AboutHero;
