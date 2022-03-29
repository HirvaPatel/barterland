/* Author : Vikram Babu Rajendran */

import React from "react";
import "../css/HomePage.css";
import { Link } from "react-router-dom";

/* Component that  renders the Menu Section of the application */
export default function MenuSection(props) {
  return (
    <nav>
      <nav className="container2">
        <nav className="box1">
          <Link to={"/home/mydeals"}>
            {" "}
            <label>My Deals</label>
          </Link>
        </nav>
        <nav className="box1">
          <Link to={"/comingsoon"}>
            {" "}
            <label>Post Ads</label>
          </Link>
        </nav>
        <nav className="box1">
          <Link to={"/comingsoon"}>
            {" "}
            <label>Notifications</label>
          </Link>
        </nav>
        <nav className="box1">
          <Link to={"/myads"}>
            {" "}
            <label>My Ads</label>
          </Link>
        </nav>
        <nav className="box1">
          <Link to={"/wishlist"}>
            {" "}
            <label>WishList</label>
          </Link>
        </nav>
        <nav className="box1">
          <Link to={"/userupdate"}>
            {" "}
            <label>Blog</label>
          </Link>
        </nav>
        <nav className="box1">
          <Link to={"/comingsoon"}>
            {" "}
            <label>Feedback</label>
          </Link>
        </nav>
        <nav className="box1">
          <Link to={"/comingsoon"}>
            {" "}
            <label>Contact Us</label>
          </Link>
        </nav>
      </nav>
    </nav>
  );
}
