import React from "react";
import "./MyAds.css";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import { Ad } from "./Ad";
import { useNavigate } from "react-router-dom";
import TitleSection from "../home/js/TitleSection";
import MenuSection from "../home/js/MenuSection";
import FooterSection from "../home/js/FooterSection";

function MyAdsHome(props) {
  let location = useLocation();
  let navigate = useNavigate();
  const [isRegistered, setIsRegistered] = useState(false);
  const [userData, setUserData] = useState();

  useEffect(() => {
    if (userData) {
      return () => {};
    }
    if (location.state) {
      let data = userData;
      data = location.state.data;
      setUserData(data);
      if (location.state.data.f_name.valid) {
        setIsRegistered(true);
      }
    }
  }, [userData]);

  const data = userData;

  return (
    <>
      <TitleSection isRegistered={isRegistered} userData={data} />
      <MenuSection />
      <MyAdvertisements />
      <FooterSection />
    </>
  );
}

function MyAdvertisements(props) {
  let navigate = useNavigate();

  const [adData, setAdData] = useState([]);

  const renderIndividualAd = (props) => {
    let path = `myadpage`;
    navigate(path, { state: { adData: props } });
  };
  React.useEffect(() => {
    const url = process.env.REACT_APP_BACKEND_URL + "/myads";
    fetch(url)
      .catch((error) => {
        console.log(error);
      })
      .then((res) => res.json())
      .then((data) => {
        setAdData(data.ads);
      });
  }, []);
  return (
    <main className="wrapper">
      {adData.map((product) => (
        <main className="box" onClick={() => renderIndividualAd(product)}>
          <Ad data={product} />
        </main>
      ))}
    </main>
  );
}

export default MyAdsHome;
