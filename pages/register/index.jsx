import React from "react";
import Head from "next/head";
import AboutHero from "../../components/AboutPage/AboutHero";
import TeamAbout from "../../components/AboutPage/TeamAbout";
import Register from "../../components/AboutPage/Register";
import Contact from "../../components/AboutPage/Contact";
import Footer from "../../components/landingpage/Footer";
const index = () => {
  return (
    <>
      <Head>
        <title>Register</title>
        <meta
          name="description"
          content="A pacesetter for evolving and exploring the world"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo.jpg" />
      </Head>
      <div className="w-full">
        <AboutHero />
        <TeamAbout />
        {/* <Register/> */}
        <Contact />
        <Footer />
      </div>
    </>
  );
};

export default index;
