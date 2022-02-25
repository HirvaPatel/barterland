import React from "react";
import './HomePage.css';
import { Link } from "react-router-dom";
import iphone from "./iphone.jpg";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";




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


function TitleSection(props) {

    const [searchValue, setSearchValue] = useState('');

    let toProfile = "/register";
    let linkName = "Register Now"
    if (props.isRegistered && props.userData) {
        toProfile = "/profile";
        if (props.userData) {
            linkName = "Profile of " + props.userData.f_name.value;
        }
    }

    const handleChange = (e) => {
        let value = searchValue;
        value = e.target.value;
        setSearchValue(value);
    }

    return (<header>
        <nav className="container">
            <nav className="box1">
                <Link to={"/"} ><label className="logo">BarterLand</label> </Link>
            </nav>
            <nav className="box2">
                {/* <Link to={"/comingsoon"} target="_blank" rel="noopener noreferrer" > <label>Location</label> </Link> */}
                <Link to={"/comingsoon"} > <label>Location</label> </Link>
            </nav>
            <nav className="box1">
                <input placeholder="Search" value={searchValue} onChange={handleChange} />
                <Link to={"/comingsoon"} > <button className="ads-button" disabled={searchValue === '' ? true : false} type="submit">Search</button></Link>
            </nav>
            <nav className="box1">
                <Link to={"/comingsoon"} > <label>Wishlist</label> </Link>
            </nav>
            <nav className="box1">
                <Link to={"/comingsoon"} state={{ data: props.userData }}><label>{linkName}</label></Link>
            </nav>
        </nav>
    </header>);
}

function MenuSection(props) {
    return (
    
        <nav>
            <nav className="container2">
                <nav className="box1">
                    <Link to={"/comingsoon"} > <label>Categories</label></Link>
                </nav>
                <nav className="box1">
                    <Link to={"/comingsoon"} >   <label>Post Ads</label></Link>
                </nav>
                <nav className="box1">
                    <Link to={"/comingsoon"} >    <label>Notifications</label></Link>
                </nav>
                <nav className="box1">
                    <Link to={"/comingsoon"} >   <label>My Ads</label></Link>
                </nav>
                <nav className="box1">
                    <Link to={"/comingsoon"} >   <label>Blogs</label></Link>
                </nav>
                <nav className="box1">
                    <Link to={"/comingsoon"} >   <label>Feedback</label></Link>
                </nav>
                <nav className="box1">
                    <Link to={"/comingsoon"} >   <label>Contact Us</label></Link>
                </nav>
            </nav>
        </nav>
    );
}

class FooterSection extends React.Component {

    render() {
        return (
            <footer>
                <nav>

                    <nav className="container3">
                        <nav className="box3">
                            <Link to={"/comingsoon"} ><label>About U</label></Link>
                        </nav>
                        <nav className="box3">
                            <Link to={"/comingsoon"} ><label>Contact Us</label></Link>
                        </nav>
                        <nav className="box3">
                            <Link to={"/comingsoon"} ><label>Give Feedback</label></Link>
                        </nav>
                        <nav className="box3">
                            <Link to={"/comingsoon"} ><label>Report an issue</label></Link>
                        </nav>
                        <nav className="box3">
                            <Link to={"/comingsoon"} ><label>Read of blogs</label></Link>
                        </nav>
                        <nav className="box3">
                            <Link to={"/comingsoon"} ><label>Meet out team</label></Link>
                        </nav>
                        <nav className="box3">
                            <Link to={"/comingsoon"} ><label>Rate Us</label></Link>
                        </nav>
                    </nav>
                </nav>
                <nav className="container4">
                    <nav className="backtotop">
                        <Link to={"/home"} ><label>Back to top</label></Link>
                    </nav>
                    <nav className="logo-box"><Link to={"/home"} ><label>BarterLand</label></Link></nav>
                    <section className="box5">
                        <label> Developed by Humans </label>
                    </section>
                </nav>

            </footer>
        );
    }
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
            <Link to="/comingsoon">
                <button className="ads-button">Trade Now</button>
            </Link>
        </main>
    );
}



export default HomePage;