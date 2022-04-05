/* Author : Vikram Babu Rajendran */

import React from "react";
import '../css/HomePage.css';
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import TitleSection from "./TitleSection";
import MenuSection from "./MenuSection";
import FooterSection from "./FooterSection";
import axios from "axios";
import { ReactSession } from 'react-client-session';
import { Checkbox } from "@material-ui/core";
import FavoriteBorder from "@material-ui/icons/FavoriteBorder";
import Favorite from "@material-ui/icons/Favorite";


/* Home Page component that will render and show the Home page of the application */
function HomePage(props) {
    let location = useLocation();
    const [userData, setUserData] = useState({});
    const [adsList, setAdsList] = useState();

    useEffect(() => {

        if (userData && userData.user_id) {
            return;
        }

    }, [userData]);

    // Fetch Ads and store in the state.
    useEffect(() => {
        const url = process.env.REACT_APP_BACKEND_URL + '/home/posts';
        axios.get(url).then((res) => {
            setAdsList(res.data.data);
        }).catch((err) => {
            console.log(err.response);
        });

        // Fetch user details from local storage and set in state.
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

    const data = userData;
    const ads = adsList;

    // Show loader till Ads are fetched.
    if (!ads) {
        return (
            <div className="loader"></div>
        );
    }

    return (

        <>
            <TitleSection />
            <MenuSection />
            <MainSectionGenerator ads={ads} userData={data} />
            <FooterSection />
        </>
    );
}

// Component that render one row of Ads. Each row contains 3 Ads.
function MainSectionOneAdRow(props) {


    const ads = props.ads;
    const userData = props.userData;
    return (
        <main>
            <main className="wrapper-home">
                <MainSectionBox content={
                    {
                        'title': ads[0].ad_details.title,
                        'desp': ads[0].ad_details.description
                    }
                } ad_details={ads[0]} userData={userData} />

                <MainSectionBox content={
                    {
                        'title': ads[1].ad_details.title,
                        'desp': ads[1].ad_details.description
                    }
                } ad_details={ads[1]} userData={userData} />

                <MainSectionBox content={
                    {
                        'title': ads[2].ad_details.title,
                        'desp': ads[2].ad_details.description
                    }
                } ad_details={ads[2]} userData={userData} />
            </main>
        </main>
    );
}

// Component to render rows of Ads. 
class MainSectionGenerator extends React.Component {


    constructor(props) {
        super(props);
    }

    // Loop every 3 Ads and generate a row component.
    returnElements() {
        const ads = this.props.ads
        const userData = this.props.userData;
        const result = []
        if (ads) {
            let j = 0;
            for (let i = 0; i < Math.floor(ads.length / 3); i = i + 1) {
                const subAds = ads.slice(j, j + 3);
                j = j + 3;
                result.push(<MainSectionOneAdRow ads={subAds} key={result.length} userData={userData} />);
            }
        }

        if (result.length < 1) {
            return (
                <main className="box-home">
                    <h2>No Ads to display!</h2>
                </main >
            );
        }

        return result;
    }


    render() {
        return (this.returnElements());
    }
}

// Component that generates one Ad.
function MainSectionBox(props) {
    const ad_details = props.ad_details;
    const nextPage = '/post/' + ad_details.ad_id;
    const userData = props.userData;

    // method to add the item to wishlist
    // Author : Shivam Barot
    const handleClickAdd = async (e) => {

        e.preventDefault();
        const id = await parseInt(e.target.getAttribute('id'));

        let api_url = process.env.REACT_APP_BACKEND_URL + '/wishlist/add/' + id;

        ReactSession.setStoreType("localStorage");
        const userid = ReactSession.get("user_id");

        let config = {
            headers: {
                user_id: userid
            }
        };

        axios.put(api_url, "", config)
            .then((response) => {
                alert("Item added to wishlist!!");
            })
            .catch((error) => {
                console.log(error);
            });

    };

    return (

        <main className="box-home">
            <h2>{props.content.title}</h2>
            <img src={ad_details.ad_details.image_url} alt="" className="img-ad-home" />
            <p>{props.content.desp}</p>
            <Link to={nextPage}>
                <button className="ads-button">Trade Now</button>
            </Link>
            <label>Add to Wishlist<Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} id={ad_details.ad_id.toString()} onClick={handleClickAdd} /></label>
        </main >
    );
}



export default HomePage;