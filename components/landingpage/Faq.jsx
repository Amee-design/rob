import React,{useState} from 'react'
import ContainerLayout from '../../Layouts/ContainerLayout'
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
const Faq = () => {
  return (
    <ContainerLayout>
      <div className="w-full flex flex-col mb-[200px]">
        <h1 className="text-black dark:text-white text-center md:text-[36px] 2xl:text-[40px] sora font-extrabold mb-12 ">
          We Have Answered Almost All Your Questions
        </h1>
        <SingleFaq title="What is Versuspay?">
          <p className="text-lg dark:text-white">
            Versuspay simplifies your payment experience by helping you make or
            recieve payments easily through quick-response technology while
            helping you make smart spending decisions.
          </p>
        </SingleFaq>
        <SingleFaq title="Why should i download the Versuspay app?">
          <p className="text-lg dark:text-white">
            Versuspay makes financial transactions become a whole lot easier as
            it leverages quick response financial technology to ensure that your
            transactions are processed without delays,reversals or debit errors.
          </p>
          <div className="flex items-center mt-2 space-x-2">
            <p> Start enjoying Versuspay now </p>{" "}
            <span>
              <a
                href="https://apps.apple.com/ng/app/versuspay/id1602067247"
                target="_blank"
                rel="noreferrer"
                className="text-blue font-semibold"
              >
                Apple Store
              </a>
            </span>
            <span>
              <a
                href="https://play.google.com/store/apps/details?id=com.softdroom.versuspay&hl=en&gl=US"
                className="text-blue font-semibold"
                target="_blank"
                rel="noreferrer"
              >
                Google Playstore
              </a>
            </span>
          </div>
        </SingleFaq>
        <SingleFaq title="How long does it take to get my account verified?">
          <p className="text-lg dark:text-white">
            Once you download the Versuspay app either through the appstore or
            playstore, it takes less than 5minutes to set up your account and
            upload the details required. Verification takes 30mins or working
            days to complete.
          </p>
        </SingleFaq>
        <SingleFaq title="What do I need for a seamless verification process?">
          <p className="text-lg dark:text-white">
            To ensure a smooth vendor onboarding process for you during
            registration and verification of your Versuspay account, you’d need
            the following:
          </p>
          <p className="text-lg dark:text-white">
            For Vendors, there must be a corresponding match between your Vendor
            account name (Trading name) and the name registered on your business
            documents.
          </p>
          <p className="text-lg dark:text-white">
            For other users, there must be a corresponding match between your
            username and any form of valid ID provided.
          </p>
          <p className="text-lg dark:text-white">
            The contact person's name registered on your Versuspay account must
            match the name on the valid ID uploaded.
          </p>
          <p className="text-lg dark:text-white">
            Only the following are accepted as valid means of identification:
          </p>
          <p className="text-base dark:text-white">International Passport</p>
          <p className="text-base dark:text-white">Driver's License</p>
          <p className="text-base dark:text-white">National ID (NIN) Card</p>
          <p className="text-lg dark:text-white">
            For registered businesses, remember to input your CAC number where
            prompted.
          </p>
        </SingleFaq>
        <SingleFaq title="What payment methods are available on Versuspay?">
          <p className="text-lg dark:text-white">
            Versuspay offers easiest and fastest way to make payments through
            our quick response code that is generated for each unique user, our
            mobile app gives you the freedom to leverage other forms of payments
            like inter-bank transfers with your virtual accounts, cross-border
            payments and inter-wallet payments.
          </p>
        </SingleFaq>
      </div>
    </ContainerLayout>
  );
}



const SingleFaq = ({ title, children }) => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };
  return (
    <div className="w-full border-[2px] border-slate-200 p-4 transition-all ease-in duration-1000 mt-4 rounded-[24px]">
      <div
        className="flex justify-between cursor-pointer items-center"
        onClick={handleOpen}
      >
        <p className="text-black dark:text-white text-base font-bold">{title}</p>

        {open ? (
          <AiOutlineMinus className="text-black dark:text-white text-2xl" />
        ) : (
          <AiOutlinePlus className="text-black dark:text-white text-2xl" />
        )}
      </div>
      {open && (
        <div className="flex flex-col space-y-4 mt-4 " data-aos="fade-down">
          {children}
        </div>
      )}
    </div>
  );
};

export default Faq