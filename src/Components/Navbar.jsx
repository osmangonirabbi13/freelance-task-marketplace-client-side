import React from "react";
import { NavLink } from "react-router";

const Navbar = () => {
  const Links = (
    <ul>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/paybills">Add Task</NavLink>
      </li>
      <li>
        <NavLink to="/profile">Browse Tasks</NavLink>
      </li>
      <li>
        <NavLink to="/profile">My Posted Tasks</NavLink>
      </li>
    </ul>
  );
  return (
    <nav>
      <div className="navbar p-0 bg-white px-2 md:px-12 lg:px-16 xl:px-50 lg:py-4 body items-center">
        {/* Nav bar start  */}
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3  w-52 p-2 shadow"
            >
              {Links}
            </ul>
          </div>
          <a className=" text-sm md:text-2xl  lg:text-2xl font-semibold">
            Freelance <span className="text-emerald-400">Marketplace </span>
          </a>
          <div></div>
        </div>
        {/* Nav bar center  */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-5 text-xl font-medium">
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/paybills">Add Task</NavLink>
            </li>
            <li>
              <NavLink to="/profile">Browse Tasks</NavLink>
            </li>
            <li>
              <NavLink to="/profile">My Posted Tasks</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
