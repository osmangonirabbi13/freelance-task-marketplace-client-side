import React from "react";
import { useNavigate } from "react-router";

const ServiceCard = ({ singleTask }) => {
  const {
    _id,
    Taskname,
    category,
    price,
    deadline,
    description,

    photo,
  } = singleTask;

  const navigate = useNavigate();

  const handleTaskDetails = (_id) => {
    if (_id) {
      navigate(`/browse-tasks/${_id}`);
    }
  };

  return (
    <div className="h-[450px] flex flex-col bg-base-100 shadow-sm mb-5 dark:bg-gray-800 dark:text-white rounded-md overflow-hidden transition-all duration-300">
      {/* Image Section */}
      <div className="h-48 w-full">
        <img
          src={photo}
          alt={Taskname}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Body Section */}
      <div className="flex-grow p-4 flex flex-col justify-between">
        <div>
          <h2 className="font-semibold  mb-1 truncate">{Taskname}</h2>
          <p className="font-semibold   mb-1">Deadline: {deadline}</p>
          <p className="text-sm mb-1">
            <span className="font-bold text-lg text-indigo-500">Category:</span>{" "}
            {category}
          </p>

          <p className="text-sm mb-1">
            <span className="font-bold text-lg text-indigo-500">Budget:</span>{" "}
            {price} $
          </p>
          <p className="text-sm mb-1 truncate">
            <span className="font-bold text-lg text-indigo-500 ">
              Description:
            </span>{" "}
            {description}
          </p>
        </div>

        {/* Button */}
        <div className="mt-4">
          <button
            onClick={() => handleTaskDetails(_id)}
            className="btn btn-primary w-full"
          >
            See Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
