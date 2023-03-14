import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import ContainerLayout from "../Layouts/ContainerLayout";
import Hero from "../components/landingpage/Hero";
import ScanPay from "../components/landingpage/ScanPay";
import Services from "../components/landingpage/Services";
import Faq from "../components/landingpage/Faq";
import Footer from "../components/landingpage/Footer";
import Testimonial from "../components/landingpage/Testimonial";

export default function Home() {
  return (
    <>
      <Head>
        <title>VersusPay</title>
        <meta
          name="description"
          content="A pacesetter for evolving and exploring the world"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo.jpg" />
      </Head>

      <div className="w-full">
        <Hero />
        <ScanPay />
        <Services />
        <Testimonial />
        <Faq />
        <Footer />
      </div>
    </>
  );
}
