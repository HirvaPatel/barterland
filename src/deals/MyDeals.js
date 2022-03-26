import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import TitleSection from "../home/TitleSection";
import MenuSection from "../home/MenuSection";
import FooterSection from "../home/FooterSection";
import './MyDeals.css';
import axios from "axios";

export default function MyDeals(props) {

    const [deals, setDeals] = useState();
    let navigate = useNavigate();

    useEffect(() => {

        const user_id = window.localStorage.getItem('user_id');

        let config = {
            headers: {
                user_id: user_id,
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

    if (!deals) {
        return (
            <div className="loader"></div>
        );
    }

    const dealsArray = deals.results;

    return (
        <>
            <TitleSection />
            <MenuSection />
            <DealsList deals={dealsArray} />
            <FooterSection />
        </>
    );
}

function DealsList(props) {

    const deals = props.deals;

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

function Deal(props) {

    const dealsList = props.deal.deals;
    const deal = props.deal.deals[dealsList.length - 1];

    const ad_id = props.deal.ad_id;
    const toLink = '/post/' + ad_id;

    return (
        <div className="main-box-deal">
            <h2>{deal.deal_details.title}</h2>
            <p><b>Description</b>
                <br></br>
                {deal.deal_details.description}
                <br></br>
                <b>Location: </b>
                {deal.deal_details.location}
                <br></br>
                <b>Mobile: </b>
                {deal.deal_details.mobile}
            </p>
            <Link to={toLink}>
                <button>View Deal</button>
            </Link>
        </div>
    );
}
