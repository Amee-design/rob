import React from "react";
import Head from "next/head";
import VirtualHero from "../../components/virtual-card/VirtualHero";
import Footer from "../../components/landingpage/Footer";
const index = () => {
  return (
    <div className="w-full">
      <Head>
        <title>Virtual Cards</title>
        <meta
          name="description"
          content="A pacesetter for evolving and exploring the world"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo.jpg" />
      </Head>
      {/* <VirtualHero /> */}
      <Footer />
    </div>
  );
};

export default index;
