import React from "react";
import { FaHeart, FaStar } from "react-icons/fa";

const ServiceCard = ({ singleTask }) => {
  const { _id, Taskname, category, photo, price, deadline } = singleTask;
  return (
    <div className="w-full  rounded-xl  shadow hover:shadow-lg transition duration-300 bg-white overflow-hidden">
      {/* Image */}
      <div className="relative">
        <img
          src={photo}
          alt="Service Preview"
          className="w-full h-56  object-cover"
        />
        {/* Favorite Icon */}
      </div>

      {/* Body */}
      <div className="p-4 space-y-2">
        {/* Category & Rating */}
        <div className="flex items-center justify-between text-sm">
          <span className="bg-gray-100 text-gray-600 px-2 py-0.5 rounded-full">
            {category}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-base font-semibold leading-tight">{Taskname}</h3>

        {/* User Info & Price */}
        <div className="flex items-center justify-between pt-2">
          <div className="flex items-center gap-2">
            <span className="text-sm font-medium text-gray-700">
              {deadline}
            </span>
          </div>
          <span className="text-sm text-gray-500">
            Budget : <span className="font-semibold text-black">{price} $</span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
