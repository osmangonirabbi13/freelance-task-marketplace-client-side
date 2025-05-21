import React, { useContext, useState } from "react";
import { useLoaderData } from "react-router";
import { AuthContext } from "../Provider/AuthProvider";
import MyPostContainer from "../Components/MyPostContainer";

const MyPostTasks = () => {
  const initialTask = useLoaderData();
  const [tasks, setTasks] = useState(initialTask);
  const { user } = useContext(AuthContext);
  const userEmail = user?.email;

  const myTasks = tasks.filter((task) => task.email === userEmail);

  return (
    <div className="p-4 max-w-5xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">My Posted Tasks</h1>
      {myTasks.length > 0 ? (
        <div className="space-y-6">
          {myTasks.map((task) => (
            <MyPostContainer
              key={task._id}
              tasks={tasks}
              setTasks={setTasks}
              task={task}
            />
          ))}
        </div>
      ) : (
        <p>You haven't posted any tasks yet.</p>
      )}
    </div>
  );
};

export default MyPostTasks;
