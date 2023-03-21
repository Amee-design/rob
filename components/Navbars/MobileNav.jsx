import React from 'react'
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import Link from 'next/link'
import CustomDrop from './CustomDrop';
import Image from 'next/image'
import { BsFillSunFill } from "react-icons/bs";
import { BsFillMoonStarsFill } from "react-icons/bs";
import  {FaTimes} from "react-icons/fa"
import logo from "../../assets/png/a.png";
import {FaBars} from "react-icons/fa"
import useMediaQuery from '../../hooks/useMediaQuery';
const MobileNav = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(!open)
  }
    const { systemTheme, theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // media query
  const isMobile = useMediaQuery("(max-width: 767px");

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    // block scroll on desktop view
    console.log({isMobile, open})
    if (isMobile && open) document.body.style.overflowY = "hidden"
    else document.body.style.overflowY = "auto"
  },[isMobile, open])

  if (!mounted) return null;
  const currentTheme = theme === "system" ? systemTheme : theme;
  return (
    <div className="md:hidden flex flex-col w-full py-6 relative ">
      <div className="flex justify-between items-center">
        <div>
          {currentTheme === "dark" ? (
            <Link href="/">
              <Image src={logo} alt="" className="w-24" />
            </Link>
          ) : (
            <Link href="/">
              <Image src={logo} alt="" className="w-24" />
            </Link>
          )}
        </div>
        <div className="flex space-x-4 items-center">
          {currentTheme === "dark" ? (
            <div
              className="flex  cursor-pointer"
              onClick={() => setTheme("light")}
            >
              <BsFillSunFill className="text-blackText text-2xl dark:text-white" />
            </div>
          ) : (
            <div
              className="flex  cursor-pointer"
              onClick={() => setTheme("dark")}
            >
              <BsFillMoonStarsFill className="text-blackText text-2xl dark:text-white" />
            </div>
          )}

          <FaBars
            className="text-blackText text-2xl dark:text-white"
            onClick={handleOpen}
          />
        </div>
      </div>
      {open && (
        <div className="absolute top-0 left-0 w-full bg-white dark:bg-black flex flex-col h-screen flow-hide z-10">
          <div className="flex justify-end pt-4 px-4">
            <FaTimes
              onClick={handleOpen}
              className="text-xl text-black dark:text-white"
            />
          </div>
          <div className="flex flex-col space-y-8">
            <Link
              href="/"
              className="text-base dark:text-white text-blackText pl-4"
            >
              Home
            </Link>

            <Link
              href="/about"
              className="text-base dark:text-white text-blackText pl-4"
            >
              About
            </Link>

            <Link
              href="/contact-us"
              className="text-base dark:text-white text-blackText pl-4"
            >
              Contact us
            </Link>

            <Link
              href="/coming-soon"
              className="text-base dark:text-white text-blackText pl-4"
            >
              Blog
            </Link>
            <Link
              href="/coming-soon"
              className="text-base dark:text-white text-blackText pl-4"
            >
              Ambassadors
            </Link>
          </div>
          {/* end of the list */}
        </div>
      )}
    </div>
  );
}

export default MobileNav