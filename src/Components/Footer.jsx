import React from "react";
import { Link } from "react-router";
import { FaGithub, FaFacebook, FaLinkedin } from "react-icons/fa";
import logo from "/logo.svg";

const Footer = () => {
  return (
    <div>
      <footer className="py-6  dark:bg-gray-900 text-black dark:text-white pt-20">
        <div
          className=" px-6 mx-auto space-y-6 divide-y dark:divide-gray-600 md:space-y-12 divide-opacity-50 "
          bis_skin_checked="1"
        >
          <div className="grid grid-cols-12" bis_skin_checked="1">
            <div
              className="pb-6 col-span-full md:pb-0 md:col-span-6"
              bis_skin_checked="1"
            >
              <Link
                rel="noopener noreferrer"
                to="/"
                className="flex justify-center space-x-3 md:justify-start"
              >
                <div
                  className="flex items-center justify-center w-12 h-12 rounded-full dark:bg-violet-600"
                  bis_skin_checked="1"
                >
                  <img src={logo} alt="" srcset="" />
                </div>
                <span className="self-center text-2xl font-semibold">
                  Freelance Marketplace
                </span>
              </Link>
            </div>
            <div
              className="col-span-6 text-center md:text-left md:col-span-3"
              bis_skin_checked="1"
            >
              <p className="pb-1 text-xl font-bold ">Category</p>
              <ul>
                <li>
                  <Link
                    rel="noopener noreferrer"
                    to="/"
                    className="hover:dark:text-violet-600 hover:text-indigo-800"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    rel="noopener noreferrer"
                    to="/add-task"
                    className="hover:dark:text-violet-600 hover:text-indigo-800"
                  >
                    Add Task
                  </Link>
                </li>
                <li>
                  <Link
                    rel="noopener noreferrer"
                    to="/browse-tasks"
                    className="hover:dark:text-violet-600 hover:text-indigo-800"
                  >
                    Browse Tasks
                  </Link>
                </li>
                <li>
                  <Link
                    rel="noopener noreferrer"
                    to="/my-tasks"
                    className="hover:dark:text-violet-600 hover:text-indigo-800"
                  >
                    My Post Task
                  </Link>
                </li>
              </ul>
            </div>
            <div
              className="col-span-6 text-center md:text-left md:col-span-3"
              bis_skin_checked="1"
            >
              <p className="pb-1 text-lg font-medium"> Address </p>
              <address>
                Address: Gobindapur Hazir Bazar , Feni <br />
                Phone No : +880123456789 <br />
              </address>
            </div>
          </div>
          <div
            className="grid justify-center pt-6 lg:justify-between"
            bis_skin_checked="1"
          >
            <div
              className="flex flex-col self-center text-sm text-center md:block lg:col-start-1 md:space-x-6"
              bis_skin_checked="1"
            >
              <span>©2025 All rights reserved</span>
              <a rel="noopener noreferrer" href="#">
                <span>Privacy policy</span>
              </a>
              <a rel="noopener noreferrer" href="#">
                <span>Terms of service</span>
              </a>
            </div>
            <div
              className="flex justify-center pt-4 space-x-4 lg:pt-0 lg:col-end-13"
              bis_skin_checked="1"
            >
              <Link
                to="https://github.com/osmangonirabbi13"
                target="blank"
                className="flex items-center justify-center w-10 h-10 rounded-full dark:bg-violet-600 dark:text-gray-50"
              >
                <FaGithub size={30} />
              </Link>
              <Link
                to="https://github.com/osmangonirabbi13"
                target="blank"
                className="flex items-center justify-center w-10 h-10 rounded-full dark:bg-violet-600 dark:text-gray-50"
              >
                <FaFacebook size={30} />
              </Link>
              <Link
                to="https://www.linkedin.com/in/md-osman-goni-rabbi/"
                target="blank"
                className="flex items-center justify-center w-10 h-10 rounded-full dark:bg-violet-600 dark:text-gray-50"
              >
                <FaLinkedin size={30} />
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
