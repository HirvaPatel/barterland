/**
 * @author Hirva Patel hirva.patel@dal.ca
 */
import React from "react";
import "../css/FeedbackEdit.css";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import { Button } from "@material-ui/core";
import axios from "axios";
import TitleSection from "../../home/js/TitleSection";
import MenuSection from "../../home/js/MenuSection";
import FooterSection from "../../home/js/FooterSection";

function NewFeedback(props) {
  let location = useLocation();
  const [userData, setUserData] = useState(location.state.userData);
  useEffect(() => {
    if (userData) {
      return () => {};
    }
    if (location.state) {
      let data = userData;
      data = location.state.data;
      setUserData(data);
    }
  }, []);

  const data = userData;
  return (
    <>
      <TitleSection userData={data} />
      <MenuSection />
      <Create userData={data} />
      <FooterSection />
    </>
  );
}

function Create(props) {
  //   super.props();
  console.log("user data: ", props.userData);
  const [userData, setUserData] = useState(props.userData);
  const [feedback, setFeedback] = useState("");
  const [title, setTitle] = useState("");
  const [productName, setProductName] = useState("");
  const [sellerName, setSellerName] = useState("");

  let navigate = useNavigate();
  const renderFeedbacks = () => {
    navigate("/feedbacks");
  };

  const handleSubmit = () => {
    const url = process.env.REACT_APP_BACKEND_URL + "/createFeedback";
    const reqBody = {
      user_id: userData.user_id,
      title: title,
      feedback: feedback,
      sellerName: sellerName,
      productName: productName,
    };
    axios.post(url, reqBody).then((response) => {
      setFeedback(response.data.data);
    });

    alert("Feedback Successfully Updated!!");
    renderFeedbacks();
  };
  const handleDiscard = () => {
    renderFeedbacks();
  };

  return (
    <section>
      <div className="wrapper">
        <div className="main-box">
          <h2>Add New Feedback </h2>
          <form>
            <div className="description">
              <h3>Product name</h3>
              <input
                type="text"
                value={productName}
                onChange={(event) => {
                  setProductName(event.target.value);
                }}
              />
            </div>
            <div className="description">
              <h3>Seller name</h3>
              <input
                type="text"
                value={sellerName}
                onChange={(event) => {
                  setSellerName(event.target.value);
                }}
              />
            </div>
            <div className="description">
              <h3>Title</h3>
              <input
                type="text"
                value={title}
                onChange={(event) => {
                  setTitle(event.target.value);
                }}
              />
            </div>
            <div className="description">
              <h3>Description</h3>
              <input
                type="text"
                value={feedback}
                onChange={(event) => {
                  setFeedback(event.target.value);
                }}
              />
            </div>

            <div className="edit">
              <Button
                variant="contained"
                style={{ backgroundColor: "green" }}
                className="edit-button"
                onClick={() => handleSubmit()}
              >
                Submit
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

export default NewFeedback;
