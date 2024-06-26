import React, { useState } from "react";
import Footer from "../../components/landingpage/Footer";
import DesktopNav from "../../components/Navbars/DesktopNav";
import MobileNav from "../../components/Navbars/MobileNav";
import ContainerLayout from "../../Layouts/ContainerLayout";
import Head from "next/head";
import axios from "axios";
import { Rating } from "react-simple-star-rating";
import { MdRateReview } from "react-icons/md";

const Review = () => {
  const [submitted, setSubmitted] = useState(false);
  const [reviewPayload, setReviewPayload] = useState({
    name: "",
    title: "",
    rating: 0,
    state: "",
    message: "",
  });
  const [error, setError] = useState("");
  const handleRating = (rate) => {
    setReviewPayload((prev) => ({
      ...prev,
      rating: rate,
    }));
  };
  const handleSubmit = async () => {
    try {
      if (
        reviewPayload.name &&
        reviewPayload.title &&
        reviewPayload.state &&
        reviewPayload.rating &&
        reviewPayload.message
      ) {
        const response = await axios.post(
          "https://rob-api-1.onrender.com/api/v1/reviews",
          reviewPayload
        );
        console.log({ response });
        if (response.status != 201) {
          setError("Error adding review, please try again");
        } else {
          console.log("success");
          setSubmitted(true);
        }
      } else {
        setError("All fields are required.");
      }
    } catch (error) {
      setError(error.message);
    }
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
                      <MdRateReview className="" />
                      <p className="sora dark:text-white  md:text-4xl text-center  ">
                        Awesome!
                      </p>
                      <p className="text-lg text-blackC dark:text-white w-full md:w-full text-center mx-auto ">
                        Thanks for providing us with a review.
                      </p>
                    </div>
                  </div>
                ) : (
                  <div className="w-full mt-20 md:w-6/12 2xl:w-5/12 mx-auto max-w-2xl">
                    <div className="w-full coming-soon-content dark:bg-black">
                      <MdRateReview className="text-blue w-7 h-7" />
                      <p className="sora dark:text-white  md:text-4xl text-center  ">
                        Please leave a review...
                      </p>
                      <div className="w-full rounded-[16px] border-[1px] border-borderGrey p-4 mb-1">
                        <input
                          type="text"
                          className="border-none w-full outline-none bg-transparent focus:outline-none focus:border-none placeholder:text-placeholderLight"
                          placeholder="Name"
                          value={reviewPayload.name}
                          onChange={(e) =>
                            setReviewPayload((prev) => ({
                              ...prev,
                              name: e.target.value,
                            }))
                          }
                        />
                      </div>

                      <div className="w-full rounded-[16px] border-[1px] border-borderGrey p-4 mb-1">
                        <input
                          type="text"
                          className="border-none w-full outline-none bg-transparent focus:outline-none focus:border-none placeholder:text-placeholderLight"
                          placeholder="Title"
                          value={reviewPayload.title}
                          onChange={(e) =>
                            setReviewPayload((prev) => ({
                              ...prev,
                              title: e.target.value,
                            }))
                          }
                        />
                      </div>

                      <div className="w-full rounded-[16px] border-[1px] border-borderGrey p-4 mb-1">
                        <input
                          type="text"
                          className="border-none w-full outline-none bg-transparent focus:outline-none focus:border-none placeholder:text-placeholderLight"
                          placeholder="State"
                          value={reviewPayload.state}
                          onChange={(e) =>
                            setReviewPayload((prev) => ({
                              ...prev,
                              state: e.target.value,
                            }))
                          }
                        />
                      </div>

                      <div className="w-full rounded-[16px] border-[1px] border-borderGrey p-4 mb-1">
                        <textarea
                          type="text"
                          className="border-none outline-none bg-transparent focus:outline-none focus:border-none w-full placeholder:text-placeholderLight"
                          placeholder="Message"
                          value={reviewPayload.message}
                          onChange={(e) =>
                            setReviewPayload((prev) => ({
                              ...prev,
                              message: e.target.value,
                            }))
                          }
                        />
                      </div>
                      <div className="">
                        <Rating
                          onClick={handleRating}
                          SVGstyle={{ display: "inline" }}
                        />
                      </div>
                      {error && (
                        <p className="text-red-500 text-center py-4">{error}</p>
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
