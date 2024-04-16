import React, { useState } from "react";
import Footer from "../../components/landingpage/Footer";
import DesktopNav from "../../components/Navbars/DesktopNav";
import MobileNav from "../../components/Navbars/MobileNav";
import ContainerLayout from "../../Layouts/ContainerLayout";
import Head from "next/head";
import { imageNames } from "../../public/img/exports"
import { vidsNames } from "../../public/img/exports"
import { IoIosAddCircle } from "react-icons/io";
import Modal from "../../components/Modals/galleryModal"
import Image from "next/image";
const Gallery = () => {

    const [selected, setSelected] = useState("videos")
    const [open, setOpen] = useState(false)

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
                            <button className={`${selected == "pictures" ? "btn" : " text-[#333]"}  px-8 py-3 mt-4 outline-none border-none text-white flex justify-center`}
                                onClick={() => setSelected("pictures")}>
                                Pictures
                            </button>
                            <button className={`${selected == "videos" ? "btn" : " text-[#333]"}  px-8 py-3 mt-4 outline-none border-none text-white flex justify-center`} onClick={() => setSelected("videos")}>Videos</button>
                        </div>
                        <IoIosAddCircle onClick={() => { setOpen(true) }} className="text-blue z-30 fixed bottom-20 right-14 w-20 h-20" />
                        {
                            selected == "pictures" ? <div className="grid grid-cols-4 gap-8">
                                {imageNames.map((image, idx) => (
                                    <Image
                                        key={idx}
                                        alt="photo"
                                        src={`/img/${image}`}
                                        width={150}
                                        height={150}
                                        className="w-full h-full object-cover"
                                    />
                                ))}
                            </div>
                                :
                                <div className="grid grid-cols-4 gap-6 justify-center">
                                    {
                                        vidsNames.map((vid, idx) => (
                                            <video controls src={`/img/${vid}`} className="w-[300px] h-[300px]" />
                                        ))
                                    }
                                </div>
                        }
                        <Modal open={open} setOpenSuccess={setOpen} />
                    </div>
                </ContainerLayout>
            </div >
            <div>
                <Footer />
            </div>
        </>
    );
};

export default Gallery;
