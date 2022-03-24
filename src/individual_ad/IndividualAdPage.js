import React from "react";
import './IndividualAdPage.css'
import { Link } from "react-router-dom";
import iphone from "../iphone.jpg";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";

function IndividualAdPage(props){
    
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
            <AdPageBody />
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

function AdPageBody(props) {
    return (
        <section>
			<div className="wrapper">
				<div className="main-box">
					<h2>Iphone 11</h2>
					<img src={iphone} alt="" className="img-ad" />			
					<p><b>Description</b> <br></br>Trading My Iphone 11 for Airpods + $100</p>		
				</div>
				<div  className="main-box">
					<h2> Propose a deal </h2>
					<form>
					<h3> Name </h3>
					<input type='text' placeholder='Vikram' />
					<h3> How to contact you? </h3>
					<input type='text' placeholder='9029832222' />
					<h3> Description </h3>
					<textarea name="description_text" cols="35" rows="10" placeholder='Enter your proposal. Be Specific to details.'></textarea>
					<h3> Upload Images </h3>
					<input type='file' name='image' />
					<h3></h3>
					<button>Send Proposal</button>
					<button>Reset Form</button>
					</form>
				</div>							
			</div>				
		</section>       
    );
}

export default IndividualAdPage;
