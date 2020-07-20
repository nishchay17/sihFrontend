import React, { useState } from "react";
import { signup } from "./helper/auth";
import { Link } from "react-router-dom";

const Signup = () => {
  const [values, setValues] = useState({
    password: "test",
    username: "test",
    gender: 1,
    name: "test",
    lastName: "test",
    state: 0,
    caste: 1,
    age: 1,
    aadhaarNumber: "253748587712",
    moblieNumber: "2537485877",
    income: 0,
    error: "",
    success: false,
  });
  const {
    password,
    username,
    name,
    gender,
    lastName,
    state,
    caste,
    age,
    aadhaarNumber,
    moblieNumber,
    income,
    error,
    success,
  } = values;

  const handleChange = (name) => (event) => {
    setValues({ ...values, error: false, [name]: event.target.value });
  };

  const onSubmit = (event) => {
    event.preventDefault();
    setValues({ ...values, error: false });
    signup({
      name,
      password,
      username,
      gender,
      lastName,
      state,
      caste,
      age,
      aadhaarNumber,
      moblieNumber,
      income,
    })
      .then((data) => {
        if (data.error) {
          setValues({ ...values, error: data.error, success: false });
        } else {
          setValues({
            ...values,
            name: "",
            password: "",
            username: "",
            gender: "",
            lastName: "",
            state: "",
            caste: "",
            age: "",
            aadhaarNumber: "",
            moblieNumber: "",
            income: "",
            success: true,
          });
        }
      })
      .catch(console.log("error in signup"));
  };

  const signUpForm = () => {
    return (
      <div className="container my-4 row">
        <div className="col-md-6 offset-md-5 col-12">
          <h4 className="display-4">Registration Form</h4>
          <p className="lead">
            Demo Mode (change Aadhaar Number to test and username)
          </p>
          <form>
            <div className="form-group">
              <label>Name</label>
              <input
                className="form-control"
                onChange={handleChange("name")}
                type="text"
                value={name}
              />
            </div>
            <div className="form-group">
              <label>Last Name</label>
              <input
                className="form-control"
                onChange={handleChange("lastName")}
                type="text"
                value={lastName}
              />
            </div>
            <div className="form-group">
              <label>State</label>
              <input
                className="form-control"
                onChange={handleChange("state")}
                type="number"
                value={state}
              />
            </div>
            <div className="form-group">
              <label>Caste</label>
              <input
                className="form-control"
                onChange={handleChange("caste")}
                type="number"
                value={caste}
              />
            </div>
            <div className="form-group">
              <label>Moblie Number</label>
              <input
                className="form-control"
                onChange={handleChange("moblieNumber")}
                type="number"
                value={moblieNumber}
              />
            </div>
            <div className="form-group">
              <label>Aadhaar Number</label>
              <input
                className="form-control"
                onChange={handleChange("aadhaarNumber")}
                type="number"
                value={aadhaarNumber}
              />
            </div>
            <div className="form-group">
              <label>Age</label>
              <input
                className="form-control"
                onChange={handleChange("age")}
                type="number"
                value={age}
              />
            </div>
            <div className="form-group">
              <label>Income</label>
              <input
                className="form-control"
                onChange={handleChange("income")}
                type="number"
                value={income}
              />
            </div>
            <div className="form-group">
              <label>Username</label>
              <input
                className="form-control"
                onChange={handleChange("username")}
                type="text"
                value={username}
              />
            </div>
            <div className="form-group">
              <label>Gender</label>
              <input
                className="form-control"
                onChange={handleChange("gender")}
                type="number"
                value={gender}
              />
            </div>
            <div className="form-group">
              <label>Password</label>
              <input
                className="form-control"
                onChange={handleChange("password")}
                type="password"
                value={password}
              />
            </div>
            <button onClick={onSubmit} className="btn btn-success btn-block">
              Register
            </button>
          </form>
        </div>
      </div>
    );
  };

  const successMessage = () => {
    return (
      <div
        className="alert alert-success col-md-6 offset-sm-3 mt-3 text-center"
        style={{ display: success ? "" : "none" }}
      >
        New account was created successfully. please
        <Link to="/login"> log in here</Link>
      </div>
    );
  };

  const errorMessage = () => {
    return (
      <div
        className="alert alert-danger col-md-6 mt-3  offset-sm-3 text-center"
        style={{ display: error ? "" : "none" }}
      >
        {error}
      </div>
    );
  };

  return (
    <div>
      {successMessage()}
      {errorMessage()}
      {signUpForm()}
    </div>
  );
};

export default Signup;
