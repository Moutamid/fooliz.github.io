import React, { useRef, useState, useEffect } from "react";
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import vectorIcon from "../../assets/Group 55.svg";
import "./style.css";

const ContactPage = () => {
  const testimonials = [
    {
      name: "RIDER APP",
      text: "Absolutely blown away by the app developed! It's like you read our minds. User-friendly, sleek design, and flawless performance. A game-changer for our business!",
      image:
        "https://s3-alpha-sig.figma.com/img/983d/1c23/b1cb49125e6afb2afa495f719730af57?Expires=1742169600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=R3bRZ7-nAgIYBwig8Yr4PdEA6E3YDngVhpUbaeLL5WrFynud0g8iky5o1OMLZjNpsNeMM39525p3lSJcKj6HeGd5-XT~PTP7ceqdOqcsn9tY99hlc7hx1wKeBhBBykioYu4yoBMFb2tK9Bc~wOk8l0bCtVrJuVIvTXOWKgspwqpKaGOXotLSpQhjESoyptZ~ZsfP0L4DITsivKtC8xWDMv6qzVN1P4fXQ-1pHL~QJ5lW4rhs7rkTKBJa4Ne9Gol~gcZ7slcckEdX~g1ANBIHY2OvalLjNe5kqEyH3SpT3IAvkw~x~rKzvTlRzndpC7EKc5AQi0Glmoatz~DE4rU1Kg__",
      bgColor: "#dee13e",
    },
    {
      name: "TypeKing",
      text: "Absolutely blown away by the app developed! It's like you read our minds. User-friendly, sleek design, and flawless performance. A game-changer for our business!",
      image:
        "https://s3-alpha-sig.figma.com/img/7583/57be/ae9594f1160471db992db1cf36ca3f46?Expires=1742169600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=mOmGXSlvFwEnhHA0TuxrSF-w6lKg3BdkFPJGdPxoYicdEnpD~wSE~YZP129lr9iEMWV2DQM992nl6cHeMV2RmTDbEtv5DVESb5uX5ukdsEAHn8oapeaocNC6~wmPsPFp-X8CYftLYjLc3RzJ3V8FCsVGh14HB6qbn0O0sE2qtpnyvcHaEa8yb-sRq8m42akE8xk-YG8q1yfPP~tpjLjiC8wrjycTIH3fyyn1k7eEXSJOHKl8BGaRMI4SqXS2aq9YnHc5dUJAJcqm4od6At4gHLgPNFAS~-woPPt1cutDUBK62uP9~Woc90J8xMqCm1ojfnXo1qUDSPy-jIHGJ-7NvQ__",
      bgColor: "#5cba47",
    },
    {
      name: "GBPLUS",
      text: "Absolutely blown away by the app developed! It's like you read our minds. User-friendly, sleek design, and flawless performance. A game-changer for our business!",
      image:
        "https://s3-alpha-sig.figma.com/img/9cc4/464c/2f27326011ba562898e108aa9522819c?Expires=1742169600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=ISICWf-~48Sjl3A6MMVpHY75PsDbkBGho8nB6iaLnA4Uw9RW1avWHxw~kpkDZ0uM0XLwvdZ~3XVj4oR5nQkFGpdOj2qiVjuBZjzpESTOyluAp6aspYoCHpTFRlNg7Bq-l5VvzfmynwXS7MWOCBwqG~E9UrIwFr3cd2bmF4FKLfz-LzPMUW2~Rc6o4DDJiEZ4CW~JOICBlZCniZLk5mSOy9ApNXOPCk5jdB4qz1VyuiMf6fUv6svD5dD6wH~oPuEHsaVYFISsMMTTa6pQ1x5UwAUZbJTWbTlWKNRYdtMTiruoLEA1bsREdco1hpXLTj961U5aMQHiG4NAV0wpt4Xbfg__",
      bgColor: "#474cba",
    },
    {
      name: "ANNOE",
      text: "Absolutely blown away by the app developed! It's like you read our minds. User-friendly, sleek design, and flawless performance. A game-changer for our business!",
      image:
        "https://s3-alpha-sig.figma.com/img/a5bc/27e2/38474c3a8026069d17b3fde301968dd3?Expires=1742169600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=trkC7sa8Z45Fc9H9xnTFzvzxeck8dhr0Ewm4bCaeJeeupHa0LDZ6dQGOOnzkKMAx5l0F2ndLBVsmVFZsR3WGng8zzQQnep9~t5K27KuwcGsm0BHSy6jhzXP00oVLA4EPpFJWKfWGMkXKWbUHVoO-n4m60wK3NEmbrjN3flL0bIBQz1kLjuc6Fo8~8xN9ukDLcp5rGIyjRZBtw7QEYYsedrtaopRDC7mpXA4GgYf0wyq-uCH2Y0axnkC5kwuH5pKUHsgwIf3oDrspg2YMqqsOimn2qdOwUpEOl4Mwd3pWw-~nXBLQ53ygZ~2d-XufWBPGVYp~NxEapWun0iTGFt3jKg__",
      bgColor: "#ba47ae",
    },
    {
      name: "RIDER APP",
      text: "Absolutely blown away by the app developed! It's like you read our minds. User-friendly, sleek design, and flawless performance. A game-changer for our business!",
      image:
        "https://s3-alpha-sig.figma.com/img/983d/1c23/b1cb49125e6afb2afa495f719730af57?Expires=1742169600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=R3bRZ7-nAgIYBwig8Yr4PdEA6E3YDngVhpUbaeLL5WrFynud0g8iky5o1OMLZjNpsNeMM39525p3lSJcKj6HeGd5-XT~PTP7ceqdOqcsn9tY99hlc7hx1wKeBhBBykioYu4yoBMFb2tK9Bc~wOk8l0bCtVrJuVIvTXOWKgspwqpKaGOXotLSpQhjESoyptZ~ZsfP0L4DITsivKtC8xWDMv6qzVN1P4fXQ-1pHL~QJ5lW4rhs7rkTKBJa4Ne9Gol~gcZ7slcckEdX~g1ANBIHY2OvalLjNe5kqEyH3SpT3IAvkw~x~rKzvTlRzndpC7EKc5AQi0Glmoatz~DE4rU1Kg__",
      bgColor: "#dee13e",
    },
    {
      name: "RIDER APP",
      text: "Absolutely blown away by the app developed! It's like you read our minds. User-friendly, sleek design, and flawless performance. A game-changer for our business!",
      image:
        "https://s3-alpha-sig.figma.com/img/983d/1c23/b1cb49125e6afb2afa495f719730af57?Expires=1742169600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=R3bRZ7-nAgIYBwig8Yr4PdEA6E3YDngVhpUbaeLL5WrFynud0g8iky5o1OMLZjNpsNeMM39525p3lSJcKj6HeGd5-XT~PTP7ceqdOqcsn9tY99hlc7hx1wKeBhBBykioYu4yoBMFb2tK9Bc~wOk8l0bCtVrJuVIvTXOWKgspwqpKaGOXotLSpQhjESoyptZ~ZsfP0L4DITsivKtC8xWDMv6qzVN1P4fXQ-1pHL~QJ5lW4rhs7rkTKBJa4Ne9Gol~gcZ7slcckEdX~g1ANBIHY2OvalLjNe5kqEyH3SpT3IAvkw~x~rKzvTlRzndpC7EKc5AQi0Glmoatz~DE4rU1Kg__",
      bgColor: "#dee13e",
    },
    {
      name: "RIDER APP",
      text: "Absolutely blown away by the app developed! It's like you read our minds. User-friendly, sleek design, and flawless performance. A game-changer for our business!",
      image:
        "https://s3-alpha-sig.figma.com/img/983d/1c23/b1cb49125e6afb2afa495f719730af57?Expires=1742169600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=R3bRZ7-nAgIYBwig8Yr4PdEA6E3YDngVhpUbaeLL5WrFynud0g8iky5o1OMLZjNpsNeMM39525p3lSJcKj6HeGd5-XT~PTP7ceqdOqcsn9tY99hlc7hx1wKeBhBBykioYu4yoBMFb2tK9Bc~wOk8l0bCtVrJuVIvTXOWKgspwqpKaGOXotLSpQhjESoyptZ~ZsfP0L4DITsivKtC8xWDMv6qzVN1P4fXQ-1pHL~QJ5lW4rhs7rkTKBJa4Ne9Gol~gcZ7slcckEdX~g1ANBIHY2OvalLjNe5kqEyH3SpT3IAvkw~x~rKzvTlRzndpC7EKc5AQi0Glmoatz~DE4rU1Kg__",
      bgColor: "#dee13e",
    },
    {
      name: "RIDER APP",
      text: "Absolutely blown away by the app developed! It's like you read our minds. User-friendly, sleek design, and flawless performance. A game-changer for our business!",
      image:
        "https://s3-alpha-sig.figma.com/img/983d/1c23/b1cb49125e6afb2afa495f719730af57?Expires=1742169600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=R3bRZ7-nAgIYBwig8Yr4PdEA6E3YDngVhpUbaeLL5WrFynud0g8iky5o1OMLZjNpsNeMM39525p3lSJcKj6HeGd5-XT~PTP7ceqdOqcsn9tY99hlc7hx1wKeBhBBykioYu4yoBMFb2tK9Bc~wOk8l0bCtVrJuVIvTXOWKgspwqpKaGOXotLSpQhjESoyptZ~ZsfP0L4DITsivKtC8xWDMv6qzVN1P4fXQ-1pHL~QJ5lW4rhs7rkTKBJa4Ne9Gol~gcZ7slcckEdX~g1ANBIHY2OvalLjNe5kqEyH3SpT3IAvkw~x~rKzvTlRzndpC7EKc5AQi0Glmoatz~DE4rU1Kg__",
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
