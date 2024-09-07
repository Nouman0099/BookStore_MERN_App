import React from "react";
import list from "../data/list.json";
import Cards from "./Cards";
import { Link } from "react-router-dom";

function Course() {
  return (
    <>
      <div className="max-w-screen-2xl mx-auto md:px-20 px-4 container">
        <div className="pt-28 justify-center items-center text-center">
          <h1 className="md:text-4xl text-2xl">
            We're delighted to have you{" "}
            <span className="text-pink-500">Here! :)</span>
          </h1>
          <p className="mt-12">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, dicta
            temporibus qui laudantium quidem commodi voluptatum tempore vitae
            pariatur in ullam aliquam sit nemo! Reiciendis minus earum fugiat
            iusto hic voluptatem numquam quod sapiente saepe, quaerat sunt velit
            assumenda possimus doloribus mollitia id quia esse quisquam unde?
            Quis, provident excepturi.
          </p>
          <Link to="/">
            <button className="text-white bg-pink-500 hover:bg-pink-700 px-4 py-2 rounded-md duration-300 mt-6">
              Back
            </button>
          </Link>
        </div>
        <div className="mt-12 grid md:grid-cols-4 grid-cols-1">
          {list.map((item) => (
            <Cards key={item.id} item={item} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Course;