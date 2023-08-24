import React from 'react'
import ContainerLayout from '../../Layouts/ContainerLayout'

const Contact = () => {
  
  return (
    <ContainerLayout>
      <div
        className="w-full grad-bg mt-[120px] dark:bg-black rounded-[32px] mb-[100px] overflow-hidden"
        data-aos="fade-up"
        data-aos-duration="3000"
      >
        <div className="flex justify-center md:flex-row flex-col">
          <div className="2xl:w-9/12 md:w-11/12 w-full mx-auto flex flex-col md:flex-row py-20 md:py-20 px-4">
            <div className="w-full md:w-6/12 relative ">
              <h1 className="text-white text-[24px] md:text-[40px] sora font-bold">
                Contact Us
              </h1>
             
            </div>
            <div className="w-full md:w-6/12 text-white ">
            <p>
                Lagos Office Address <br /> No 21, Isaac John street, Jenivik Place, Ikeja GRA.
              </p> 
              <p>
                Abuja Office Address <br /> Suite 1, Stonehedge Hotel, 1041 Kur Mohammed Street, CBD Abuja-FCTS.
              </p>
              <p className="mt-3">
                <a
                  href="tel:+23481005567761"
                  target="_blank"
                  rel="noreferrer"
                >

                Phone Number <br /> +234 8140 060 350, 09062021100, 09062031100,
                +17132697924
                </a>
              </p>
              <p className="mt-4">
                <a
                  href="mailto:hello@versuspay.co"
                  target="_blank"
                  rel="noreferrer"
                >
                Email <br /> robtravels247@gmail.com
                </a>{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </ContainerLayout>
  );
}

export default Contact