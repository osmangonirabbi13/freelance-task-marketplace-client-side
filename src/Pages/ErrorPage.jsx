import React from "react";
import { Link, useRouteError } from "react-router";

const ErrorPage = () => {
  const error = useRouteError();

  return (
    <>
      <div className="py-24 text-center min-h-screen">
        <h1 className="mb-8 text-7xl font-thin text-gray-900">
          {error?.status || 404}
        </h1>
        <p className="mb-3 text-xl font-bold text-gray-900 md:text-2xl">
          {error?.error?.message || "something went to worng"}
        </p>
        <Link to="/">
          <button className="btn btn-primary"> Go To Home Page </button>
        </Link>
      </div>
    </>
  );
};

export default ErrorPage;
