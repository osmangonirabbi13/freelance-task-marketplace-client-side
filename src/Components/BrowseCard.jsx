import React from "react";
import { useNavigate } from "react-router";

const BrowseCard = ({ singleTask }) => {
  const {
    _id,
    Taskname,
    category,
    price,
    description,
    userName,
    bidsCount,
    photo,
  } = singleTask;
  const navigate = useNavigate();

  const handleTaskDetails = (_id) => {
    if (_id) {
      navigate(`/browse-tasks/${_id}`);
    }
  };

  return (
    <div className="h-[450px] flex flex-col bg-base-100 shadow-sm dark:bg-gray-800 dark:text-white rounded-md overflow-hidden">
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
          <p className="font-bold text-gray-500 dark:text-gray-300 mb-1">
            {userName}
          </p>
          <h2 className="font-semibold text-lg mb-1 truncate">{Taskname}</h2>
          <p className="text-sm mb-1">
            <span className="font-bold text-indigo-500">Category:</span>{" "}
            {category}
          </p>
          <p className="text-sm mb-1">
            <span className="font-bold text-indigo-500">Budget:</span> {price} $
          </p>
          <p className="text-sm mb-1">Total Bids: {bidsCount}</p>
          <p className="text-sm text-gray-400 truncate">
            Description: {description}
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

export default BrowseCard;
