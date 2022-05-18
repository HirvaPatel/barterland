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

export default function ForgotPassword(props) {

  const [disablebutton, setdisablebutton] = useState(false);

  let navigate = useNavigate();

  const [securityanswer, setSecurityAnswerValue] = useState(
    {

      value: '', validinput: false, error: []

    });

  const [password, setPasswordValue] = useState(
    {

      value: '', validinput: false, error: []

    });
  const [confirmpassword, setConfirmPasswordValue] = useState(
    {

      value: '', validinput: false, error: []

    });


  const securityquestionvalue = ReactSession.get("securityquestionvalue");
  console.log(securityquestionvalue);

  const email = ReactSession.get("email");
  console.log(email);

  function isAllInputValid() {
    return (password.validinput && confirmpassword.validinput && securityanswer.validinput)
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    setdisablebutton(true);
    if (isAllInputValid()) {

      const user = {
        email: email,
        security_ans: securityanswer.value.toLowerCase(),
        password: password.value
      };

      console.log(user);

      //Make a API call to backend to verify the security answer and update the password

      const url = process.env.REACT_APP_BACKEND_URL + '/api/forgotpassword';
      axios.post(url, user).then((response) => {

        console.log(response.data);
        if (response.data.success) {
          alert(response.data.message);
          navigate("/loginpage");
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
    let passwordStateValue = password;
    let confirmpasswordStateValue = confirmpassword;
    let securityanswerStateValue = securityanswer;

    const err = []
    const { name, value } = event.target;

    switch (name) {

      case 'password':
        passwordStateValue.value = value;

        if (!validatePassword(value)) {
          passwordStateValue.validinput = false;
          err.push('Atleast have 8 characters, one capital letter and one number');
          passwordStateValue.error = err;
          break;
        }
        passwordStateValue.error = [];
        passwordStateValue.validinput = true;
        break;

      case 'confirmpassword':
        confirmpasswordStateValue.value = value;

        if (value !== password.value) {
          confirmpasswordStateValue.validinput = false;
          err.push('Password does not match');
          confirmpasswordStateValue.error = err;
          break;
        }
        confirmpasswordStateValue.error = [];
        confirmpasswordStateValue.validinput = true;
        break;

      case 'securityanswer':
        securityanswerStateValue.value = value;

        if (!validateSecurityAnswer(value)) {
          securityanswerStateValue.validinput = false;
          err.push('The security answer should be atleast 5 characters in length');
          securityanswerStateValue.error = err;
          break;
        }
        securityanswerStateValue.error = [];
        securityanswerStateValue.validinput = true;
        break;


      default:
        break;
    }

    setPasswordValue(prevState => ({
      ...prevState, value: passwordStateValue.value,
      validinput: passwordStateValue.validinput,
      error: passwordStateValue.error

    }));

    setConfirmPasswordValue(prevState => ({
      ...prevState, value: confirmpasswordStateValue.value,
      validinput: confirmpasswordStateValue.validinput,
      error: confirmpasswordStateValue.error

    }));

    setSecurityAnswerValue(prevState => ({
      ...prevState, value: securityanswerStateValue.value,
      validinput: securityanswerStateValue.validinput,
      error: securityanswerStateValue.error

    }));

  }

  return (

    <>
      <TitleSection />
      <MenuSection />

      <title> Login Form </title>
      <nav className="containerform">
        <nav className="title">Reset Password Form</nav>
        <nav className="content">
          <form onSubmit={handleSubmit}>
            <nav className="userdata">
              <nav className="inputvalue">
                <label className="inputdetails">Security Question</label>
                <input type="text" name="securityquestion" value={securityquestionvalue} readOnly></input>
              </nav>
              <nav className="inputvalue">
                <label className="inputdetails">Security Answer</label>
                <input type="text" name="securityanswer" value={securityanswer.value} onChange={handleChange} id="securityanswer" placeholder="Enter your Security Answer" />
                <label className="errorvalues">{securityanswer.error.join()}</label>
              </nav>
              <nav className="inputvalue">
                <label className="inputdetails">Password</label>
                <input type="password" name="password" value={password.value} onChange={handleChange} id="password" placeholder="Enter your new password" />
                <label className="errorvalues">{password.error.join()}</label>
              </nav>
              <nav className="inputvalue">
                <label className="inputdetails">ConfirmPassword</label>
                <input type="password" name="confirmpassword" value={confirmpassword.value} onChange={handleChange} id="confirmpassword" placeholder="Confirm your password" />
                <label className="errorvalues">{confirmpassword.error.join()}</label>
              </nav>
              <nav className="buttonContainer">
                <button className='button-body1' id='submitbutton' disabled={disablebutton}> Submit</button>
              </nav>
            </nav>
          </form>
        </nav>
      </nav>
      <FooterSection />
    </>


  );
}

//password validation
function validatePassword(password) {
  return String(password).match(/^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[a-zA-Z]).{8,}$/

  );
}
//security answer validation
function validateSecurityAnswer(securityanswer) {
  return String(securityanswer).toLowerCase().match(/^[a-zA-Z0-9]{5,}$/

  );
}

