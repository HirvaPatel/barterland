/**
 * @author Hirva Patel hirva.patel@dal.ca
 */
import React from "react";
import "../css/MyAds.css";
import { useState, useEffect } from "react";
import { Ad } from "./Ad";
import { useNavigate } from "react-router-dom";
import TitleSection from "../../home/js/TitleSection";
import MenuSection from "../../home/js/MenuSection";
import FooterSection from "../../home/js/FooterSection";
import { ReactSession } from "react-client-session";
import axios from "axios";

//display all ads for the logged in user
function MyAdsHome(props) {
  const [userData, setUserData] = useState();
  const [adData, setAdData] = useState([]);
  let navigate = useNavigate();

  //set the userdata session state
  useEffect(() => {
    if (userData && userData.user_id) {
      return;
    }
  }, [userData]);

  //fetch the user details and set it to the session
  useEffect(() => {
    ReactSession.setStoreType("localStorage");
    const user_id = ReactSession.get("user_id");
    const email = ReactSession.get("email");
    const first_name = ReactSession.get("first_name");
    const userData = {
      user_id: user_id,
      email: email,
      first_name: first_name,
    };
    if (userData && userData.user_id) {
      setUserData(userData);
    }

    let config = {
      headers: {
        user_id: userData.user_id,
      },
    };

    //generate URL on the basis of user logged in
    const url = process.env.REACT_APP_BACKEND_URL.concat(
      !email ? "/myads" : email.includes("admin") ? "/ads" : "/myads"
    );

    //connect to database to get the advertisements
    axios
      .get(url, config)
      .then(({ data }) => {
        setAdData(data.ads);
      })
      .catch(() => {
        alert("No Advertisements Found!");
        navigate("/home");
      });
  }, []);

  if (!adData) {
    return <div className="loader"></div>;
  }

  const data = userData;

  return (
    <>
      <TitleSection />
      <MenuSection />
      <MyAdvertisements adData={adData} userData={data} />
      <FooterSection />
    </>
  );
}

//My advertisements component
function MyAdvertisements(props) {
  const adData = props.adData;
  const userData = props.userData;
  let navigate = useNavigate();

  //navigate to the login page
  const handleRedirectLogin = (e) => {
    e.preventDefault();
    navigate("/loginpage");
  };

  //if user data is not set then display the dialog to redirect user to login page
  if (!userData || !userData.user_id) {
    return (
      <section>
        <div className="wrapper-deal">
          <div className="main-box-deal">
            <h2>Login to view your Advertisements!</h2>
            <button onClick={(e) => handleRedirectLogin(e)}>Login</button>
          </div>
        </div>
      </section>
    );
  }

  //render individual ad when clicked on one of the advertisements
  const renderIndividualAd = (props) => {
    let path = `myadpage`;
    navigate(path, { state: { adData: props } });
  };

  return (
    <main className="wrapper">
      {/* loop on the advertisement data to render each advertisement */}
      {adData.map((product) => (
        <main className="box" onClick={() => renderIndividualAd(product)}>
          <Ad data={product} />
        </main>
      ))}
    </main>
  );
}

export default MyAdsHome;
