import React, { useState } from "react";
import ContainerLayout from "../../Layouts/ContainerLayout";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
const Questions = () => {
  return (
    <ContainerLayout>
      <div
        className="w-full flex flex-col mb-[200px] mt-[200px]"
        data-aos="fade-up"
        data-aos-duration="2000"
      >
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
            upload the details required. Verification takes [?] hours or working
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
        <SingleFaq title="How can I deposit and withdraw funds?">
          <p className="text-lg dark:text-white">
            You can easily deposit money in your Versuspay wallet by setting the
            amount and then requesting for payments, making top-ups with your
            bank issued debit cards or leveraging USSD to fund your wallet.
          </p>
          <p className="text-lg dark:text-white">
            To withdraw your funds, simply set the amount to be withdrawn and
            decide if you want to withdraw to your bank or any other supported
            finance app with a simple click.
          </p>
        </SingleFaq>
        <SingleFaq title="Where can I pay with Versuspay?">
          <p className="text-lg dark:text-white">
            {" "}
            Our extended offerings across web and mobile gives users freedom to
            make payments anywhere, for either online payments, peer to peer
            payments or in-store payments at checkouts. With Versuspay, you can
            also make cross-border payments to supported countries without
            having to worry about hidden charges.
          </p>
        </SingleFaq>
        <SingleFaq title="Is there a transaction limit to my Versuspay wallet?">
          <p className="text-lg dark:text-white">
            There are no limits to transactions on the versupay wallet as users
            to pay and get paid all day long. Transaction volume for virtual
            account holders are approved based users verification status.
          </p>
        </SingleFaq>
        <SingleFaq title="How can I make inter-bank transfer using versuspay?">
          <p className="text-lg dark:text-white">
            The presence of our virtual account numbers allow users make
            payments to anyone using a traditional bank account while our
            integration with Thepeer makes it easy to create debit and credit
            requests from the Versuspay app to your existing fintech
            applications.
          </p>
        </SingleFaq>
        <SingleFaq title="How can I contact the Versuspay support team for other issues?">
          <p className="text-lg dark:text-white   space-x-2">
            Our social media handles are up and running to assist our users
            between our active working hours [working hours], customer support
            can also be initiated by sending us an email request to{" "}
            <span>
              <a
                href="mailto:Hello@versuspay.co"
                target="_blank"
                className="font-semibold text-blue"
                rel="noreferrer"
              >
                Hello@versuspay.co
              </a>
            </span>
          </p>
        </SingleFaq>
        <SingleFaq title="What else can I do with Versuspay apart from payment?">
          <p className="text-lg dark:text-white">
            Users can manage their expenses on Versuspay through our smart
            budgeting feature, expense tracker, smart checklist while also
            spending smartly through the bills feature for airtime, data, cable
            and other subscriptions
          </p>
        </SingleFaq>
        <SingleFaq title="How much does it cost to create an account with versuspay?">
          <p className="text-lg dark:text-white">
            Setting up an account with Versuspay is absolutely free, simply head
            over to the appstore or playstore to download the Versuspay app or
            or visit{" "}
            <span>
              <a
                href="https://versuspay.co"
                target="_blank"
                className="font-semibold text-blue"
                rel="noreferrer"
              >
                https://versuspay.co
              </a>
            </span>{" "}
            to begin your journey to a stress free financial life.
          </p>
        </SingleFaq>
        <SingleFaq title="Are there hidden charges on Versuspay?">
          <p className="text-lg dark:text-white">
            With Versuspay, there are no hidden charges as we pride ourselves in
            delivering the best payment experience while ensuring you don’t have
            to break the bank to enjoy the goodness of Versuspay.
          </p>
        </SingleFaq>
        <SingleFaq title="How safe is my Versuspay wallet?">
          <p className="text-lg dark:text-white">
            Our verification process is fool proof to make sure no one can
            access your funds except you, while ensuring our users enjoy their
            unique QR ID that possesses an extra layer of security through
            encryption.
          </p>
        </SingleFaq>
        <SingleFaq title="How does Versuspay secure my account?">
          <p className="text-lg dark:text-white">
            Our mobile and web experience possess security features to ensure
            that our users can keep their accounts safe through pins, passwords,
            biometrics, encrypted QR codes and other forms of authentication.
          </p>
        </SingleFaq>
        <SingleFaq title="Can I make international payments with my Versuspay account?">
          <p className="text-lg dark:text-white">
            Versuspay supports cross border payments to a list of countries
            available on{" "}
            <span>
              <a
                href="https://versuspay.co"
                target="_blank"
                className="font-semibold text-blue"
                rel="noreferrer"
              >
                https://versuspay.co
              </a>
            </span>
            , we are currently working towards expanding our coverage and would
            support more currencies to ensure seamless international payments
            for all.
          </p>
        </SingleFaq>
        <SingleFaq title="How do i create a virtual card on Versuspay?">
          <p className="text-lg dark:text-white">
            Simply signup, login in to your account and request a naira virtual
            card (NGN) or a dollar virtual card (USD) in one click and your
            virtual card will be created using the details your provided when
            signing up and verifying your Versuspay account.
          </p>
        </SingleFaq>
        <SingleFaq title=" How long do i have to wait to receive transfers to my Versuspay wallet?">
          <p className="text-lg dark:text-white">
            Payments to your Versuspay wallet are credited instantly once you
            scan to pay with our QR codes, while transfers to other banks are
            processed swiftly through our state of art payment infrastructures
            put in place to make payments simpler, quicker and secured.
          </p>
        </SingleFaq>
      </div>
    </ContainerLayout>
  );
};

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
        <p className="text-black dark:text-white text-base font-bold w-9/12">
          {title}
        </p>

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

export default Questions;
