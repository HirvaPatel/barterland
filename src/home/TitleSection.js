import React from "react";
import './HomePage.css';
import { Link } from "react-router-dom";
import { useState } from "react";

export default function TitleSection(props) {

    const [searchValue, setSearchValue] = useState('');

    let toProfile = "/register";
    let linkName = "Register Now"
    if (props.isRegistered && props.userData) {
        toProfile = "/profile";
        if (props.userData) {
            linkName = "Profile of " + props.userData.f_name.value;
        }
    }

    const handleChange = (e) => {
        let value = searchValue;
        value = e.target.value;
        setSearchValue(value);
    }

    return (<header>
        <nav className="container">
            <nav className="box1">
                <Link to={"/"} ><label className="logo">BarterLand</label> </Link>
            </nav>
            <nav className="box2">
                {/* <Link to={"/comingsoon"} target="_blank" rel="noopener noreferrer" > <label>Location</label> </Link> */}
                <Link to={"/comingsoon"} > <label>Location</label> </Link>
            </nav>
            <nav className="box1">
                <input placeholder="Search" value={searchValue} onChange={handleChange} />
                <Link to={"/comingsoon"} > <button className="ads-button" disabled={searchValue === '' ? true : false} type="submit">Search</button></Link>
            </nav>
            <nav className="box1">
                <Link to={"/comingsoon"} > <label>Wishlist</label> </Link>
            </nav>
            <nav className="box1">
                <Link to={"/comingsoon"} state={{ data: props.userData }}><label>{linkName}</label></Link>
            </nav>
        </nav>
    </header>);
}