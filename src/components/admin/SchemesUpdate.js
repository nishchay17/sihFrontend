import React, { useState, useEffect } from "react";
import { GetSchemesById, UpdateSchemes } from "./adminHelper/apiCalls";
import { isAuthenticated, isAdmin } from "../helper/auth";
const token = isAuthenticated();

export default function SchemesUpdate({ match }) {
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
    author: isAdmin(),
  });

  useEffect(() => {
    GetSchemesById(match.params.id).then((data) => {
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

  const {
    name,
    type,
    eligibilityIncome,
    eligibilityCaste,
    eligibilityAgeUpperBound,
    eligibilityAgeLowerBound,
    description,
    url,
    gender,
  } = scheme;

  const handleChange = (name) => (event) => {
    setScheme({ ...scheme, error: false, [name]: event.target.value });
  };

  const onclickHandler = (event) => {
    event.preventDefault();
    UpdateSchemes(token, match.params.id, scheme).then((res) =>
      alert("Scheme has being updated")
    );
  };

  const form = () => {
    return (
      <div className="container">
        <h2 className="my-4">Update Scheme here</h2>
        <form>
          <div className="form-group">
            <input
              onChange={handleChange("name")}
              name="photo"
              className="form-control"
              placeholder="Name"
              value={name}
            />
          </div>
          <div className="form-group">
            <textarea
              onChange={handleChange("description")}
              name="photo"
              className="form-control"
              placeholder="Description"
              value={description}
            />
          </div>
          <div className="form-group">
            <input
              onChange={handleChange("eligibilityCaste")}
              type="number"
              className="form-control"
              placeholder="Eligibility Caste"
              value={eligibilityCaste}
            />
          </div>
          <div className="form-group">
            <input
              onChange={handleChange("type")}
              type="number"
              className="form-control"
              placeholder="Scheme Type"
              value={type}
            />
          </div>
          <div className="form-group">
            <input
              onChange={handleChange("eligibilityAgeLowerBound")}
              type="number"
              className="form-control"
              placeholder="Eligibility Age Lower Bound"
              value={eligibilityAgeLowerBound}
            />
          </div>
          <div className="form-group">
            <input
              onChange={handleChange("eligibilityAgeUpperBound")}
              type="number"
              className="form-control"
              placeholder="Eligibility Age Upper Bound"
              value={eligibilityAgeUpperBound}
            />
          </div>
          <div className="form-group">
            <input
              onChange={handleChange("eligibilityIncome")}
              type="number"
              className="form-control"
              placeholder="Eligibility Income"
              value={eligibilityIncome}
            />
          </div>
          <div className="form-group">
            <input
              onChange={handleChange("gender")}
              type="number"
              className="form-control"
              placeholder="Gender"
              value={gender}
            />
          </div>
          <div className="form-group">
            <input
              onChange={handleChange("url")}
              type="url"
              className="form-control"
              placeholder="URL(if any)"
              value={url}
            />
          </div>

          <button
            type="submit"
            onClick={onclickHandler}
            className="btn btn-outline-success mb-3"
          >
            Update Scheme
          </button>
        </form>
      </div>
    );
  };

  return <div className="container">{form()}</div>;
}
