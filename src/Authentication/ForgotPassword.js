import React, { useState } from 'react';
import './RegisterForm.css';
import './LoginPage.css';
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";

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
   


  function isAllInputValid() {
    return (password.validinput && confirmpassword.validinput && securityanswer.validinput)
  }

      const handleSubmit = (event) => {
      event.preventDefault();
      const state = this.state;
      if (state.email.validinput === true && state.password.validinput === true && state.firstname.validinput === true && state.lastname.validateinput === true && state.confirmpassword.validateinput ===true) {
        alert('sucessfully registered!!');
        return true;
      } else {
        alert('All the fields in the form are madatory!');
        return false;
      }
  
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
            err.push('Atleast have 8 charachter, one capital letter, one number and one special character');
            passwordStateValue.error = err;
            break;
          }
          passwordStateValue.error = [];
          passwordStateValue.validinput = true;
          break;

          case 'confirmpassword':
          confirmpasswordStateValue.value = value;

          if (!validatePassword(value)) {
            confirmpasswordStateValue.validinput = false;
            err.push('Atleast have 8 charachter, one capital letter, one number and one special character');
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
          <nav className="title">Reset Password Form</nav>
          <nav className="content">
            <form onSubmit={handleSubmit}>
              <nav className="userdata">
              <nav className="inputvalue">
                  <label className="inputdetails">Security Question</label>
                  <input type="text" name="securityanswer"></input> 
                  
              </nav>
              <nav className="inputvalue">
                  <label className="inputdetails">Security Answer</label>
                  <input type="text" name="securityanswer" value={securityanswer.value} onChange={handleChange} id="securityanswer" placeholder="Enter your Security Answer" />
                  <label className="errorvalues">{securityanswer.error.join()}</label>
                </nav>
                <nav className="inputvalue">
                  <label className="inputdetails">Password</label>
                  <input type="password" name="password" value={password.value} onChange={handleChange} id="password" placeholder="Enter your password" />
                  <label className="errorvalues">{password.error.join()}</label>
                </nav>
                <nav className="inputvalue">
                  <label className="inputdetails">ConfirmPassword</label>
                  <input type="password" name="confirmpassword" value={confirmpassword.value} onChange={handleChange} id="confirmpassword" placeholder="Confirm your password" />
                  <label className="errorvalues">{confirmpassword.error.join()}</label>
                </nav>
              <nav className="buttonContainer">
                <button className='button-body1' id='submitbutton' disabled={!isAllInputValid}> Submit</button>
              </nav>
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


function validatePassword(password) {
  return String(password).match(/^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[a-zA-Z]).{8,}$/

  );
}

  function validateSecurityAnswer(securityanswer){
    return String(securityanswer).match(/^[a-zA-Z]{5,}$/

    );
  }

