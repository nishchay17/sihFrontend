import React from "react";
import { Link } from "react-router-dom";

export default function SchemeCard(props) {
  return (
    <div className="card col-md-4 m-1 col-12">
      <div className="card-body">
        <h5 className="card-title">{props.data.name}</h5>
        <h6 className="card-subtitle mb-2 text-muted">{props.data.type}</h6>
        <p className="card-text">{props.data.description}</p>
        <Link className="btn btn-primary" to={`/scheme/${props.data._id}`}>
          <span className="">Learn more</span>
        </Link>
      </div>
    </div>
  );
}
