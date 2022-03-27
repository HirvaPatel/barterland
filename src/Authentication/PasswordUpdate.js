import React, { useState } from 'react';
import './RegisterForm.css';
import './LoginPage.css';
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import TitleSection from '../home/TitleSection';
import MenuSection from '../home/MenuSection';
import FooterSection from '../home/FooterSection';
import { ReactSession } from 'react-client-session';

export default function PasswordUpdate(props) {

  const [disablebutton, setdisablebutton] = useState(false);

  let navigate = useNavigate();

  const [oldpassword, setOldPasswordValue] = useState(
    {

      value: '', validinput: false, error: []

    });

  const [newpassword, setNewPasswordValue] = useState(
    {

      value: '', validinput: false, error: []

    });
  const [confirmpassword, setConfirmPasswordValue] = useState(
    {

      value: '', validinput: false, error: []

    });

    const user_id = ReactSession.get("user_id");
    console.log(user_id);
 

  function isAllInputValid() {
    return (oldpassword.validinput && newpassword.validinput && confirmpassword.validinput)
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    setdisablebutton(true);
    if (isAllInputValid()) {
    
      const user = {
        user_id: user_id,
        oldpassword: oldpassword.value,
        newpassword: newpassword.value,
      };

      axios.post('http://0.0.0.0:8080/api/updatepassword', user).then((response) => {

        console.log(response.data);
        if (response.data.success) {
          alert(response.data.message);
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
    let oldpasswordStateValue = oldpassword;
    let newpasswordStateValue = newpassword;
    let confirmpasswordStateValue = confirmpassword;

    const err = []
    const { name, value } = event.target;

    switch (name) {

      case 'oldpassword':
        oldpasswordStateValue.value = value;
        if (!validatePassword(value)) {
          err.push('Atleast have 8 charachter, one capital letter, one number and one special character!')
          oldpasswordStateValue.validinput = false;
          oldpasswordStateValue.error = err;
          break;
        }

        oldpasswordStateValue.error = [];
        oldpasswordStateValue.validinput = true;
        break;

      case 'newpassword':
        newpasswordStateValue.value = value;

        if (!validatePassword(value)) {
          newpasswordStateValue.validinput = false;
          err.push('Atleast have 8 charachter, one capital letter, one number and one special character');
          newpasswordStateValue.error = err;
          break;
        }
        newpasswordStateValue.error = [];
        newpasswordStateValue.validinput = true;
        break;

      case 'confirmpassword':
        confirmpasswordStateValue.value = value;

        if (value !== newpassword.value) {
          confirmpasswordStateValue.validinput = false;
          err.push('Passwords dont match');
          confirmpasswordStateValue.error = err;
          break;
        }
        confirmpasswordStateValue.error = [];
        confirmpasswordStateValue.validinput = true;
        break;
       
      default:
        break;
    }

    setOldPasswordValue(prevState => ({
      ...prevState, value: oldpasswordStateValue.value,
      validinput: oldpasswordStateValue.validinput,
      error: oldpasswordStateValue.error

    }));

    setNewPasswordValue(prevState => ({
      ...prevState, value: newpasswordStateValue.value,
      validinput: newpasswordStateValue.validinput,
      error: newpasswordStateValue.error

    })); 

    setConfirmPasswordValue(prevState => ({
      ...prevState, value: confirmpasswordStateValue.value,
      validinput: confirmpasswordStateValue.validinput,
      error: confirmpasswordStateValue.error

    }));    

  }

  return (

    <>
      <TitleSection />
      <MenuSection />
      <title> Login Form </title>
      <nav className="containerform">
        <nav className="title">Update Password Form</nav>
        <nav className="content">
          <form onSubmit={handleSubmit}>
            <nav className="userdata">
              <nav className="inputvalue">
                <label className="inputdetails">OldPassword</label>
                <input type="password" name="oldpassword" value={oldpassword.value} onChange={handleChange} id="oldpassword" placeholder="Enter your old password" />
                <label className="errorvalues">{oldpassword.error.join()}</label>
              </nav>
              <nav className="inputvalue">
                <label className="inputdetails">NewPassword</label>
                <input type="password" name="newpassword" value={newpassword.value} onChange={handleChange} id="newpassword" placeholder="Enter your password" />
                <label className="errorvalues">{newpassword.error.join()}</label>
              </nav>
              <nav className="inputvalue">
                <label className="inputdetails">ConfirmPassword</label>
                <input type="password" name="confirmpassword" value={confirmpassword.value} onChange={handleChange} id="confirmpassword" placeholder="Confirm your password" />
                <label className="errorvalues">{confirmpassword.error.join()}</label>
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


function validateEmail(email) {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
}

function validatePassword(password) {
  return String(password).match(/^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[a-zA-Z]).{8,}$/

  );
}

function validateFirstName(firstname) {
  return String(firstname).match(
    /^[A-Za-z ]+$/

  );
}

function validateLastName(lastname) {
  return String(lastname).match(
    /^[A-Za-z ]+$/

  );
}

function validateSecurityAnswer(securityanswer) {
  return String(securityanswer).match(/^[a-zA-Z0-9]{5,}$/

  );
}
