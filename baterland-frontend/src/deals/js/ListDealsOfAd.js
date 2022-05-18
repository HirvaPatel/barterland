/* Author : Vikram Babu Rajendran */

import React from "react";
import { Link, useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import TitleSection from "../../home/js/TitleSection";
import MenuSection from "../../home/js/MenuSection";
import FooterSection from "../../home/js/FooterSection";
import '../css/MyDeals.css';
import axios from "axios";
import { ReactSession } from 'react-client-session';

export default function ListDealsOfAd(props) {

    const [userData, setUserData] = useState({});
    const [deals, setDeals] = useState();
    let navigate = useNavigate();

    let { post_id } = useParams();

    useEffect(() => {
        if (userData && userData.user_id) {
            return;
        }
    }, [userData]);

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
        const url = process.env.REACT_APP_BACKEND_URL + '/deals/mydeals/' + post_id;
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

    const dealsList = deals.data;

    return (
        <>
            <TitleSection />
            <MenuSection />
            <DealsList deals={dealsList} userData={userData} />
            <FooterSection />
        </>
    );
}

function DealsList(props) {

    const deals = props.deals;
    const userData = props.userData;
    console.log(deals);
    let navigate = useNavigate();

    const handleRedirectLogin = (e) => {
        e.preventDefault();
        navigate("/loginpage");
    }

    const handleRedirectHome = (e) => {
        e.preventDefault();
        navigate("/home");
    }

    if(deals && deals.user_id !== userData.user_id){
        return (
            <section>
                <div className="wrapper-deal">
                    <div className="main-box-deal">
                        <h2>Not allowed to access this resource!</h2>
                        <button onClick={(e) => handleRedirectHome(e)}>Go to Home</button>
                    </div>
                </div>
            </section>
        );
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

    if (!deals.deals || deals.deals.length < 1) {
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
    const dealsList = deals.deals;
    for (let i = 0; i < dealsList.length; i++) {
        results.push(<Deal key={i} ad_id={deals.ad_id} deal={dealsList[i]} />);
    }

    return (
        <section>
            <div className="wrapper-deal">
                {results}
            </div>
        </section>
    );

}

function Deal(props) {
    const deal = props.deal;
    const deal_id = deal.deal_id;
    const ad_id = props.ad_id;
    const toLink = '/deals/' + ad_id + '/' + deal_id;

    console.log(deal);

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