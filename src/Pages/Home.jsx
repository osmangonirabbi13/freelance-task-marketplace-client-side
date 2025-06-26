import React from "react";
import TaskContainer from "../Components/TaskContainer";
import Hero from "../Components/Hero";
import NeedSomething from "../Components/NeedSomething";
import FreelanceTalent from "../Components/FreelanceTalent";
import SubscribeNews from "../Components/SubscribeNews";
import ClientLogosMarquee from "../Components/ClientLogosMarquee";

const Home = () => {
  return (
    <div className="dark:bg-gray-900 text-black dark:text-white w-full">
      <Hero />
      <TaskContainer />
      <NeedSomething />
      <ClientLogosMarquee />
      <FreelanceTalent />

      <SubscribeNews />
    </div>
  );
};

export default Home;
