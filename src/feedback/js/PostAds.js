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
import storage from "../../individual_ad/js/firebase";



function PostAds() {

  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');
  const [description, setDescription] = useState('');
  const [location, setLocation] = useState('');
  const [valuation, setValue] = useState('');
  const [validtill, setValidTill] = useState('');

  const [image, setImage] = useState('');
  const [imageUrl, setUrl] = useState('');

  let navigate = useNavigate();
  ReactSession.setStoreType("localStorage");
  const user_id = ReactSession.get("user_id");
  // const imageUrl=ReactSession.get("url")
  const handleRedirectLogin = (e) => {
    e.preventDefault();
    navigate("/loginpage");
  };

  function handleFileChange(e) {
    setImage(e.target.files[0]);
    if (image == null) {
      console.log('Image is null');
      return;
    }
    storage.ref(`/barterland/${e.target.files[0].name}`).put(e.target.files[0])
      .on("state_changed", () => {

        // Getting Download Link
        storage.ref("barterland").child(e.target.files[0].name).getDownloadURL()
          .then((imageUrl) => {
            setUrl(imageUrl);
            console.log(imageUrl);
          });
      });
  }
  const handleEdit = () => {
    const url = process.env.REACT_APP_BACKEND_URL + "/postmyad";
    const ads = {
      user_id: user_id,
      ad_details: {
        title: title.toLowerCase(),
        category: category.toLowerCase(),
        description: description.toLowerCase(),
        location: location.toLowerCase(),
        value: valuation.toLowerCase(),
        valid_till: validtill.toLowerCase(),
        image_url: imageUrl
      }
    }
    console.log(ads)
    axios
      .post(url, ads)
      .then((response) => {
        console.log(response.data);
        if (response.data.success) {
          alert("Advertisement Successfully Added!!");
          navigate('/myads')
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
  } else {
    return (

      <>
        <TitleSection />
        <MenuSection />
        <section>
          <div className="wrapper-individual">
            <div className="main-box-individual">
              <h2> Post Advertisement</h2>
              <form>
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
                <div className="location">
                  <h3>Category</h3>
                  <input
                    type="text"
                    value={category}
                    onChange={(event) => {
                      setCategory(event.target.value);
                    }}
                  />
                </div>

                <div className="valuation">
                  <h3>Description</h3>
                  <textarea
                    type="text"
                    value={description}
                    onChange={(event) => {
                      setDescription(event.target.value);
                    }}
                  ></textarea>
                </div>
                <div className="valid-till">
                  <h3>Location</h3>
                  <input
                    type="text"
                    value={location}
                    onChange={(event) => {
                      setLocation(event.target.value);
                    }}
                  />
                </div>
                <div className="value">
                  <h3>Value</h3>
                  <input type="text"
                    value={valuation}
                    onChange={(event) => {
                      setValue(event.target.value);
                    }} />
                </div>
                <div className="valid_till">
                  <h3>Valid till</h3>
                  <input type="text" value={validtill}
                    onChange={(event) => {
                      setValidTill(event.target.value);
                      console.log(validtill)
                    }} />
                </div>
                <h3> Upload Images </h3>
                <input
                  type='file'
                  name='image'
                  id='image'
                  onChange={(e) => handleFileChange(e)}
                />
                <div className="edit">
                  <Button
                    variant="contained"
                    style={{ backgroundColor: "green" }}
                    className="edit-button"
                    onClick={(e) => handleEdit(e)}
                  >
                    Post AD
                  </Button>
                  { }
                </div>
              </form>
            </div>
          </div>
        </section>
        <FooterSection />

      </>
    )
  }
}

export default PostAds
