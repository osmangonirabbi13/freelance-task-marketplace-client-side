import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { Outlet } from "react-router";

const MainLayouts = () => {
  return (
    <>
      <Navbar></Navbar>
      <div className="min-h-[calc(100vh-116px)]">
        <div className="max-w-screen-3xl  mx-auto px-8 md:px-12 lg:px-16">
          <Outlet />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default MainLayouts;
