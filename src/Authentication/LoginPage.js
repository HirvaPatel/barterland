import React, { useState } from 'react';
import './LoginPage.css';
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import TitleSection from '../home/js/TitleSection';
import MenuSection from '../home/js/MenuSection';
import FooterSection from '../home/js/FooterSection';
import { ReactSession } from 'react-client-session';

export default function LoginPage(props) {

  const [disablebutton, setdisablebutton] = useState(false);

  let navigate = useNavigate();

  const [email, setEmailValue] = useState(
    {

      value: '', validinput: false, error: []

    });

  const [password, setPasswordValue] = useState(
    {

      value: '', validinput: false, error: []

    });

  function isAllInputValid() {
    return (email.validinput && password.validinput)
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    setdisablebutton(true);
    if (isAllInputValid()) {
    
      const user = {
        email: email.value.toLowerCase(),
        password: password.value

      };

      axios.post('http://0.0.0.0:8080/api/login', user).then((response) => {

        console.log(response.data);
        if (response.data.success) {
          alert(response.data.message);

          ReactSession.setStoreType("localStorage");

          ReactSession.set("user_id", response.data.user_id); 
          ReactSession.set("email",response.data.email);
          ReactSession.set("first_name",response.data.first_name);
          ReactSession.set("last_name",response.data.last_name);
          ReactSession.set("address",response.data.address);

          navigate("/home");
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
    let passwordStateValue = password;
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

      case 'password':
        passwordStateValue.value = value;

        if (!validatePassword(value)) {
          passwordStateValue.validinput = false;
          err.push('Atleast have 8 charachter, one capital letter, one number and one special character');
          passwordStateValue.error = err;
          break;
        }
        passwordStateValue.error = [];
        passwordStateValue.validinput = true;
        break;

      default:
        break;
    }

    setPasswordValue(prevState => ({
      ...prevState, value: passwordStateValue.value,
      validinput: passwordStateValue.validinput,
      error: passwordStateValue.error

    }));

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
      <nav>
        <title> Login Form </title>
        <nav className="containerform">
          <nav className="title">Login Form</nav>
          <nav className="content">
            <form onSubmit={handleSubmit}>
              <nav className="userdata">
                <nav className="inputvalue">
                  <label className="inputdetails">Email</label>
                  <input type="text" name="email" value={email.value} onChange={handleChange} id="email" placeholder="Enter your email" />
                  <label className="errorvalues">{email.error.join()}</label>
                </nav>
                <nav className="inputvalue">
                  <label className="inputdetails">Password</label>
                  <input type="password" name="password" value={password.value} onChange={handleChange} id="password" placeholder="Enter your password" />
                  <label className="errorvalues">{password.error.join()}</label>
                </nav>
              </nav>
              <nav className="buttonContainer">
                <button className='button-body' id='submitbutton' disabled={disablebutton}> Submit</button>
              </nav>
              <nav className="excistingvalue1">
                <Link to="/emailvalidation">Forgot Password?</Link>
              </nav>
              <nav className="excistingvalue">
                <label>Don't have an account? <Link to="/userregister">Sign up</Link></label>
              </nav>
            </form>
          </nav>
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