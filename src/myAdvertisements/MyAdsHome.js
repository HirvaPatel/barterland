import React from "react";
import "./MyAds.css";
import { useState, useEffect } from "react";
import { Ad } from "./Ad";
import { useNavigate } from "react-router-dom";
import TitleSection from "../home/js/TitleSection";
import MenuSection from "../home/js/MenuSection";
import FooterSection from "../home/js/FooterSection";
import { ReactSession } from "react-client-session";
import axios from "axios";

function MyAdsHome(props) {
  const [userData, setUserData] = useState();
  const [adData, setAdData] = useState([]);
  let navigate = useNavigate();

  useEffect(() => {
    if (userData && userData.user_id) {
      return;
    }
  }, [userData]);

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

    const url = process.env.REACT_APP_BACKEND_URL + "/myads";
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

  console.log("advertisements:", adData);
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

function MyAdvertisements(props) {
  const adData = props.adData;
  const userData = props.userData;
  let navigate = useNavigate();

  const handleRedirectLogin = (e) => {
    e.preventDefault();
    navigate("/loginpage");
  };

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

  const renderIndividualAd = (props) => {
    let path = `myadpage`;
    navigate(path, { state: { adData: props } });
  };

  return (
    <main className="wrapper">
      {console.log("addata in the render page: ", adData)}
      {adData.map((product) => (
        <main className="box" onClick={() => renderIndividualAd(product)}>
          <Ad data={product} />
        </main>
      ))}
    </main>
  );
}

export default MyAdsHome;
