import React from "react";
import TaskContainer from "../Components/TaskContainer";
import Hero from "../Components/Hero";

const Home = () => {
  return (
    <div className="dark:bg-gray-900 text-black dark:text-white w-full">
      <Hero />
      <TaskContainer />
    </div>
  );
};

export default Home;
