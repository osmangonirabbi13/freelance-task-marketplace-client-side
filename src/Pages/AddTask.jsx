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
    newTask.deadline = deadline.toISOString();

    // Send to backend
    fetch("http://localhost:3000/freelances", {
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
    <div className="p-6 md:p-24">
      <div className="text-center mb-6">
        <h1 className="text-3xl font-bold">Add New Task</h1>
      </div>
      <form onSubmit={handleAddTask} className="grid gap-4">
        <label className="label">Task Title : </label>
        <input
          name="name"
          className="input input-bordered w-full"
          placeholder="Task Title"
          required
        />
        <label className="label">Category : </label>
        <select
          name="category"
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
          className="textarea textarea-bordered w-full"
          placeholder="Task Description"
          required
        ></textarea>

        <div>
          <label className="label">Deadline : </label>
          <br />
          <DatePicker
            selected={deadline}
            onChange={(date) => setDeadline(date)}
            className="input input-bordered w-full"
            dateFormat="yyyy-MM-dd"
          />
        </div>
        <label className="label">Budget : </label>
        <input
          name="price"
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
        <label className="label">Photo Url : </label>
        <input
          name="photo"
          className="input input-bordered w-full"
          placeholder="Photo URL "
          required
        />

        <input
          type="submit"
          value="Add Task"
          className="btn btn-primary w-full"
        />
      </form>
    </div>
  );
};

export default AddTask;
