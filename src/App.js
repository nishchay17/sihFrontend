import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Nav from "./components/Nav";
import About from "./components/About";
import login from "./components/Login";
import logout from "./components/Logout";
import signup from "./components/Signup";
import AllSchemes from "./components/AllSchemes";
import AdminRoute from "./components/helper/AdminRoutes";
import AdminDashboard from "./components/admin/AdminDashboard";
import AllSchemesAdmin from "./components/admin/AllSchemesAdmin";
import SchemesUpdate from "./components/admin/SchemesUpdate";
import SchemesAdd from "./components/admin/SchemesAdd";
import "./App.css";
import Scheme from "./components/Scheme";

function App() {
  return (
    <Router>
      <Nav />
      <Route path="/" exact component={About} />
      <Route path="/" exact component={AllSchemes} />
      <Route path="/login" exact component={login} />
      <Route path="/register" exact component={signup} />
      <Route path="/logout" exact component={logout} />
      <Route path="/scheme/:id" exact component={Scheme} />
      <AdminRoute path="/admin/dashboard" exact component={AdminDashboard} />
      <AdminRoute path="/admin/scheme/new" exact component={SchemesAdd} />
      <AdminRoute path="/admin/scheme/all" exact component={AllSchemesAdmin} />
      <AdminRoute
        path="/admin/scheme/update/:id"
        exact
        component={SchemesUpdate}
      />
    </Router>
  );
}

export default App;
