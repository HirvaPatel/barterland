/**
 * @author Hirva Patel hirva.patel@dal.ca
 */
import React from "react";
import "../css/MyIndividualAd.css";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import { Button } from "@material-ui/core";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import TitleSection from "../../home/js/TitleSection";
import MenuSection from "../../home/js/MenuSection";
import FooterSection from "../../home/js/FooterSection";

//Individual advertisement component
function MyIndividualAd(props) {
  let location = useLocation();
  const [userData, setUserData] = useState();

  //set userdata state
  useEffect(() => {
    if (userData) {
      return () => {};
    }
    if (location.state) {
      let data = userData;
      data = location.state.data;
      setUserData(data);
    }
  }, [userData]);
  const data = userData;

  return (
    <>
      <TitleSection userData={data} />
      <MenuSection />
      <MyAd />
      <FooterSection />
    </>
  );
}

//My advertisement component
function MyAd(props) {
  const location = useLocation();
  const [adData, setAdData] = useState(location.state.adData);

  let navigate = useNavigate();

  //navigate to the advertisement edit page
  const renderEditAd = (props) => {
    let path = `edit`;
    navigate(path, { state: { adData: props } });
  };

  //navigate to the individual ad
  const renderIndividualAd = () => {
    alert("Advertisement Successfully Deleted!!");
    navigate("/myads");
  };

  //connect to the database to delete the advertisement
  const handleDelete = () => {
    const url = process.env.REACT_APP_BACKEND_URL + "/deletemyad";
    axios
      .delete(url, {
        data: {
          ad_id: adData.ad_id,
        },
      })
      .then((response) => {
        setAdData(response.data.data);
      });
    renderIndividualAd();
  };

  return (
    <section>
      <div className="wrapper">
        <div className="main-box">
          {/* fetch ad title from the database */}
          <h2>{adData.ad_details.title}</h2>
          {/* fetch ad image from the database */}
          <img src={adData.ad_details.image_url} alt="" className="myAdImg" />
        </div>
        <div className="main-box">
          <div className="product-details">
            <h2>Product Details</h2>
            <div className="description">
              <h3>Description</h3>
              {adData.ad_details.description}
            </div>
            <div className="location">
              <h3>Location</h3>
              {adData.ad_details.location}
            </div>

            <div className="valuation">
              <h3>Valuation</h3>
              {adData.ad_details.value}
            </div>
            <div className="valid-till">
              <h3>Valid Till</h3>
              {adData.ad_details.valid_till}
            </div>
          </div>

          <div className="edit">
            <Button
              variant="contained"
              style={{ backgroundColor: "green" }}
              className="edit-button"
              onClick={() => renderEditAd(adData)}
            >
              Edit
            </Button>
            <Button
              variant="outlined"
              style={{ backgroundColor: "#A52A2A" }}
              className="delete-button"
              onClick={() => handleDelete()}
            >
              Delete
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MyIndividualAd;
