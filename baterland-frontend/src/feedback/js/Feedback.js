/**
 * @author Hirva Patel hirva.patel@dal.ca
 */
import { React, useState, useEffect } from "react";
import "../css/Feedback.css";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import DeleteIcon from "@mui/icons-material/Delete";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Feedback = (props) => {
  const [feedbackData, setFeedbackData] = useState(props.feedbackData);
  const [seller, setSeller] = useState([{}]);
  const [ads, setAds] = useState({});
  let navigate = useNavigate();

  useEffect(() => {
    async function fetchData() {
      var config = {
        headers: {
          seller_id: feedbackData.seller_id,
        },
      };

      var url = process.env.REACT_APP_BACKEND_URL.concat("/seller");

      await axios
        .get(url, config)
        .then(({ data }) => {
          setSeller(data.seller[0]);
        })
        .catch(() => {
          alert("No Seller Found!");
          navigate("/home");
        });

      config = {
        headers: {
          ad_id: feedbackData.advertisement_id,
        },
      };
      console.log("config: ", config);
      url = process.env.REACT_APP_BACKEND_URL.concat("/advertisements");

      await axios
        .get(url, config)
        .then(({ data }) => {
          setAds(data.advertisements.ad_details);
        })
        .catch(() => {
          alert("No products Found!");
          navigate("/home");
        });
    }
    fetchData();
  }, []);

  const handleEdit = () => {
    let path = `edit`;
    navigate(path, { state: { feedbackData: props.feedbackData } });
  };

  const renderFeedbacks = () => {
    navigate("/feedbacks");
  };

  const handleDelete = () => {
    const url = process.env.REACT_APP_BACKEND_URL + "/deleteFeedback";
    axios
      .delete(url, {
        data: {
          feedback_id: feedbackData.feedback_id,
        },
      })
      .then((response) => {
        setFeedbackData(response.data.data);
      });
    renderFeedbacks();
  };



  return (
    <div className="row">
      <div className="card shadow-sm">
        <div className="card-body">
          <h2 className="card-text">{feedbackData.title}</h2>
          <h3>{feedbackData.feedback}</h3>
          <h4>Seller: {seller.first_name}</h4>
          <h4>Product Bought: {ads.title}</h4>
          <div className="edit">
            <ModeEditIcon onClick={() => handleEdit()}></ModeEditIcon>
            <DeleteIcon onClick={() => handleDelete()}></DeleteIcon>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feedback;
