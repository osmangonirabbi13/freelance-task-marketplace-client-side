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
    <div className="md:px-10 lg:px-40 px-4 py-10 bg-white dark:bg-gray-900 text-black dark:text-white  shadow-md transition-all duration-300">
      <h3 className="text-xl font-semibold mb-6 text-center">
        You bid for {bidsCount}{" "}
        {bidsCount === 1 ? "opportunity" : "opportunities"}.
      </h3>

      <div className="card lg:card-side bg-base-100 dark:bg-gray-800 text-black dark:text-white shadow-md transition-all">
        <div className="card-body p-6 lg:pl-10">
          <h2 className="card-title font-bold text-2xl">{Taskname}</h2>

          <h2 className="text-sm md:text-lg lg:text-xl mt-2">
            <span className="font-bold text-indigo-500">Category :</span>{" "}
            {category}
          </h2>

          <h2 className="text-sm md:text-lg lg:text-xl mt-2">
            <span className="font-bold text-indigo-500">Budget :</span> {price}{" "}
            $
          </h2>

          <p className="text-sm md:text-base lg:text-lg mt-2">
            <span className="font-bold text-indigo-500">Description :</span>{" "}
            {description}
          </p>

          <div className="mt-6">
            <button
              onClick={handleBid}
              className="btn btn-primary"
              disabled={isBidding}
            >
              {isBidding ? "Placing..." : "Place Bid"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskDetails;
