import React, { useState } from "react";
import { useLoaderData } from "react-router";
import { FiFilter } from "react-icons/fi";
import BrowseCard from "../Components/BrowseCard";

const BrowseTasks = () => {
  const initialTasks = useLoaderData();

  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [showFilters, setShowFilters] = useState(false);
  const [sortOrder, setSortOrder] = useState("asc");

  const categories = [...new Set(initialTasks.map((task) => task.category))];

  let filteredTasks = initialTasks.filter((task) => {
    const searchMatch =
      task.Taskname.toLowerCase().includes(searchTerm.toLowerCase()) ||
      task.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      task.category.toLowerCase().includes(searchTerm.toLowerCase());

    const categoryMatch =
      selectedCategory === "" || task.category === selectedCategory;

    return searchMatch && categoryMatch;
  });

  filteredTasks.sort((a, b) =>
    sortOrder === "asc" ? a.bidsCount - b.bidsCount : b.bidsCount - a.bidsCount
  );

  const handleSortToggle = () => {
    setSortOrder((prev) => (prev === "asc" ? "desc" : "asc"));
  };

  return (
    <div className=" mx-auto px-4 md:px-12 lg:px-40 dark:bg-gray-900 dark:text-white text-black min-h-screen py-8 transition-all">
      <div className="lg:hidden mb-4 flex justify-end">
        <button
          onClick={() => setShowFilters(!showFilters)}
          className="btn btn-outline btn-sm flex items-center gap-2"
        >
          <FiFilter className="text-lg" />
          {showFilters ? "Hide Filters" : "Show Filters"}
        </button>
      </div>

      <div
        className={`${
          showFilters ? "block" : "hidden"
        } lg:flex flex-wrap gap-4 mb-6 justify-between items-center`}
      >
        <input
          type="text"
          placeholder="Search tasks..."
          className="input input-bordered w-full md:w-3/5 dark:bg-gray-800 dark:border-gray-700 dark:placeholder-gray-400"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        <select
          className="select select-bordered w-full md:max-w-xs dark:bg-gray-800 dark:border-gray-700"
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          <option value="">All Categories</option>
          {categories.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>

        <button
          onClick={handleSortToggle}
          className="btn btn-success text-lg p-2 btn-sm btn-outline"
        >
          Sort by Bids:{" "}
          <span className="font-bold ml-1 capitalize">
            {sortOrder === "asc" ? "Ascending" : "Descending"}
          </span>
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredTasks.length > 0 ? (
          filteredTasks.map((singleTask) => (
            <BrowseCard key={singleTask._id} singleTask={singleTask} />
          ))
        ) : (
          <p className="text-center col-span-3 text-red-500">No tasks found.</p>
        )}
      </div>
    </div>
  );
};

export default BrowseTasks;
