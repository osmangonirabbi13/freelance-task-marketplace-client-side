import React from "react";
import { useLoaderData } from "react-router";
import BrowseCard from "../Components/BrowseCard";

const BrowseTasks = () => {
  const initialTasks = useLoaderData();

  return (
    <div className="max-w-screen-2xl  mx-auto px-8 md:px-12 lg:px-8 mt-20  ">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {initialTasks.map((singleTask) => (
          <BrowseCard key={singleTask._id} singleTask={singleTask}></BrowseCard>
        ))}
      </div>
    </div>
  );
};

export default BrowseTasks;
