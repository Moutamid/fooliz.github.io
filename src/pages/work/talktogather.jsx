import React from "react";
import { motion } from "framer-motion";
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import Talk from "../../assets/talk.svg"; // Adjust path if needed
import MainScreen from "../../assets/Main Screen 1.svg"; // Adjust path if needed
import LeftImg from "../../assets/Show Categories 1.svg"; // Adjust path if needed
import RightImg from "../../assets/Messages - Conversation 1.svg"; // Adjust path if needed
import Img1 from "../../assets/image 1.svg"; // Adjust path if needed
import Img2 from "../../assets/image 2.svg"; // Adjust path if needed
import Img3 from "../../assets/image 3.svg"; // Adjust path if needed
import Img4 from "../../assets/image 4.svg"; // Adjust path if needed
import Img5 from "../../assets/Show Categories 2.svg"; // Adjust path if needed
import Img6 from "../../assets/Messages - Selection 1.svg"; // Adjust path if needed
import Img7 from "../../assets/Group 16.svg"; // Adjust path if needed
import Img8 from "../../assets/Group 17.svg"; // Adjust path if needed
import { Link } from 'react-router-dom';

const ContactPage = () => {
  return (
    <div className="relative bg-white">
      <Header />

      <div className="flex justify-center md:mt-[100px] md:mb-[40px]">
        <img src={Talk} alt="" className="" />
      </div>

      <div className="bg-[#1554f6] flex justify-center items-center h-screen relative overflow-hidden">
      {/* Left Image - From Left to Center */}
      <motion.img
        src={LeftImg}
        alt="Left Image"
        initial={{ x: "-100vw", opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, type: "spring", bounce: 0.4 }}
        className="absolute w-[500px] h-[1000px] md:ml-[480px] left-0"
      />

      {/* Main Image - From Bottom to Center */}
      <motion.img
        src={MainScreen}
        alt="Main Image"
        initial={{ y: "100vh", opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.5, type: "spring", bounce: 0.4 }}
        className="relative w-[620px] h-[900px] top-[-12px] z-10"
      />

      {/* Right Image - From Right to Center */}
      <motion.img
        src={RightImg}
        alt="Right Image"
        initial={{ x: "100vw", opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 1, type: "spring", bounce: 0.4 }}
        className="absolute w-[500px] h-[1000px] md:mr-[480px] right-0"
      />
    </div>

      <div className="flex flex-col items-center text-center px-4 py-10">
        <h1 className="text-[#1B1B1B] font-poppins font-bold text-[100px] leading-[150px] md:text-[80px] md:leading-[120px] sm:text-[60px] sm:leading-[90px] xs:text-[40px] xs:leading-[60px]">
          Talk To Gather
        </h1>
        <p className="text-[#595959] font-poppins text-[50px] leading-[65px] font-normal md:text-[40px] md:leading-[55px] sm:text-[30px] sm:leading-[45px] xs:text-[20px] xs:leading-[30px] max-w-[90%]">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </p>
      </div>

      <div className="bg-[#FBD81B] rounded-b-[70px] p-10 md:mt-[100px] md:p-14 max-w-[90%] md:max-w-[100%] mx-auto">
        <h2 className="text-[#1B1B1B] font-poppins font-bold text-[60px] leading-[90px]">
          The Problem
        </h2>
        <p className="text-[#1B1B1B] font-poppins text-[50px] leading-[65px] font-normal mt-4 max-w-[90%]">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s.
        </p>
      </div>

      <div className="text-center px-4 py-12">
        <h2 className="text-[#1554F6] font-poppins font-bold text-[200px] leading-[300px] md:text-[150px] md:leading-[220px] sm:text-[100px] sm:leading-[150px]">
          The Solution
        </h2>
        <p className="text-[#1B1B1B] font-poppins text-[50px] leading-[65px] font-normal mt-4 max-w-[80%] mx-auto">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s.
        </p>
      </div>

      <div className="flex flex-col items-start text-left px-4 py-12">
        <h2 className="text-[#1B1B1B] font-poppins font-bold text-[60px] ml-[100px] leading-[90px]">
          App User Flow
        </h2>
        <div className="mt-6 w-full ">
          <img
            src={Img1}
            alt="App User Flow Diagram"
            className="w-[1924px] h-auto mr-[-2100px]"
          />
        </div>
      </div>

      <div className="flex flex-col items-start text-left px-4 py-12">
        <h2 className="text-[#1B1B1B] font-poppins font-bold text-[60px] ml-[100px] leading-[90px]">
          Wireframes
        </h2>
        <div className="mt-6 w-full ">
          <img
            src={Img2}
            alt="App User Flow Diagram"
            className="w-full h-auto mr-[-2100px]"
          />
        </div>
      </div>

        <div className="flex w-ful flex-col items-start text-left">
            <h2 className="text-[#1B1B1B] mb-[100px] font-poppins font-bold text-[80px] leading-[110px] ml-[98px] md:text-[50px] md:leading-[70px] md:ml-[90px] sm:text-[40px] sm:leading-[55px] sm:ml-[25px]">
                App Shots
            </h2>
            
            <div className="w-full h-full bg-[#32BBFF] p-10 md:p-5  sm:p-3 flex flex-col gap-2" style={{ paddingBottom: "400px" }}>
                <img
                src={Img3}
                alt="App Screenshot 1"
                className="w-[80%] h-full  mx-auto"
                />
                <div className="h-2"></div>
                <img
                src={Img4}
                alt="App Screenshot 2"
                className="w-[90%] h-full  mt-2 mx-auto"
                />
            </div>
        </div>


        <div className="relative flex justify-center items-center h-screen bg-[#fc721f]">
        <div className="relative flex space-x-4">
          {/* First Image - Increased Width */}
          <div className="relative w-[750px] h-[1424px] top-[-110px] rounded-2xl overflow-hidden">
            <img src={Img5} alt="App Screenshot 1" className="w-full h-full object-cover" />
          </div>

          {/* Second Image - Increased Width */}
          <div className="relative w-[750px] h-[1424px] md:ml-[-320px] md:top-[80px] md:mr-[20px] rounded-2xl overflow-hidden">
            <img src={Img6} alt="App Screenshot 2" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>


      <div className="relative flex justify-center items-center h-screen bg-[#fbdc30]">
      <div className="relative flex flex-col space-y-4">
        {/* First Image - On Top */}
        <div className="relative w-[1342px] h-[454] md:top-[120px] lg:top-[160px] lg:mr-[340px] rounded-2xl overflow-hidden">
          <img src={Img7} alt="App Screenshot 1" className="w-full h-full object-cover" /> 
        </div>

        {/* Second Image - Below */}
        <div className="relative w-[1342px] h-[1342px] rounded-2xl overflow-hidden ml-[440px] top-[140px]">
          <img src={Img8} alt="App Screenshot 2" className="w-full h-full object-cover" />
        </div>
      </div>
    </div>


        <div className="px-6 py-12">
            <h2 className="text-[#1B1B1B] font-poppins mt-[40px] ml-[90px] font-bold text-[50px] leading-[70px] md:text-[40px] md:leading-[55px] sm:text-[30px] sm:leading-[45px]">
                Key Features
            </h2>

                <div className="grid grid-cols-3 gap-4 w-full max-w-[1471px] mx-auto mt-[160px]">
                    <div className="bg-[#1554F6] text-white font-bold text-2xl rounded-xl py-4 text-center">
                    Live Rooms
                    </div>
                    <div className="bg-[#1554F6] text-white font-bold text-2xl rounded-xl py-4 text-center">
                    Live Rooms
                    </div>
                    <div className="bg-[#1554F6] text-white font-bold text-2xl rounded-xl py-4 text-center">
                    Live Rooms
                    </div>

                    {/* Second Row */}
                    <div className="bg-[#FBD81B] text-black font-bold text-2xl rounded-xl py-4 text-center">
                    Chat Rooms
                    </div>
                    <div className="bg-[#FBD81B] text-black font-bold text-2xl rounded-xl py-4 text-center">
                    Chat Rooms
                    </div>
                    <div className="bg-[#FBD81B] text-black font-bold text-2xl rounded-xl py-4 text-center">
                    Chat Rooms
                    </div>

                    {/* Third Row */}
                    <div className="bg-[#FF7F32] text-white font-bold text-2xl rounded-xl py-4 text-center">
                    Events
                    </div>
                    <div className="bg-[#FF7F32] text-white font-bold text-2xl rounded-xl py-4 text-center">
                    Events
                    </div>
                    <div className="bg-[#FF7F32] text-white font-bold text-2xl rounded-xl py-4 text-center">
                    Events
                    </div>
                </div>
        </div>

      {/* End of the divs */}
      <div className="flex flex-col items-center justify-center text-center font-[Just_Another_Hand,cursive] px-4 my-12 md:mb-[180px] md:mt-[180px]">
        <p className="text-[26px] sm:text-[36px] md:text-[20px] lg:text-[75px] leading-tight md:leading-[121px] font-normal text-black">
          Want to see what can Fooliz do for you?
        </p>
        <div className="flex flex-col md:flex-row items-center gap-2 mt-[-10px]">
          <Link
            to="/contact"
            className="bg-[#D9E021] font-semi-bold px-4 py-2 sm:px-6 sm:py-3 md:px-8 md:py-4 rounded-full text-[16px] sm:text-[20px] md:text-[65px] font-handwritten transition-all duration-300 ease-out hover:opacity-80"
          >
            Fill out a project
          </Link>
          <p className="text-[24px] sm:text-[30px] md:text-[50px] lg:text-[80px] text-black">
            Brief and get the ball rolling!
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ContactPage;
