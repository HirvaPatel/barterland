/* Author : Vikram Babu Rajendran */

import React from "react";
import '../css/HomePage.css';
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { ReactSession } from 'react-client-session';
import { useEffect } from "react/cjs/react.development";

/* Component that renders the Title Section of the application */
export default function TitleSection(props) {

    const [searchValue, setSearchValue] = useState('');

    const [userData, setUserData] = useState({});

    let navigate = useNavigate();

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
        const userData = {
            user_id: user_id,
            email: email,
            first_name: first_name
        }
        if (userData && userData.user_id) {
            setUserData(userData);
        }
    }, []);


    // Render the title section based on user logged in state
    function renderAuthentication() {
        if (userData && userData.user_id && userData.first_name) {
            const displayName = 'Profile of ' + userData.first_name;
            return (
                <>
                    <nav className="box1">
                        <Link to={"/userupdate"}>   <label>{displayName}</label></Link>
                    </nav>
                    <nav className="box1">
                        <Link to={"/logout"} >   <label>Log Out</label></Link>
                    </nav>
                </>)
        }
        return (
            <>
                <nav className="box1">
                    <Link to={"/userregister"}>   <label>Register</label></Link>
                </nav><nav className="box1">
                    <Link to={"/loginpage"}>   <label>Login</label></Link>
                </nav>
            </>);
    }

    const handleChange = (e) => {
        let value = searchValue;
        value = e.target.value;
        setSearchValue(value);
    }

    const handleOnSearch = (e) => {
        e.preventDefault();
        const toSearch = '/home?search=' + searchValue;
        navigate(toSearch);
        window.location.reload();
    }

    return (<header>
        <nav className="container">
            <nav className="box1">
                <Link to={"/home"} ><label className="logo">BarterLand</label> </Link>
            </nav>
            <nav className="box2">
                {/* <Link to={"/comingsoon"} target="_blank" rel="noopener noreferrer" > <label>Location</label> </Link> */}
                <Link to={"/home"} > <label>Home</label> </Link>
            </nav>
            <nav className="box1">
                <input placeholder="Search" value={searchValue} onChange={handleChange} />
                <button className="ads-button" type="submit" onClick={(e) => handleOnSearch(e)}>Search</button>
            </nav>
            {renderAuthentication()}
        </nav>
    </header>);
}