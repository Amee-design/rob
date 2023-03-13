import React from 'react'
import Contact from '../../components/AboutPage/Contact'
import ContactHero from '../../components/Contact/ContactHero'
import Footer from "../../components/landingpage/Footer"
import Head from 'next/head'
const index = () => {
  return (
    <div className="w-full">
      <Head>
        <title>Contact Us</title>
        <meta
          name="description"
          content="Welcome to Versus pay scan pay and go"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/icon.png" />
      </Head>
      <ContactHero />
      <Contact />
      <Footer />
    </div>
  );
}

export default index