import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast";

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    // console.log(data);
    // Simulate form submission, e.g., send data to an API
    // If login is successful, redirect to the home page
    // Assuming successful login for now

    const userInfo = {
      email: data.email,
      password: data.password,
    };

    await axios
      .post("http://localhost:4001/user/login", userInfo)
      .then((res) => {
        console.log(res.data);
        if (res.data) {
          toast.success("Loggedin Successfully");
          document.getElementById("my_modal_3").close();
          setTimeout(() => {
            window.location.reload();
            localStorage.setItem("User", JSON.stringify(res.data.user));
          }, 1000);
        }
      })
      .catch((err) => {
        console.log(err);
        toast.error("Error " + err.response.data.message);
        setTimeout(() => {}, 2000);
      });
  };

  return (
    <dialog id="my_modal_3" className="modal md:pr-0 pr-8">
      <div className="modal-box">
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* Close button */}
          <Link
            to="/"
            className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 dark:text-black "
            onClick={() => document.getElementById("my_modal_3").close()}
          >
            ✕
          </Link>

          <h3 className="font-bold text-lg">Login</h3>

          {/* Email field */}
          <div className="mt-3 space-y-2 dark:text-black ">
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
          <div className="mt-6 space-y-2 dark:text-black ">
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
            <p className="dark:text-black ">
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
