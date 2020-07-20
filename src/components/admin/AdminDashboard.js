import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function AdminDashboard() {
  const adminLeftSide = () => {
    return (
      <div className="card h-100">
        <h4 className="card-header bg-dark text-white">Admin navigation</h4>
        <ul className="list-group">
          <li className="list-group-item">
            <Link to="/admin/scheme/new" className="nav-link text-success">
              Create Schemes
            </Link>
          </li>
          <li className="list-group-item">
            <Link to="/admin/scheme/all" className="nav-link text-success">
              View / Manage Schemes
            </Link>
          </li>
        </ul>
      </div>
    );
  };

  const adminRightSide = () => {
    return (
      <div className="card mb-4 mt-3">
        <h4 className="card-header">
          Admin information
          <span className="badge mx-2 badge-danger mr-2">Admin Area</span>
        </h4>
        <li className="list-group-item">
          <span className="badge badge-success mr-2">Name: </span> name
        </li>
        <li className="list-group-item">
          <span className="badge badge-success mr-2">Email: </span> email
        </li>
      </div>
    );
  };

  return (
    <div>
      <div>
        <h1 className="text-center pt-4">Hello Admin</h1>
        <div className="row m-5">
          <div className="col-12 col-md-3">{adminLeftSide()}</div>
          <div className="col-12 col-md-9">{adminRightSide()}</div>
        </div>
      </div>
    </div>
  );
}
