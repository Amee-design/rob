import React, { useState } from "react";
import Footer from "../../components/landingpage/Footer";
import DesktopNav from "../../components/Navbars/DesktopNav";
import MobileNav from "../../components/Navbars/MobileNav";
import ContainerLayout from "../../Layouts/ContainerLayout";
import calender from "../../assets/svgs/calender.svg";
import sub from "../../assets/svgs/submitted.svg";
import Head from "next/head";
import Image from "next/image";
import { postWaitList } from "../../services/homeServices";
const ComingSoon = () => {
  const [submitted, setSubmitted] = useState(false);
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const handleSubmit = () => {
    setSubmitted(true);

    // const data = await postWaitList({ email: email });
    //  if (data?.success) {
    //    setSubmitted(true)

    //  } else {
    //    // alert(data?.error)
    //    console.log(data.data.error);
    //    setErrorMsg(data.data.error);
    //    setError(true);
    //  }
  };
  return (
    <>
      <Head>
        <title>Coming Soon</title>
        <meta
          name="description"
          content="A pacesetter for evolving and exploring the world"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo.jpg" />
      </Head>
      <div className=" w-full flex flex-col">
        <div className="coming-soon-bg h-screen">
          <ContainerLayout>
            <div className="flex flex-col rotate-180 h-screen flow-hide">
              <DesktopNav />
              <MobileNav />
              <div className="w-full flex justify-center ">
                {submitted ? (
                  <div className="w-full mt-20 md:w-6/12 2xl:w-5/12 mx-auto max-w-2xl">
                    <div className="w-full coming-soon-content dark:bg-black">
                      <Image
                        alt="calender"
                        src={sub}
                        width={126}
                        height={126}
                        className="mx-auto"
                      />
                      <p className="sora dark:text-white  md:text-4xl text-center  ">
                        Awesome!
                      </p>
                      <p className="text-lg text-blackC dark:text-white w-full md:w-full text-center mx-auto ">
                        Thanks for providing us with your email we will keep in
                        touch, please mark messages from us as not spam.
                      </p>
                    </div>
                  </div>
                ) : (
                  <div className="w-full mt-20 md:w-6/12 2xl:w-5/12 mx-auto max-w-2xl">
                    <div className="w-full coming-soon-content dark:bg-black">
                      <Image
                        alt="calender"
                        src={calender}
                        width={126}
                        height={126}
                        className="mx-auto"
                      />
                      <p className="sora dark:text-white  md:text-4xl text-center  ">
                        We are working on it...
                      </p>
                      <p className="text-lg text-blackC dark:text-white w-full md:w-full text-center mx-auto ">
                        Just give us some time to finish working on it. For now
                        you can join our newsletter to get information about
                        some of our features.
                      </p>
                      <div className="flex md:flex-row flex-col md:space-x-3 space-y-4 md:space-y-0  w-full">
                        <input
                          type="text"
                          className="placeholder:text-placeholderLight flex-1 pl-4 border-blackC dark:text-white outline-none border-[1px]  p-1 rounded-[12px]"
                          placeholder="Email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                        />
                        {error && (
                          <p className="text-red-500 text-center py-4">
                            {errorMsg}
                          </p>
                        )}
                        <button
                          className="btn px-8 py-3 mt-4 outline-none border-none text-white flex justify-center w-10/12 md:w-fit"
                          onClick={handleSubmit}
                        >
                          Submit
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </ContainerLayout>
        </div>
        <div>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default ComingSoon;
