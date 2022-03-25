import React from "react";
import './HomePage.css';
import { Link } from "react-router-dom";

export default function MenuSection(props) {
    return (

        <nav>
            <nav className="container2">
                <nav className="box1">
                    <Link to={"/comingsoon"} > <label>Categories</label></Link>
                </nav>
                <nav className="box1">
                    <Link to={"/comingsoon"} >   <label>Post Ads</label></Link>
                </nav>
                <nav className="box1">
                    <Link to={"/comingsoon"} >    <label>Notifications</label></Link>
                </nav>
                <nav className="box1">
                    <Link to={"/comingsoon"} >   <label>My Ads</label></Link>
                </nav>
                <nav className="box1">
                    <Link to={"/comingsoon"} >   <label>Blogs</label></Link>
                </nav>
                <nav className="box1">
                    <Link to={"/comingsoon"} >   <label>Feedback</label></Link>
                </nav>
                <nav className="box1">
                    <Link to={"/comingsoon"} >   <label>Contact Us</label></Link>
                </nav>
            </nav>
        </nav>
    );
}