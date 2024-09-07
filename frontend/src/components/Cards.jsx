import React from "react";

function Cards({ item }) {
  return (
    <>
      <div className="my-4 p-2 ">
        <div className="card bg-base-100 w-84 shadow-xl hover:scale-105 duration-200  dark:bg-slate-900 dark:text-white dark:border">
          <figure>
            <img src={item.image} alt="Books" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              {item.name}
              <div className="badge badge-secondary">{item.category}</div>
            </h2>
            <p>{item.title}</p>
            <div className="card-actions justify-between">
              <div className="badge badge-outline">${item.price}</div>
              <div className="hover:bg-pink-500 hover:text-white rounded-badge border-2 px-2 py-1 duration-200 cursor-pointer">
                Buy Now
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cards;
