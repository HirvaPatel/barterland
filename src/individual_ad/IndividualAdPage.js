import React from "react";
import './IndividualAdPage.css'
import { Link } from "react-router-dom";
import iphone from "../home/iphone.jpg";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import TitleSection from "../home/TitleSection";
import MenuSection from "../home/MenuSection";
import FooterSection from "../home/FooterSection";

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
