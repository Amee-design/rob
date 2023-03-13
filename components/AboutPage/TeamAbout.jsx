import { Container } from 'postcss'
import React from 'react'
import ContainerLayout from '../../Layouts/ContainerLayout'
import Image from 'next/image'
import team from "../../assets/png/team-photo.png"
import Link from 'next/link'
const TeamAbout = () => {
  return (
    <ContainerLayout>
      <div className="w-full flex mt-[150px] md:flex-row flex-col">
        <div className="w-full md:w-6/12">
          <Image
            alt="team-photo"
            src={team}
            className="w-full md:w-9/12 h-auto rounded-[32px]"
            data-aos="zoom-in"
            data-aos-duration="2000"
          />
        </div>
        <div
          className="w-full md:w-6/12"
          data-aos="fade-up"
          data-aos-duration="2000"
        >
          <h1 className="text-black dark:text-white sora mt-12 md:mt-0 md:text-[40px] font-bold">
            About the team
          </h1>
          <p className="text-blackB dark:text-white mt-6 2xl:w-10/12 leading-9">
            VersusPay vision and mission are championed by a young team of
            vibrant innovators bringing their diverse experiences and expertise
            in areas like payments, technology, operations, and business to
            create futuristic payment solutions for Africa and the rest of the
            world. Abel Adugam, the Founder & CEO, is an International
            conference speaker and a product person Co-driving this vision with
            John Oseni, Co-founder & CTO, one of the top 100 child prodigies in
            the world and a multi-tasking full-stack developer.
          </p>
          <Link
            href="/coming-soon"
            className="btn px-8 py-3 mt-4 text-white flex justify-center w-10/12 md:w-fit"
          >
            Join our team
          </Link>
        </div>
      </div>
    </ContainerLayout>
  );
}

export default TeamAbout