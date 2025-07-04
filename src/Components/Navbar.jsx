import React, { use } from "react";
import { Link, NavLink } from "react-router";
import { AuthContext, useTheme } from "../Provider/AuthProvider";
import Loading from "../Pages/Loading";
import Swal from "sweetalert2";

const Navbar = () => {
  const { user, loading, logOut } = use(AuthContext);
  const { darkMode, toggleDarkMode } = useTheme();

  if (loading) return <Loading />;

  const handleLogOut = () => {
    logOut()
      .then(() => {
        Swal.fire({
          title: "Logout Successful",
          icon: "success",
          toast: true,
          position: "top-end",
          timer: 2000,
          showConfirmButton: false,
        });
      })
      .catch(console.error);
  };

  const navLinks = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/browse-tasks">Browse Task</NavLink>
      </li>
      <li>
        <NavLink to="/about">About Us</NavLink>
      </li>
      <li>
        <NavLink to="/contact-us">Contact Us</NavLink>
      </li>

      <li>
        <NavLink to="/terms-and-conditions">Terms And Conditions</NavLink>
      </li>
      {user && (
        <li>
          <NavLink to="/dashboard/home">Dashboard</NavLink>
        </li>
      )}
    </>
  );

  return (
    <div className="sticky top-0 z-50 bg-white dark:bg-gray-900 shadow-md">
      <div className="navbar max-w-8xl lg:px-50 mx-auto px-4 py-2 text-black dark:text-white">
        {/* Start */}
        <div className="navbar-start">
          {/* Mobile dropdown */}
          <div className="dropdown">
            <div tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[100] p-2 shadow bg-base-100 dark:bg-gray-800 rounded-box w-52"
            >
              {navLinks}
            </ul>
          </div>

          <Link to="/" className="text-xl font-bold hidden md:inline">
            Freelance <span className="text-emerald-500">Marketplace</span>
          </Link>
        </div>

        {/* Center */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-4 text-lg font-medium">
            {navLinks}
          </ul>
        </div>

        {/* End */}
        <div className="navbar-end">
          <label onClick={toggleDarkMode} className="swap swap-rotate mr-2">
            {darkMode ? (
              <svg
                className="h-8 w-8  text-yellow-400"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
              </svg>
            ) : (
              <svg
                className="h-8 w-8  "
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
              </svg>
            )}
          </label>

          {user ? (
            <div className="flex gap-2 ">
              {/* nav  bar end  */}

              <div className="dropdown dropdown-end">
                <div
                  tabIndex={0}
                  role="button"
                  className="btn btn-ghost btn-circle w-14 h-14 avatar"
                >
                  <div className="w-10  rounded-full">
                    <img
                      className=" "
                      alt="user profile"
                      src={`${user && user.photoURL}`}
                    />
                  </div>
                </div>
                <ul
                  tabIndex={0}
                  className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3  w-70 p-2 shadow dark:bg-gray-900 text-black dark:text-white"
                >
                  <li>
                    <div className="flex flex-col pb-4 items-start border-b-2 border-gray-200">
                      <p className=" text-sm pb-2 ">
                        {user && user.displayName}
                      </p>
                      <p className="">{user && user.email}</p>
                    </div>
                  </li>
                  <li></li>
                  <li>
                    <button onClick={handleLogOut}>Logout</button>
                  </li>
                </ul>
              </div>
            </div>
          ) : (
            <>
              <NavLink
                to="/auth/login"
                className="btn btn-primary border-none px-6 md:px-10"
              >
                Login
              </NavLink>
              <NavLink
                to="/auth/register"
                className="btn btn-primary border-none ml-5 mr-4 px-6 md:px-10"
              >
                Register
              </NavLink>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
