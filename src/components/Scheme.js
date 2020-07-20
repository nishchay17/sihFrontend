import React, { useEffect, useState } from "react";
import { GetScheme } from "./helper/scheme";
import { Link } from "react-router-dom";
import { isAuthenticated } from "./helper/auth";

export default function Scheme({ match }) {
  const [scheme, setScheme] = useState({
    name: "",
    type: "",
    eligibilityIncome: "",
    eligibilityCaste: "",
    state: "0",
    eligibilityAgeUpperBound: "",
    eligibilityAgeLowerBound: "",
    description: "",
    url: "",
    gender: "",
    author: "",
  });

  const {
    name,
    type,
    eligibilityIncome,
    eligibilityCaste,
    state,
    eligibilityAgeUpperBound,
    eligibilityAgeLowerBound,
    description,
    url,
    gender,
  } = scheme;

  useEffect(() => {
    GetScheme(match.params.id).then((data) => {
      data = data[0];
      setScheme({
        ...scheme,
        name: data.name,
        type: data.type,
        eligibilityIncome: data.eligibilityIncome,
        eligibilityCaste: data.eligibilityCaste,
        state: "0",
        eligibilityAgeUpperBound: data.eligibilityAgeUpperBound,
        eligibilityAgeLowerBound: data.eligibilityAgeLowerBound,
        description: data.description,
        url: data.url,
        gender: data.gender,
      });
    });
  }, []);

  const card = () => {
    return (
      <div className="card text-center m-4">
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">{description}</p>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            Age: {eligibilityAgeLowerBound} - {eligibilityAgeUpperBound}
          </li>
          <li className="list-group-item">
            Eligibility Income: {eligibilityIncome}
          </li>
          <li className="list-group-item">
            Eligibility Caste- {eligibilityCaste}
          </li>
          <li className="list-group-item">Eligibility Gender- {gender}</li>
          <li className="list-group-item">Eligibility URL- {url}</li>
        </ul>
        {/* <div className=""> */}
        <button
          className="btn btn-success"
          style={{ display: isAuthenticated() ? "" : "none" }}
        >
          Apply Now
        </button>
        {/* </div> */}
      </div>
    );
  };

  return (
    <div className="container">
      <h1 className="m-4">Scheme Details</h1>
      {card()}
    </div>
  );
}
