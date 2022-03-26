import React, { useState } from 'react';
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import TitleSection from '../home/TitleSection';
import MenuSection from '../home/MenuSection';
import FooterSection from '../home/FooterSection';

export default function UserUpdate(props) {

  return (

    <>
      <TitleSection />
      <MenuSection />
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <nav>

        <nav className="buttonContainer">
          <Link to='/emailupdate'>
            <button className='button-body' id='submitbutton' > Update Email</button>
          </Link>
        </nav>
        <br></br>

        <nav className="buttonContainer">
          <Link to='/passwordupdate'>
            <button className='button-body' id='submitbutton' > Update Password</button>
          </Link>
        </nav>
        <br></br>

        <nav className="buttonContainer">
          <Link to='/addressupdate'>
            <button className='button-body' id='submitbutton'> Update Address</button>
          </Link>
        </nav>
        <br></br>

        <nav className="buttonContainer">
          <Link to='/nameupdate'>
            <button className='button-body' id='submitbutton'> Update Name</button>
          </Link>
        </nav>
        <br></br>
        <br></br>

      </nav>
      <FooterSection />
    </>

  );
}
