/* Author : Vikram Babu Rajendran */

import React, { useEffect, useState } from "react";
import "../css/HomePage.css";
import { Link } from "react-router-dom";
import { ReactSession } from "react-client-session";
import axios from "axios";

/* Component that  renders the Menu Section of the application */
export default function MenuSection(props) {

  const [userData, setUserData] = useState({});
  const [notifications, setNotifications] = useState();

  useEffect(() => {
    if (userData && userData.user_id) {
      return;
    }
  }, [userData]);

  // Fetch user details from localstorage and set in session.
  useEffect(() => {
    ReactSession.setStoreType("localStorage");
    const user_id = ReactSession.get("user_id");
    const email = ReactSession.get("email");
    const first_name = ReactSession.get("first_name");
    const role = ReactSession.get("role");
    const userData = {
      user_id: user_id,
      email: email,
      first_name: first_name,
      role: role,
    };
    if (userData && userData.user_id) {
      setUserData(userData);
    }

    const url = process.env.REACT_APP_BACKEND_URL + '/notification/' + userData.user_id;
    axios.get(url).then((res) => {
      setNotifications(res.data.data);
    }).catch((err) => {
      console.log(err);
    });

  }, []);

  let notificationCount = notifications ? notifications.length : 0;
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
          <Link to={"/postads"}>
            {" "}
            <label>Post Ads</label>
          </Link>
        </nav>
        <nav className="box1">
          <Link to={"/notifications"}>
            {" "}
            <label>Notifications <b>({notificationCount})</b></label>
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
          <Link to={"/blog"}>
            {" "}
            <label>Blog</label>
          </Link>
        </nav>
        <nav className="box1">
          <Link to={"/feedbacks"}>
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
