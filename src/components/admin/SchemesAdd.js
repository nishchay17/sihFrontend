import React, { useState } from "react";
import { createScheme } from "./adminHelper/apiCalls";
import { isAuthenticated, isAdmin } from "../helper/auth";

const SchemesAdd = () => {
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
    createdScheme: "",
    author: isAdmin(),
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
    createdScheme,
  } = scheme;

  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (name) => (event) => {
    setScheme({ ...scheme, error: false, [name]: event.target.value });
  };

  const token = isAuthenticated();

  const onSubmit = (event) => {
    event.preventDefault();
    setError("");
    setSuccess(false);
    createScheme(token, scheme).then((data) => {
      if (data?.error) {
        setError(true);
      } else {
        setError("");
        setSuccess(true);
        setScheme({
          ...scheme,
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
          createdScheme: data.name,
        });
      }
    });
  };

  const successMessage = () => {
    return (
      <div
        className="alert alert-success mt-3"
        style={{ display: createdScheme ? "" : "none" }}
      >
        {createdScheme} created !
      </div>
    );
  };

  const form = () => {
    return (
      <div className="container">
        <h2 className="my-4">Add Scheme here</h2>
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
            onClick={onSubmit}
            className="btn btn-outline-success mb-3"
          >
            Create Scheme
          </button>
        </form>
      </div>
    );
  };

  return (
    <div>
      {successMessage()}
      {form()}
    </div>
  );
};

export default SchemesAdd;
