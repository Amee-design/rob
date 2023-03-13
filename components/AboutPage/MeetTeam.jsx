import React from 'react'
import ContainerLayout from '../../Layouts/ContainerLayout'
import Image from 'next/image';
import ceo from "../../assets/png/ceo.png";
import ibrahim from "../../assets/png/ibrahim.png";
import john from "../../assets/png/john.png";
import power from "../../assets/png/power.png";
import lead from "../../assets/png/lead.png";
import keren from "../../assets/png/keren.png";
import claritas from "../../assets/png/claritas.png";

const MeetTeam = () => {
  return (
    <ContainerLayout>
      <div
        className="w-full mt-[120px]"
        data-aos="zoom-in"
        data-aos-duration="2000"
      >
        <div className="flex w-full flex-col">
          <h1 className="text-black  dark:text-white sora text-[24px] md:text-[40px] font-bold text-center">
            Meet the team
          </h1>
          <p className="text-blackB dark:text-white mt-6 text-center w-full mb-6">
            We have an amazing team built of amazing people!
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-x-8 gap-y-12">
            {/* start of a single */}
            <div className="flex flex-col space-y-3">
              <Image className="w-full h-auto" src={ceo} alt="ceo" />
              <p className="text-base md:text-lg text-black dark:text-white mb-2 font-bold">Abel Adugam</p>
              <p className="text-base md:text-lg text-black dark:text-white">CEO/ Founder</p>
            </div>
            {/* end of a single */}
            {/* start of a single */}
            <div className="flex flex-col space-y-3">
              <Image className="w-full h-auto" src={john} alt="ceo" />
              <p className="text-base md:text-lg text-black dark:text-white mb-2 font-bold">John Oseni</p>
              <p className="text-base md:text-lg text-black dark:text-white">CTO/ Co-founder</p>
            </div>
            {/* end of a single */}
            {/* start of a single */}
            <div className="flex flex-col space-y-3">
              <Image className="w-full h-auto" src={power} alt="ceo" />
              <p className="text-base md:text-lg text-black dark:text-white mb-2 font-bold">
                Godspower Eseurhobo
              </p>
              <p className="text-base md:text-lg text-black dark:text-white">Product Growth Advisor</p>
            </div>
            {/* end of a single */}
            {/* start of a single */}
            <div className="flex flex-col space-y-3">
              <Image className="w-full h-auto" src={keren} alt="ceo" />
              <p className="text-base md:text-lg text-black dark:text-white mb-2 font-bold">Keren Adamu</p>
              <p className="text-base md:text-lg text-black dark:text-white">Human Resource</p>
            </div>
            {/* end of a single */}
            {/* start of a single */}
            <div className="flex flex-col space-y-3">
              <Image className="w-full h-auto" src={lead} alt="ceo" />
              <p className="text-base md:text-lg text-black dark:text-white mb-2 font-bold">Emmanuel</p>
              <p className="text-base md:text-lg text-black dark:text-white">Engineering Lead</p>
            </div>
            {/* end of a single */}
            {/* start of a single */}
            <div className="flex flex-col space-y-3">
              <Image className="w-full h-auto" src={ibrahim} alt="ceo" />
              <p className="text-base md:text-lg text-black dark:text-white mb-2 font-bold">
                Ibrahim Musa Damisa
              </p>
              <p className="text-base md:text-lg text-black dark:text-white">Product Design Lead</p>
            </div>
            {/* end of a single */}
            {/* start of a single */}
            <div className="flex flex-col space-y-3">
              <Image className="w-full h-auto" src={claritas} alt="ceo" />
              <p className="text-base md:text-lg text-black dark:text-white mb-2 font-bold">Caritas</p>
              <p className="text-base md:text-lg text-black dark:text-white">Marketing & Comms Lead</p>
            </div>
            {/* end of a single */}
            {/* start of a single */}
          </div>
        </div>
      </div>
    </ContainerLayout>
  );
}

export default MeetTeam