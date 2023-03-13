import React from 'react'
import ContainerLayout from '../../Layouts/ContainerLayout'
import Head from 'next/head'
import PrivacyPolicy from '../../components/PrivacyPolicy';
import Footer from '../../components/landingpage/Footer';
const Privacy = () => {
  return (
    <div className="w-full">
      <Head>
        <title>Privacy Policy</title>
        <meta
          name="description"
          content="Welcome to Versus pay scan pay and go"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/icon.png" />
      </Head>
      <div className="w-full">
        <PrivacyPolicy />
        <Footer />
      </div>
  
    </div>
  );
}

export default Privacy