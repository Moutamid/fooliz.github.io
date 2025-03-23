import { useEffect, useRef, useState } from "react";
import monkey from "../../assets/monkey.gif";
import bee from "../../assets/bee.gif";
import human from "../../assets/human.gif";
import banana from "../../assets/banana.gif";
import { FaArrowLeft } from "react-icons/fa";
import Header from "../../components/header/header";
import { Link } from "react-router-dom";

export default function Home() {
  const monkeyRef = useRef(null);
  const beeRef = useRef(null);
  const humanRef = useRef(null);
  const bananaRef = useRef(null);

  const monkeySectionRef = useRef(null);
  const beeSectionRef = useRef(null);
  const humanSectionRef = useRef(null);
  const bananaSectionRef = useRef(null);

  const containerRef = useRef(null);

  // Track current active section (0-3) for navigation
  const [activeSection, setActiveSection] = useState(0);

  // Add a more restrictive debounce control for wheel events
  const [isScrolling, setIsScrolling] = useState(false);
  // Add a lock to prevent rapid section changes
  const [isTransitioning, setIsTransitioning] = useState(false);
  // Track if we're on desktop or mobile
  const [isDesktop, setIsDesktop] = useState(false);

  // Initialize with monkey section visible by default
  const [sectionVisibility, setSectionVisibility] = useState({
    monkey: true, // Set to true by default
    bee: false,
    human: false,
    banana: false,
  });

  // Navigation functions
  const navigateToSection = (sectionIndex) => {
    if (sectionIndex < 0 || sectionIndex > 3 || isTransitioning) return;

    // Set transitioning lock
    setIsTransitioning(true);

    const sections = ["monkey", "bee", "human", "banana"];
    const newVisibility = {
      monkey: false,
      bee: false,
      human: false,
      banana: false,
    };

    // Update the visibility state
    newVisibility[sections[sectionIndex]] = true;

    // Apply animations
    const imageRefs = [monkeyRef, beeRef, humanRef, bananaRef];

    // Add animation classes to the active section's image
    if (imageRefs[sectionIndex].current) {
      // Remove any existing animation classes
      imageRefs[sectionIndex].current.classList.remove("animate-to-left");
      // Add the entry animation
      imageRefs[sectionIndex].current.classList.add("animate-from-left");
    }

    // Add exit animation to previously visible sections
    sections.forEach((section, idx) => {
      if (
        idx !== sectionIndex &&
        sectionVisibility[section] &&
        imageRefs[idx].current
      ) {
        imageRefs[idx].current.classList.remove("animate-from-left");
        imageRefs[idx].current.classList.add("animate-to-left");
      }
    });

    setSectionVisibility(newVisibility);
    setActiveSection(sectionIndex);

    // Scroll to corresponding position on desktop - using a more reliable approach
    if (isDesktop) {
      const sectionHeight = window.innerHeight;
      window.scrollTo({
        top: sectionIndex * sectionHeight,
        behavior: "smooth",
      });
    }

    // Release the transition lock after animation completes
    setTimeout(() => {
      setIsTransitioning(false);
    }, 1000); // Match this with your animation duration
  };

  const navigateNext = () => {
    navigateToSection(Math.min(activeSection + 1, 3));
  };

  const navigatePrev = () => {
    navigateToSection(Math.max(activeSection - 1, 0));
  };
  useEffect(() => {
    // Check if we're on desktop
    const checkIfDesktop = () => {
      const desktop = window.innerWidth >= 768;
      setIsDesktop(desktop);
      return desktop;
    };

    // Set initial desktop state
    checkIfDesktop();

    // Mobile navigation touch and keyboard events
    let touchStartY = 0;

    const handleTouchStart = (e) => {
      touchStartY = e.touches[0].clientY;
    };

    const handleTouchEnd = (e) => {
      const touchEndY = e.changedTouches[0].clientY;
      const diffY = touchStartY - touchEndY;

      // If swipe distance is significant
      if (Math.abs(diffY) > 50) {
        if (diffY > 0) {
          // Swipe up - go to next section
          navigateNext();
        } else {
          // Swipe down - go to previous section
          navigatePrev();
        }
      }
    };

    // Add keyboard navigation
    const handleKeyDown = (e) => {
      if (e.key === "ArrowDown" || e.key === "PageDown") {
        navigateNext();
      } else if (e.key === "ArrowUp" || e.key === "PageUp") {
        navigatePrev();
      }
    };

    // Enhanced wheel event handler with better sensitivity
    const handleWheel = (e) => {
      if (!isDesktop) return;

      e.preventDefault();

      // More restrictive debouncing for smoother transitions
      if (!isScrolling && !isTransitioning) {
        setIsScrolling(true);

        // Lower threshold for more responsive scrolling
        if (e.deltaY > 30) {
          // Scrolling down
          navigateNext();
        } else if (e.deltaY < -30) {
          // Scrolling up
          navigatePrev();
        }

        // Reset the scrolling flag after a shorter delay for better responsiveness
        setTimeout(() => {
          setIsScrolling(false);
        }, 800);
      }
    };

    // Desktop scroll-based functionality - improved
    if (containerRef.current && isDesktop) {
      const containerHeight = window.innerHeight * 4; // 4 sections
      containerRef.current.style.height = `${containerHeight}px`;
    }

    // Improved scroll handler with thresholds to prevent flickering
    const handleScroll = () => {
      // Only apply scroll-based navigation on desktop and when not actively transitioning
      if (isDesktop && !isTransitioning) {
        const scrollPosition = window.scrollY;
        const windowHeight = window.innerHeight;

        // Use a more precise calculation with threshold
        const rawSectionIndex = scrollPosition / windowHeight;
        const sectionIndex = Math.round(rawSectionIndex);

        // Only update if we're very close to a section boundary
        if (
          sectionIndex !== activeSection &&
          sectionIndex >= 0 &&
          sectionIndex <= 3 &&
          Math.abs(rawSectionIndex - sectionIndex) < 0.1
        ) {
          // Lock transitions during this update
          setIsTransitioning(true);

          setActiveSection(sectionIndex);

          const sections = ["monkey", "bee", "human", "banana"];
          const newVisibility = {
            monkey: false,
            bee: false,
            human: false,
            banana: false,
          };

          // Update the visibility state
          newVisibility[sections[sectionIndex]] = true;
          setSectionVisibility(newVisibility);

          // Apply animations
          const imageRefs = [monkeyRef, beeRef, humanRef, bananaRef];

          // Add animation classes to the active section's image
          if (imageRefs[sectionIndex].current) {
            imageRefs[sectionIndex].current.classList.remove("animate-to-left");
            imageRefs[sectionIndex].current.classList.add("animate-from-left");
          }

          // Release transition lock after animation completes
          setTimeout(() => {
            setIsTransitioning(false);
          }, 1000);
        }
      }
    };

    // Handle window resize
    const handleResize = () => {
      const isNowDesktop = checkIfDesktop();

      if (isNowDesktop) {
        // Reset container height for desktop
        if (containerRef.current) {
          containerRef.current.style.height = `${window.innerHeight * 4}px`;
        }
        // Enable scrolling on desktop
        document.body.style.overflow = "";
      } else {
        // Disable scrolling on mobile
        document.body.style.overflow = "hidden";
      }
    };

    // Set up event listeners
    document.addEventListener("touchstart", handleTouchStart, {
      passive: false,
    });
    document.addEventListener("touchend", handleTouchEnd, { passive: false });
    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("wheel", handleWheel, { passive: false });
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    // Prevent default scrolling behavior on mobile
    if (!isDesktop) {
      document.body.style.overflow = "hidden";
    }

    // Initialize animations for the first section
    if (monkeyRef.current) {
      monkeyRef.current.classList.add("animate-from-left");
    }

    return () => {
      document.removeEventListener("touchstart", handleTouchStart);
      document.removeEventListener("touchend", handleTouchEnd);
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("wheel", handleWheel);
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);

      document.body.style.overflow = ""; // Reset overflow setting
    };
  }, [
    isScrolling,
    sectionVisibility,
    activeSection,
    isTransitioning,
    isDesktop,
  ]);
  return (
    <>
      <style jsx global>{`
        .animate-from-left {
          animation: slideInFromLeft 0.8s forwards;
        }

        .animate-to-left {
          animation: slideOutToLeft 0.8s forwards;
        }

        @keyframes slideInFromLeft {
          0% {
            transform: translateX(-200%);
            opacity: 0;
          }
          100% {
            transform: translateX(0);
            opacity: 1;
          }
        }

        @keyframes slideOutToLeft {
          0% {
            transform: translateX(0);
            opacity: 1;
          }
          100% {
            transform: translateX(-100%);
            opacity: 0;
          }
        }

        .sticky-container {
          position: relative;
          height: 100vh;
          overflow: hidden;
        }

        @media (min-width: 768px) {
          .sticky-container {
            height: 400vh;
            overflow: visible;
          }
        }

        .sticky-section {
          position: absolute;
          top: 0;
          left: 0;
          height: 100vh;
          width: 100%;
          overflow: hidden;
          opacity: 0;
          pointer-events: none;
          transition: opacity 0.3s ease;
        }

        .sticky-section.active {
          opacity: 1;
          pointer-events: auto;
        }

        @media (min-width: 768px) {
          .sticky-section {
            position: sticky;
            top: 0;
            opacity: 1;
            pointer-events: auto;
          }
        }

        /* Navigation dots */
        .nav-dots {
          position: fixed;
          left: 20px;
          bottom: 20px;
          z-index: 100;
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .nav-dot {
          width: 12px;
          height: 12px;
          border-radius: 50%;
          background-color: rgba(255, 255, 255, 0.5);
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .nav-dot.active {
          background-color: white;
          transform: scale(1.5);
        }

        /* Hide navigation dots on desktop */
        @media (min-width: 768px) {
          .nav-dots {
            display: none;
          }
        }

        /* Custom scroll indicator for desktop */
        .scroll-indicator {
          position: fixed;
          right: 20px;
          top: 50%;
          transform: translateY(-50%);
          z-index: 100;
          display: none; /* Prevents it from taking space */
          visibility: hidden; /* Ensures it's fully hidden */
          opacity: 0; /* Makes it fully transparent */
          pointer-events: none; /* Prevents interaction */
        }

        /* Ensure it remains hidden even on desktops */
        @media (min-width: 768px) {
          .scroll-indicator {
            display: none !important; /* Ensures no override */
            visibility: hidden !important;
          }
        }

        .scroll-line {
          width: 2px;
          height: 100px;
          background-color: rgba(255, 255, 255, 0.5);
          position: relative;
        }

        .scroll-progress {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          background-color: white;
          transition: height 0.3s ease;
        }

        .scroll-text {
          color: white;
          font-size: 12px;
          writing-mode: vertical-rl;
          text-orientation: mixed;
          transform: rotate(180deg);
          letter-spacing: 2px;
        }
      `}</style>

      {/* Navigation dots - Only shown on mobile */}
      <div className="nav-dots">
        <div
          className={`nav-dot ${activeSection === 0 ? "active" : ""}`}
          onClick={() => navigateToSection(0)}
        />
        <div
          className={`nav-dot ${activeSection === 1 ? "active" : ""}`}
          onClick={() => navigateToSection(1)}
        />
        <div
          className={`nav-dot ${activeSection === 2 ? "active" : ""}`}
          onClick={() => navigateToSection(2)}
        />
        <div
          className={`nav-dot ${activeSection === 3 ? "active" : ""}`}
          onClick={() => navigateToSection(3)}
        />
      </div>

      {/* Custom scroll indicator for desktop */}
      <div className="scroll-indicator">
        <span className="scroll-text">SCROLL</span>
        <div className="scroll-line">
          <div
            className="scroll-progress"
            style={{
              height: `${(activeSection / 3) * 100}%`,
            }}
          ></div>
        </div>
      </div>
      <div ref={containerRef} className="sticky-container">
        {/* monkey div */}
        <div
          ref={monkeySectionRef}
          className={`sticky-section bg-[rgba(92,186,71,1)] min-h-screen relative ${
            sectionVisibility.monkey ? "active" : ""
          }`}
          style={{ zIndex: sectionVisibility.monkey ? 40 : 10 }}
        >
          {/* Logo in top left corner - fixed position on mobile */}
          <div className="absolute mt-[-12px] ml-[-6px] md:p-4 lg:p-4">
            <h1 className="text-black text-xl md:text-3xl font-bold">
              <Header />
            </h1>
          </div>

          {/* Main content */}
          <div className="flex flex-col items-center md:items-start md:flex-row px-4 md:px-8 gap-4 md:gap-10 pt-16 md:pt-0">
            {/* Left side */}
            <div className="flex flex-col md:pl-4 md:mt-[40px] mt-[-10px]">
              <p className="text-white text-4xl md:text-[80px] font-light leading-[100%] py-8 md:py-20 whitespace-nowrap font-poppins ml-[-180px] md:ml-0">
                WE MAKE
              </p>
            </div>

            {/* Right side with APPS text */}
            <div className="relative w-full md:mt-0">
              <p className="text-black text-[380px] sm:text-[350px] md:text-[650px] lg:text-[1150px] md:mt-[-160px] mt-[-100px] ml-[-12px] md:ml-[260px] font-[Heathergreen] leading-[1] text-center md:text-left">
                APPS
              </p>
            </div>
          </div>

          {/* Monkey image as a full-screen overlay */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-20">
            <div className="w-full h-full max-w-screen max-h-screen mt-[220px] flex items-center justify-center">
              <img
                ref={monkeyRef}
                src={monkey}
                alt="Blue monkey meditating"
                className="max-w-full max-h-full md:max-w-3xl lg:max-w-4xl xl:max-w-5xl object-contain animate-from-left"
                style={{ aspectRatio: "preserve" }}
              />
            </div>
          </div>

          {/* Button and Back Arrow positioned together */}
          <div className="absolute bottom-8 left-0 right-0 md:left-8 md:right-auto flex flex-col items-center md:items-start space-y-4 z-10">
            {/* Link Integrated in the Button */}
            <Link to="/work?category=App">
              <button className="bg-[rgba(71,76,186,1)] mb-[35px] ml-[190px] text-white font-bold p-2 md:p-10 rounded-full text-lg md:text-5xl md:ml-[108px] w-[160px] md:w-full lg:w-[500px]">
                SEE APPS WORK
              </button>
            </Link>
          </div>
        </div>

        {/* bee div */}
        <div
          ref={beeSectionRef}
          className={`sticky-section bg-[rgba(71,76,186,1)] min-h-screen relative ${
            sectionVisibility.bee ? "active" : ""
          }`}
          style={{ zIndex: sectionVisibility.bee ? 30 : 9 }}
        >
          {/* Logo in top left corner */}
          <div className="absolute mt-[-12px] ml-[-6px] md:p-4 lg:p-4">
            <h1 className="text-black text-xl md:text-3xl font-bold">
              <Header />
            </h1>
          </div>

          {/* Main content */}
          <div className="flex flex-col items-center md:items-start md:flex-row px-4 md:px-8 gap-4 md:gap-10 pt-16 md:pt-0">
            {/* Left side */}
            <div className="flex flex-col md:pl-4 md:mt-[40px] mt-[-10px]">
              <p className="text-white text-4xl md:text-[80px] font-light leading-[100%] py-8 md:py-20 whitespace-nowrap font-poppins ml-[-180px] md:ml-0">
                WE MAKE
              </p>
            </div>

            {/* Right side with WEBSITES text */}
            <div className="relative w-full md:mt-[20px] lg:mt-[-90px] mt-[-120px]">
              {/* Text Heading */}
              <p
                className="text-black text-[200px] sm:text-[250px] md:text-[450px] lg:text-[750px] 
                    ml-[-12px] md:ml-[100px] font-[Heathergreen] text-center md:text-left"
              >
                WEBSITES
              </p>
            </div>
          </div>

          {/* Bee image as a full-screen overlay */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-20">
            <div className="w-full h-full max-w-screen max-h-screen mt-[-90px] ml-[-120px] flex items-center justify-center">
              <img
                ref={beeRef}
                src={bee}
                alt="Bee character"
                className="max-w-full max-h-full md:max-w-3xl lg:max-w-4xl xl:max-w-5xl object-contain"
                style={{ aspectRatio: "preserve" }}
              />
            </div>
          </div>

          {/* Button and Back Arrow positioned together */}
          <div className="absolute bottom-8 left-0 right-0 md:left-8 md:right-auto flex flex-col items-center md:items-start space-y-4 z-10">
            <Link
              to="/work?category=Web"
              className="bg-[rgba(186,71,174,1)] mt-[-190px] ml-[-100px] text-white font-bold p-4 md:p-10 rounded-full text-lg md:text-2xl w-[220px] lg:w-3/6 md:w-auto md:ml-[370px] text-center block"
            >
              SEE WEBSITES WORK
            </Link>

            {/* Desktop button */}
            <button
              onClick={navigatePrev}
              className="text-white hidden md:block p-4 rounded-full"
            >
              <FaArrowLeft className="text-3xl md:text-5xl" />
            </button>
          </div>
        </div>

        {/* ui/ux div */}
        <div
          ref={humanSectionRef}
          className={`sticky-section bg-[rgba(186,71,174,1)] min-h-screen relative ${
            sectionVisibility.human ? "active" : ""
          }`}
          style={{ zIndex: sectionVisibility.human ? 20 : 8 }}
        >
          {/* Logo in top left corner */}
          <div className="absolute mt-[-12px] ml-[-6px] md:p-4 lg:p-4">
            <h1 className="text-black text-xl md:text-3xl font-bold">
              <Header />
            </h1>
          </div>

          {/* Main content */}
          <div className="flex flex-col items-center md:items-start md:flex-row px-4 md:px-8 gap-4 md:gap-10 pt-16 md:pt-0">
            {/* Left side */}
            <div className="flex flex-col md:pl-4 md:mt-[40px] mt-[-10px]">
              <p className="text-white text-4xl md:text-[80px] font-light leading-[100%] py-8 md:py-20 whitespace-nowrap font-poppins ml-[-180px] md:ml-0">
                WE MAKE
              </p>
            </div>

            {/* Right side with UI/UX text */}
            <div className="relative w-full md:mt-20 text-center">
              <Link
                to="/work?category=UI/UX"
                className="bg-[rgba(222,225,62,1)] absolute
                lg:mt-[-70px] md:mt-[220px] mt-[400px] ml-[75px] w-[220px] h-[80px] md:w-[400px] md:h-[80px] lg:w-[400px] lg:h-[130px]
                text-center md:top-1/2 left-1/2 md:left-auto transform -translate-x-1/2
                md:-translate-x-0 md:ml-[-58px] lg:ml-[-708px] whitespace-nowrap text-black 
                font-bold p-4 md:p-10 rounded-full md:text-4xl z-30"
              >
                <p className="mt-[10px] md:mt-[10px] lg:mt-[-4px]">
                  {" "}
                  SEE UI/UX WORK
                </p>
              </Link>
              <p
                className="text-black text-[350px] sm:text-[350px] md:text-[650px] lg:text-[1050px] 
                    font-[Heathergreen] text-center md:text-right md:float-right whitespace-nowrap 
                    leading-[1] mt-[-65px] md:mt-[-180px] md:ml-[280px]"
              >
                UI/UX
              </p>
            </div>
          </div>

          {/* Human image as a full-screen overlay */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-20">
            <div className="w-full h-full  max-w-screen max-h-screen flex items-center justify-center">
              <img
                ref={humanRef}
                src={human}
                alt="Human character"
                className="max-w-full md:ml-[200px] lg:ml-[700px] md:mt-[200px] lg:mt-[470px] max-h-full md:max-w-full lg:max-w-full xl:max-w-5xl object-contain"
                style={{ aspectRatio: "preserve" }}
              />
            </div>
          </div>

          {/* Button and Back Arrow positioned together for desktop */}
          <div className="absolute bottom-8 hidden md:block left-0 right-0 md:left-8 md:right-auto flex flex-col items-center md:items-start space-y-4 z-10">
            <button
              onClick={navigatePrev}
              className="text-white p-4 rounded-full"
            >
              <FaArrowLeft className="text-3xl md:text-5xl" />
            </button>
          </div>
        </div>

        {/* banana div */}
        <div
          ref={bananaSectionRef}
          className={`sticky-section bg-[rgba(222,225,62,1)] min-h-screen relative ${
            sectionVisibility.banana ? "active" : ""
          }`}
          style={{ zIndex: sectionVisibility.banana ? 10 : 7 }}
        >
          {/* Logo in top left corner */}
          <div className="absolute mt-[-12px] ml-[-6px] md:p-4 lg:p-4">
            <h1 className="text-black text-xl md:text-3xl font-bold">
              <Header />
            </h1>
          </div>

          {/* Main content */}
          <div className="flex flex-col items-center md:items-start md:flex-row px-4 md:px-8 gap-4 md:gap-10 pt-16 md:pt-0">
            {/* Left side */}
            <div className="flex flex-col md:pl-4 hidden md:block md:mt-[40px] mt-[-10px]">
              <p className="text-black text-4xl md:text-[80px] font-light leading-[100%] py-8 md:py-20 whitespace-nowrap font-poppins ml-[-180px] md:ml-0">
                WE MAKE
              </p>
            </div>

            {/* Right side with CREATIVE text */}
            <div className="relative w-full md:mt-40">
              <Link
                to="/work?category=Creative"
                className="bg-[rgba(92,186,71,1)] absolute 
                mt-[550px] w-[200px] md:w-[200px] lg:w-[330px] lg:h-[130px] md:top-auto md:left-3/5 left-1/3 
                transform -translate-x-1/2 md:-translate-x-0 whitespace-nowrap lg:mt-[40px] lg:ml-[240px] text-black font-bold p-4 md:p-10 rounded-full text-xl md:text-5xl z-30"
              >
                <p className="text-[18px] mt:text-[18px] lg:text-[26px] lg:mt-[14px]">
                  SEE CREATIVE WORK
                </p>
              </Link>

              <p className="text-black text-[220px] lg:mt-[-220px] ml-[-15px] sm:text-[250px] md:text-[500px] lg:text-[800px] font-[Heathergreen] text-center md:text-right md:float-right whitespace-nowrap mt-[-90px] md:mt-[-190px] md:ml-[100px]">
                CREATIVE
              </p>
            </div>
          </div>

          {/* Banana image as a full-screen overlay */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-20">
            <div className="w-full h-full max-w-screen max-h-screen flex items-center justify-center">
              <img
                ref={bananaRef}
                src={banana}
                alt="Banana character"
                className="max-w-full max-h-full lg:mt-[450px] lg:ml-[520px] md:max-w-3xl lg:max-w-4xl xl:max-w-5xl object-contain"
                style={{ aspectRatio: "preserve" }}
              />
            </div>
          </div>
          {/* Button and Back Arrow positioned together for desktop */}
          <div className="absolute hidden md:block bottom-8 left-8 flex flex-col items-start space-y-4 z-10">
            <button
              onClick={navigatePrev}
              className="text-black p-4 rounded-full"
            >
              <FaArrowLeft className="text-3xl md:text-5xl" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
