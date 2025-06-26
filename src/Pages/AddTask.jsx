import React, { useState, useContext } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../Provider/AuthProvider";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const AddTask = () => {
  const { user } = useContext(AuthContext);
  const [deadline, setDeadline] = useState(new Date());

  const handleAddTask = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const newTask = Object.fromEntries(formData.entries());

    newTask.email = user?.email;
    newTask.name = user?.displayName;

    const formattedDate = deadline.toLocaleDateString("en-GB");
    newTask.deadline = formattedDate.replace(/\//g, "-");

    // Send to backend
    fetch("https://assignment-10-server-side-dun-two.vercel.app/freelances", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newTask),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            title: "Task added successfully!",
            icon: "success",
            confirmButtonText: "OK",
          });
          form.reset();
          setDeadline(new Date());
        }
      })
      .catch((error) => {
        console.error("Error submitting task:", error);
        Swal.fire({
          title: "Error!",
          text: "Something went wrong while submitting.",
          icon: "error",
        });
      });
  };

  return (
    <div className="p-6 md:p-24 dark:bg-gray-800 dark:text-white ">
      <div className="text-center mb-6">
        <h1 className="text-3xl font-bold dark:text-white">Add New Task</h1>
      </div>
      <form onSubmit={handleAddTask} className="grid gap-4">
        <label className="label dark:text-white">Task Title : </label>
        <input
          name="Taskname"
          className="input input-bordered w-full dark:bg-gray-700"
          placeholder="Task Title"
          required
        />
        <label className="label dark:text-white">Photo URL :</label>
        <input
          type="url"
          name="photo"
          className="input input-bordered w-full dark:bg-gray-700"
          placeholder="Enter a valid image URL"
          required
        />
        <label className="label dark:text-white ">Category : </label>
        <select
          name="category"
          className="select select-bordered w-full dark:bg-gray-700"
          required
        >
          <option value="">Select Category</option>
          <option value="Web Development">Web Development</option>
          <option value="Design ">Design</option>
          <option value="Writing">Writing</option>
          <option value="Marketing">Marketing</option>
        </select>
        <label className="label dark:text-white ">Task Description : </label>
        <textarea
          name="description"
          className="textarea textarea-bordered w-full dark:bg-gray-700"
          placeholder="Task Description"
          required
        ></textarea>

        <div>
          <label className="label dark:text-white">Deadline : </label>
          <br />
          <DatePicker
            selected={deadline}
            onChange={(date) => setDeadline(date)}
            className="input input-bordered w-full dark:bg-gray-700"
            dateFormat="dd-MM-yyyy"
          />
        </div>
        <label className="label dark:text-white">Budget : </label>
        <input
          name="price"
          className="input input-bordered w-full dark:bg-gray-700"
          placeholder="Budget"
          required
        />
        <label className="label dark:text-white">Email : </label>
        <input
          type="email"
          name="email"
          value={user?.email || ""}
          readOnly
          className="input input-bordered w-full dark:bg-gray-700"
        />
        <label className="label dark:text-white"> User Name : </label>
        <input
          type="text"
          name="userName"
          value={user?.displayName || ""}
          readOnly
          className="input input-bordered w-full dark:bg-gray-700"
        />

        <input
          type="submit"
          value="Add Task"
          className="btn btn-primary w-full dark:bg-gray-700"
        />
      </form>
    </div>
  );
};

export default AddTask;
