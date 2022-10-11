import React from "react";
import { Link } from "react-router-dom";

const TopicCard = ({ topic }) => {
  const { id, name, logo, total } = topic;
  return (
    <div>
      <div className="card card-compact bg-slate-200 shadow-xl rounded-md">
        <figure>
          <img src={logo} alt="Shoes" />
        </figure>
        <div className="card-body bg-base-100">
          <div className="flex">
            <div className="w-6/12">
              <h2 className="card-title">{name}</h2>
              <p className="text-left">Total Quiz: {total}</p>
            </div>
            <div className="card-actions w-6/12 flex items-end justify-end">
              <button className="badge p-3 badge-accent hover:badge-primary">
                <Link to={`/quiz/${id}`}> Start Quiz </Link>{" "}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopicCard;
