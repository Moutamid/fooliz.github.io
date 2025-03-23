import React from "react";
import Header from "../../components/header/header";
import Rectangle from "../../assets/Rectangle 44.svg";
import Girl from "../../assets/running-girl.gif";
import { Link } from 'react-router-dom';
const Home = ({ 
  desktopTextPadding = { 
    line1: "104px", 
    line2: "75px" 
  },
  mobileTextPadding = {
    line1: "0px",
    line2: "0px"
  }
}) => {
  return (
    <>
      <div>
        <Header />
      </div>

      <div className="hidden md:block">
        <div className="relative lg:mt-[-60px]" >
          <div className="flex flex-col text-black font-extrabold italic text-[0px] md:text-[30px] lg:text-[50px] font-poppins items-end ">
            <p className="md:pr-[120px] lg:pr-[104px]">
              SUBSCRIPTION BASED SOLUTIONS
            </p>
            <p className="pr-[75px] md:mt-[-20px] lg:mt-[-20px]">
              FOR ALL YOUR BUSINESS DIGITAL NEEDS
            </p>
          </div>
        </div>

        <div className="w-full flex flex-row relative">
          <div 
            className="relative bg-y flex flex-col text-black font-bold uppercase w-1/2 py-10 pl-16"
            style={{ 
              fontFamily: 'Heathergreen, sans-serif',
              paddingLeft: "min(16px, calc(16px * (100vw/1920)))" 
            }}
          >
            <Link
              to="/work" 
              className="text-[240px] font-light w-full leading-[1] tracking-wider transition-colors duration-300 hover:text-[#5cba47] pl-10 -mt-[85px]"
              style={{ 
                fontSize: "min(240px, calc(240px * (100vw/1920)))",
                paddingLeft: "min(10px, calc(10px * (100vw/1920)))",
                marginTop: "min(-85px, calc(-85px * (100vw/1920)))" 
              }}
            >
              Work
            </Link>
            <Link
              to="/services" 
              className="text-[200px] font-light leading-none w-full transition-colors duration-300 hover:text-[#474cba] -mt-[40px] pl-40"
              style={{ 
                fontSize: "min(200px, calc(200px * (100vw/1920)))",
                paddingLeft: "min(40px, calc(40px * (100vw/1920)))",
                marginTop: "min(-40px, calc(-40px * (100vw/1920)))" 
              }}
            >
              Services
            </Link>
            <Link to="/contact" 
              className="text-[180px] font-light leading-none w-full transition-colors duration-300 hover:text-[#dee13e] -mt-[20px] pl-55"
              style={{ 
                fontSize: "min(180px, calc(180px * (100vw/1920)))",
                paddingLeft: "min(55px, calc(55px * (100vw/1920)))",
                marginTop: "min(-20px, calc(-20px * (100vw/1920)))" 
              }}
            >
              Contact Us
            </Link>
            <Link
              to="/clients" 
              className="text-[120px] font-light leading-none w-full transition-colors duration-300 hover:text-[#5cba47] -mt-[20px] pl-72"
              style={{ 
                fontSize: "min(120px, calc(120px * (100vw/1920)))",
                paddingLeft: "min(72px, calc(72px * (100vw/1920)))",
                marginTop: "min(-20px, calc(-20px * (100vw/1920)))" 
              }}
            >
              Our Clients
            </Link>
            <Link 
              to="/story"
              className="text-[100px] font-light leading-none w-full transition-colors duration-300 hover:text-[#ba47ae] -mt-[20px] pl-102"
              style={{ 
                fontSize: "min(100px, calc(100px * (100vw/1920)))",
                paddingLeft: "min(102px, calc(102px * (100vw/1920)))",
                marginTop: "min(-20px, calc(-20px * (100vw/1920)))" 
              }}
            >
              Our Story
            </Link>
          </div>

          <div 
            className="w-1/2 flex justify-center items-center py-10 -mt-[80px] relative"
            style={{ marginTop: "min(-80px, calc(-80px * (100vw/1920)))" }}
          >
            <img 
              src={Rectangle} 
              alt="Rectangle" 
              className="w-[752px] h-[676px] rounded-full absolute"
              style={{ 
                width: "min(752px, calc(752px * (100vw/1920)))",
                height: "min(676px, calc(676px * (100vw/1920)))" 
              }}
            />

            <img 
              src={Girl}
              alt="img" 
              className="w-[783px] h-[783px] rounded-full absolute top-[5px] left-[90px]"
              style={{ 
                width: "min(883px, calc(883px * (100vw/1920)))",
                height: "min(883px, calc(883px * (100vw/1920)))",
                left: "min(-108px, calc(-108px * (100vw/1920)))" 
              }}
            />

            <Link
              to="/subscribe"  
              className="absolute top-[626px] left-[590px] w-[367px] h-[130.8px] bg-green-500 text-black font-bold rounded-[65px] text-2xl flex items-center justify-center transition-all duration-300 hover:bg-[#474cba] hover:text-white"
              style={{ 
                top: "min(686px, calc(686px * (100vw/1920)))",
                left: "min(550px, calc(550px * (100vw/1920)))",
                width: "min(367px, calc(367px * (100vw/1920)))",
                height: "min(130.8px, calc(130.8px * (100vw/1920)))",
                fontSize: "min(24px, calc(24px * (100vw/1920)))",
                borderRadius: "min(65px, calc(65px * (100vw/1920)))" 
              }}
            >
              Subscribe Now!
            </Link>
          </div>
        </div>

      </div>

      <div className="block md:hidden lg:hidden">
        <div className="ml-5">
        </div>

        <div className="bg-[#dee13e] ">

        <div 
          style={{
            color: 'black',
            fontWeight: 900, // Increased from 800 to 900 for extra thickness
            fontStyle: 'italic',
            fontFamily: 'Poppins, sans-serif',
            width: '100%',
            maxWidth: '100%',
            overflow: 'hidden',
            padding: '10px 15px',
          }}
        >
          <p 
            style={{ 
              paddingTop: '12px',
              paddingLeft: 'clamp(0px, 8vw, 50px)', // Reduced padding to shift text more to the left
              fontSize: 'clamp(1rem, 4vw, 1.75rem)',
              whiteSpace: 'nowrap',
              marginBottom: '4px',
              fontWeight: 900, // Ensuring extra bold text
            }}
          >
            SUBSCRIPTION BASED SOLUTIONS
          </p>
          <p 
            style={{ 
              paddingLeft: 'clamp(8px, 2vw, 14px)',
              fontSize: 'clamp(1rem, 4vw, 1.75rem)',
              whiteSpace: 'nowrap',
              marginTop: '4px',
              fontWeight: 900, // Ensuring extra bold text
            }}
          >
            FOR ALL YOUR BUSINESS DIGITAL NEEDS
          </p>
        </div>

              <div className="relative w-full flex justify-center ">
                <img 
                  src={Girl}
                  alt="img" 
                  className="w-[350px] h-[350px] mb-[-50px] mt-[-55px] max-w-md rounded-full"
                />
                
                <Link
                  to="/subscribe"  
                  className="absolute w-[150px] h-[60px] bg-[#5cba47] ml-[190px] top-[182px] text-black font-bold rounded-full py-5 px-4 text-center transition-all duration-300 hover:bg-[#474cba] hover:text-white"
                  style={{ 
                    bottom: '40%'
                  }}
                >
                  Subscribe Now!
                </Link>
              </div>
            </div>

            <div className="flex flex-col items-start font-bold uppercase" style={{ fontFamily: 'Heathergreen, sans-serif' }}>
              <div>
              <Link to="/work" className="text-8xl ml-[60px] font-light py-1 transition-colors duration-300 hover:text-[#5cba47]">
                Work
              </Link>
              </div>
              <Link to="/services" className="text-9xl mt-[-14px] ml-[130px] font-light transition-colors duration-300 hover:text-[#474cba]">
                Services
              </Link>
              <Link to="/contact" className="text-8xl font-light ml-[65px] transition-colors duration-300 hover:text-[#dee13e]">
                Contact Us
              </Link>
              <Link to="/clients" className="text-6xl font-light ml-[70px] transition-colors duration-300 hover:text-[#5cba47]">
                Our Clients
              </Link>
              <Link to="/story" className="text-5xl font-light ml-[225px] mt-[-60px] transition-colors duration-300 hover:text-[#ba47ae]">
                Our Story
              </Link>
            </div>

      </div>
    </>
  );
};

export default Home;