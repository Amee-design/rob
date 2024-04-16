import React, { useState } from "react";
import Footer from "../../components/landingpage/Footer";
import DesktopNav from "../../components/Navbars/DesktopNav";
import MobileNav from "../../components/Navbars/MobileNav";
import ContainerLayout from "../../Layouts/ContainerLayout";
import calender from "../../assets/svgs/calender.svg";
import sub from "../../assets/svgs/submitted.svg";
import Head from "next/head";
import Image from "next/image";
import { Rating } from 'react-simple-star-rating'
import axios from "axios";
import { MdRateReview } from "react-icons/md";
const Review = () => {
    const [submitted, setSubmitted] = useState(false);
    const [name, setName] = useState("");
    const [title, setTitle] = useState("");
    const [rating, setRating] = useState(0);
    const [file, setFile] = useState(null);
    const [message, setMessage] = useState("");
    const [error, setError] = useState("");
    const [errorMsg, setErrorMsg] = useState("");
    const handleRating = (rate) => {
        setRating(rate)
    }
    const handleSubmit = async () => {
        try {
            if (name && title && rating && message) {
                const response = await axios.post("http://localhost:4000/api/v1/review", {
                    "name": name,
                    "title": title,
                    "message": message,
                    "rating": rating
                })
                console.log({ response });
                if (response.status != 201) {
                    setError("Error adding review, please try again")
                } else {
                    console.log("success");
                }

            } else {
                setError("All fields are required.")
            }
        } catch (error) {
            setError(error.message)
        }

        // setSubmitted(true);
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
                <title>Review</title>
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
                                            {/* <Image
                                                alt="calender"
                                                src={sub}
                                                width={126}
                                                height={126}
                                                className="mx-auto"
                                            /> */}
                                            <MdRateReview
                                                className=""
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

                                            <MdRateReview
                                                className="text-blue w-7 h-7"
                                            />
                                            <p className="sora dark:text-white  md:text-4xl text-center  ">
                                                Please leave a review...
                                            </p>
                                            <div className="w-full rounded-[16px] border-[1px] border-borderGrey p-4 mb-1">
                                                <input
                                                    type="text"
                                                    className="border-none w-full outline-none bg-transparent focus:outline-none focus:border-none placeholder:text-placeholderLight"
                                                    placeholder="Name"
                                                    value={name}
                                                    onChange={(e) => setName(e.target.value)}
                                                />
                                            </div>

                                            <div className="w-full rounded-[16px] border-[1px] border-borderGrey p-4 mb-1">
                                                <input
                                                    type="text"
                                                    className="border-none w-full outline-none bg-transparent focus:outline-none focus:border-none placeholder:text-placeholderLight"
                                                    placeholder="Title"
                                                    value={title}
                                                    onChange={(e) => setTitle(e.target.value)}
                                                />
                                            </div>

                                            <div className="w-full rounded-[16px] border-[1px] border-borderGrey p-4 mb-1">
                                                <textarea
                                                    type="text"
                                                    className="border-none outline-none bg-transparent focus:outline-none focus:border-none w-full placeholder:text-placeholderLight"
                                                    placeholder="Message"
                                                    value={message}
                                                    onChange={(e) => setMessage(e.target.value)}
                                                />
                                            </div>
                                            {/* <div className="w-full rounded-[16px] border-[1px] border-borderGrey p-4 mb-1">
                                                <input
                                                    type="file"
                                                    className="border-none w-full outline-none bg-transparent focus:outline-none focus:border-none placeholder:text-placeholderLight"
                                                    placeholder="file"
                                                    // multiple
                                                    onChange={(e) => setFile(e.target.files[0])}
                                                />
                                            </div> */}
                                            <div className="">
                                                <Rating
                                                    onClick={handleRating}
                                                    SVGstyle={{ display: "inline" }}
                                                />
                                            </div>
                                            {error && (
                                                <p className="text-red-500 text-center py-4">
                                                    {error}
                                                </p>
                                            )}

                                            <div
                                                className="btn text-white px-6 text-base dark:text-white py-2 w-full flex justify-center items-center cursor-pointer "
                                                onClick={handleSubmit}
                                            >
                                                Submit
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

export default Review;


