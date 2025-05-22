import React, { useState, use } from "react";
import { Link, useLocation, useNavigate } from "react-router"; //
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from "../Provider/AuthProvider";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import Swal from "sweetalert2";

const Login = () => {
  const { signIn, signInGoogle } = use(AuthContext);
  const [showPassword, setShowPassword] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const handleSign = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    signIn(email, password)
      .then((result) => {
        const user = result.user;

        Swal.fire({
          title: "Login Successful",
          icon: "success",
          timer: 1500,
          showConfirmButton: false,
        });
        navigate(`${location.state ? location.state : "/"}`);
      })
      .catch((error) => {
        Swal.fire({
          title: "Login Failed",
          text: error.message,
          icon: "error",
        });
      });
  };

  const handleGoogle = () => {
    signInGoogle()
      .then((result) => {
        const user = result.user;

        Swal.fire({
          title: "Google Sign-In Successful",
          icon: "success",
          timer: 1500,
          showConfirmButton: false,
        });
        navigate(`${location.state ? location.state : "/"}`);
      })
      .catch((error) => {
        Swal.fire({
          title: "Google Sign-In Failed",
          text: error.message,
          icon: "error",
        });
      });
  };

  return (
    <div className="flex justify-center min-h-screen items-center ">
      <div className="card bg-base-100 w-full max-w-sm shadow-2xl ">
        <h2 className="text-center font-semibold text-2xl py-5">
          Login to your account
        </h2>
        <div className="card-body">
          <form onSubmit={handleSign}>
            <label className="label">Email</label>
            <input
              type="email"
              name="email"
              className="input input-bordered w-full"
              placeholder="Email"
              required
            />

            <label className="label mt-4">Password</label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                className="input input-bordered w-full"
                placeholder="Password"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="btn btn-xs absolute top-2 right-3"
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>

            <div className="text-right mt-2">
              <Link className="link link-hover text-sm">Forgot password?</Link>
            </div>

            <button type="submit" className="btn btn-neutral w-full mt-4">
              Login
            </button>

            <button
              type="button"
              onClick={handleGoogle}
              className="btn btn-outline btn-info w-full mt-4 flex items-center justify-center gap-2"
            >
              <FcGoogle size={24} />
              Google Sign In
            </button>

            <p className="py-5 text-sm text-center font-semibold">
              Don’t Have An Account?{" "}
              <Link className="text-blue-600" to="/auth/register">
                Register
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
