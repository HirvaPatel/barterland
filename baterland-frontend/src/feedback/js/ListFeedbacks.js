import { React, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import FooterSection from "../../home/js/FooterSection";
import MenuSection from "../../home/js/MenuSection";
import TitleSection from "../../home/js/TitleSection";
import axios from "axios";
import { ReactSession } from "react-client-session";
import Feedback from "./Feedback";
import Button from "@mui/material/Button";

function ListFeedbacks(props) {
  const [userData, setUserData] = useState();
  const [feedbackData, setFeedbackData] = useState([]);
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

    const url = process.env.REACT_APP_BACKEND_URL.concat("/feedback");

    axios
      .get(url, config)
      .then(({ data }) => {
        setFeedbackData(data.feedbacks);
      })
      .catch(() => {
        alert("No Feedbacks Found!");
        navigate("/home");
      });
  }, []);

  if (!feedbackData) {
    return <div className="loader"></div>;
  }

  const data = userData;

  return (
    <>
      <TitleSection />
      <MenuSection />
      <Feedbacks feedbackData={feedbackData} userData={data} />
      <FooterSection />
    </>
  );
}

function Feedbacks(props) {
  const feedbackData = props.feedbackData;
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
            <h2>Login to view your Feedbacks!</h2>
            <button onClick={(e) => handleRedirectLogin(e)}>Login</button>
          </div>
        </div>
      </section>
    );
  }

  const createFeedback = () => {
    let path = `new`;
    navigate(path, {
      state: { feedbackData: feedbackData, userData: userData },
    });
  };
  return (
    <main className="wrapper">
      <h2 style={{ color: "white", fontSize: "30px", margin: "1%" }}>
        Feedbacks
      </h2>
      <Button
        sx={{
          width: "10%",
          float: "right",
          border: "1px solid white",
          color: "white",
          margin: "2%",
        }}
        variant="outlined"
        onClick={() => {
          createFeedback();
        }}
      >
        New Feedback
      </Button>
      {feedbackData.map((feedback) => (
        <main className="box">
          <Feedback feedbackData={feedback} userData={userData} />
        </main>
      ))}
    </main>
  );
}

export default ListFeedbacks;
