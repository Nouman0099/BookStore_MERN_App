import React from "react";
import { Link, replace, useLocation, useNavigate } from "react-router-dom";
import Login from "./Login";
import { useForm } from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast";

function Signup() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();
  // const location = useLocation();
  // const from = location.state?.from?.pathname || "/";

  const onSubmit = async (data) => {
    const userInfo = {
      fullname: data.fullname,
      email: data.email,
      password: data.password,
    };
    await axios
      .post("http://localhost:4001/user/signup", userInfo)
      .then((res) => {
        console.log(res.data);
        if (res.data) {
          toast.success("Signup successfully!");
          // navigate(from, { replace: true });
          navigate("/");
        }
        localStorage.setItem("User", JSON.stringify(res.data.user));
      })
      .catch((err) => {
        console.log(err);
        toast.error("Error " + err.response.data.message);
      });
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="md:pl-0 pl-8 w-[600px]">
        <div className="modal-box">
          <form onSubmit={handleSubmit(onSubmit)}>
            <Link
              to="/"
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 dark:text-black "
            >
              ✕
            </Link>
            <h3 className="font-bold text-lg">Signup</h3>

            <div className="mt-3 space-y-2 dark:text-black ">
              <label htmlFor="name" className="block">
                Name
              </label>
              <input
                type="text"
                placeholder="Enter your full name"
                className="px-3 py-1 outline-none border rounded-md w-80"
                {...register("fullname", {
                  required: "Name is required",
                })}
              />
              {errors.fullname && (
                <span className="text-sm text-red-500 block">
                  {errors.fullname.message}
                </span>
              )}
            </div>

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

            <div className="mt-6 space-y-2 dark:text-black ">
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
              <p className="text-xl dark:text-black ">
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
