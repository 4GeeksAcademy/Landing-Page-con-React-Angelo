import React from "react";

export const Card = ({ item }) => {
  return (
    <div className="col-lg-3 col-md-6 mb-4">
      <div className="card h-100 border-0 shadow-sm">
        <img src={item.image} className="card-img-top" alt={item.title} />
        <div className="card-body p-4 text-center">
          <h2 className="fs-4 fw-bold">{item.title}</h2>
          <p className="mb-0">{item.description}</p>
        </div>
        <div className="card-footer bg-light border-top-0 p-4 text-center">
          <a className="btn btn-primary" href={item.buttonUrl}>
            {item.buttonLabel}
          </a>
        </div>
      </div>
    </div>
  );
};