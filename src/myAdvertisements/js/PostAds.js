// /**
//  * @author hardik Mesvania hr860663@dal.ca
//  */
import React, { useState } from 'react'
import TitleSection from '../../home/js/TitleSection'
import MenuSection from '../../home/js/MenuSection'
import FooterSection from '../../home/js/FooterSection'
import { Button } from "@material-ui/core";
import axios from "axios";
import { ReactSession } from "react-client-session";
import { useNavigate } from 'react-router-dom';

function PostAds() {
  
  const [title, setTitle]=useState('');
  const [category, setCategory]=useState('');
  const [description, setDescription]=useState('');
  const [location, setLocation]=useState('');
  const [valuation, setValue]=useState('');
  const [validtill, setValidTill]=useState('');
  
  let navigate = useNavigate();
  ReactSession.setStoreType("localStorage");
  const user_id = ReactSession.get("user_id");
  const handleRedirectLogin = (e) => {
    e.preventDefault();
    navigate("/loginpage");
  };
 
  const handleEdit = () => {
    const url =  "http://localhost:8080/postmyad";
    const ads = {
      user_id:user_id,
      ad_details:{
          title: title.toLowerCase(),
          category: category.toLowerCase(),
          description: description.toLowerCase(),
          location: location.toLowerCase(),
          value: valuation.toLowerCase(),
          valid_till: validtill.toLowerCase(),
          img_url:''
      }
    }
    console.log(ads)
    axios
      .post(url,ads)
      .then((response) => {
        console.log(response.data);
        if (response.data.success) {
          alert("Advertisement Successfully Added!!");
        }
      }).catch((error) => {
        console.log(error.response);
        if (error.response.status === 400) {
          alert(error.response.data.message);
        } else {
          alert('something went wrong please try again!');
        }
      });
  };
  if (!user_id) {
    return (
      <>
      <TitleSection />
        <MenuSection />
      <section>
        
        <div className="wrapper-deal">
          <div className="main-box-deal">
            <h2>Login to view your Advertisements!</h2>
            <button onClick={(e) => handleRedirectLogin(e)}>Login</button>
          </div>
        </div>
      </section>
      <FooterSection />
      </>
    );
  }else{
  return (
    
    <>
    <TitleSection />
      <MenuSection />
      <section>
      <div className="wrapper">
        <div className="main-box">
          <h2> Post Advertisement
             </h2>
          <form>
            <div className="description">
              <h3>title</h3>
              <input
                type="text"
                value={title}
                onChange={(event) => {
                  setTitle(event.target.value);
                }}
              />
            </div>
            <div className="location">
              <h3>category</h3>
              <input
                type="text"
                value={category}
                onChange={(event) => {
                  setCategory(event.target.value);
                }}
              />
            </div>

            <div className="valuation">
              <h3>description</h3>
              <input
                type="text"
                value={description}
                onChange={(event) => {
                  setDescription(event.target.value);
                }}
              />
            </div>
            <div className="valid-till">
              <h3>location</h3>
              <input
                type="text"
                value={location}
                onChange={(event) => {
                  setLocation(event.target.value);
                }}
              />
            </div>
            <div className="value">
              <h3>value</h3>
              <input type="text" 
              value={valuation}
              onChange={(event) => {
                setValue(event.target.value);
              }} />
            </div>
            <div className="valid_till">
              <h3>valid till</h3>
              <input type="text"  value={validtill}
              onChange={(event) => {
                setValidTill(event.target.value);
                console.log(validtill)
              }}  />
            </div>
            <div className="upload-image">
              <h3>Upload  Image</h3>
              <input type="file" />
              {/* <button >Upload</button> */}
            </div>
            <div className="edit">
              <Button
                variant="contained"
                style={{ backgroundColor: "green" }}
                className="edit-button"
                onClick={() => handleEdit()}
              >
                Post AD
              </Button>
              {/* <Button
                variant="outlined"
                style={{ backgroundColor: "#A52A2A" }}
                className="delete-button"
                // onClick={() => handleDiscard()}
              >
                Discard
              </Button> */}
            </div>
          </form>
        </div>
      </div>
    </section>
      <FooterSection />
     
      </>
  )
}}

export default PostAds