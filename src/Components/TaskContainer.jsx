import React from "react";
import { useLoaderData } from "react-router";
import TaskCard from "./TaskCard";
import { Typewriter } from "react-simple-typewriter";
import { Fade } from "react-awesome-reveal";

const TaskContainer = () => {
  const taskData = useLoaderData();

  const sortedTasks = [...taskData].sort(
    (a, b) => new Date(a.deadline) - new Date(b.deadline)
  );

  return (
    <div>
      <Fade direction="down" duration={1500}>
        <h1 className="text-center pt-16 text-3xl">
          Feature{" "}
          <span className="text-emerald-400">
            <Typewriter
              cursor
              cursorBlinking
              cursorColor="#cd0808"
              delaySpeed={1000}
              deleteSpeed={25}
              loop={0}
              typeSpeed={75}
              words={["Services", "Task"]}
            />
          </span>
        </h1>
      </Fade>

      <Fade direction="up" duration={1500}>
        <p className="text-center pt-5 text-xl">
          Discover our featured services designed to elevate your experience
        </p>
      </Fade>
      <Fade direction="left" duration={1800}>
        <div className="max-w-screen-2xl mx-auto px-8 md:px-12 lg:px-8 mt-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {sortedTasks.map((singleTask) => (
              <TaskCard key={singleTask._id} singleTask={singleTask} />
            ))}
          </div>
        </div>
      </Fade>
    </div>
  );
};

export default TaskContainer;
