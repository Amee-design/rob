import React, { useEffect, useState } from "react";
import Footer from "../../components/landingpage/Footer";
import DesktopNav from "../../components/Navbars/DesktopNav";
import MobileNav from "../../components/Navbars/MobileNav";
import ContainerLayout from "../../Layouts/ContainerLayout";
import Head from "next/head";
import { IoIosAddCircle } from "react-icons/io";
import Modal from "../../components/Modals/galleryModal";
import Image from "next/image";
const Gallery = () => {
  const [selected, setSelected] = useState("pictures");
  const [open, setOpen] = useState(false);
  const [fileData, setFileData] = useState([]);

  const fetchGalleryData = async () => {
    try {
      const response = await fetch(
        "https://rob-api-1.onrender.com/api/v1/gallery"
      );
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      const data = await response.json();
      setFileData(data.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchGalleryData();
  }, []);

  return (
    <>
      <Head>
        <title>Gallery</title>
        <meta
          name="gallery"
          content="A pacesetter for evolving and exploring the world"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo.jpg" />
      </Head>

      <div className="relative w-screen flex justify-center mb-5">
        <ContainerLayout>
          <DesktopNav />
          <MobileNav />
          <div className="">
            <h1 className="text-center text-[40px] mt-5">Gallery content</h1>
            <div className="flex justify-center gap-4 mb-5">
              <button
                className={`${
                  selected == "pictures" ? "btn" : " text-[#333]"
                }  px-8 py-3 mt-4 outline-none border-none text-white flex justify-center`}
                onClick={() => setSelected("pictures")}
              >
                Pictures
              </button>
              <button
                className={`${
                  selected == "videos" ? "btn" : " text-[#333]"
                }  px-8 py-3 mt-4 outline-none border-none text-white flex justify-center`}
                onClick={() => setSelected("videos")}
              >
                Videos
              </button>
            </div>
            <IoIosAddCircle
              onClick={() => {
                setOpen(true);
              }}
              className="text-black dark:text-blue z-30 fixed bottom-20 right-14 w-20 h-20"
            />
            {selected == "pictures" ? (
              <div className="grid grid-cols-4 gap-8">
                {fileData.map((item, idx) =>
                  item.type && item.type.startsWith("image/") ? (
                    <div key={idx}>
                      <Image
                        key={idx}
                        alt="photo"
                        src={item.path}
                        width={150}
                        height={150}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ) : null
                )}
              </div>
            ) : (
              <div className="grid grid-cols-4 gap-6 justify-center">
                {fileData.map((item, idx) =>
                  item.type && item.type.startsWith("video/") ? (
                    <div key={idx}>
                      <video
                        controls
                        src={item.path}
                        className="w-[300px] h-[300px]"
                      />
                    </div>
                  ) : null
                )}
              </div>
            )}
            <Modal
              open={open}
              setOpenSuccess={setOpen}
              fetchGalleryData={fetchGalleryData}
            />
          </div>
        </ContainerLayout>
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
};

export default Gallery;
