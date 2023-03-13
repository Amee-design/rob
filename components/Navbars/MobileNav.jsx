import React from 'react'
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import Link from 'next/link'
import CustomDrop from './CustomDrop';
import Image from 'next/image'
import { BsFillSunFill } from "react-icons/bs";
import { BsFillMoonStarsFill } from "react-icons/bs";
import  {FaTimes} from "react-icons/fa"

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
              <img src="/dark-logo.svg" alt="" className="w-24" />
            </Link>
          ) : (
            <Link href="/">
              <img src="/light-logo.svg" alt="" className="w-24" />
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
            <CustomDrop title="Products">
              <div className="flex flex-col space-y-4">
                <Link
                  href="/coming-soon"
                  className="text-base dark:text-white font-semibold underline text-black"
                >
                  V-buddies
                </Link>
                <Link
                  href="/coming-soon"
                  className="text-blackA text-base dark:text-white hover:text-black"
                >
                  Scan to pay
                </Link>
                <Link
                  href="/virtual-card"
                  className="text-blackA text-base dark:text-white hover:text-black"
                >
                  Virtual Card
                </Link>
                <Link
                  href="/coming-soon"
                  className="text-blackA text-base dark:text-white hover:text-black"
                >
                  Bill Payment
                </Link>
                <Link
                  href="/coming-soon"
                  className="text-blackA text-base dark:text-white hover:text-black"
                >
                  Request Money
                </Link>

                <Link
                  href="/coming-soon"
                  className="text-blackA text-base dark:text-white hover:text-black"
                >
                  International qr money transfer
                </Link>
              </div>
            </CustomDrop>
            <Link
              href="/coming-soon"
              className="text-base dark:text-white text-blackText pl-4"
            >
              Business
            </Link>
            <CustomDrop title="Community">
              <div className="flex flex-col space-y-4">
                <Link
                  href="/coming-soon"
                  className="text-base dark:text-white font-semibold underline text-black"
                >
                  Ambassadors
                </Link>
                <Link
                  href="/coming-soon"
                  className="text-blackA text-base dark:text-white hover:text-black"
                >
                  Partners
                </Link>
                <Link
                  href="/Faq"
                  className="text-blackA text-base dark:text-white hover:text-black"
                >
                  FAQs
                </Link>
                <Link
                  href="/community"
                  className="text-blackA text-base dark:text-white hover:text-black"
                >
                  Social Communities
                </Link>
              </div>
            </CustomDrop>
            <CustomDrop title="Company">
              <div className="flex flex-col space-y-4">
                <Link
                  href="/about"
                  className="text-base dark:text-white font-semibold underline text-black"
                >
                  About
                </Link>
                <Link
                  href="/coming-soon"
                  className="text-blackA text-base dark:text-white hover:text-black"
                >
                  Careers
                </Link>
                <Link
                  href="/coming-soon"
                  className="text-blackA text-base dark:text-white hover:text-black"
                >
                  Blog
                </Link>
                <Link
                  href="/contact-us"
                  className="text-blackA text-base dark:text-white hover:text-black"
                >
                  Contact Us
                </Link>
              </div>
            </CustomDrop>
            {currentTheme === "dark" ? (
              <div
                className="flex space-x-4 cursor-pointer pl-4"
                onClick={() => setTheme("light")}
              >
                <p className="text-blackText dark:text-white">Light </p>
                <BsFillSunFill className="text-blackText text-2xl dark:text-white" />
              </div>
            ) : (
              <div
                className="flex space-x-4 cursor-pointer pl-4"
                onClick={() => setTheme("dark")}
              >
                <p className="text-blackText">Dark </p>
                <BsFillMoonStarsFill className="text-blackText text-2xl dark:text-white" />
              </div>
            )}
            <div className="w-2">
              <Link
                href="/coming-soon"
                className="btn text-white px-6 text-base dark:text-white py-2 mt-6 "
              >
                Login
              </Link>
            </div>
          </div>
          {/* end of the list */}
        </div>
      )}
    </div>
  );
}

export default MobileNav