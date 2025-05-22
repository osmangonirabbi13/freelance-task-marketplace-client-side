import React from "react";
import TaskContainer from "../Components/TaskContainer";
import Hero from "../Components/Hero";
import NeedSomething from "../Components/NeedSomething";
import FreelanceTalent from "../Components/FreelanceTalent";

const Home = () => {
  return (
    <div className="dark:bg-gray-900 text-black dark:text-white w-full">
      <Hero />
      <TaskContainer />
      <NeedSomething />
      <FreelanceTalent />
    </div>
  );
};

export default Home;
