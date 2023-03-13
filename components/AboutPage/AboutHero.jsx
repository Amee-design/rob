import React from "react";
import DesktopNav from "../Navbars/DesktopNav";
import ContainerLayout from "../../Layouts/ContainerLayout";
import Image from "next/image";
import aboutHero from "../../assets/png/about-hero.png";
import MobileNav from "../Navbars/MobileNav";
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
                Vision & Products
              </h1>
              <p
                className=" text-base w-full md:text-lg mt-6 md:w-9/12"
                data-aos="fade-up"
                data-aos-duration="2000"
              >
                VersusPay's long-term goal is to create cutting-edge
                quick-response payment systems and revolutionize the QR code
                payment sector. As a financial technology company, our main
                services center on streamlining payments between businesses and
                their clients through our scan, pay, and go solution while
                promoting cashless ease and wise financial decisions through our
                range of product offerings. Our goal for our product is to
                provide more automated processing and dynamic payment code
                solutions that can be used for a variety of over-the-counter and
                international payment uses.
              </p>
              <p
                className="text-base md:text-lg mt-6 w-full md:w-9/12"
                data-aos="fade-up"
                data-aos-duration="2000"
              >
                Our focus for our product is delivering more solutions around
                automated carting and dynamic payment codes that would serve
                multiple purposes for over-the-counter payments and
                internationally supported payments.
              </p>
            </div>
            <div className="w-full md:w-1/2">
              <Image
                src={aboutHero}
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
