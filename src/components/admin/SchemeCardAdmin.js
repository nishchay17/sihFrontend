import React from "react";
import { Link } from "react-router-dom";

export default function SchemeCardAdmin(props) {
  return (
    <div className="card col-md-4 m-1 col-12">
      <div className="card-body">
        <h5 className="card-title">{props.data.name}</h5>
        <h6 className="card-subtitle mb-2 text-muted">{props.data.type}</h6>
        <h6 className="card-text">
          Age {props.data.eligibilityAgeLowerBound} -{" "}
          {props.data.eligibilityAgeUpperBound}{" "}
        </h6>
        <h6 className="card-text">For Gender {props.data.gender} </h6>
        <h6 className="card-text">URL: {props.data.url}</h6>

        <p className="card-text">{props.data.description}</p>
        <Link
          className="btn btn-primary"
          to={`/admin/scheme/update/${props.data._id}`}
        >
          <span className="">Update</span>
        </Link>
        <button
          className="btn btn-danger mx-1"
          onClick={() => props.handleClick(props.data._id)}
        >
          Delete
        </button>
      </div>
    </div>
  );
}
