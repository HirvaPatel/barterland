import React from "react";
import "./MyIndividualAdEdit.css";
import { Link, useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import { Button } from "@material-ui/core";
import axios from "axios";

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

function TitleSection(props) {
  const [searchValue, setSearchValue] = useState("");

  let toProfile = "/register";
  let linkName = "Register Now";
  if (props.isRegistered && props.userData) {
    toProfile = "/profile";
    if (props.userData) {
      linkName = "Profile of " + props.userData.f_name.value;
    }
  }

  const handleChange = (e) => {
    let value = searchValue;
    value = e.target.value;
    setSearchValue(value);
  };

  return (
    <header>
      <nav className="container">
        <nav className="box1">
          <Link to={"/"}>
            <label className="logo">BarterLand</label>{" "}
          </Link>
        </nav>
        <nav className="box2">
          {/* <Link to={"/comingsoon"} target="_blank" rel="noopener noreferrer" > <label>Location</label> </Link> */}
          <Link to={"/comingsoon"}>
            {" "}
            <label>Location</label>{" "}
          </Link>
        </nav>
        <nav className="box1">
          <input
            placeholder="Search"
            value={searchValue}
            onChange={handleChange}
          />
          <Link to={"/comingsoon"}>
            {" "}
            <button
              className="ads-button"
              disabled={searchValue === "" ? true : false}
              type="submit"
            >
              Search
            </button>
          </Link>
        </nav>
        <nav className="box1">
          <Link to={"/comingsoon"}>
            {" "}
            <label>Wishlist</label>{" "}
          </Link>
        </nav>
        <nav className="box1">
          <Link to={"/comingsoon"} state={{ data: props.userData }}>
            <label>{linkName}</label>
          </Link>
        </nav>
      </nav>
    </header>
  );
}

function MenuSection(props) {
  return (
    <nav>
      <nav className="container2">
        <nav className="box1">
          <Link to={"/comingsoon"}>
            {" "}
            <label>Categories</label>
          </Link>
        </nav>
        <nav className="box1">
          <Link to={"/comingsoon"}>
            {" "}
            <label>Post Ads</label>
          </Link>
        </nav>
        <nav className="box1">
          <Link to={"/comingsoon"}>
            {" "}
            <label>Notifications</label>
          </Link>
        </nav>
        <nav className="box1">
          <Link to={"/comingsoon"}>
            {" "}
            <label>My Ads</label>
          </Link>
        </nav>
        <nav className="box1">
          <Link to={"/comingsoon"}>
            {" "}
            <label>Blogs</label>
          </Link>
        </nav>
        <nav className="box1">
          <Link to={"/comingsoon"}>
            {" "}
            <label>Feedback</label>
          </Link>
        </nav>
        <nav className="box1">
          <Link to={"/comingsoon"}>
            {" "}
            <label>Contact Us</label>
          </Link>
        </nav>
      </nav>
    </nav>
  );
}

class FooterSection extends React.Component {
  render() {
    return (
      <footer>
        <nav>
          <nav className="container3">
            <nav className="box3">
              <Link to={"/comingsoon"}>
                <label>About U</label>
              </Link>
            </nav>
            <nav className="box3">
              <Link to={"/comingsoon"}>
                <label>Contact Us</label>
              </Link>
            </nav>
            <nav className="box3">
              <Link to={"/comingsoon"}>
                <label>Give Feedback</label>
              </Link>
            </nav>
            <nav className="box3">
              <Link to={"/comingsoon"}>
                <label>Report an issue</label>
              </Link>
            </nav>
            <nav className="box3">
              <Link to={"/comingsoon"}>
                <label>Read of blogs</label>
              </Link>
            </nav>
            <nav className="box3">
              <Link to={"/comingsoon"}>
                <label>Meet out team</label>
              </Link>
            </nav>
            <nav className="box3">
              <Link to={"/comingsoon"}>
                <label>Rate Us</label>
              </Link>
            </nav>
          </nav>
        </nav>
        <nav className="container4">
          <nav className="backtotop">
            <Link to={"/home"}>
              <label>Back to top</label>
            </Link>
          </nav>
          <nav className="logo-box">
            <Link to={"/home"}>
              <label>BarterLand</label>
            </Link>
          </nav>
          <section className="box5">
            <label> Developed by Humans </label>
          </section>
        </nav>
      </footer>
    );
  }
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
    axios
      .put("http://localhost:8080/updatemyad", {
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
