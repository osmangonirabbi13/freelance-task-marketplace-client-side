import React from "react";
import { useLoaderData } from "react-router";

const TaskDetails = () => {
  const data = useLoaderData();
  const { _id, Taskname, category, photo, price, description } = data;
  console.log(data);
  return (
    <div className="mt-10 max-w-screen-2xl  mx-auto">
      <div className="card lg:card-side bg-base-100 shadow-sm ">
        <figure className="w-full p-4 ">
          <img className="rounded-2xl" src={photo} alt="Album" />
        </figure>
        <div className="card-body pl-10">
          <h2 className="card-title font-bold">{Taskname}</h2>
          <h2 className=" text-sm md:text-lg lg:text-xl">
            <span className="font-bold text-indigo-500">Category :</span>{" "}
            {category}
          </h2>
          <h2 className=" text-sm md:text-lg lg:text-xl">
            <span className="font-bold text-indigo-500">Budget : </span>
            {price} $
          </h2>
          <p className="text-sm md:text-lg lg:text-lg ">
            {" "}
            <span className="font-bold text-indigo-500">
              Description :
            </span>{" "}
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default TaskDetails;
