import React, { useContext } from "react";
import { useLoaderData } from "react-router";
import { AuthContext } from "../Provider/AuthProvider";
import Swal from "sweetalert2";

const UpdateTask = () => {
  const { _id, Taskname, category, price, description } = useLoaderData();
  const { user } = useContext(AuthContext);

  const handleUpdateTask = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const updateTask = Object.fromEntries(formData.entries());

    // send updated task  to the db
    fetch(
      `https://assignment-10-server-side-dun-two.vercel.app/freelances/${_id}`,
      {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(updateTask),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          Swal.fire({
            icon: "success",
            title: "Coffee updated successfully.",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };

  return (
    <div className="p-6 md:p-24">
      <div className="text-center mb-6">
        <h1 className="text-3xl font-bold">Update Task</h1>
      </div>
      <form onSubmit={handleUpdateTask} className="grid gap-4">
        <label className="label">Task Title : </label>
        <input
          name="Taskname"
          defaultValue={Taskname}
          className="input input-bordered w-full"
          placeholder="Task Title"
          required
        />
        <label className="label">Category : </label>
        <select
          name="category"
          defaultValue={category}
          className="select select-bordered w-full"
          required
        >
          <option value="">Select Category</option>
          <option value="Web Development">Web Development</option>
          <option value="Design">Design</option>
          <option value="Writing">Writing</option>
          <option value="Marketing">Marketing</option>
        </select>
        <label className="label">Task Description : </label>
        <textarea
          name="description"
          defaultValue={description}
          className="textarea textarea-bordered w-full"
          placeholder="Task Description"
          required
        ></textarea>

        <label className="label">Budget : </label>
        <input
          name="price"
          defaultValue={price}
          className="input input-bordered w-full"
          placeholder="Budget"
          required
        />
        <label className="label">Email : </label>
        <input
          type="email"
          name="email"
          value={user?.email || ""}
          readOnly
          className="input input-bordered w-full"
        />
        <label className="label"> User Name : </label>
        <input
          type="text"
          name="userName"
          value={user?.displayName || ""}
          readOnly
          className="input input-bordered w-full"
        />

        <input
          type="submit"
          value="Update Task"
          className="btn btn-primary w-full"
        />
      </form>
    </div>
  );
};

export default UpdateTask;
