import React, { useState } from 'react';
import './LoginPage.css';
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";

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
      navigate("/userregister")
      /* const user = {
        email: email.value,
        password: password.value

      }; */
     
     /*  axios.post('https://tutorial4-api.herokuapp.com/api/users/login', user).then((response) => {
       
        if (response.data.status === true) {
          alert('Login Successfull!!');
          navigate("/profilelist")
        }

      }).catch((error) => {
        console.log(error.response);
        if (error.response.status === 400) {
          alert(error.response.data.message);
        } else {
          alert('try again!');
        }
      }); */
    }else{
    setdisablebutton(true);
    }
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
      <nav>
      <header>
        <nav className="container">
            <nav className="box1">
                <Link to={"/"} ><label className="logo">BarterLand</label> </Link>
            </nav>
            <nav className="box1">
                {/* <Link to={"/comingsoon"} target="_blank" rel="noopener noreferrer" > <label>Location</label> </Link> */}
                <Link to={"/comingsoon"} > <label>Location</label> </Link>
            </nav>
            <nav className="box1">
                <Link to={"/comingsoon"} > <label>Wishlist</label> </Link>
            </nav>
            <nav className="box1">
               <Link to={"/comingsoon"} ><label>Contact Us</label></Link>
           </nav>
           <nav className="box1">
               <Link to={"/comingsoon"} ><label>About Us</label></Link>
           </nav>
           <nav className="box1">
               <Link to={"/comingsoon"} ><label>Read our Blog</label></Link>
           </nav>
           <nav className="box1">
               <Link to={"/comingsoon"} ><label>Rate Us</label></Link>
           </nav>
        </nav>
    </header>
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
        <footer>
                <nav className="container4">
                <nav className="box1">
                <Link to={"/comingsoon"} > <label>Discussion Forum</label> </Link>
            </nav>
            <nav className="box1">
               <Link to={"/comingsoon"} ><label>Complaints</label></Link>
           </nav>
                </nav>

            </footer>
      </nav>

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