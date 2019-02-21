import React from "react";

export default function Title({ title }) {
  return (
    <div className="row">
      <div className="col text-center mb-3">
        <h1 className="display-6 text-capitalize">{title}</h1>
      </div>
    </div>
  );
}