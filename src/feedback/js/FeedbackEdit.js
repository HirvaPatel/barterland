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

function FeedbackEdit(props) {
  let location = useLocation();
  const [userData, setUserData] = useState();

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
      <Edit />
      <FooterSection />
    </>
  );
}

function Edit(props) {
  const location = useLocation();
  const [feedbackData, setFeedbackData] = useState(location.state.feedbackData);

  const [feedback, setFeedback] = useState(feedbackData.feedback);

  let navigate = useNavigate();
  const renderFeedbacks = () => {
    navigate("/feedbacks");
  };

  const handleEdit = () => {
    const url = process.env.REACT_APP_BACKEND_URL + "/updateFeedback";
    const reqBody = {
      feedback_id: feedbackData.feedback_id,
      feedback: feedback,
    };
    axios.put(url, reqBody).then((response) => {
      setFeedbackData(response.data.data);
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
          <h2> Edit Feedback </h2>
          <form>
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

export default FeedbackEdit;
