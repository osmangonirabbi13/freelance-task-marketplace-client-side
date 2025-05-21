import React from "react";
import { Navigate, useNavigate } from "react-router";
// import { Link } from "react-router";

const BrowseCard = ({ singleTask }) => {
  const { _id, Taskname, category, photo, price, description } = singleTask;
  const navigate = useNavigate();

  const handleTaskDetails = (_id) => {
    if (_id) {
      navigate(`/browse-tasks/${_id}`);
    }
  };
  return (
    <div className=" ">
      <div className="card bg-base-100  shadow-sm">
        <figure>
          <img src={photo} alt="Shoes" />
        </figure>
        <div className="card-body">
          <p className="card-title  text-ellipsis">{Taskname}</p>
          <h2 className="card-title text-sm md:text-lg lg:text-xl">
            <span className="font-bold text-indigo-500">Category :</span>{" "}
            {category}
          </h2>
          <h2 className="card-title">
            <span className="font-bold text-indigo-500">Budget : </span>
            {price} $
          </h2>
          <p className="truncate ">{description}</p>
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

export default BrowseCard;
