import React from "react";
import { LuFileCode2 } from "react-icons/lu";
import freelancer from "../assets/freelancer.png";
import job from "../assets/job.png";
import pay from "../assets/pay.png";
import help from "../assets/help.png";
import { Typewriter } from "react-simple-typewriter";
import { Fade } from "react-awesome-reveal";

const NeedSomething = () => {
  return (
    <div>
      <Fade direction="up" duration={1500}>
        <h1 className="text-center pt-16 text-3xl">
          Need something{" "}
          <span className="text-emerald-400">
            <Typewriter
              cursor
              cursorBlinking
              cursorColor="#cd0808"
              delaySpeed={1000}
              deleteSpeed={25}
              loop={0}
              typeSpeed={75}
              words={["done?"]}
            />
          </span>
        </h1>
        <p className="text-center text-xl">
          Most viewed and all-time top-selling services
        </p>
      </Fade>

      <div className="grid grid-cols-2 gap-5 lg:grid-cols-4 max-w-screen-2xl mx-auto px-8 md:px-12 lg:px-8 mt-20">
        <Fade direction="up" duration={1000}>
          <div>
            <img
              className="w-20 dark:bg-white p-2"
              src={job}
              alt=""
              srcset=""
            />
            <h1 className="text-2xl mt-2">Post a job</h1>
            <p className="mt-2">
              Share your task details and let freelancers find you quickly.
            </p>
          </div>
        </Fade>
        <Fade direction="up" duration={1000}>
          <div>
            <img
              className="w-20 dark:bg-white p-2"
              src={freelancer}
              alt=""
              srcset=""
            />
            <h1 className="text-2xl mt-2">Choose freelancers</h1>
            <p className="mt-2">
              Browse through expert profiles and pick the right fit for your
              job.
            </p>
          </div>
        </Fade>
        <Fade direction="up" duration={1000}>
          <div>
            <img
              className="w-20  dark:bg-white p-2"
              src={pay}
              alt=""
              srcset=""
            />
            <h1 className="text-2xl mt-2">Pay safely</h1>
            <p className="mt-2">
              Use our secure system to make payments with confidence.
            </p>
          </div>
        </Fade>
        <Fade direction="up" duration={1000}>
          <div>
            <img
              className="w-20 dark:bg-white p-2"
              src={help}
              alt=""
              srcset=""
            />
            <h1 className="text-2xl mt-2">We’re here to help</h1>
            <p className="mt-2">
              Our support team is ready 24/7 to assist you whenever you need.
            </p>
          </div>
        </Fade>
      </div>
    </div>
  );
};

export default NeedSomething;
