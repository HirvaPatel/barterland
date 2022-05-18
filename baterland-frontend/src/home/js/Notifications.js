
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import '../css/ComingSoon.css'
import FooterSection from "./FooterSection";
import MenuSection from "./MenuSection";
import TitleSection from "./TitleSection";
import { ReactSession } from 'react-client-session';

export default function Notifications(props) {

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

        const url_isseen = process.env.REACT_APP_BACKEND_URL + '/notification/is_seen/' + userData.user_id;
        axios.get(url_isseen).catch((err) => {
            console.log(err);
        });

    }, []);

    const notifList = notifications;
    if (!notifList) {
        return (
            <div className="loader"></div>
        );
    }

    const divStyle = {
        color: '#1D2A78',
        textAlign: 'center'
    };

    let result = []
    if (notifList.length <= 0) {
        result.push(
            <div className="mainholder">
                <div className="holder">
                    <h3 style={divStyle}>No Notifications to display!</h3>
                </div>
            </div>
        );
    } else {
        for (let i = 0; i < notifList.length; i++) {
            result.push(<SingleNotification key={i} notification={notifList[i]} />);
        }
    }

    return (
        <>
            <TitleSection />
            <MenuSection />
            {result}
        </>
    );
}

function SingleNotification(props) {
    const divStyle = {
        color: '#1D2A78',
        textAlign: 'center'
    };

    const notification = props.notification;
    let title = '';
    let body = '';
    let toLink = '/home';
    console.log(notification);
    if (notification.notification.type === 'DEAL_ACCEPTED') {
        title = 'Your Deal is Accepted !';
        body = 'View the accepted Deal.'
        toLink = '/post/' + notification.notification.ad_id;
    } else if (notification.notification.type === 'DEAL_REJECTED') {
        title = 'Your Deal is Rejected !';
        body = 'View the rejected Deal.'
        toLink = '/post/' + notification.notification.ad_id;
    } else if (notification.notification.type === 'DEAL_PROPOSED') {
        title = 'Someone proposed a Deal!';
        body = 'View the Deal.'
        toLink = '/ads/deals/' + notification.notification.ad_id;
    }

    return (
        <div className="mainholder">
            <div className="holder">
                <h2 style={divStyle}>{title}</h2>
                <h3 style={divStyle}>{body}</h3>
                <Link to={toLink}><button className="notif-button">View</button></Link>
            </div>
        </div>
    );
}