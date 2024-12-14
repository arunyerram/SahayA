import React from "react";
import { Link } from "react-router-dom";
import { auth } from "./firebase";

const Nav = () => {
  const handleLogout = async () => {
    try {
      await auth.signOut();
      window.location.href = "/login";
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };

  return (
    <>
      <nav 
        className="navbar navbar-expand-lg fixed-top"
        style={{ backgroundColor: "brown", zIndex: 1000 }}
      >
        <div className="container-fluid">
          <Link className="navbar-brand" to="/home" style={{ color: "white" }}>
            Sahaya
          </Link>
          {/* <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button> */}
          {/* <div className="collapse navbar-collapse"> */}
            {/* <ul className="navbar-nav me-auto mb-2 mb-lg-0"> */}
              {/* <li className="nav-item"> */}
                {/* <Link className="navbar-brand" aria-current="page" to="/home" style={{ color: "white" }}>
                  Home
                </Link> */}
              {/* </li> */}
              {/* <li className="navbar-brand"> */}
                {/* <Link className="navbar-brand" to="/about" style={{ color: "white" }}>
                  About
                </Link> */}
              {/* </li> */}
              {/* <li className="nav-item"> */}
                <Link className="navbar-brand" to="/Chatbot" style={{ color: "white" }}>
                  Chatbot
                </Link>
              {/* </li> */}
              {/* <li className="nav-item"> */}
                <Link className="navbar-brand" to="/Feedback" style={{ color: "white" }}>
                  Feedback
                </Link>
              {/* </li> */}
              {/* <li className="nav-item"> */}
                <Link className="navbar-brand" to="/Consultancy" style={{ color: "white" }}>
                  Consultancy
                </Link>
              {/* </li> */}
              {/* <li className="nav-item"> */}
                {/* <Link className="navbar-brand" to="/ContactUs" style={{ color: "white" }}>
                  Contact Us
                </Link> */}
              {/* </li> */}
            {/* </ul> */}
            {/* <form className="d-flex">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
                style={{ backgroundColor: "#6c757d", color: "white", border: "none" }}
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form> */}
            <button className="btn btn-primary ms-3" onClick={handleLogout}>
              Logout
            </button>
          {/* </div> */}
        </div>
      </nav>
    </>
  );
};

export default Nav;
