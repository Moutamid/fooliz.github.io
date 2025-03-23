import React, { useState } from "react";
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import { FaChevronDown, FaChevronUp, FaCheck, FaTimes } from "react-icons/fa";
import vectorIcon from "../../assets/Vector.svg"; // Adjust the path as needed
import tickIcon from "../../assets/number.svg"; // Adjust the path as needed
import naIcon from "../../assets/na.svg"; // Adjust the path as needed
import { Link } from 'react-router-dom';

import Basic from "../../assets/basic.svg";
import Standard from "../../assets/standard.svg";
import Premium from "../../assets/premium.svg";
import Single from "../../assets/single.svg";

import Basic2 from "../../assets/basic2.svg";
import Standard2 from "../../assets/standard2.svg";
import Premium2 from "../../assets/premium2.svg";
import Single2 from "../../assets/single2.svg";

const Home = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // Fixed plan data structure
  const mobilePlans = [
    {
      name: "Basic",
      hours: 4,
      devs: 1,
      designers: 0,
      managers: 1,
      social: 0,
      weekendRate: 3,
      maintenance: true,
      cancel: true,
    },
    {
      name: "Standard",
      hours: 6,
      devs: 1,
      designers: 1,
      managers: 1,
      social: 0,
      weekendRate: 4,
      maintenance: true,
      cancel: true,
    },
    {
      name: "Premium",
      hours: 8,
      devs: 2,
      designers: 2,
      managers: 1,
      social: 1,
      weekendRate: 5,
      maintenance: true,
      cancel: true,
    },
    {
      name: "Single",
      hours: 8,
      devs: 1,
      designers: 1,
      managers: 1,
      social: 1,
      weekendRate: "N/A",
      maintenance: false,
      cancel: false,
    },
  ];

  // Fixed the features data structure
  const mobileFeatures = [
    { label: "Daily Working Hours", key: "hours" },
    { label: "Android Developer(s)", key: "devs" },
    { label: "Creative Designer(s)", key: "designers" },
    { label: "Project Manager(s)", key: "managers" },
    { label: "Social Media Manager(s)", key: "social" },
    { label: "Weekend Hourly Rate ($)", key: "weekendRate" },
    { label: "Ongoing App Maintenance", key: "maintenance", icon: true },
    { label: "Free Cancellation?", key: "cancel", icon: true },
  ];

  const faqs = [
    {
      question: "What is included in each subscription package?",
      answer: `
         Basic Subscription Package: Includes 1 Android Developer working 4 hours daily and a Project Manager (Available always).
         Medium Subscription Package: Includes 1 Android Developer, 1 Creative Designer (both working 6 hours daily), and a Project Manager (Available always).
         Premium Subscription Package: Includes 2 Android developers, 1 Creative Designer, 1 Social Media Manager, and a Project Manager, all working 8 hours daily.
         Single Payment: Tailored to your specific requirements with a one-time project completion quote based on cost and time. Additional requests not initially agreed upon will be charged extra.
      `,
    },
    {
      question: "Are there discounts for long-term subscriptions?",
      answer:
        "Yes, we offer 5% and 10% discounts for clients who commit to 6-month or 12-month subscriptions.",
    },
    {
      question: "Are weekends included in the subscription plans?",
      answer:
        "No, the subscription plans cover work from Monday to Friday only. However, if you need work done on Saturdays or Sundays, it can be arranged at an additional hourly rate.",
    },
    {
      question: "How do I cancel my subscription, and are there any fees?",
      answer:
        "You can cancel your subscription at any time without any cancellation fees. However, we require a 1-month notice before cancellation.",
    },
    {
      question: "How can I make payments for the services?",
      answer: "We accept payments through PayPal, Payoneer, and Wise.",
    },
    {
      question: "Can I upgrade or downgrade my subscription plan?",
      answer:
        "Yes, you can upgrade or downgrade your subscription plan at any time. However, changes will be effective from the start of the next billing cycle.",
    },
    {
      question: "What are the hourly rates for weekend work?",
      answer:
        "Hourly rate for weekend work of Developer ($10/hr), Designer ($5/hr), Social Media Manager ($5/hr).",
    },
    {
      question: "Will my project be maintained as part of the subscription?",
      answer:
        "Yes, maintenance is included in all subscription plans. We will ensure your app is updated and functional.",
    },
    {
      question: "How long does it take to get started after signing up?",
      answer:
        "Once you've subscribed to a plan and completed payment, the team will be assigned and ready to start instantly.",
    },
    {
      question: "Can I request multiple projects in one subscription plan?",
      answer:
        "Yes, you can request multiple projects as long as they fit within the allocated hours and team roles provided in your subscription package.",
    },
    {
      question: "How do you handle confidential or proprietary information?",
      answer:
        "We are committed to protecting your confidentiality. All team members sign Non-Disclosure Agreements (NDAs) to ensure your information remains secure.",
    },
    {
      question:
        "What happens if I need more hours than allocated in my subscription plan?",
      answer:
        "If you require additional hours, you can consider upgrading to a higher subscription plan.",
    },
    {
      question: "Do I have direct communication with the assigned team?",
      answer:
        "Yes, you will have direct communication with your project manager, who will serve as your primary point of contact and facilitate communication with the team.",
    },
    {
      question: "Can I pause my subscription temporarily?",
      answer:
        "Yes, you can pause your subscription temporarily. Please inform us at least 2 weeks in advance.",
    },
    {
      question: "How do I track the progress of my project?",
      answer:
        "Your project manager will provide regular updates through reports and meetings. You can also request additional updates as needed.",
    },
    {
      question: "What kind of apps or software do you specialize in?",
      answer:
        "We specialize in Android app development, UI/UX design, Graphic Design, social media management, all tailored to your needs.",
    },
    {
      question:
        "Are there any limits to the features I can request in a subscription plan?",
      answer: "There are no limits!",
    },
    {
      question: "What tools and technologies do you use for development?",
      answer:
        "We use industry-standard tools and technologies, including Android Studio, Firebase, Kotlin, Java, Adobe XD, Figma, and other modern frameworks as per project requirements.",
    },
    {
      question: "Do you offer post-project support for Single Payment?",
      answer:
        "Yes, we offer post-project support at an additional cost or you can subscribe to any plan too and get any feature for free.",
    },
    {
      question:
        "Can I modify the scope of work during an ongoing Single Payment?",
      answer:
        "Yes, but any additional work or requirements not initially agreed upon will incur extra charges. We will provide a new cost and time estimate for the added scope.",
    },
  ];

  const features = ["Ayein", "Ayein", "Ayein", "Ayein", "Ayein"];
  const plans = ["Basic", "Standard", "Premium", "Custom"];

  // Render check icons for comparison table
  const renderCheckIcon = () => (
    <img src={vectorIcon} alt="Checkmark" className="w-10 h-10" />
  );

  return (
    <div className="flex flex-col bg-[#dee13e] min-h-screen overflow-x-hidden">
      <Header />
      {/* Hero Section */}
      <div className="flex flex-col items-center justify-center text-center py-10 px-4">
        <div className="w-full font-[Heathergreen] font-normal flex flex-col items-center">
          <p className="font-semibold text-6xl md:text-[150px] md:leading-[50px] leading-[50px] tracking-[4px] md:tracking-[6px]">
            Find the Right Plan
          </p>
        </div>
        <div className="w-full md:max-w-[80%] mt-30">
          {" "}
          {/* Added margin-top for spacing */}
          <p className="md:text-[22px] text-xl font-[Poppins] font-normal leading-[30px] tracking-[1px]">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum Lorem Ipsum is simply dummy text of the
            printing and typesetting industry. Lorem Ipsum Lorem Ipsum is simply
            dummy text of the printing and typesetting industry. Lorem
            Ipsumdummy text of the printing and typesetting industry. dummy text
            of the printing and typesetting industry.dewrwin
          </p>
        </div>
      </div>

      {/* Pricing Plans Section */}
      <div className="bg-[#dee13e] hidden md:flex items-center justify-center px-2 sm:px-6 py-6 sm:py-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 sm:gap-8 max-w-[100vw]">
          {[
            { img: Basic, imgHover: Basic2 },
            { img: Standard, imgHover: Standard2 },
            { img: Premium, imgHover: Premium2 },
            { img: Single, imgHover: Single2 },
          ].map((plan, index) => (
            <div
              key={index}
              className="w-[160px] h-[260px] sm:w-[300px] sm:h-[500px] md:w-[368px] md:h-[500px] bg-gradient-to-b rounded-4xl shadow-lg relative group overflow-hidden transition-transform duration-500 hover:scale-105 hover:shadow-2xl"
            >
              <div className="absolute inset-0 transition-opacity duration-500 group-hover:opacity-0">
                <img
                  src={plan.img}
                  className="object-cover w-full h-full"
                  alt={`Plan ${index}`}
                />
              </div>
              <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                <img
                  src={plan.imgHover}
                  className="object-cover w-full h-full"
                  alt={`Plan ${index} Hover`}
                />
              </div>

              {/* First div - Static */}
              <div className="absolute top-0 left-0 w-full h-1/3 z-10">
                {/* Static division */}
              </div>

              {/* Second div - Scroll to div functionality */}
              <div
                onClick={() => {
                  const targetDiv = document.getElementById("targetDivId");
                  if (targetDiv) {
                    targetDiv.scrollIntoView({ behavior: "smooth" });
                  }
                }}
                className="absolute top-1/2 left-0 w-full h-1/3 z-10 cursor-pointer"
              ></div>

              {/* Third div - WhatsApp link with dynamic text parameter */}
              <Link
                to={`https://api.whatsapp.com/send?phone=923315829371&text=${
                  index + 1
                }`}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute bottom-0 left-0 w-full h-1/6 z-10 cursor-pointer"
              ></Link>
            </div>
          ))}
        </div>
      </div>

      {/* Mobile Screen For Cards */}
      <div className="bg-[#dee13e] flex items-center justify-center px-2 sm:px-6 py-6 sm:py-10 md:hidden">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8 max-w-[100vw]">
          {[
            { img: Basic2 },
            { img: Standard2 },
            { img: Premium2 },
            { img: Single2 },
          ].map((plan, index) => (
            <div
              key={index}
              className="w-[160px] h-[260px] sm:w-[300px] sm:h-[500px] md:w-[368px] md:h-[500px] bg-gradient-to-b rounded-2xl shadow-lg relative group overflow-hidden transition-transform duration-500 hover:scale-105 hover:shadow-2xl"
            >
              <div className="absolute inset-0 transition-opacity duration-500 group-hover:opacity-0">
                <img
                  src={plan.img}
                  className="object-cover w-full h-full"
                  alt={`Plan ${index}`}
                />
              </div>
              <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                <img
                  src={plan.imgHover}
                  className="object-cover w-full h-full"
                  alt={`Plan ${index} Hover`}
                />
              </div>

              {/* First div - Static */}
              <div className="absolute top-0 left-0 w-full h-1/3 z-10">
                {/* Static division */}
              </div>

              {/* Second div - Scroll to div functionality */}
              <div
                onClick={() => {
                  const targetDiv = document.getElementById("targetDivId");
                  if (targetDiv) {
                    targetDiv.scrollIntoView({ behavior: "smooth" });
                  }
                }}
                className="absolute top-1/2 left-0 w-full h-1/3 z-10 cursor-pointer"
              ></div>

              {/* Third div - WhatsApp link with dynamic text parameter */}
              <Link
                to={`https://api.whatsapp.com/send?phone=923315829371&text=${
                  index + 1
                }`}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute bottom-0 left-0 w-full h-1/6 z-10 cursor-pointer"
              ></Link>
            </div>
          ))}
        </div>
      </div>

      {/* Plan Comparison Section */}
      <div
        id="targetDivId"
        className="bg-[#dee13e] py-8 md:py-16 flex flex-col items-center font-[Heathergreen] font-normal"
      >
        {/* Title for both views */}
        <h2 className="text-black font-[Heathergreen] text-8xl md:mt-10 md:text-[150px] rounded-2xl text-center mb-8 md:mb-16 px-4">
          Plan Comparison
        </h2>

        {/* Mobile View - Only visible on small screens */}
<div className="block md:hidden w-full max-w-sm overflow-x-auto">
  <div className="grid grid-cols-5 items-start pb-4">
    {/* Feature Column - Mobile */}
    <div className="bg-black text-white rounded-xl w-40 ml-3 p-3 h-64 flex flex-col relative col-span-1">
      <h3 className="text-lg tracking-wide font-semi-bold bg-white text-center text-black absolute top-0 left-0 right-0 py-1 rounded-t-xl">
        Plans
      </h3>
      <ul className="mt-10 text-center space-y-4 flex-grow">
        <li className="text-xs font-[Poppins] font-semibold">Ayein</li>
        <li className="text-xs font-[Poppins] font-semibold">Ayein</li>
        <li className="text-xs font-[Poppins] font-semibold">Ayein</li>
        <li className="text-xs font-[Poppins] font-semibold">Ayein</li>
        <li className="text-xs font-[Poppins] font-semibold">Ayein</li>
      </ul>
    </div>

    {/* Basic Plan */}
    <div className="text-center w-16 ml-22 h-64 flex flex-col col-span-1">
      <h3 className="text-lg font-semi-bold mb-2 px-1 leading-tight">
        Basic
      </h3>
      <ul className="space-y-4 mt-2">
        <li>
          <img src={vectorIcon} alt="Number" className="w-4 h-4 inline mt-[10px]" /> 
        </li>
        <li>
          <img src={tickIcon} alt="Number" className="w-4 h-4 inline mt-[-6px]" /> 
        </li>
        <li>
          <img src={tickIcon} alt="Tick" className="w-4 h-4 inline mt-[-15px]" />
        </li>
        <li>
          <img src={vectorIcon} alt="Number" className="w-4 h-4 inline mt-[-36px]" /> 
        </li>
        <li>
          <img src={naIcon} alt="N/A" className="w-4 h-4 inline mt-[-50px]" />
        </li>
      </ul>
    </div>

    {/* Standard Plan */}
    <div className="text-center w-16 ml-14 h-64 flex flex-col col-span-1">
      <h3 className="text-lg font-semi-bold mb-2 px-1 leading-tight">
        Standard
      </h3>
      <ul className="space-y-4 mt-2">
      <li>
          <img src={vectorIcon} alt="Number" className="w-4 h-4 inline mt-[10px]" /> 
        </li>
        <li>
          <img src={tickIcon} alt="Number" className="w-4 h-4 inline mt-[-6px]" /> 
        </li>
        <li>
          <img src={tickIcon} alt="Tick" className="w-4 h-4 inline mt-[-15px]" />
        </li>
        <li>
          <img src={vectorIcon} alt="Number" className="w-4 h-4 inline mt-[-36px]" /> 
        </li>
        <li>
          <img src={naIcon} alt="N/A" className="w-4 h-4 inline mt-[-50px]" />
        </li>
      </ul>
    </div>

    {/* Premium Plan */}
    <div className="text-center w-16 ml-8 h-64 flex flex-col col-span-1">
      <h3 className="text-lg font-semi-bold mb-2 px-1 leading-tight">
        Premium
      </h3>
      <ul className="space-y-4 mt-2">
      <li>
          <img src={vectorIcon} alt="Number" className="w-4 h-4 inline mt-[10px]" /> 
        </li>
        <li>
          <img src={tickIcon} alt="Number" className="w-4 h-4 inline mt-[-6px]" /> 
        </li>
        <li>
          <img src={tickIcon} alt="Tick" className="w-4 h-4 inline mt-[-15px]" />
        </li>
        <li>
          <img src={vectorIcon} alt="Number" className="w-4 h-4 inline mt-[-36px]" /> 
        </li>
        <li>
          <img src={naIcon} alt="N/A" className="w-4 h-4 inline mt-[-50px]" />
        </li>
      </ul>
    </div>

    {/* Custom Plan */}
    <div className="text-center w-16 ml-2 h-64 flex flex-col col-span-1">
      <h3 className="text-lg font-semi-bold mb-2 px-1 leading-tight">
        Custom
      </h3>
      <ul className="space-y-4 mt-2">
      <li>
          <img src={vectorIcon} alt="Number" className="w-4 h-4 inline mt-[10px]" /> 
        </li>
        <li>
          <img src={tickIcon} alt="Number" className="w-4 h-4 inline mt-[-6px]" /> 
        </li>
        <li>
          <img src={tickIcon} alt="Tick" className="w-4 h-4 inline mt-[-15px]" />
        </li>
        <li>
          <img src={vectorIcon} alt="Number" className="w-4 h-4 inline mt-[-36px]" /> 
        </li>
        <li>
          <img src={naIcon} alt="N/A" className="w-4 h-4 inline mt-[-50px]" />
        </li>
      </ul>
    </div>
  </div>
</div>

        {/* Desktop View - Only visible on medium screens and up */}
        <div className="hidden md:block w-full lg:w-full ml-[820px] mt-[40px]">
          <div className="grid grid-cols-5 max-w-6xl gap-12 items-start pb-[50px]">
            {/* Feature Column - Desktop */}
            <div className="bg-black text-white rounded-xl shadow-lg p-8 min-h-[500px] flex flex-col ml-[-140px] mt-[-1px] mr-[-68px]">
              <h3 className="text-6xl font-semi-bold bg-white text-center text-black ml-[-32px] mt-[-32px] pt-[2px] mr-[-32px] py-4 rounded-t-xl">
                Plans
              </h3>
              <ul className="mt-6 text-center space-y-6 flex-grow">
                {features.map((feature, index) => (
                  <li
                    key={index}
                    className="text-4xl font-[Poppins] font-semi-bold"
                  >
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            {/* Plan Columns - Desktop */}
            {plans.map((plan, index) => (
              <div
                key={index}
                className="text-black text-center mt-[-14px] w-[250px] min-h-[500px] flex flex-col"
              >
                <h3 className="text-8xl font-semi-bold mb-6">{plan}</h3>
                <ul className="space-y-6 flex-grow">
                  {features.map((_, idx) => {
                    // Cycle through the icons sequentially
                    const icons = [vectorIcon, naIcon, tickIcon];
                    const icon = icons[idx % icons.length];

                    return (
                      <li key={idx} className="flex justify-center">
                        <img src={icon} alt="Checkmark" className="w-10 h-10" />
                      </li>
                    );
                  })}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-[#a7429c] py-10 md:py-16 px-4 flex flex-col items-center overflow-hidden">
        <h2 className="text-black font-normal font-[Heathergreen] text-4xl md:text-5xl lg:text-[150px] mb-8 text-center w-full flex flex-col items-center">
          Frequently Asked Questions
        </h2>

        <div className="w-full pb-[100px] space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`w-full bg-transparent text-white text-lg font-semibold cursor-pointer p-2 md:p-4 ${
                index >= 2 ? "md:hidden" : ""
              }`}
            >
              <div
                className="w-full md:w-[80%] mx-auto flex justify-between items-center text-xl md:text-4xl p-2 md:p-4 font-[Poppins]"
                onClick={() => toggleFAQ(index)}
              >
                <span className="pr-2">{faq.question}</span>
                {openIndex === index ? (
                  <FaChevronUp className="text-white flex-shrink-0" />
                ) : (
                  <FaChevronDown className="text-white flex-shrink-0" />
                )}
              </div>

              {openIndex === index && (
                <p className="w-full md:w-[70%] md:ml-auto md:mr-[20%] text-white text-lg md:text-2xl font-semibold mt-[-12px] p-2 md:p-4 rounded-lg">
                  {faq.answer}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
