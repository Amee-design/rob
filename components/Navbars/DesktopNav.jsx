import React from 'react'
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import Link from 'next/link'
import CustomDrop from "./CustomDrop"
import { BsFillSunFill } from "react-icons/bs"
import {BsFillMoonStarsFill} from "react-icons/bs"
const DesktopNav = () => {
  const { systemTheme, theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;
  const currentTheme = theme === "system" ? systemTheme : theme;
  return (
    <div className="w-full  flex-row pt-6  items-center hidden md:flex">
      <div className="w-4/12">
        {currentTheme === "dark" ? (
          <Link href="/">
            <img src="/dark-logo.svg" alt="" className="w-44" />
          </Link>
        ) : (
          <Link href="/">
            <img src="/light-logo.svg" alt="" className="w-44" />
          </Link>
        )}
      </div>
      <div className="w-8/12 relative flex flex-row space-x-8 items-center ">
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
          className="text-base dark:text-white text-blackText"
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
            className="flex space-x-4 cursor-pointer"
            onClick={() => setTheme("light")}
          >
            <p className="text-blackText dark:text-white">Light </p>
            <BsFillSunFill className="text-blackText text-2xl dark:text-white" />
          </div>
        ) : (
          <div
            className="flex space-x-4 cursor-pointer"
            onClick={() => setTheme("dark")}
          >
            <p className="text-blackText">Dark </p>
            <BsFillMoonStarsFill className="text-blackText text-2xl dark:text-white" />
          </div>
        )}

        <div className="w-2">
          <Link
            href="/coming-soon"
            className="btn text-white px-6 text-base dark:text-white py-2 "
          >
            Login
          </Link>
        </div>
      </div>
    </div>
  );
}

export default DesktopNav