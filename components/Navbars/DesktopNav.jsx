import React from 'react'
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import Link from 'next/link'
import CustomDrop from "./CustomDrop"
import { BsFillSunFill } from "react-icons/bs"
import { BsFillMoonStarsFill } from "react-icons/bs"
import logo from "../../assets/png/a.png";
import Image from 'next/image';

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
            <Image src={logo} alt="" className="w-32" />
          </Link>
        ) : (
          <Link href="/">
            <Image src={logo} alt="" className="w-32" />
          </Link>
        )}
      </div>
      <div className="w-8/12 relative flex flex-row space-x-8 items-center ">
      
        <Link
          href="/"
          className="text-base dark:text-white text-blackText"
        >
          Home
        </Link>
        <Link
          href="/about"
          className="text-base dark:text-white text-blackText"
        >
          About Us
        </Link>
        <Link
          href="/contact-us"
          className="text-base dark:text-white text-blackText"
        >
          Contact Us
        </Link>
        <Link
          href="/coming-soon"
          className="text-base dark:text-white text-blackText"
        >
          Blog
        </Link>
        <Link
          href="/coming-soon"
          className="text-base dark:text-white text-blackText"
        >
          Ambassadors
        </Link>
       
       
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

       
      </div>
    </div>
  );
}

export default DesktopNav