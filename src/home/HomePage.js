import React from "react";
import './HomePage.css';
import { Link } from "react-router-dom";
import iphone from "./iphone.jpg";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import TitleSection from "./TitleSection";
import MenuSection from "./MenuSection";
import FooterSection from "./FooterSection";

function HomePage(props) {
    let location = useLocation();
    const [isRegistered, setIsRegistered] = useState(false);
    const [userData, setUserData] = useState()

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
    }, [userData])

    const data = userData;

    return (
        
        <>
            <TitleSection isRegistered={isRegistered} userData={data} />
            <MenuSection />
            <MainSectionGenerator />
            <FooterSection />
        </>
    );
}


function MainSectionOneAdRow(props) {

    return (
        <main>
            <main className="wrapper">
                <MainSectionBox content={
                    {
                        'title': 'Iphone 11',
                        'desp': 'Trading my Iphone 11 for Airpods + $100',
                        'img': iphone
                    }
                } />

                <MainSectionBox content={
                    {
                        'title': 'IPhone 12',
                        'desp': 'Trading my Iphone 12 for IWatch + $100',
                        'img': iphone
                    }
                } />

                <MainSectionBox content={
                    {
                        'title': 'IPhone 13',
                        'desp': 'Trading my Iphone 13 for Iphone 12 + $100',
                        'img': iphone
                    }
                } />
            </main>
        </main>
    );
}

class MainSectionGenerator extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            rowCount: 3,
            returnElements: []
        }
    }

    returnElements(count) {
        const result = []
        for (let i = 0; i < count; i++) {
            result.push(<MainSectionOneAdRow key={result.length} />);
        }
        return result;
    }

    render() {
        return (this.returnElements(3));
    }
}

function MainSectionBox(props) {
    return (

        <main className="box">
            <h2>{props.content.title}</h2>
            <img src={iphone} alt="" className="img-ad" />
            <p>Trading my Iphone 11 for Airpods + $100</p>
            <Link to="/adpage">
                <button className="ads-button">Trade Now</button>
            </Link>
        </main>
    );
}



export default HomePage;