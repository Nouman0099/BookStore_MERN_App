import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Login from "./Login";
import { useForm } from "react-hook-form";

function Signup() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

  const onSubmit = (data) => {
    console.log(data);
    // Handle the form submission, e.g., send data to an API
    navigate(document.getElementById("my_modal_3").showModal());
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="md:pl-0 pl-8 w-[600px]">
        <div className="modal-box">
          <form onSubmit={handleSubmit(onSubmit)}>
            <Link
              to="/"
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
            >
              ✕
            </Link>
            <h3 className="font-bold text-lg">Signup</h3>

            <div className="mt-3 space-y-2">
              <label htmlFor="name" className="block">
                Name
              </label>
              <input
                type="text"
                placeholder="Enter your full name"
                className="px-3 py-1 outline-none border rounded-md w-80"
                {...register("name", {
                  required: "Name is required",
                })}
              />
              {errors.name && (
                <span className="text-sm text-red-500 block">
                  {errors.name.message}
                </span>
              )}
            </div>

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

            <div className="mt-6 space-y-2">
              <label htmlFor="password" className="block">
                Password
              </label>
              <input
                type="password"
                placeholder="Enter your Password"
                className="px-3 py-1 outline-none border rounded-md w-80"
                {...register("password", {
                  required: "Password is required",
                })}
              />
              {errors.password && (
                <span className="text-sm text-red-500 block">
                  {errors.password.message}
                </span>
              )}
            </div>

            <div className="mt-5 flex justify-around">
              <button
                type="submit"
                className="bg-pink-500 text-white hover:bg-pink-700 duration-300 px-3 py-1 rounded-md"
              >
                Signup
              </button>
              <p className="text-xl">
                Have account?{" "}
                <button
                  className="text-blue-500 underline"
                  onClick={() =>
                    document.getElementById("my_modal_3").showModal()
                  }
                >
                  Login
                </button>
                <Login />
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Signup;
