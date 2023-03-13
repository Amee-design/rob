import React from 'react'
// import "./index.css"
import ContainerLayout from '../../Layouts/ContainerLayout'
import follow from "../../assets/svgs/faq-follow.svg"
import contact from "../../assets/svgs/faq-contact.svg"
import read from "../../assets/svgs/faq-read.svg"
import Image from 'next/image'
import Link from 'next/link'
// https://medium.com/@hi_51858/versuspay-simplifying-your-payment-experience-7ddbd5086f2c

const More = () => {
  return (
    <div className="faq-more-bg  ">
      <ContainerLayout>
        <div
          className="w-full flex flex-col "
          data-aos="fade-up"
          data-aos-duration="2000"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-x-6 gap-y-6 md:gap-y-0 pb-20 rotate-180">
            <div className="flex rounded-[16px]  flex-col  bg-white p-6 dark:bg-black ">
              <Link href="/contact-us">
                <Image
                  src={contact}
                  alt="image"
                  className="w-12 md:w-18 mb-6 h-auto"
                />
                <h1 className="sora font-bold text-xl">Contact us</h1>
                <p className="mt-4 ">
                  Our customer service team will be happy to help you and
                  respond as soon as possible.
                </p>
              </Link>
            </div>
            <div className="flex rounded-[16px]  flex-col bg-white dark:bg-black p-6 ">
              <Link
                href="https://medium.com/@hi_51858/versuspay-simplifying-your-payment-experience-7ddbd5086f2c"
                target="_blank"
                rel="noreferrer"
              >
                <Image
                  src={read}
                  alt="image"
                  className="w-12 md:w-18 mb-6 h-auto"
                />
                <h1 className="sora font-bold text-xl">Read our blog</h1>
                <p className="mt-4 ">
                  Read helpful articles, life at Versuspay, new features and
                  in-depth information on Versuspay.
                </p>
              </Link>
            </div>
            <div className="flex rounded-[16px]  flex-col bg-white dark:bg-black p-6 ">
              <Link href="#footer">
                <Image
                  src={follow}
                  alt="image"
                  className="w-12 md:w-18 mb-6 h-auto"
                />
                <h1 className="sora font-bold text-xl">
                  Follow us on social media
                </h1>
                <p className="mt-4 ">
                  Follow us on our Instagram, twitter and our facebook page to
                  get all the latest, exciting promotions and updates.
                </p>
              </Link>
            </div>
          </div>
          <h1 className="text-black text-[24px] md:text-[40px] sora text-center dark:text-white font-bold mt-8 rotate-180">
            Still need more answers?
          </h1>
        </div>
      </ContainerLayout>
    </div>
  );
}

export default More