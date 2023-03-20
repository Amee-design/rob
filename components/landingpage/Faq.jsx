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
        <SingleFaq title="Is your company fully registered?">
          <p className="text-lg dark:text-white">
            Yes, ROB Travels and Tours Company is fully registed under CAC, IATAN and NAHCON.
          </p>
        </SingleFaq>
        <SingleFaq title="Is your company just for Hajj and Umurah?">
          <p className="text-lg dark:text-white">
            No, ROB Travels and Tours endorse travelling to any country globally, book a trip, travel and tour with us now!!!
          </p>
          <div className="flex items-center mt-2 space-x-2">
            {" "}
            <span>
              <a
                href="https://apps.apple.com/ng/app/versuspay/id1602067247"
                target="_blank"
                rel="noreferrer"
                //className="text-blue font-semibold"
              >
                
              </a>
            </span>
            <span>
              <a
                href="https://play.google.com/store/apps/details?id=com.softdroom.versuspay&hl=en&gl=US/"
                //className="text-blue font-semibold"
                target="_blank"
                rel="noreferrer"
              >
                
              </a>
            </span>
          </div>
        </SingleFaq>
        <SingleFaq title="How do I book for your service?">
          <p className="text-lg dark:text-white">
            Hit the contact button/page and let us know how we can help you, we operate 24/7.
          </p>
        </SingleFaq>
        <SingleFaq title="Did you have a physical office or you operate online?">
          <p className="text-lg dark:text-white">
            We operate both physical and online. We have two physical offices (Lagos Nigeria and United State)
          </p>
          <p className="text-lg dark:text-white">
            Nigeria Address: 8B Fadipe Street, Egbeda City, Lagos State
          </p>
          <p className="text-lg dark:text-white">
            United State Address: 11111 Bissonet ste a Houston Texas.
          </p>
        </SingleFaq>
        <SingleFaq title="Can i register with your company as a travel agency?">
          <p className="text-lg dark:text-white">
            That is one of our package but not effective yet.
          </p>
        </SingleFaq>
        <SingleFaq title="What is unique about your company?">
          <p className="text-lg dark:text-white">
            ROB Travels and Tours know the important of customers and how to treat love and care for them.
            We believe in Conveniency and Top-norch services for all our customers by giving them the best hospitality.
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