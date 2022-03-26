import React from "react";
import './HomePage.css';
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import TitleSection from "./TitleSection";
import MenuSection from "./MenuSection";
import FooterSection from "./FooterSection";
import axios from "axios";



function HomePage(props) {
    let location = useLocation();
    const [isRegistered, setIsRegistered] = useState(false);
    const [userData, setUserData] = useState();
    const [adsList, setAdsList] = useState();

    useEffect(() => {
        if (userData) {
            return () => { }
        }
        if (location.state) {
            let data = userData;
            data = location.state.data;
            setUserData(data);
            if (location.state.data.f_name.valid) {
                setIsRegistered(true);
            }
        }
    }, [userData]);

    useEffect(() => {
        const url = process.env.REACT_APP_BACKEND_URL + '/home/posts';
        axios.get(url).then((res) => {
            setAdsList(res.data.data);
        }).catch((err) => {
            console.log(err.response);
        });

        window.localStorage.setItem('user_id', '12');

    }, []);

    const data = userData;
    const ads = adsList;

    if (!ads) {
        return (
            <div className="loader"></div>
        );
    }

    console.log(ads);

    return (

        <>
            <TitleSection isRegistered={isRegistered} userData={data} />
            <MenuSection />
            <MainSectionGenerator ads={ads} />
            <FooterSection />
        </>
    );
}


function MainSectionOneAdRow(props) {


    const ads = props.ads;
    console.log(ads[1].ad_details.description);

    return (
        <main>
            <main className="wrapper">
                <MainSectionBox content={
                    {
                        'title': ads[0].ad_details.title,
                        'desp': ads[0].ad_details.description
                    }
                } ad_details={ads[0]} />

                <MainSectionBox content={
                    {
                        'title': ads[1].ad_details.title,
                        'desp': ads[1].ad_details.description
                    }
                } ad_details={ads[1]} />

                <MainSectionBox content={
                    {
                        'title': ads[2].ad_details.title,
                        'desp': ads[2].ad_details.description
                    }
                } ad_details={ads[2]} />
            </main>
        </main>
    );
}

class MainSectionGenerator extends React.Component {

    constructor(props) {
        super(props);
    }

    returnElements() {
        const ads = this.props.ads
        const result = []
        if (ads) {
            console.log(ads.length / 3);
            let j = 0;
            for (let i = 0; i < Math.floor(ads.length / 3); i = i + 1) {
                const subAds = ads.slice(j, j + 3);
                j = j + 3;
                result.push(<MainSectionOneAdRow ads={subAds} key={result.length} />);
            }
        }
        return result;
    }


    render() {
        return (this.returnElements());
    }
}

function MainSectionBox(props) {
    const ad_details = props.ad_details;
    console.log(ad_details.ad_details.image_url);
    const nextPage = '/post/' + ad_details.ad_id;
    return (

        <main className="box">
            <h2>{props.content.title}</h2>
            <img src={ad_details.ad_details.image_url} alt="" className="img-ad" />
            <p>{props.content.desp}</p>
            <Link to={nextPage}>
                <button className="ads-button">Trade Now</button>
            </Link>
        </main >
    );
}



export default HomePage;