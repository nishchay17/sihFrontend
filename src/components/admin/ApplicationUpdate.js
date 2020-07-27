import React, { useState, useEffect } from "react";
import {
  GetSingleApplication,
  GetSchemesById,
  GetUserById,
  ChangeApplicationState,
} from "./adminHelper/apiCalls";
import { isAuthenticated, isAdmin } from "../helper/auth";

const token = isAuthenticated();
const id = isAdmin();

export default function ApplicationUpdate({ match }) {
  const applicationId = match.params.id;
  const [state, setState] = useState("");
  const [application, setApplication] = useState({});
  const [user, setUser] = useState({});
  const [scheme, setScheme] = useState({});
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const [isloading, setIsloading] = useState(true);

  useEffect(() => {
    GetSingleApplication(token, applicationId).then((res) => {
      setApplication(res);
      setState(res.state);
      GetSchemesById(res.schemeId).then((incomingScheme) => {
        setScheme(incomingScheme[0]);
        GetUserById(token, res.userId).then((user) => {
          setUser(user);
          console.log({ user, res, incomingScheme });
          setIsloading(false);
        });
      });
    });
  }, []);

  const handleChange = (event) => {
    setState(event.target.value);
  };

  const onsubmit = (event) => {
    event.preventDefault();
    ChangeApplicationState(token, applicationId, { state })
      .then((res) => {
        setError(false);
        setSuccess(true);
      })
      .catch((err) => {
        setError(true);
        setSuccess(false);
      });
  };

  const form = () => {
    return (
      <div className="container mt-3">
        <form class="form-inline">
          <div className="form-group  mx-auto">
            <select
              value={state}
              onChange={handleChange}
              class="form-control m-2"
            >
              <option value="0">Pending</option>
              <option value="1">Done</option>
              <option value="2">Rejected</option>
            </select>
            <button
              type="submit"
              onClick={onsubmit}
              className="btn btn-outline-success m-2"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    );
  };

  const successMessage = () => {
    return (
      <div
        className="alert alert-success mt-3"
        style={{ display: success ? "" : "none" }}
      >
        updated!
      </div>
    );
  };

  const loading = () => {
    return <div class="spinner-border text-success"></div>;
  };

  return (
    <div className="text-center border-top py-3">
      <h1 className="display-4 my-3">Application Review</h1>
      <p>Review this Application</p>
      <div className="row">
        <div className="col-12 col-md-6">user data</div>
        <div className="col-12 col-md-6">scheme data</div>
      </div>
      {successMessage()}
      {isloading && loading()}
      {form()}
      <div className="container boarder-top my-3 py-2">SIH2020-6bits</div>
    </div>
  );
}
