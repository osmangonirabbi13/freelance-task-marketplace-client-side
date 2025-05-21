import { FcGoogle } from "react-icons/fc";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { use, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import Swal from "sweetalert2";
import { AuthContext } from "../Provider/AuthProvider";
import Loading from "./Loading";

const Register = () => {
  const { createUser, updateUserProfile, loading, setUser, signInGoogle } =
    use(AuthContext);
  const [showPassword, setShowPassword] = useState(false);
  const [passwordError, setPasswordError] = useState("");
  const location = useLocation();
  const navigate = useNavigate();

  if (loading) {
    return <Loading />;
  }

  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const photoUrl = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;

    console.log(name, photoUrl, email, password);

    const hasUppercase = /[A-Z]/.test(password);
    const hasLowercase = /[a-z]/.test(password);
    const isLongEnough = password.length >= 6;

    if (!hasUppercase || !hasLowercase || !isLongEnough) {
      setPasswordError(
        "Password must be at least 6 characters and include both uppercase and lowercase letters."
      );
      return;
    } else {
      setPasswordError("");
    }

    createUser(email, password)
      .then((result) => {
        const user = result.user;
        navigate(`${location.state ? location.state : "/"}`);
        updateUserProfile(name, photoUrl)
          .then(() => {
            setUser({ ...user, displayName: name, photoURL: photoUrl });
            const userProfile = {
              email,
              name,
              photoUrl,
            };

            fetch("http://localhost:3000/users", {
              method: "POST",
              headers: {
                "content-type": "application/json",
              },
              body: JSON.stringify(userProfile),
            })
              .then((res) => res.json())
              .then((data) => {
                // navigate(`${location.state ? location.state : "/"}`);
                if (data.insertedId) {
                  Swal.fire({
                    icon: "success",
                    title: "Your account is created.",
                    showConfirmButton: false,
                    timer: 1500,
                  });
                }
              });
          })
          .catch((error) => {
            Swal.fire({
              title: "Google Sign-In Failed",
              text: error.message,
              icon: "error",
            });
          });
      })
      .catch((error) => {
        const errorMessage = error.message;

        Swal.fire({
          title: "Google Sign-In Failed",
          text: errorMessage,
          icon: "error",
        });
      });
  };

  const handleGoogle = (e) => {
    e.preventDefault();
    signInGoogle()
      .then((result) => {
        const user = result.user;
        navigate(`${location.state ? location.state : "/"}`);
        console.log(user);
        if (!loading) {
          return Swal.fire({
            title: "Login Successfull",
            icon: "success",
            draggable: true,
          });
        }
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorCode, errorMessage);
      });
  };

  return (
    <div>
      <div className="flex justify-center min-h-screen items-center">
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl py-5">
          <h2 className="font-semibold text-2xl text-center">
            Register your account
          </h2>
          <form onSubmit={handleRegister} className="card-body">
            <fieldset className="fieldset">
              {/* Name */}
              <label className="label">Name</label>
              <input
                name="name"
                type="text"
                className="input"
                placeholder="Name"
                required
              />

              {/* Photo URL */}
              <label className="label">Photo URL</label>
              <input
                name="photo"
                type="text"
                className="input"
                placeholder="Photo URL"
                required
              />

              {/* Email */}
              <label className="label">Email</label>
              <input
                name="email"
                type="email"
                className="input"
                placeholder="Email"
                required
              />

              {/* Password */}
              <label className="label">Password</label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  className="input"
                  placeholder="Password"
                />

                <p
                  onClick={() => {
                    setShowPassword(!showPassword);
                  }}
                  className="btn btn-xs absolute top-2 right-6"
                >
                  {showPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>}
                </p>
              </div>
              {passwordError && (
                <p className="text-xs text-error mt-1">{passwordError}</p>
              )}

              <button type="submit" className="btn btn-neutral mt-4">
                Register
              </button>
              <button
                onClick={handleGoogle}
                className="btn btn-outline btn-info mt-4"
              >
                <FcGoogle size={25} />
                <span className="text-sm">Google sign in</span>
              </button>
              <p className="font-semibold text-center text-sm pt-5">
                Already have an account?{" "}
                <Link className="text-secondary" to="/auth/login">
                  Login
                </Link>
              </p>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
