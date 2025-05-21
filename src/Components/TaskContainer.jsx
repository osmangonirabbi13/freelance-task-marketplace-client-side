import React from "react";
import { useLoaderData } from "react-router";
import TaskCard from "./TaskCard";

const TaskContainer = () => {
  const taskData = useLoaderData();

  const sortedTasks = [...taskData].sort(
    (a, b) => new Date(a.deadline) - new Date(b.deadline)
  );

  return (
    <div>
      <h1 className="text-center">Feature Services</h1>
      <p className="text-center">
        Discover our featured services designed to elevate your experience
      </p>
      <div className="max-w-screen-2xl mx-auto px-8 md:px-12 lg:px-8 mt-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sortedTasks.map((singleTask) => (
            <TaskCard key={singleTask._id} singleTask={singleTask} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TaskContainer;
