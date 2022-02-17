import React from "react";
import logo from "../logo.png";
import "../style.scss";
export class Nav extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <header className="p-3 bg-dark text-white">
          <div className="container">
            <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
              <a
                href="/"
                className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none"
              >
                <img
                  id="logo"
                  className="bi me-2"
                  width="70"
                  height="50"
                  src={logo}
                ></img>
              </a>
              <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
                <li>
                  <a href="#" className="nav-link px-2 text-white">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#" className="nav-link px-2 text-secondary">
                    My Advertisements
                  </a>
                </li>
                <li>
                  <a href="#" className="nav-link px-2 text-white">
                    Trade Requests
                  </a>
                </li>
                <li>
                  <a href="#" className="nav-link px-2 text-white">
                    About Us
                  </a>
                </li>
              </ul>

              <div className="text-end">
                Hi, Hirva
                <svg
                  id="userProfile"
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-person-fill"
                  viewBox="-1 1 16 16"
                >
                  <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                </svg>
                <svg
                  id="wishlist"
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="red"
                  className="bi bi-heart-fill ml-3"
                  viewBox="0 0 16 16"
                  type="button"
                >
                  <path
                    fill-rule="evenodd"
                    d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"
                  />
                </svg>
              </div>
            </div>
          </div>
        </header>
        <div className="siteMap">
          <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-left mb-md-0">
            <li>
              <a href="#" className="nav-link px-2 text-secondary">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="nav-link px-2 text-secondary">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="10"
                  fill="currentColor"
                  className="bi bi-chevron-right"
                  viewBox="0 0 10 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
                  />
                </svg>
              </a>
            </li>
            <li>
              <a href="#" className="nav-link px-2 text-secondary">
                My Advertisements
              </a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
