import React from "react";
import CommunityHero from "../../components/Community/CommunityHero";
import Head from "next/head";
import Footer from "../../components/landingpage/Footer";
import Offer from "../../components/Community/Offer";
const Community = () => {
  return (
    <>
      <Head>
        <title>Communities</title>
        <meta
          name="description"
          content="A pacesetter for evolving and exploring the world"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo.jpg" />
      </Head>
      <div className="w-full flex flex-col">
        {/* <CommunityHero />
                <Offer /> */}

        <Footer />
      </div>
    </>
  );
};

export default Community;
