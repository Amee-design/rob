import React from 'react'
import ContainerLayout from '../../Layouts/ContainerLayout'
import { footerData } from '../../utils/footerData';
import Link from 'next/link';
import Image from 'next/image';
import { BsYoutube, BsTwitter, BsInstagram, BsFacebook } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa"
import logo from "../../assets/png/a.png";
const Footer = () => {
  return (
    <div className="grad-bg flow-hide" id="footer">
      <ContainerLayout>
        <div
          className="w-full flex flex-col pb-10"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <h1
            className="text-white sora text-center 2xl:w-6/12 font-extrabold mt-[120px] mx-auto text-[24px] md:text-[40px]"
            data-aos="fade-up"
            data-aos-duration="2000"
          >
          Thanks for choosing us 
          </h1>
      
          <div className="w-full flex mt-[150px] md:flex-row flex-col">
            <div
              className="md:w-7/12 flex flex-col md:flex-row justify-between w-full"
              data-aos="zoom-in"
              data-aos-duration="2000"
            >
              {footerData.map((item, index) => {
                return (
                  <div
                    className="flex flex-col space-y-4 mt-12 md:mt-0"
                    key={index}
                  >
                    <p className="text-lightGrey text-base">{item.name}</p>
                    {item.links.map((pick, i) => {
                      return (
                        <Link
                          href={pick.path}
                          key={i}
                          className="text-white text-base "
                        >
                          {pick.link}
                        </Link>
                      );
                    })}
                  </div>
                );
              })}
            </div>
            <div
              className="md:w-5/12 w-full  flex   md:justify-end mt-12 md:mt-0"
              data-aos="zoom-in"
              data-aos-duration="2000"
            >
              <div className="flex flex-col w-full md:w-1/2">
                <p className="text-lightGrey text-base">ROB Travels and Tours Company</p>
                <p className="text-white text-base">
                  <span className="font-semibold"></span>
                  
                Lagos Office Address <br /> No 21, Isaac John street, Jenivik Place, Ikeja GRA. <br />
                09062021100
                08140060350
              
              <br />
                Abuja Office Address <br /> Suite 1, Stonehedge Hotel, 1041 Kur Mohammed Street, CBD Abuja-FCTS.
                09062031100
                +17132697924
              </p>
              </div>
            </div>
          </div>
          <div className="w-full md:w-11/12 justify-between flex md:flex-row flex-col items-center mt-[150px] md:pb-[100px]">
            <div className=" md:w-4/12 w-10/12">
              <Link href="/">
                <Image src={logo} alt="" className="w-32 h-auto md:w-44 mx-auto mb-6 md:mb-0" />
              </Link>
            </div>
            <div className="md:w-8/12 justify-end space-x-6 flex ">
              <a
                href="https://twitter.com/ROBTravels247/"
                target="_blank"
                rel="noreferrer"
              >
                <BsTwitter className="text-white text-2xl" />
              </a>
              <a
                href=" https://web.facebook.com/profile.php?id=100090899194823"
                target="_blank"
                rel="noreferrer"
              >
                <BsFacebook className="text-white text-2xl" />
              </a>
              <a
                href="https://www.instagram.com/robtravelsandtours/"
                target="_blank"
                rel="noreferrer"
              >
                <BsInstagram className="text-white text-2xl" />
              </a>
            </div>
          </div>
        </div>
      </ContainerLayout>
    </div>
  );
}

export default Footer