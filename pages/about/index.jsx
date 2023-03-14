import React from "react";
import Head from "next/head";
import AboutHero from "../../components/AboutPage/AboutHero";
import TeamAbout from "../../components/AboutPage/TeamAbout";
import MeetTeam from "../../components/AboutPage/MeetTeam";
import Contact from "../../components/AboutPage/Contact";
import Footer from "../../components/landingpage/Footer";
const index = () => {
  return (
    <>
      <Head>
        <title>About Us</title>
        <meta
          name="description"
          content="A pacesetter for evolving and exploring the world"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/icon.png" />
      </Head>
      <div className="w-full">
        <AboutHero />
        <TeamAbout />
        {/* <MeetTeam /> */}
        <Contact />
        <Footer />
      </div>
    </>
  );
};

export default index;
