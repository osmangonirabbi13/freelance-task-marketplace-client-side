import React, { useContext, useState } from "react";
import { Link, useLoaderData } from "react-router";
import { AuthContext } from "../Provider/AuthProvider";
import Swal from "sweetalert2";

const TaskDetails = () => {
  const task = useLoaderData();
  const {
    _id,
    Taskname,
    category,
    price,
    description,
    bidsCount: initialBids,
    photo,
    deadline,
  } = task || {};

  const { user } = useContext(AuthContext);

  const [bidsCount, setBidsCount] = useState(initialBids || 0);
  const [isBidding, setIsBidding] = useState(false);

  const handleBid = () => {
    if (!user) {
      Swal.fire("Please log in to bid on this task.");
      return;
    }

    setIsBidding(true);

    fetch(
      `https://assignment-10-server-side-dun-two.vercel.app/freelances/${_id}/bid`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if (
          data.bidInserted ||
          data.bidsCountUpdated ||
          data.modifiedCount > 0
        ) {
          Swal.fire({
            title: "Bid placed successfully!",
            icon: "success",
          });
          setBidsCount((prev) => prev + 1);
        } else {
          Swal.fire({
            title: "Failed to place bid",
            icon: "error",
          });
        }
      })
      .catch((error) => {
        Swal.fire({
          title: "Error occurred!",
          text: error.message || "Something went wrong.",
          icon: "error",
        });
      })
      .finally(() => {
        setIsBidding(false);
      });
  };

  if (!_id) {
    return (
      <div className="flex flex-col justify-center items-center max-w-screen-2xl mx-auto bg-white dark:bg-gray-900 text-black dark:text-white mt-40 rounded-2xl p-8 transition-all">
        <h1 className="text-3xl font-bold text-blue-500 mb-4">
          No Data Found!!
        </h1>
        <p className="text-lg text-gray-700 dark:text-gray-300">
          No Data Found with this Number -
          <span className="font-bold text-black dark:text-white"> {_id}</span>
        </p>
        <Link to="/browse-tasks">
          <button className="btn btn-primary mt-6">Browse All Tasks</button>
        </Link>
      </div>
    );
  }

  return (
    <div className=" px-4 md:px-40 lg:px-[600px] py-10 bg-white dark:bg-gray-900 text-black dark:text-white shadow-md  transition-all duration-300">
      <h3 className="text-center text-xl font-semibold mb-6">
        You bid for {bidsCount}{" "}
        {bidsCount === 1 ? "opportunity" : "opportunities"}.
      </h3>

      <div className="flex flex-col rounded-md overflow-hidden shadow-md bg-base-100 dark:bg-gray-800 transition-all duration-300">
        <div className="w-full h-full">
          <img
            src={photo}
            alt={Taskname}
            className="w-full h-full object-cover"
          />
        </div>

        <div className="p-6 flex flex-col gap-3">
          <h2 className="text-2xl font-bold">{Taskname}</h2>

          <p className="text-sm text-gray-500 dark:text-gray-300">
            <span className="font-bold text-xl text-indigo-500">Deadline:</span>{" "}
            {deadline}
          </p>

          <p className="text-sm text-gray-500 dark:text-gray-300">
            <span className="font-bold text-xl text-indigo-500">Category:</span>{" "}
            {category}
          </p>

          <p className="text-sm text-gray-500 dark:text-gray-300">
            <span className="font-bold text-xl text-indigo-500">Budget:</span>{" "}
            {price} $
          </p>

          <p className="text-base leading-relaxed">
            <span className="font-bold text-xl text-indigo-500">
              Description:
            </span>{" "}
            {description}
          </p>

          <button
            onClick={handleBid}
            className="btn btn-primary text-xl w-full mt-4"
            disabled={isBidding}
          >
            {isBidding ? "Placing..." : "Place Bid"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default TaskDetails;
