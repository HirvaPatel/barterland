import React from 'react';
import './style.scss';

export class Advertisements extends React.Component{

    render(){
        return (
        <div className="container">
            <div className="header">
                <div className="logo">
                    <img src=""/>
                    <div className="search">
                        <input type="text"/>
                    </div>
                    <div className="menu">
                        <div className="tab">
                            <div className="home">Home</div>
                        </div>
                        <div className="tab">
                            <div className="myAdvertisements">My Advertisements</div>
                        </div>
                        <div className="tab">
                            <div className="tradeReq">Trade Requests</div>
                        </div>
                        <div className="tab">
                            <div className="aboutUs">About Us</div>                        
                        </div>
                    </div>
                </div>
            </div>
            <div className="sidebar">
                <div className="sortBy">
                    <h3>Sort By</h3>
                    <p>Price</p>
                    <p>Location</p>
                    <p>Data Posted</p>
                </div>
                <div className="filterBy">
                    <h3>Filter By</h3>
                    <p>Category</p>
                    <p>Usability</p>
                </div>
            </div>

        </div>);
    }

}