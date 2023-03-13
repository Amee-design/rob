import React from 'react'
import Head from 'next/head'
import VirtualHero from '../../components/virtual-card/VirtualHero';
import Footer from '../../components/landingpage/Footer';
const index = () => {
  return (
    <div className='w-full'>
      <Head>
        <title>Virtual Cards</title>
        <meta
          name="description"
          content="Welcome to Versus pay scan pay and go"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/icon.png" />
          </Head>
          <VirtualHero />
          <Footer />
    </div>
  );
}

export default index
