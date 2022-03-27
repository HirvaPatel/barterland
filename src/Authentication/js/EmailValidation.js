import React, { useState } from 'react';
import '../css/RegisterForm.css';
import '../css/LoginPage.css';
import axios from "axios";
import { useNavigate } from "react-router-dom";
import TitleSection from '../../home/TitleSection';
import MenuSection from '../../home/MenuSection';
import FooterSection from '../../home/FooterSection';
import { ReactSession } from 'react-client-session';

export default function EmailValidation(props) {

  const [disablebutton, setdisablebutton] = useState(false);

  let navigate = useNavigate();

  const [email, setEmailValue] = useState(
    {

      value: '', validinput: false, error: []

    });


  
  function isAllInputValid() {
    return (email.validinput)
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    setdisablebutton(true);
    if (isAllInputValid()) {
    
      const user = {
        email: email.value.toLowerCase()
      };

      const url= process.env.REACT_APP_BACKEND_URL + '/api/finduser';
      axios.post(url, user).then((response) => {

        console.log(response.data);
        if (response.data.success) {
          const userid = response.data.user_id;
          console.log(userid);
          alert('User Verified!!');

          ReactSession.setStoreType("localStorage");

          ReactSession.set("securityquestionvalue", response.data.security_ques);
          ReactSession.set("email", email.value); 
          
          
          navigate("/forgotpassword");
        }
      }).catch((error) => {
        console.log(error.response);
        if (error.response.status === 400) {
          alert(error.response.data.message);
        } else {
          alert(error.response.data.message);
        }
      });
    } 
      setdisablebutton(false);
  }


  const handleChange = (event) => {
    let emailStateValue = email;

    const err = []
    const { name, value } = event.target;

    switch (name) {

      case 'email':
        emailStateValue.value = value;
        if (!validateEmail(value)) {
          err.push('invalid email!')
          emailStateValue.validinput = false;
          emailStateValue.error = err;
          break;
        }

        emailStateValue.error = [];
        emailStateValue.validinput = true;
        break;

      default:
        break;
    }

    setEmailValue(prevState => ({
      ...prevState, value: emailStateValue.value,
      validinput: emailStateValue.validinput,
      error: emailStateValue.error

    }));

  }

  return (
    <>
      <TitleSection />
      <MenuSection />

      <title> Login Form </title>
      <nav className="containerform">
        {/* <nav className="title">Registration Form</nav> */}
        <nav className="content">
          <form onSubmit={handleSubmit}>
            <nav className="userdata">
              <nav className="inputvalue">
                <label className="inputdetails">Email</label>
                <input type="text" name="email" value={email.value} onChange={handleChange} id="email" placeholder="Enter your email" />
                <label className="errorvalues">{email.error.join()}</label>
              </nav>
              <nav className="buttonContainer">
                <button className='button-body1' id='submitbutton'  disabled={disablebutton}> Submit</button>
              </nav>
            </nav>
          </form>
        </nav>
      </nav>
      <FooterSection />
    </>

  );
}


function validateEmail(email) {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
}

