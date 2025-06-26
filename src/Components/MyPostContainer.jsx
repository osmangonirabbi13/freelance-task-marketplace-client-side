import React from "react";
import { MdDeleteForever } from "react-icons/md";
import { FaPencilAlt } from "react-icons/fa";
import Swal from "sweetalert2";
import { Link } from "react-router";

const MyPostContainer = ({ task, setTasks, tasks }) => {
  const { _id, Taskname, category, deadline, price, bidsCount } = task;

  const handleDelete = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        // start deleting the  Task

        fetch(
          `https://assignment-10-server-side-dun-two.vercel.app/freelances/${_id}`,
          {
            method: "DELETE",
          }
        )
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount) {
              Swal.fire({
                title: "Deleted!",
                text: "Your Coffee has been deleted.",
                icon: "success",
              });

              // remove the Task from the state
              const remainingTasks = tasks.filter((cof) => cof._id !== _id);
              setTasks(remainingTasks);
            }
          });
      }
    });
  };

  return (
    <div className="w-full border p-6 rounded-xl shadow-md bg-white dark:bg-gray-800 dark:text-white ">
      <div className="flex flex-wrap md:flex-nowrap md:justify-between lg:justify-between items-start">
        <div className="">
          <h2 className="text-2xl font-semibold mb-2">{Taskname}</h2>
          <p>
            <strong>Category:</strong> {category}
          </p>
          <p>
            <strong>Deadline:</strong> {deadline}
          </p>
          <p>
            <strong>Price:</strong> ${price}
          </p>

          <p className="text-lg mt-2">
            <strong>Total Bids:</strong> {bidsCount}
          </p>
        </div>
        <div className="flex mt-5  gap-2">
          <button
            onClick={() => handleDelete(_id)}
            className="btn btn-error text-white"
          >
            <MdDeleteForever size={20} />
          </button>
          <Link to={`/updatetask/${_id}`}>
            <button className="btn btn-info text-white">
              <FaPencilAlt size={20} />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MyPostContainer;
