import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate(); // Initialize useNavigate

  const onSubmit = (data) => {
    console.log(data);
    // Simulate form submission, e.g., send data to an API
    // If login is successful, redirect to the home page
    // Assuming successful login for now
    navigate("/"); // Redirect to the home page
  };

  return (
    <dialog id="my_modal_3" className="modal md:pr-0 pr-8">
      <div className="modal-box">
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* Close button */}
          <Link
            to="/"
            className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
            onClick={() => document.getElementById("my_modal_3").close()}
          >
            ✕
          </Link>

          <h3 className="font-bold text-lg">Login</h3>

          {/* Email field */}
          <div className="mt-3 space-y-2">
            <label htmlFor="email" className="block">
              Email
            </label>
            <input
              type="text"
              placeholder="Enter your email"
              className="px-3 py-1 outline-none border rounded-md w-80"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Please enter a valid email address",
                },
              })}
            />
            {errors.email && (
              <span className="text-sm text-red-500 block">
                {errors.email.message}
              </span>
            )}
          </div>

          {/* Password field */}
          <div className="mt-6 space-y-2">
            <label htmlFor="password" className="block">
              Password
            </label>
            <input
              type="password"
              placeholder="Enter your password"
              className="px-3 py-1 outline-none border rounded-md w-80"
              {...register("password", { required: "Password is required" })}
            />
            {errors.password && (
              <span className="text-sm text-red-500 block">
                {errors.password.message}
              </span>
            )}
          </div>

          {/* Submit button */}
          <div className="mt-5 flex justify-around">
            <button
              type="submit"
              className="bg-pink-500 text-white hover:bg-pink-700 duration-300 px-3 py-1 rounded-md"
            >
              Login
            </button>
            <p>
              Not registered?{" "}
              <Link
                to="/signup"
                className="text-blue-500 underline cursor-pointer"
              >
                Signup
              </Link>
            </p>
          </div>
        </form>
      </div>
    </dialog>
  );
}

export default Login;
