import React,{useState} from "react";
import ContainerLayout from "../../Layouts/ContainerLayout";
import DesktopNav from "../../components/Navbars/DesktopNav";
import { BsPhone, BsEnvelope, BsInstagram } from "react-icons/bs";
import { FiTwitter } from "react-icons/fi";
import Image from "next/image";
import contactMessage from "../../assets/svgs/contact-message.svg";
import MobileNav from "../Navbars/MobileNav";
import { postContactUs, postNewsLetter } from "../../services/homeServices";
import Success from "../Modals/SuccessModal";
import Error from "../Modals/ErrorModal";
import { useRouter } from "next/router";
const ContactHero = () => {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [emailB, setEmailB] = useState('');
  const [message, setMessage] = useState('');

  const [Fullname, setFullname] = useState('');
  const [address, setAddress] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [errorB, setErrorB] = useState(false);
  const [errorMsgB, setErrorMsgB] = useState('');
  const [openSuccess, setOpenSuccess] = useState(false);
  const [successMessage,setSuccessMesage] = useState('');
  const[openError,setOpenError] = useState(false);
  
  
  const handleSubmit = async () => {
   
    setOpenSuccess(true)
    console.log(
      {
        
        fullname: Fullname,
        email: email,
        address: address,
        username: username,
        password: password,
        
      }
    )
//     setError(false);
//     setErrorMsg('');
//     const data = await postContactUs({
//       email: email,
//       message: message,
//       subject: subject,
//       Fullname: Fullname,
//     });

//     if (data?.success) {
//       setSuccessMesage(
//         "Your message has been recieved successfully and we will get back to you as fast as possible"
//       );
//       setOpenSuccess(true);
//       // router.push("/")
//       setEmail('');
//       setMessage('');
//       setName('');
//       setSubject('');
//     }
//     else {
//       // alert(data?.error)
//       setOpenError(true);
//       console.log(data.data.error)
//       setErrorMsg(data.data.error);
//       setError(true)
// }
  };
  const handleSubmitNews = async () => {
    setOpenSuccess(true)
    // const data = await postNewsLetter({ email: emailB });
    // if (data?.success) {
    //   setSuccessMesage("You have been added Successfully");
    //   setOpenSuccess(true);
      
    // } else {
    //   // alert(data?.error)
    //   console.log(error)
    //   setErrorMsg(data?.data?.error);

    //   setOpenError(true);
    //   setError(true);
    //   setEmailB('');
    // }
  };

  
  return (
    <ContainerLayout>
      <div className="w-full flex flex-col">
        <DesktopNav />
        <MobileNav />
        {/* sesiion-one */}
<Success openSuccess={openSuccess} setOpenSuccess={setOpenSuccess} successMessage={successMessage} />
        <Error openError={openError} setOpenError={setOpenError} errorMessage={errorMsg} />
       
        <div className="w-full flex md:flex-row flex-col items-center mt-16">
          <div
            className="w-full md:w-7/12 flex flex-col"
            data-aos="fade-up"
            data-aos-duration="2000"
          >
           
          </div>
          <div
            className="w-full md:w-5/12 flex md:justify-end mt-8 md:mt-0 px-1"
            data-aos="zoom-in"
            data-aos-duration="2000"
          >
            <div className="w-full  xl:w-full contact-form-bg bg-white dark:bg-black xl:p-8 p-4 pb-16 md:pb-4 flex flex-col ">
              {error && (
                <p className="text-red-500 text-center py-4">{errorMsg}</p>
              )}
              <div className="w-full rounded-[16px] border-[1px] border-borderGrey p-4 mb-4">
                <input
                  type="text"
                  className="border-none w-full outline-none bg-transparent focus:outline-none focus:border-none placeholder:text-placeholderLight"
                  placeholder="Name"
                  value={Fullname}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="w-full rounded-[16px] border-[1px] border-borderGrey p-4 mb-4">
                <input
                  type="text"
                  className="border-none w-full outline-none bg-transparent focus:outline-none focus:border-none placeholder:text-placeholderLight"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="w-full rounded-[16px] border-[1px] border-borderGrey p-4 mb-4">
                <input
                  type="text"
                  className="border-none w-full  outline-none bg-transparent focus:outline-none focus:border-none placeholder:text-placeholderLight"
                  placeholder="Address"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                />
              </div>
              <div className="w-full rounded-[16px] border-[1px] border-borderGrey p-4 mb-4">
                <input
                  type="text"
                  className="border-none w-full  outline-none bg-transparent focus:outline-none focus:border-none placeholder:text-placeholderLight"
                  placeholder="Username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
              <div className="w-full rounded-[16px] border-[1px] border-borderGrey p-4 mb-4">
                <input
                  type="text"
                  className="border-none outline-none bg-transparent focus:outline-none focus:border-none w-full placeholder:text-placeholderLight"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div
                className="btn text-white px-6 text-base dark:text-white py-2 w-full flex justify-center items-center cursor-pointer "
                onClick={handleSubmit}
              >
                Submit
              </div>
            </div>
          </div>
        </div>
        {/* session-two */}
        <div
          className="mt-40 bg-lightPurple w-full relative flex flex-col md:flex-row p-4 md:p-8 rounded-[32px]"
          data-aos="fade-up"
          data-aos-duration="2000"
        >
          <div className="w-full md:w-1/2 flex md:flex-row flex-col md:items-center space-x-4">
            <Image
              src={contactMessage}
              alt="contact message"
              className="w-12 ml-4 mb-6 md:w-16 h-auto"
            />
            <p className="text-black text-base md:text-lg font-semibold w-full md:w-8/12 mb-6 md:mb-0">
              Join the newsletter and get to see and read about our new features
            </p>
          </div>
          <div className="w-full md:w-1/2 flex md:flex-row flex-col justify-end items-center">
            <div className="w-full md:w-10/12 flex md:flex-row flex-col space-x-4">
              <input
                type="text"
                className="border-none w-full md:w-7/12  p-3 rounded-[12px] outline-none bg-white  focus:outline-none focus:border-none placeholder:text-placeholderLigh mt-4"
                placeholder="Email"
                value={emailB}
                onChange={(e) => setEmailB(e.target.value)}
              />
              <div
                className="btn text-white px-6 text-base dark:text-white py-2 w-11/12 mx-auto mt-4 md:w-5/12 flex justify-center items-center cursor-pointer "
                onClick={handleSubmitNews}
              >
                Submit
              </div>
            </div>
          </div>
          {errorB && <p className="text-red-500 text-center py-4">{errorMsgB}</p>}
        </div>
      </div>
    </ContainerLayout>
  );
};

export default ContactHero;
