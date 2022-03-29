/* Author : Vikram Babu Rajendran */

import React from "react";
import '../css/HomePage.css';
import { Link } from "react-router-dom";

/* Component that renders the Footer section of the application */ 
export default class FooterSection extends React.Component {

    render() {
        return (
            <footer>
                <nav>

                    <nav className="container3">
                        <nav className="box3">
                            <Link to={"/comingsoon"} ><label>About Us</label></Link>
                        </nav>
                        <nav className="box3">
                            <Link to={"/comingsoon"} ><label>Contact Us</label></Link>
                        </nav>
                        <nav className="box3">
                            <Link to={"/comingsoon"} ><label>Give Feedback</label></Link>
                        </nav>
                        <nav className="box3">
                            <Link to={"/comingsoon"} ><label>Report an issue</label></Link>
                        </nav>
                        <nav className="box3">
                            <Link to={"/comingsoon"} ><label>Read of blogs</label></Link>
                        </nav>
                        <nav className="box3">
                            <Link to={"/comingsoon"} ><label>Meet out team</label></Link>
                        </nav>
                        <nav className="box3">
                            <Link to={"/comingsoon"} ><label>Rate Us</label></Link>
                        </nav>
                    </nav>
                </nav>
                <nav className="container4">
                    <nav className="backtotop">
                        <Link to={"/home"} ><label>Back to top</label></Link>
                    </nav>
                    <nav className="logo-box"><Link to={"/home"} ><label>BarterLand</label></Link></nav>
                    <section className="box5">
                        <label> Developed by Humans </label>
                    </section>
                </nav>

            </footer>
        );
    }
}
