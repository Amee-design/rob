import React from "react";
import ContainerLayout from "../../Layouts/ContainerLayout";
import build from "../../assets/png/build.png"
import gain from "../../assets/png/gain.png"
import stay from "../../assets/png/stay.png"
import spend from "../../assets/png/spend.png"

import Image from "next/image"
const ScanPay = () => {
  return (
    <ContainerLayout>
      <div className="w-full flex-col">
        <div className="w-full flex mt-[200px] md:flex-row flex-col ">
          <div className="md:w-7/12 w-full">
            <h1
              className="text-[40px] font-bold sora mt-3 text-blackText dark:text-white"
              data-aos="fade-up"
              data-aos-duration="2000"
            >
              SCAN, PAY & GO
            </h1>
          </div>
          <div className=" w-full md:w-5/12 flex flex-col">
            <p
              className="text-lg dark:text-white text-blackB  mb-4"
              data-aos="fade-up"
              data-aos-duration="2000"
            >
              Enjoy a frictionless buying experience.
            </p>
            <p
              className="text-lg dark:text-white text-blackB mb-4"
              data-aos="fade-up"
              data-aos-duration="2000"
            >
              Avoid standing in long queues, waiting for credit or debit alerts
              or payment receipts from vendors, Simply Scan, Pay and Go with the
              unique vendors tag available at the checkout.
            </p>
          </div>
        </div>
        {/* section-2 */}
        <div className="w-full grid grid-cols-1  md:grid-cols-2 gap-x-10 gap-y-8">
          <div
            className="w-full  shadow-lg dark:text-white flex flex-col p-8 rounded-[32px] relative"
            data-aos="fade-down"
            data-aos-duration="2000"
          >
            <img
              src="/one.png"
              alt="icon"
              className="w-[200px] h-auto absolute top-3 left-0"
            />
            <h1 className="text-xl  dark:text-white text-black font-bold sora pt-24 ">
              Quick Scan to Pay
            </h1>
            <p className="text-base dark:text-white text-blackText mt-[24px]">
              Scan, Pay and Go when making in-store or online payments to
              businesses or friends and family.{" "}
            </p>
            <p className="mt-4">
              Pay or get paid when you share your Versuspay QR code to receive
              payments or scan a QR code to pay for goods or services in no
              time.
            </p>
          </div>
          <div
            className="w-full  shadow-lg dark:text-white flex flex-col p-8 rounded-[32px] relative"
            data-aos="fade-left"
            data-aos-duration="2000"
          >
            <img
              src="/two.png"
              alt="dummmy"
              className="w-[200px] h-auto absolute top-3 left-0"
            />
            <h1 className="text-xl dark:text-white text-black font-bold sora pt-24  ">
              Send, Request and Receive Money{" "}
            </h1>
            <p className="text-base dark:text-white text-blackText mt-[24px]">
              Send, request and receive money securely and quickly with your
              preferred payment method.
            </p>
            <p className="mt-4">
              Initiate local or international wire transfers, inter-bank
              payments and direct charges from your Versuspay account in
              minutes.
            </p>
          </div>
          <div
            className="w-full  shadow-lg dark:text-white flex flex-col p-8 rounded-[32px] relative"
            data-aos="fade-left"
            data-aos-duration="2000"
          >
            <img
              src="/three.png"
              alt="dummmy"
              className="w-[200px] h-auto absolute top-3 left-0 "
            />
            <h1 className="text-xl dark:text-white text-black font-bold sora pt-24 ">
              Create a Network of V-buddies
            </h1>
            <p className="text-base dark:text-white text-blackText mt-[24px]">
              Build a network of trusted beneficiaries.
            </p>
            <p className="mt-4">
              Save users to your network for faster payments when your pay or
              send money to them frequently, pay with a click to friends and
              family within your network of V-buddies anytime, anywhere.
            </p>
          </div>
          <div
            className="w-full  shadow-lg dark:text-white flex flex-col p-8 rounded-[32px]"
            data-aos="fade-right"
            data-aos-duration="2000"
          >
            <Image src={stay} alt="dummmy" className="w-[100px] h-auto" />
            <h1 className="text-xl dark:text-white text-black font-bold sora mt-3 ">
              Spend Easy, Spend Smart
            </h1>
            <p className="text-base dark:text-white text-blackText mt-[24px]">
              It's your money, you decide where it goes.
            </p>
            <p className="mt-4">
              Manage your bills (airtime, data, cable etc.), make payments
              anywhere with the Versuspay virtual card, and set smart spending
              budgets towards designated expenditures.
            </p>
          </div>
        </div>
      </div>
    </ContainerLayout>
  );
};

export default ScanPay