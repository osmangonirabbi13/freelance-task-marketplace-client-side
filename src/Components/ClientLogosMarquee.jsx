import React from "react";
import Marquee from "react-fast-marquee";

// import your logos
import amazon from "../assets/brands/amazon.png";
import google from "../assets/brands/google.png";
import casio from "../assets/brands/casio.png";
import moonstar from "../assets/brands/moonstar.png";
import start from "../assets/brands/start.png";
import randstad from "../assets/brands/randstad.png";
import people from "../assets/brands/start-people 1.png";

const logos = [amazon, google, casio, moonstar, start, randstad, people];

const ClientLogosMarquee = () => {
  return (
    <section className="py-16 ">
      <div data-aos="fade-up" className="max-w-8xl mx-auto px-4">
        <div>
          <h2 className="text-3xl  text-success font-bold text-center mb-4">
            Trusted by Partners
          </h2>
          <div className="h-[2px] w-[150px] bg-secondary mx-auto mb-6"></div>
        </div>

        <Marquee pauseOnHover speed={50} gradient={false}>
          {logos.map((logo, idx) => (
            <div key={idx} className="mx-24 flex items-center dark:text-white">
              <img
                src={logo}
                alt={`Client Logo ${idx + 1}`}
                className="h-6 object-contain"
              />
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  );
};

export default ClientLogosMarquee;
