//Author: Sowjanya Mani

import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";


export default function Logout(props) {

    let navigate = useNavigate();

    //clear the session variables
    useEffect(() => {
        console.log('Here');
        localStorage.clear();
        sessionStorage.removeItem('user_id');
        navigate("/home");
    }, []);

    return (
        <nav>
        </nav>
    );
}