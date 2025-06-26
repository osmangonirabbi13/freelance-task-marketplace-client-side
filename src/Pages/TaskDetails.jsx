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
  } = task;

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
      <div className="flex flex-col justify-center items-center max-w-screen-2xl mx-auto bg-white mt-40 rounded-2xl">
        <h1 className="text-3xl font-bold text-blue-500 mb-4 pt-9">
          No Data Found!!
        </h1>
        <p className="text-gray-700 text-xl">
          No Data Found with this Number -{" "}
          <span className="font-bold text-black-600">{_id}</span>
        </p>
        <Link to="/browse-tasks">
          <button className="btn btn-primary mt-6 mb-6">
            Browse All Tasks
          </button>
        </Link>
      </div>
    );
  }

  return (
    <div className="mt-10 max-w-screen-2xl mx-auto px-4">
      <h3 className="text-xl font-semibold mb-4 text-center">
        You bid for {bidsCount}{" "}
        {bidsCount === 1 ? "opportunity" : "opportunities"}.
      </h3>

      <div className="card lg:card-side bg-base-100 shadow-sm">
        <div className="card-body pl-10">
          <h2 className="card-title font-bold">{Taskname}</h2>
          <h2 className="text-sm md:text-lg lg:text-xl">
            <span className="font-bold text-indigo-500">Category :</span>{" "}
            {category}
          </h2>
          <h2 className="text-sm md:text-lg lg:text-xl">
            <span className="font-bold text-indigo-500">Budget :</span> {price}{" "}
            $
          </h2>
          <p className="text-sm md:text-lg lg:text-lg">
            <span className="font-bold text-indigo-500">Description :</span>{" "}
            {description}
          </p>

          <div className="mt-4">
            <button
              className="btn btn-primary"
              onClick={handleBid}
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
