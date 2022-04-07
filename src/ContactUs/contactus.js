// Sowjanya Mani

import React from "react";
import '../home/css/ComingSoon.css'
import TitleSection from "../home/js/TitleSection";
import MenuSection from "../home/js/MenuSection";
import FooterSection from "../home/js/FooterSection";


export default function ContactUs(props) {

    const divStyle = {
        color: '#1D2A78',
        textAlign: 'center'
    };

    return (

        <>
            <TitleSection />
            <MenuSection />
            <div className="mainholder">
                <div className="holder">
                <h2 style={divStyle}>For any queries or enquiries contact us with the information provided below.  We are happy to help!</h2>
                    <h2 style={divStyle}>Email</h2>
                    <h3 style={divStyle}> barterland@gmail.com</h3>
                    <h2 style={divStyle}>Contact</h2>
                    <h3 style={divStyle}> 9026542653</h3>
                </div>
            </div> 
            <FooterSection />          
        </>


    );
}