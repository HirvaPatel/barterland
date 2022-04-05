// Sowjanya Mani

import React from "react";
import "../home/css/ComingSoon.css";

import TitleSection from "../home/js/TitleSection";
import MenuSection from "../home/js/MenuSection";
import FooterSection from "../home/js/FooterSection";


export default function AboutUs(props) {

    const divStyle = {
        color: '#1D2A78',
        textAlign: 'justify'
    };

    return (

        <>
            <TitleSection />
            <MenuSection />

            <div className="mainholder">
                <div className="holder">
                    <h2 style={divStyle}>BaterLand</h2>
                    <h3 style={divStyle}>Happy Exchanging!!</h3>
                    <h3 style={divStyle}>We are here to help you exchange your items to soemthing you wish for!</h3>
                </div>
            </div>  

            <div className="mainholder">
                <div className="holder">
                    <h2 style={divStyle}>About BarterLand</h2>
                    <h3 style={divStyle}> A barter system is an exchange or an act of trading goods between the users for other goods or services. It is considered the oldest method of exchange. The history of this method goes a long way back to the days when money was not even invented. Due to lack of money, bartering became popular in the 1930s during the Great Depression [1]. It was done through groups or between two people and the value of bartering items is done through negotiation between two or many users. Bartering is not about exchanging the item only for money which is one of the advantages. You can buy items by exchanging an item you have but no longer want or need. Trading in this manner is done through Online auctions and swap markets. This system is all about the agreement between the two users involved in trading and proper communication. In ancient times, this barter system involved people living in the same area, however, today bartering is known globally. The main purpose of this proposal is to provide people with a platform where trading things not only for money but also for other things  is being encouraged and supported. 
</h3>
                </div>
            </div>    

            <FooterSection />     
        </>


    );
}