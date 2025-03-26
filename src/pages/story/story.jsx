import React from "react";
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import StoryImg from "../../assets/story.png";
import { Link } from 'react-router-dom';
const ContactPage = () => {
  return (
    <div className="relative bg-white overflow-x-hidden">
      <div className="md:ml-[10px] lg:ml-[10px] pt-[20px]">
        <Header />
      </div>
      <div className="flex flex-col lg:flex-row items-start">
        {/* Left Column - Title & Paragraph */}
        <div className="w-full lg:w-1/2 pr-4 lg:pr-10 md:mt-[40px] ml-4 lg:ml-[-14px]">
          {/* Title "Our Story" - Shown first on all screen sizes */}
          <div className="mb-12 ml-4 lg:ml-[40px] w-full">
            <h1 className="text-[7rem] md:text-[12rem] font-semi-bold tracking-[0.3rem] md:tracking-[1rem] uppercase font-[Heathergreen] leading-[1.1]">
              Our Story
            </h1>
          </div>

          {/* Mobile-only team members section - Shown second on mobile */}
          <div className="lg:w-1/2 md:hidden container mx-auto px-4 ml-[-12px] lg:px-6 mt-[-58px] lg:ml-[40px] relative">
            <img src={StoryImg} alt="" className="max-w-full" />
          </div>

          {/* Lorem Ipsum paragraph - Shown third on mobile */}
          <p className="text-gray-700 ml-[-4px] text-xl font-semi-bold mx-4 md:mx-8 lg:mx-10 max-w-full md:max-w-[80%] lg:max-w-[55%] leading-tight mb-8 md:mb-12 lg:mb-[100px] text-justify">
          Fooliz emerged from a vision to revolutionize software development by combining innovative technology with personalized client experiences. Founded with a passion for creating transformative digital solutions, the company quickly distinguished itself by offering flexible, comprehensive development packages tailored to startups and established businesses alike. Our core philosophy centers on delivering high-quality, scalable software while maintaining transparent communication and adaptive work models. From mobile applications to complex enterprise systems, Fooliz aims to be more than just a development partner – we aspire to be a catalyst for our clients' technological growth and digital transformation.
          </p>
        </div>

        {/* Right Column - Images & Description (Desktop only) */}
        <div className="lg:w-1/2 hidden md:block container mx-auto px-6 lg:px-20 mt-10 relative">
          {/* Mission Statement for Desktop */}
          <div className="w-full p-4 md:p-6 md:ml-[-195px] md:mt-[-105px] text-justify">
            <p className="text-2xl md:text-3xl lg:text-2xl text-gray-700 leading-tight mb-8">
              We started our mission with a vision to transform the industry. We've remained committed to excellence and continuous improvement.
            </p>
          </div>

          {/* Team Members Section for Desktop */}
          <div className="w-full mt-[-60px] ml-[-90px]">
            <img src={StoryImg} alt="" />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ContactPage;