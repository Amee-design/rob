import React from 'react'
import FaqHero from '../../components/Faq/FaqHero'
import More from '../../components/Faq/More'
import Questions from '../../components/Faq/Questions'
import Footer from "../../components/landingpage/Footer"
import Head from 'next/head'
const index = () => {
  return (
    <div className="w-full flex flex-col">
      <Head>
        <title>Faq</title>
        <meta
          name="description"
          content="Welcome to Versus pay scan pay and go"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/icon.png" />
      </Head>
      <FaqHero />
      <Questions />
      <More />
      <Footer />
    </div>
  );
}

export default index