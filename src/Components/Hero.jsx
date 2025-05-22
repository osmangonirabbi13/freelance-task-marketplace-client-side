import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import slider1 from "../assets/slider1.png";
import slider2 from "../assets/slider2.png";
import slider3 from "../assets/slider3.png";

// Import Swiper styles
import "swiper/css";
import { Link } from "react-router";
import "./style.css";
import { Typewriter } from "react-simple-typewriter";

const Hero = () => {
  return (
    <div className="">
      <Swiper className="mySwiper h-[500px] bg-[#F1F6F2]  md:h-[350px] lg:h-[500px]  rounded-xl dark:bg-gray-900 text-black    dark:text-white">
        <SwiperSlide className="slide1 ">
          <div className="flex flex-col items-center md:flex-row md:flex md:justify-between md:items-center md:mx-12 lg:flex-row lg:justify-between lg:mx-24  2xl:mx-50 lg:my-8 2xl:my-8 ">
            <div>
              <div className="pt-6  px-4 md:w-[350px] lg:w-[470px]">
                <h1 className=" text-3xl md:text-2xl lg:text-3xl font-bold ">
                  <Typewriter
                    cursor
                    cursorBlinking
                    cursorColor="#cd0808"
                    delaySpeed={1000}
                    deleteSpeed={25}
                    loop={0}
                    typeSpeed={75}
                    words={[
                      "Unlock the power of freelancers for your business needs",
                    ]}
                  />
                </h1>
                <p className="text-base-content pt-3 dark:bg-gray-900 text-black    dark:text-white">
                  Unlock the Power of Freelancers to Meet Your Business Needs
                  and Propel Your Company Forward
                </p>
                <div className="pt-4">
                  <Link to="/browse-tasks" className="btn btn-primary">
                    Explore Now
                  </Link>
                </div>
              </div>
            </div>
            <div className=" pt-10  md:pt-6 lg:pt-0 md:h-[340px] lg:h-[500px] ">
              <img src={slider1} />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex flex-col items-center md:flex-row md:flex md:justify-between md:items-center md:mx-12 lg:flex-row lg:justify-between lg:mx-24  2xl:mx-50">
            <div>
              <div className="pt-6 px-4 lg:w-[470px]">
                <h1 className=" text-3xl md:text-2xl lg:text-3xl font-bold ">
                  <Typewriter
                    cursor
                    cursorBlinking
                    cursorColor="#cd0808"
                    delaySpeed={1000}
                    deleteSpeed={25}
                    loop={0}
                    typeSpeed={75}
                    words={["Find & Hire Expert Freelancers"]}
                  />
                </h1>
                <p className="text-base-content pt-3 dark:bg-gray-900 text-black    dark:text-white">
                  Work with the best freelance talent from around the world on
                  our secure, flexible and cost-effective platform.
                </p>
                <div className="pt-4">
                  <Link to="/browse-tasks" className="btn btn-primary">
                    Explore Now
                  </Link>
                </div>
              </div>
            </div>
            <div className=" pt-10  md:pt-6 lg:pt-0 md:h-[340px] lg:h-[500px]">
              <img src={slider2} />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex flex-col items-center md:flex-row md:flex md:justify-between md:items-center md:mx-12 lg:flex-row lg:justify-between lg:mx-24  2xl:mx-50">
            <div>
              <div className="pt-6 px-4 lg:w-[450px]">
                <h1 className=" text-3xl md:text-2xl lg:text-3xl font-bold ">
                  <Typewriter
                    cursor
                    cursorBlinking
                    cursorColor="#cd0808"
                    delaySpeed={1000}
                    deleteSpeed={25}
                    loop={0}
                    typeSpeed={75}
                    words={["Discover Top Talent"]}
                  />
                </h1>
                <p className="text-base-content pt-3 dark:bg-gray-900 text-black    dark:text-white">
                  Access a diverse pool of freelancers ready to meet your needs.
                  Simplify your search for the perfect service provider.
                </p>
                <div className="pt-4">
                  <Link to="/browse-tasks" className="btn btn-primary">
                    Explore Now
                  </Link>
                </div>
              </div>
            </div>
            <div className="  pt-8  md:pt-6 lg:pt-0 md:h-[340px] lg:h-[500px]">
              <img src={slider3} />
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Hero;
