import React from "react";
import "./style/Footer.style.css";

const Footer = () => {
  return (
    <div>
      <footer>
        <div className="container-fluid footer bg-dark fixed-bottom ">
          <div className="row ">
            <div className="col" />
            <div className="col col-sm-4">
              <ul className=" list-inline align-content-center my-2">
                <li className=" list-inline-item mx-2">
                  <a href="#" className="text-white">
                    About
                  </a>
                </li>
                <li className=" list-inline-item mx-2 ">
                  <a href="#" className="text-white">
                    Team
                  </a>
                </li>
                <li className=" list-inline-item mx-2 ">
                  <a href="#" className="text-white">
                    Work
                  </a>
                </li>
              </ul>
            </div>
            <div className="col" />
          </div>
          <div className="row">
            <div className="col" />
            <div className="col">
              <ul className="list-inline align-content-center  text-white">
                <li className="list-inline-item mx-2">
                  <i class="fa fa-facebook " aria-hidden="true" />
                </li>
                <li className="list-inline-item mx-2">
                  <i class="fa fa-twitter" aria-hidden="true" />
                </li>
                <li className="list-inline-item mx-2">
                  <i class="fa fa-instagram" aria-hidden="true" />
                </li>
              </ul>
            </div>
            <div className="col" />
          </div>
          <div className="row">
            <div className="col"> </div>
            <div className="col">
              <div className=" text-white mx-1">
                <b>SMART INDIA HACKTHON 2020</b>
              </div>
            </div>
            <div className="col" />
          </div>
          <div className="row">
            <div className="col" />
            <div className="col">
              <div class="footer-copyright   text-white mx-2 py-1">
                © 2020 copyright
                <a href="#" className="text-white">
                  {" "}
                  6 bits
                </a>
              </div>
            </div>
            <div className="col" />
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
