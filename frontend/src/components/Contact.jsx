import React from "react";
import { useForm } from "react-hook-form";

export default function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    console.log(data);
  };

  return (
    <div className="w-full pt-24">
      <div className="bg-gray-100 dark:bg-slate-900 dark:text-white">
        <div className="flex flex-col max-w-screen-lg p-4 justify-center mx-auto h-full">
          <div className="flex flex-col justify-center items-center ">
            <p className="text-4xl">Contact</p>
            <p className="py-6">
              Submit the form below to get in touch with me
            </p>
          </div>
          <div className="flex  justify-center items-center">
            <form
              className="flex flex-col md:w-1/2 w-full"
              onSubmit={handleSubmit(onSubmit)}
            >
              <input
                type="text"
                name="name"
                placeholder="Enter your name"
                className="border-2 rounded-md p-2 bg-transparent text-white focus:outline-none"
                {...register("name", {
                  required: "Name is required",
                })}
              />
              {errors.name && (
                <span className="text-sm text-red-500 block">
                  {errors.name.message}
                </span>
              )}
              <input
                type="text"
                name="email"
                placeholder="Enter your email"
                className="border-2 rounded-md p-2 bg-transparent text-white focus:outline-none my-4"
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
              <textarea
                name="message"
                rows={10}
                placeholder="Enter messsage here"
                className="border-2 rounded-md p-2 bg-transparent text-white focus:outline-none"
              ></textarea>
              <button
                type="submit"
                className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 rounded-md px-6 py-3 mt-8 mx-auto flex items-center hover:scale-110 duration-300"
              >
                let's talk
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
