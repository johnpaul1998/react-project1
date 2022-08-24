import { Outlet, Link } from "react-router-dom";
import logo from "../../src/images/logo.jpg";
import React, { useState } from "react";

const Navbar = () => {
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);
  const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);
  return (
    <>
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark py-3 fixed-top">
          <Link
            to="/"
            className="navbar-brand d-flex align-items-center justify-content-between order-lg-0"
          >
            <img
              src={logo}
              alt="Site Icon"
              className="img-fluid logo w-25 h-25 ms-3"
            />
          </Link>
          <button
            className="navbar-toggler border-0"
            type="button"
            data-toggle="collapse"
            data-target="#navbarsExample09"
            aria-controls="navbarsExample09"
            aria-expanded={!isNavCollapsed ? true : false}
            aria-label="Toggle navigation"
            onClick={handleNavCollapse}
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className={`${isNavCollapsed ? "collapse" : ""} navbar-collapse`}
            id="navMenu"
          >
            <ul className="navbar-nav ms-auto text-end me-4">
              <li className="nav-item border-right">
                <Link to="/" className="nav-link active text-white">
                  Home
                </Link>
              </li>
              <li className="nav-item border-right">
                <Link to="/collection" className="nav-link active text-white">
                  Collections
                </Link>
              </li>
              <li className="nav-item border-right">
                <Link to="/contactUs" className="nav-link active text-white">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
      {/* messenger icon bottom-right side */}
      <a href="https://www.facebook.com/jem.santos.524381">
        <img
          style={{
            position: "fixed",
            height: "55px",
            width: "55px",
            bottom: "0px",
            right: "0px",
            zIndex: "9",
          }}
          className="fixed-icon m-1"
          src="https://upload.wikimedia.org/wikipedia/commons/b/be/Facebook_Messenger_logo_2020.svg"
          alt="Facebook_Messenger_logo_2020"
        />
      </a>

      <Outlet />
    </>
  );
};

export default Navbar;
