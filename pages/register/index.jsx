import React from "react";
import Register from "../../components/AboutPage/Register";
import Footer from "../../components/landingpage/Footer";
import Head from "next/head";
const index = () => {
  return (
    <div className="w-full">
      <Head>
        <title>Register</title>
        <meta
          name="description"
          content="A pacesetter for evolving and exploring the world"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo.jpg" />
      </Head>
      <Register/>
      <Register />
      <Footer />
    </div>
  );
};

export default index;
