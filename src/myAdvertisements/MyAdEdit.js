import React from "react";
import "./MyIndividualAdEdit.css";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import { Button } from "@material-ui/core";
import axios from "axios";
import TitleSection from "../home/js/TitleSection";
import MenuSection from "../home/js/MenuSection";
import FooterSection from "../home/js/FooterSection";

function MyAdEdit(props) {
  let location = useLocation();
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
      //   if (location.state.data.f_name.valid) {
      //     setIsRegistered(true);
      //   }
    }
  }, []);
  const data = userData;

  return (
    <>
      <TitleSection isRegistered={isRegistered} userData={data} />
      <MenuSection />
      <AdEdit />
      <FooterSection />
    </>
  );
}

function AdEdit(props) {
  const location = useLocation();
  const [adData, setAdData] = useState(location.state.adData);

  const [desc, setDesc] = useState(adData.ad_details.description);
  const [adLocation, setAdLocation] = useState(adData.ad_details.location);
  const [value, setValue] = useState(adData.ad_details.value);
  const [validTill, setValidTill] = useState(adData.ad_details.valid_till);

  let navigate = useNavigate();
  const renderIndividualAd = () => {
    navigate("/myads");
  };

  const handleEdit = () => {
    const url = process.env.REACT_APP_BACKEND_URL + "/updatemyad";
    axios
      .put(url, {
        ad_id: adData.ad_id,
        description: desc,
        location: adLocation,
        value: value,
        valid_till: validTill,
      })
      .then((response) => {
        setAdData(response.data.data);
      });

    alert("Advertisement Successfully Updated!!");
    renderIndividualAd();
  };
  const handleDiscard = () => {
    renderIndividualAd();
  };

  return (
    <section>
      <div className="wrapper">
        <div className="main-box">
          <h2> Edit Advertise </h2>
          <form>
            <div className="description">
              <h3>Description</h3>
              <input
                type="text"
                value={desc}
                onChange={(event) => {
                  setDesc(event.target.value);
                }}
              />
            </div>
            <div className="location">
              <h3>Location</h3>
              <input
                type="text"
                value={adLocation}
                onChange={(event) => {
                  setAdLocation(event.target.value);
                }}
              />
            </div>

            <div className="valuation">
              <h3>Valuation</h3>
              <input
                type="text"
                value={value}
                onChange={(event) => {
                  setValue(event.target.value);
                }}
              />
            </div>
            <div className="valid-till">
              <h3>Valid Till</h3>
              <input
                type="text"
                value={validTill}
                onChange={(event) => {
                  setValidTill(event.target.value);
                }}
              />
            </div>
            <div className="upload-image">
              <h3>Upload New Image</h3>
              <input type="file" onFileChange={() => {}} />
            </div>
            <div className="edit">
              <Button
                variant="contained"
                style={{ backgroundColor: "green" }}
                className="edit-button"
                onClick={() => handleEdit()}
              >
                Edit
              </Button>
              <Button
                variant="outlined"
                style={{ backgroundColor: "#A52A2A" }}
                className="delete-button"
                onClick={() => handleDiscard()}
              >
                Discard
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default MyAdEdit;
