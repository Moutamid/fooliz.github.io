import React, { useRef, useState, useEffect } from "react";
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import vectorIcon from "../../assets/Group 55.svg";
import "./style.css";

const ContactPage = () => {
  const testimonials = [
    {
      name: "Holli Dov - USA",
      text: "Quick delivery and turnaround time that was extremely helpful with a last-minute project that needed profound expertise to master. He came through with flying colors and helped our team over the finish line. Thanks so much!! We really appreciate it.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/foolee-inc.appspot.com/o/fooliz.-website-assets%2FWork_ID_Final.webp?alt=media&token=fecb5417-2c6f-4c8b-ba89-c7b5158ab4cc",
      bgColor: "#dee13e",
    },
    {
      name: "Hera Rex - Canada",
      text: "They were very good to work with. He satisfied all the task requirements, and was able to delivery it ahead of schedule, defently exceeded expectations and look forward in working in other projects. He is very talented at what he does, and his communication is perfect.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/foolee-inc.appspot.com/o/fooliz.-website-assets%2F1f7bca4b-4dfe-4fc8-a36b-1756d3de0074.webp?alt=media&token=67130bc6-41bd-4738-98ee-6d21dda4372d",
      bgColor: "#5cba47",
    },
    {
      name: "ArmStrong - USA",
      text: "I recently had the pleasure of working with them, they developed an application for me, and I am highly impressed with their work! From start to finish, incredibly professional, responsive, and easy to work with. One of the things I appreciated most about him was his attention to detail. He took the time to understand my needs and goals for the application.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/foolee-inc.appspot.com/o/fooliz.-website-assets%2F254209_1996841794503_1047210085_32208484_3612711_n.webp?alt=media&token=e02f6c2d-2735-496c-9f60-d95472932b09",
      bgColor: "#474cba",
    },
    {
      name: "Pascal - UK",
      text: "Very good. Delivered the project on time, and were very polite and helped every time I had a question. Would def recommend them.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/foolee-inc.appspot.com/o/fooliz.-website-assets%2F673F2D55-E1FF-4235-A6CB-22C8A3E4C21C.webp?alt=media&token=6efe51ea-3b51-441c-a12d-67bc56df20db",
      bgColor: "#ba47ae",
    },
    {
      name: "Waleed Zayed - UAE",
      text: "5th project with them. Very nice and easy to communicate with person did the job as requested from first time. Beautifull app and easy to use GUI. Takes into consideration all parameters without even me mentioning anything would do all future apps with them",
      image:
        "https://firebasestorage.googleapis.com/v0/b/foolee-inc.appspot.com/o/fooliz.-website-assets%2F91ef5a66-c5bd-45b3-8bd8-9f0d56752e0a.webp?alt=media&token=789e2c16-e877-489a-8a5c-29d8dea13ee1",
      bgColor: "#dee13e",
    },
    {
      name: "Igor Bau - Switzerland",
      text: "Professional app programmers. We are very satisfied with the work and are happy to recommend them. They delivered perfect work in just a few days under time pressure. We are very grateful.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/foolee-inc.appspot.com/o/fooliz.-website-assets%2Fcff9df35-6f31-4d12-8721-d6347cf059e3.webp?alt=media&token=790251e3-5e43-47b6-92a0-c28c9a12def7",
      bgColor: "#dee13e",
    },
    {
      name: "Daniel Yakun - Kenya",
      text: "Absolutely fantastic work. They delivered a very nice app with good structured code which was very easy to read. They resolved all the bugs and even accepted my additional requests later on. This is a true machine :-) Definitely my man from on again!",
      image:
        "https://firebasestorage.googleapis.com/v0/b/foolee-inc.appspot.com/o/fooliz.-website-assets%2Fd3495dd1-94c6-4180-a430-98477a3be588.webp?alt=media&token=b91899c0-2640-40c2-b0bf-372608dabc04",
      bgColor: "#dee13e",
    },
    {
      name: "Dave - UK",
      text: "They recently helped me with an app and I was happy with the work. They completed this app for me quickly and exactly as I described. The source code is clean and easy to read. Fantastic people to work with and great communication.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/foolee-inc.appspot.com/o/fooliz.-website-assets%2Feb9e8100-cded-434d-bbe5-0177bbb48913.webp?alt=media&token=ecea24cd-7ace-4dbc-bc45-bba7ee851330",
      bgColor: "#dee13e",
    },
  ];

  const desktopCarouselRef = useRef(null);
  const mobileCarouselRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Check for mobile view
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  // For desktop auto-scrolling
  useEffect(() => {
    if (!desktopCarouselRef.current) return;

    // Add auto-scrolling class to the desktop slider
    desktopCarouselRef.current.classList.add("auto-scrolling");

    // Pause animation when interacting with slider
    const pauseAnimation = () => setIsPaused(true);
    const resumeAnimation = () => setIsPaused(false);

    desktopCarouselRef.current.addEventListener("mouseenter", pauseAnimation);
    desktopCarouselRef.current.addEventListener("mouseleave", resumeAnimation);

    return () => {
      if (desktopCarouselRef.current) {
        desktopCarouselRef.current.removeEventListener(
          "mouseenter",
          pauseAnimation
        );
        desktopCarouselRef.current.removeEventListener(
          "mouseleave",
          resumeAnimation
        );
      }
    };
  }, []);

  // For mobile auto-scrolling
  useEffect(() => {
    if (!mobileCarouselRef.current) return;

    // Add auto-scrolling class to the mobile slider
    mobileCarouselRef.current.classList.add("mobile-auto-scrolling");

    // Pause animation when interacting with slider
    const pauseAnimation = () => setIsPaused(true);
    const resumeAnimation = () => setIsPaused(false);

    mobileCarouselRef.current.addEventListener("touchstart", pauseAnimation);
    mobileCarouselRef.current.addEventListener("touchend", resumeAnimation);

    return () => {
      if (mobileCarouselRef.current) {
        mobileCarouselRef.current.removeEventListener(
          "touchstart",
          pauseAnimation
        );
        mobileCarouselRef.current.removeEventListener(
          "touchend",
          resumeAnimation
        );
      }
    };
  }, []);

  // Apply or remove paused class based on interaction
  useEffect(() => {
    if (desktopCarouselRef.current) {
      if (isPaused) {
        desktopCarouselRef.current.classList.add("paused");
      } else {
        desktopCarouselRef.current.classList.remove("paused");
      }
    }

    if (mobileCarouselRef.current) {
      if (isPaused) {
        mobileCarouselRef.current.classList.add("paused");
      } else {
        mobileCarouselRef.current.classList.remove("paused");
      }
    }
  }, [isPaused]);

  const startDragging = (e) => {
    setIsDragging(true);
    setIsPaused(true);
    const pageX = e.pageX || (e.touches && e.touches[0].pageX);
    const currentRef = isMobile
      ? mobileCarouselRef.current
      : desktopCarouselRef.current;
    setStartX(pageX - currentRef.offsetLeft);
    setScrollLeft(currentRef.scrollLeft);
  };

  const stopDragging = () => {
    setIsDragging(false);
    // Add a slight delay before resuming animation
    setTimeout(() => setIsPaused(false), 1000);
  };

  const drag = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const pageX = e.pageX || (e.touches && e.touches[0].pageX);
    const currentRef = isMobile
      ? mobileCarouselRef.current
      : desktopCarouselRef.current;
    const x = pageX - currentRef.offsetLeft;
    const walk = (x - startX) * 2;
    currentRef.scrollLeft = scrollLeft - walk;
  };

  // Clone testimonials for infinite scrolling effect
  const duplicatedTestimonials = [...testimonials, ...testimonials];

  // Prepare testimonials for mobile view (two rows)
  const prepareRowsForMobile = () => {
    const row1 = [];
    const row2 = [];

    for (let i = 0; i < duplicatedTestimonials.length; i++) {
      if (i % 2 === 0) {
        row1.push(duplicatedTestimonials[i]);
      } else {
        row2.push(duplicatedTestimonials[i]);
      }
    }

    return [row1, row2];
  };

  const mobileRows = prepareRowsForMobile();

  return (
    <div className="relative min-h-screen bg-white">
      <Header />

      <a href="home">
        <img
          src={vectorIcon}
          alt="Decoration"
          className="fixed top-6 right-6 w-10 h-10 cursor-pointer"
        />
      </a>

      <div className="flex items-center justify-center">
        <div className="w-full max-w-[979px] h-[13px] bg-[#D9D9D9]"></div>
      </div>

      {/* Desktop View */}
      <div className="overflow-hidden relative mt-[60px] mb-[60px] hidden md:block">
        <div
          ref={desktopCarouselRef}
          onMouseDown={startDragging}
          onMouseLeave={stopDragging}
          onMouseUp={stopDragging}
          onMouseMove={drag}
          onTouchStart={startDragging}
          onTouchMove={drag}
          onTouchEnd={stopDragging}
          className="
      slider
      flex
      cursor-grab
      active:cursor-grabbing
      space-x-6
      px-6
      py-12
      infinite-scroll-wrapper
    "
        >
          {duplicatedTestimonials.map((testimonial, index) => (
            <div
              key={`desktop-${index}`}
              style={{ backgroundColor: testimonial.bgColor }}
              className="
          flex-shrink-0
          w-[295px]
          h-[418px]
          rounded-2xl
          shadow-lg
          flex
          flex-col
          items-center
          text-center
          p-6
        "
            >
              <img
                src={testimonial.image}
                alt={`${testimonial.name} testimonial`}
                className="w-[133px] h-[129.88px] rounded-full mb-4 object-cover"
              />
              <h3 className="text-white font-bold text-xl">
                {testimonial.name}
              </h3>
              <p className="text-black mt-2 text-sm">{testimonial.text}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Mobile View */}
      <div className="overflow-hidden relative mt-[60px] mb-[60px] md:hidden">
        <div
          ref={mobileCarouselRef}
          onTouchStart={startDragging}
          onTouchMove={drag}
          onTouchEnd={stopDragging}
          className="
            mobile-slider
            flex
            flex-col
            space-y-6
            px-4
            py-6
            mobile-infinite-scroll-wrapper
          "
        >
          {mobileRows.map((row, rowIndex) => (
            <div key={`row-${rowIndex}`} className="flex space-x-4 mobile-row">
              {row.map((testimonial, index) => (
                <div
                  key={`mobile-${rowIndex}-${index}`}
                  style={{ backgroundColor: testimonial.bgColor }}
                  className="
                    flex-shrink-0
                    w-[160px]
                    h-[240px]
                    rounded-2xl
                    shadow-lg
                    flex
                    flex-col
                    items-center
                    text-center
                    p-3
                  "
                >
                  <img 
                    src={testimonial.image}
                    alt={`${testimonial.name} testimonial`}
                    className="w-[70px] h-[70px] rounded-full mb-2 object-cover"
                  />
                  <h3 className="text-white font-bold text-xl">
                    {testimonial.name}
                  </h3>
                  <p className="text-black mt-2 text-[11px] line-clamp-6 text-center leading-none">
                    {testimonial.text}
                  </p>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ContactPage;
