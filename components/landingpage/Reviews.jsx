import React, { useEffect, useState } from "react";
import ContainerLayout from "../../Layouts/ContainerLayout";
import { Rating } from "react-simple-star-rating";

const Reviews = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://rob-api-1.onrender.com/api/v1/reviews"
        );
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await response.json();
        setReviews(data.data);
        console.log(data.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);
  return (
    <ContainerLayout>
      <div className="w-full mb-[200px]">
        <h1 className="text-black dark:text-white text-center md:text-[36px] 2xl:text-[40px] sora font-extrabold mb-6 ">
          Reviews from our clients
        </h1>

        <div className="w-full flex space-x-4 items-center justify-center ">
          <div className="w-full md:w-10/12 grid-cols-1 grid lg:grid-cols-2 gap-y-8 lg:gap-x-8">
            {reviews.map((item, index) => (
              <div
                key={index}
                className="w-full rounded-[16px] review-shadow p-3 md:p-6 flex md:flex-row flex-col space-x-4 h-auto dark:bg-[#0E0F0F]"
              >
                <div className="w-full md:w-9/12 flex flex-col space-y-4">
                  <h1 className="text-black dark:text-white font-bold text-base md:text-lg">
                    {item.name}
                  </h1>
                  <div>
                    <p className="text-md textblackText">{item.title}</p>
                    <div className="text-xs textblackText mt-1">
                      {item.state}
                    </div>
                  </div>
                  <Rating
                    initialValue={item.rating}
                    SVGstyle={{ display: "inline" }}
                    size={22}
                    readonly
                  />
                  <p className="text-black dark:text-white text-base">
                    "{item.message}"
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </ContainerLayout>
  );
};

export default Reviews;
