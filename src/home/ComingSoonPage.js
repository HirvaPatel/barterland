import React from "react";
import './ComingSoon.css'
export default function ComingSoonPage(props) {

    const divStyle = {
        color: '#1D2A78',
        textAlign: 'center'
    };

    return (
        <div className="mainholder">
            <div className="holder">
                <h2 style={divStyle}>Site under development!</h2>
                <h3 style={divStyle}> Coming Soon !!</h3>
            </div>
        </div>
    );
}