import React from "react";
import '../css/ComingSoon.css'
import FooterSection from "./FooterSection";
import MenuSection from "./MenuSection";
import TitleSection from "./TitleSection";
export default function ComingSoonPage(props) {

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
                    <h2 style={divStyle}>Site under development!</h2>
                    <h3 style={divStyle}> Coming Soon !!</h3>
                </div>
            </div>           
        </>


    );
}