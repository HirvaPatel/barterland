//Author: Sowjanya Mani

import React, { useState } from 'react';
import '../css/RegisterForm.css';
import '../css/LoginPage.css';
import axios from "axios";
import { useNavigate } from "react-router-dom";
import TitleSection from '../../home/js/TitleSection';
import MenuSection from '../../home/js/MenuSection';
import FooterSection from '../../home/js/FooterSection';
import { ReactSession } from 'react-client-session';

export default function NameUpdate(props) {

  const [disablebutton, setdisablebutton] = useState(false);

  let navigate = useNavigate();

  const [firstname, setFirstNameValue] = useState(
    {
      value: '', validinput: false, error: []

    });

  const [lastname, setLastNameValue] = useState(
    {
      value: '', validinput: false, error: []

    });

    ReactSession.setStoreType("localStorage");
 
    const user_id = ReactSession.get("user_id");
    console.log(user_id);



  function isAllInputValid() {
    return (firstname.validinput && lastname.validinput)
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    setdisablebutton(true);
    if (isAllInputValid()) {
    
      const user = {

        user_id: user_id,
        first_name: firstname.value.toLowerCase(),
        last_name: lastname.value.toLowerCase(),
       
      };

      //Make a API call to backend to update the name of the user
      const url= process.env.REACT_APP_BACKEND_URL + '/api/updatename';
      axios.post(url, user).then((response) => {

        console.log(response.data);
        if (response.data.success) {
          alert(response.data.message);

          ReactSession.set("first_name",response.data.first_name);
          ReactSession.set("last_name",response.data.last_name);

          navigate("/userupdate");
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
    let firstnameStateValue = firstname;
    let lastnameStateValue = lastname;

    const err = []
    const { name, value } = event.target;

    switch (name) {

      case 'firstname':
        firstnameStateValue.value = value;

        if (!validateFirstName(value)) {
          firstnameStateValue.validinput = false;
          err.push('Alphabets are only allowed');
          firstnameStateValue.error = err;
          break;

        }
        firstnameStateValue.error = [];
        firstnameStateValue.validinput = true;
        break;

      case 'lastname':
        lastnameStateValue.value = value;
        if (!validateLastName(value)) {

          lastnameStateValue.validinput = false;
          err.push('Alphabets are only allowed')
          lastnameStateValue.error = err;
          break;

        }
        lastnameStateValue.error = [];
        lastnameStateValue.validinput = true;
        break;

      default:
        break;
    }

    setFirstNameValue(prevState => ({
      ...prevState, value: firstnameStateValue.value,
      validinput: firstnameStateValue.validinput,
      error: firstnameStateValue.error

    }));

    setLastNameValue(prevState => ({
      ...prevState, value: lastnameStateValue.value,
      validinput: lastnameStateValue.validinput,
      error: lastnameStateValue.error

    }));

  }

  return (

    <>
      <TitleSection />
      <MenuSection />
      <title> Login Form </title>
      <nav className="containerform">
        <nav className="title">Update Address Form</nav>
        <nav className="content">
          <form onSubmit={handleSubmit}>
            <nav className="userdata">
              <nav className="inputvalue">
                <label className="inputdetails">FirstName</label>
                <input type="text" name="firstname" value={firstname.value} onChange={handleChange} id="firstname" placeholder="Enter your firstname" />
                <label className="errorvalues">{firstname.error.join()}</label>
              </nav>
              <nav className="inputvalue">
                <label className="inputdetails">LastName</label>
                <input type="text" name="lastname" value={lastname.value} onChange={handleChange} id="lastname" placeholder="Enter your last name" />
                <label className="errorvalues">{lastname.error.join()}</label>
              </nav>
              <nav className="buttonContainer">
                <button className='button-body1' id='submitbutton' disabled={disablebutton}> Update</button>
              </nav>
            </nav>
          </form>
        </nav>
      </nav>

      <FooterSection />
    </>
  );
}

//First Name validation
function validateFirstName(firstname) {
  return String(firstname).toLowerCase().match(
    /^[A-Za-z ]+$/

  );
}

//Last Name Validation
function validateLastName(lastname) {
  return String(lastname).toLowerCase().match(
    /^[A-Za-z ]+$/

  );
}
