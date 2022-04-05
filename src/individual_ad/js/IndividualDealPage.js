/* Author : Vikram Babu Rajendran */

import React from "react";
import '../css/IndividualAdPage.css'
import { Link, useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

import TitleSection from "../../home/js/TitleSection";
import MenuSection from "../../home/js/MenuSection";
import FooterSection from "../../home/js/FooterSection";
import axios from "axios";
import { ReactSession } from 'react-client-session';

export default function IndividualDealPage(props) {


    let location = useLocation();
    let navigate = useNavigate();

    const [userData, setUserData] = useState({});
    const [adDetails, setAdDetails] = useState();

    let { post_id } = useParams();
    let { deal_id } = useParams();

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

        // Fetch the details of the Deal and set in state.
        let config = {
            headers: {
                user_id: userData.user_id,
            }
        }
        const url = process.env.REACT_APP_BACKEND_URL + '/deals/mydeals/' + post_id + '/' + deal_id;
        axios.get(url, config).then((res) => {
            setAdDetails(res.data.data);
        }).catch((err) => {
            alert('Ad not found!');
            navigate("/home");
        });

    }, []);

    const ad = adDetails;

    if (!ad) {
        return (
            <div className="loader"></div>
        );
    }

    return (
        <>
            <TitleSection />
            <MenuSection />
            <DealPageBody ad={ad} userData={userData} />
            <FooterSection />
        </>
    );

}

function DealPageBody(props) {
    const ad = props.ad;
    const userData = props.userData;
    const deal = ad.deal;

    let navigate = useNavigate();

    const handleRedirectRegister = (e) => {
        e.preventDefault();
        navigate("/userregister");
    }

    const handleRedirectLogin = (e) => {
        e.preventDefault();
        navigate("/loginpage");
    }

    const handleAccept = (e) => {
        e.preventDefault();       
        const url = process.env.REACT_APP_BACKEND_URL + '/deals/mydeals/' + ad.ad_id + '/' + deal.deal_id;
        const requestBody = {
            status : 'ACCEPTED'
        }
        axios.post(url, requestBody).then((res) => {
            console.log(res);
            if (res.data.success === true) {
                alert('Deal Accepted successfully!');               
                return;
            }
        }).catch((err) => {
            if (err.response) {
                if (err.response.status === 400) {
                    alert(err.response.data.message);
                } else {
                    alert('Unknown error ! Please try again!');
                }
            } else {
                alert('Unknown error ! Please try again!');
            }
            return;
        });

        window.location.reload();
    }

    const handleReject = (e) => {
        e.preventDefault();
        const url = process.env.REACT_APP_BACKEND_URL + '/deals/mydeals/' + ad.ad_id + '/' + deal.deal_id;
        const requestBody = {
            status : 'REJECTED'
        }
        axios.post(url, requestBody).then((res) => {
            if (res.data.success === true) {
                alert('Deal Rejected successfully!');               
                return;
            }
        }).catch((err) => {
            if (err.response) {
                if (err.response.status === 400) {
                    alert(err.response.data.message);
                } else {
                    alert('Unknown error ! Please try again!');
                }
            } else {
                alert('Unknown error ! Please try again!');
            }
            return;
        });

        window.location.reload();
    }

    console.log(!userData || !userData.user_id);
    if (!userData || !userData.user_id) {
        return (<><h2>Login or Register to propose a Deal!</h2>
            <button onClick={(e) => handleRedirectRegister(e)}>Register</button>
            <button onClick={(e) => handleRedirectLogin(e)}>Login</button>
        </>);
    }

    const renderButtons = () => {
        if (deal.deal_details.status && deal.deal_details.status === 'REJECTED') {
            return (
                <>
                <br></br>
                <b>You Have Rejected this Deal.</b>
                <button onClick={(e) => { if (window.confirm('Accept this deal?')) { handleAccept(e); } }}>Accept Deal</button>
                </>
                
            );
        } else if (deal.deal_details.status && deal.deal_details.status === 'ACCEPTED') {
            return (
                <>
                <br></br><b>You Have Accepted this Deal.</b>
                <button onClick={(e) => { if (window.confirm('Reject this deal?')) { handleReject(e); } }}>Reject Deal</button>
                </>
            );
        } else {
            return (
                <>
                    <button onClick={(e) => { if (window.confirm('Accept this deal?')) { handleAccept(e); } }}>Accept Deal</button>
                    <button onClick={(e) => { if (window.confirm('Reject this deal?')) { handleReject(e); } }}>Reject Deal</button>
                </>
            );
        }
    }

    return (
        <section>
            <div className="wrapper-individual">
                <div className="main-box-individual">
                    <h2>{deal.deal_details.title}</h2>
                    <img src="https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6458/6458906cv12d.jpg" alt="" className="img-ad-individual" />
                    <p><b>Description</b>
                        <br></br>
                        {deal.deal_details.description}
                        <br></br><br></br>

                        <b>Name: </b> {deal.deal_details.name}
                        <br></br>
                        <b>Mobile: </b> {deal.deal_details.mobile}
                        <br></br>
                        <b>Location: </b> {deal.deal_details.location}
                        <br></br>
                        <b>Deal Status: </b>{deal.deal_details.status}
                        <br></br>
                        <b>Valid Till: </b>{deal.deal_details.valid_till ? deal.deal_details.valid_till : 'Not Available'}
                    </p>
                    {renderButtons()}
                </div>

            </div>
        </section>
    );
}

