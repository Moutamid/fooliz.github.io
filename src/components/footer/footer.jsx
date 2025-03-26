import React from "react";
import { FaInstagram, FaLinkedin, FaFacebook } from "react-icons/fa";
import frameLogo from "../../assets/fooliz-logo.svg"; // Adjust path if needed
import Bhaloo from "../../assets/bhaloo.gif"; // Adjust path if needed
import { Link } from 'react-router-dom';


const Footer = () => {
  return (
<div className="bg-[#dee13e] flex flex-col gap-8 md:gap-4 lg:gap-8">
  {/* Section 1 */}
  <div className="flex flex-col ml-[5px] md:ml-[10px] lg:ml-[20px]">
    <div className="relative">
      <p className="font-[Heathergreen] p-[8px] text-[25px] md:text-[50px] lg:text-[100px] leading-tight md:leading-[68px] lg:leading-[136.62px] text-black text-start">
        Let's Build Your Apps Together
      </p>
      <div className="absolute bottom-0 translate-y-[5px] md:translate-y-[40px] lg:translate-y-[30px]">
        <Link
          to={`https://api.whatsapp.com/send?phone=971567257157&text=Hi, How are you? :)`}
          // to="/apply"
          className="text-[#474CBA] ml-[8px] text-[12px] font-bold md:text-[15px] lg:text-[30px] cursor-pointer hover:text-gray-600"
        >
          Get In Touch
        </Link>
      </div>
    </div>
  </div>

  {/* Section 2 (Careers) */}
  <div className="pl-[107px] md:pl-[215px] lg:pl-[430px] mt-[-25px] md:mt-[-20px] lg:mt-[-60px]">
    <p className="font-[Heathergreen] text-[35px] ml-[-4px] mt-[-15px] md:text-[50px] lg:text-[130px] leading-tight md:mr-[10px] lg:ml-[-100px] md:mt-[18px] lg:mt-[18px] md:leading-[68px] lg:leading-[136.62px] text-black text-left">
      Careers
    </p>
    <div className="mt-[-10px] ml-[-6px] md:mt-[-10px] lg:mt-[-10px] md:ml-[-100px] lg:ml-[-100px]">
      <Link
        to={`https://api.whatsapp.com/send?phone=971567257157&text=Hi, I want to apply for a job at Fooliz!`}
        // to="/apply"
        className="text-[#474CBA] text-[12px]  font-bold md:text-[15px] lg:text-[30px] cursor-pointer hover:text-gray-600"
      >
        Apply here
      </Link>
    </div>
  </div>

  <div className="flex flex-col text-[8px] ml-[90px] mt-[-99px] md:text-[14px] lg:text-[24px] text-[#474cba] font-extrabold leading-relaxed tracking-[-0.04em] font-[Poppins] text-center md:mt-[-220px] lg:mt-[-340px]">
    <div className="md:mt-[45px] lg:mt-[45px] mt-[-18px] mr-[10px]">
      <p>Business Bay, Dubai, UAE</p>
      <p className=" md:mr-[20px] ml-[-42px] lg:mr-[85px]">PO BOX 00000</p>
    </div>
    <br />
    <div className="">
      <p className="mr-[85px] md:mr-[40px] lg:mr-[245px]">Data</p>
      <p className="mr-[85px] md:mr-[40px] lg:mr-[245px]">Data</p>
    </div>

     <div>
       <img
        src={Bhaloo}
        alt="img"
        className=" flex justify-end mt-[-70px] ml-[190px] md:ml-[310px] lg:ml-[1620px] md:mt-[-120px] lg:mt-[-220px] lg:w-[12rem] lg:h-[16rem] max-w-none w-[5rem] h-[5rem]"
      />
     </div>
  </div>

  {/* Bottom Navigation and Social Icons - FIXED LAYOUT WITH RESPONSIVE SIZING */}
  <div className="flex justify-between items-center px-3 md:px-5 lg:px-8 py-4 md:py-6 lg:py-[0px]">
    {/* Left Section: Logo */}
    <div className="text-black text-lg md:text-xl lg:text-2xl font-bold">
      <Link to="/home">
      <img
        src={frameLogo}
        alt="Logo"
        className="w-[1.8em] h-[1.8em] md:w-[3.2em] md:h-[3.2em] lg:w-[5.5em] lg:h-[5.5em] object-contain"
      />
      </Link>
    </div>

    {/* Middle Section: Navigation Links */}
    <nav className="flex items-center font-bold ">
      <Link
        to="/work"
        className="text-black hover:text-gray-600 cursor-pointer text-[10px] md:text-sm lg:text-lg px-1 md:px-2 lg:px-4"
      >
        Work
      </Link>
      <Link
        to="/contact"
        className="text-black hover:text-gray-600 cursor-pointer text-[10px] md:text-sm lg:text-lg px-1 md:px-2 lg:px-4"
      >
        Contact
      </Link>
      <Link
        to="/story"
        className="text-black hover:text-gray-600 cursor-pointer text-[10px] md:text-sm lg:text-lg px-1 md:px-2 lg:px-4"
      >
        About
      </Link>
      <Link
        to="/clients"
        className="text-black hover:text-gray-600 cursor-pointer text-[10px] md:text-sm lg:text-lg px-1 md:px-2 lg:px-4"
      >
        Clients
      </Link>
      <Link
        to="/services"
        className="text-black hover:text-gray-600 cursor-pointer text-[10px] md:text-sm lg:text-lg px-1 md:px-2 lg:px-4"
      >
        Services
      </Link>
    </nav>

    {/* Right Section: Social Media Icons */}
   <div className="flex items-center gap-2 md:gap-4 lg:gap-6 mr-1 md:mr-3 lg:mr-6">
    <a href="https://www.instagram.com/foolizstudio" target="_blank" rel="noopener noreferrer">
      <FaInstagram className="text-black text-sm md:text-lg lg:text-2xl cursor-pointer hover:text-gray-600" />
    </a>

    <a href="https://www.linkedin.com/in/foolizstudio" target="_blank" rel="noopener noreferrer">
      <FaLinkedin className="text-black text-sm md:text-lg lg:text-2xl cursor-pointer hover:text-gray-600" />
    </a>

    <a href="https://www.facebook.com/foolizstudio" target="_blank" rel="noopener noreferrer">
      <FaFacebook className="text-black text-sm md:text-lg lg:text-2xl cursor-pointer hover:text-gray-600" />
    </a>
  </div>

  </div>
</div>
  );
};

export default Footer;