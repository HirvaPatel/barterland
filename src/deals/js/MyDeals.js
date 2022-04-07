/* Author : Vikram Babu Rajendran */

import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import TitleSection from "../../home/js/TitleSection";
import MenuSection from "../../home/js/MenuSection";
import FooterSection from "../../home/js/FooterSection";
import '../css/MyDeals.css';
import axios from "axios";
import { ReactSession } from 'react-client-session';

/* Deals page component that will list all the deals made by the users. */
export default function MyDeals(props) {

    const [deals, setDeals] = useState();
    const [userData, setUserData] = useState({});

    let navigate = useNavigate();

    useEffect(() => {
        if (userData && userData.user_id) {
            return;
        }
    }, [userData]);

    // Fetch the user details from localstorage and set in state
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


        // Make API Call to backend to get the list of deals.
        let config = {
            headers: {
                user_id: userData.user_id,
            }
        }
        const url = process.env.REACT_APP_BACKEND_URL + '/deals/mydeals/';
        axios.get(url, config).then((res) => {
            setDeals(res.data);
        }).catch((err) => {
            alert('No Deals Found!');
            navigate("/home");
        });
    }, []);

    // Show loader till the deals are fetched.
    if (!deals) {
        return (
            <div className="loader"></div>
        );
    }

    const dealsArray = deals.results;
    const data = userData;

    return (
        <>
            <TitleSection />
            <MenuSection />
            <DealsList deals={dealsArray} userData={data} />
            <FooterSection />
        </>
    );
}

// Component that will render the list of deals.
function DealsList(props) {

    const deals = props.deals;
    const userData = props.userData;
    let navigate = useNavigate();

    const handleRedirectLogin = (e) => {
        e.preventDefault();
        navigate("/loginpage");
    }

    // Ask user to login if user details not available
    if (!userData || !userData.user_id) {
        return (
            <section>
                <div className="wrapper-deal">
                    <div className="main-box-deal">
                        <h2>Login to view your Deals!</h2>
                        <button onClick={(e) => handleRedirectLogin(e)}>Login</button>
                    </div>
                </div>
            </section>
        );
    }

    if (deals.length < 1) {
        return (
            <section>
                <div className="wrapper-deal">
                    <div className="main-box-deal">
                        <h2>No Deals to Display!</h2>
                    </div>
                </div>
            </section>
        );
    }

    // For each deal in the list of deals, render a Deal component and add to list.
    let results = []
    for (let i = 0; i < deals.length; i++) {
        results.push(<Deal key={i} deal={deals[i]} />);
    }

    return (
        <section>
            <div className="wrapper-deal">
                {results}
            </div>
        </section>
    );

}

// Component that will render one deal.
function Deal(props) {

    const dealsList = props.deal.deals;
    const deal = props.deal.deals[dealsList.length - 1];

    const ad_id = props.deal.ad_id;
    const toLink = '/post/' + ad_id;

    return (
        <div className="main-box-deal">
            <h2>{deal.deal_details.title}</h2>
            <img className="deal-img" src={deal.deal_details.image_url} />
            <p><b>Description</b>
                <br></br>
                {deal.deal_details.description}
                <br></br>
                <b>Location: </b>
                {deal.deal_details.location}
                <br></br>
                <b>Mobile: </b>
                {deal.deal_details.mobile}
                <br></br>
                <b>Status: </b>
                {deal.deal_details.status}
            </p>
            <Link to={toLink}>
                <button>View Deal</button>
            </Link>
        </div>
    );
}
