import React from "react";
import { Link, withRouter } from "react-router-dom";
import { signout, isAuthenticated, isAdmin } from "./helper/auth";
import { Fragment } from "react";

const currentTab = (history, path) => {
  if (history.location.pathname === path) {
    return { color: "#05b572" };
  } else {
    return { color: "black" };
  }
};

const Nav = ({ history }) => {
  return (
    <div>
      <ul className="nav nav-tabs bg-light">
        <li className="nav-item">
          <Link style={currentTab(history, "/")} className="nav-link" to="/">
            Scheme Home
          </Link>
        </li>

        {isAuthenticated() &&
        !isAdmin() && ( //&& isAuthenticated().user.role === 0
            <li className="nav-item">
              <Link
                style={currentTab(history, "/user/dashboard")}
                className="nav-link"
                to="/user/dashboard"
              >
                Dashboard
              </Link>
            </li>
          )}

        {isAuthenticated() &&
        isAdmin() && ( //&& isAuthenticated().user.role === 1
            <li className="nav-item">
              <Link
                style={currentTab(history, "/admin/dashboard")}
                className="nav-link"
                to="/admin/dashboard"
              >
                A dashboard
              </Link>
            </li>
          )}

        {!isAuthenticated() && (
          <Fragment>
            <li className="nav-item">
              <Link
                style={currentTab(history, "/register")}
                className="nav-link"
                to="/register"
              >
                Signup
              </Link>
            </li>
            <li className="nav-item">
              <Link
                style={currentTab(history, "/login")}
                className="nav-link"
                to="/login"
              >
                signin
              </Link>
            </li>
          </Fragment>
        )}

        {isAuthenticated() && (
          <li className="nav-item">
            <span
              className="nav-link text-danger"
              onClick={() => {
                signout(() => {
                  history.push("/");
                });
              }}
            >
              Sign Out
            </span>
          </li>
        )}
      </ul>
    </div>
  );
};

export default withRouter(Nav);
