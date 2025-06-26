import React from "react";
import { useNavigate } from "react-router";

const ServiceCard = ({ singleTask }) => {
  const { _id, Taskname, category, price, deadline, description, userName } =
    singleTask;

  const navigate = useNavigate();

  const handleTaskDetails = (_id) => {
    if (_id) {
      navigate(`/browse-tasks/${_id}`);
    }
  };

  return (
    <div>
      <div className="card h-80 bg-base-100 shadow-sm mb-5 dark:bg-gray-800 dark:text-white transition-all duration-300">
        <div className="card-body">
          <p className="font-bold text-gray-500 dark:text-gray-300">
            {userName}
          </p>
          <p className="font-semibold text-sm">Deadline: {deadline}</p>

          <p className="card-title text-ellipsis">{Taskname}</p>

          <h2 className="card-title text-sm md:text-lg lg:text-xl">
            <span className="font-bold text-indigo-500">Category:</span>{" "}
            {category}
          </h2>

          <h2 className="card-title">
            <span className="font-bold text-indigo-500">Budget:</span> {price} $
          </h2>

          <p className="truncate">{description}</p>

          <div className="card-actions mt-5">
            <button
              onClick={() => handleTaskDetails(_id)}
              className="btn btn-primary w-full"
            >
              See Details
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
