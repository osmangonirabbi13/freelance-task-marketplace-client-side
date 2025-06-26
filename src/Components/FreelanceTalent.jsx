import React from "react";
import { HiOutlineCheckBadge } from "react-icons/hi2";
import { AiOutlineSafety } from "react-icons/ai";
import { MdOutlineMonetizationOn } from "react-icons/md";
import { SiTicktick } from "react-icons/si";

import women from "../assets/women.png";

const FreelanceTalent = () => {
  return (
    <div className="pt-20  bg-[#FFEDE9] dark:bg-gray-800 text-black dark:text-white pb-10">
      <div className="flex flex-col lg:flex-row md:flex-row  max-w-screen-2xl mx-auto px-8 md:px-12 lg:px-8 lg:justify-between items-center">
        <div>
          <h1 className="text-3xl  lg:text-5xl ">
            A whole world of freelance talent at your fingertips
          </h1>
          <div className="flex pt-6 items-center gap-4">
            <div>
              <HiOutlineCheckBadge size={30} />
            </div>
            <div>
              <h1 className="font-bold">Proof of quality</h1>
              <p>
                Browse portfolios, read verified client reviews, and hire with
                confidence knowing each freelancer is thoroughly vetted.
              </p>
            </div>
          </div>
          {/* div 2 */}
          <div className="flex  pt-6 items-center gap-4">
            <div>
              <MdOutlineMonetizationOn size={30} />
            </div>
            <div>
              <h1 className="font-bold">No cost until you hire</h1>
              <p>
                Post your project for free. You only pay when you’re 100%
                satisfied with the work and ready to hire.
              </p>
            </div>
          </div>
          {/* div 3 */}
          <div className="flex  pt-6 items-center gap-4">
            <div>
              <AiOutlineSafety size={30} />
            </div>
            <div>
              <h1 className="font-bold">Safe and secure</h1>
              <p>
                Your data and payments are protected through secure systems,
                giving you peace of mind every step of the way.
              </p>
            </div>
          </div>
        </div>
        <div className="pt-5 lg:pt-0 md:pt-0 relative">
          <div>
            <img className="" src={women} alt="" srcset="" />
            <div className="bg-[#1F4B3F] absolute top-40 lg:-left-16  w-60 px-4 py-6 rounded-xl dark:bg-gray-900 text-white font-bold dark:text-white">
              <div className="flex gap-2 items-center">
                <div>
                  <SiTicktick />
                </div>
                <div>The best for every budget</div>
              </div>
              <div className="flex gap-2 pt-4 items-center">
                <div>
                  <SiTicktick />
                </div>
                <div>Quality work done quickly</div>
              </div>
              <div className="flex gap-2 pt-4 items-center">
                <div>
                  <SiTicktick />
                </div>
                <div>Protected payments, every time</div>
              </div>
              <div className="flex gap-2  pt-4 items-center">
                <div>
                  <SiTicktick />
                </div>
                <div>24/7 support</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FreelanceTalent;
