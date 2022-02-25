import React, { useState } from 'react';
import './LoginPage.css';
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function RegisterForm(props) {

  const [disablebutton, setdisablebutton] = useState(false);
  let navigate = useNavigate();

  const [firstname, setFirstNameValue] = useState(
    {
    value: '', validateinput: false,  error: []
   
  }); 

   const [lastname, setLastNameValue] = useState(
    {
    value: '', validateinput: false,  error: []

    }); 

   const [email, setEmailValue] = useState(
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
    return (email.validinput && password.validinput && confirmpassword.validinput && firstname.validateinput && lastname.validateinput)
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
      let emailStateValue = email;
      let passwordStateValue = password;
      let firstnameStateValue = firstname;
      let lastnameStateValue = lastname;
      let confirmpasswordStateValue = confirmpassword;

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

      setConfirmPasswordValue(prevState => ({
        ...prevState, value: confirmpasswordStateValue.value,
        validinput: confirmpasswordStateValue.validinput,
        error: confirmpasswordStateValue.error

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
          <nav className="title">Registration Form</nav>
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
                <nav className="inputvalue">
                  <label className="inputdetails">ConfirmPassword</label>
                  <input type="password" name="confirmpassword" value={confirmpassword.value} onChange={handleChange} id="confirmpassword" placeholder="Confirm your password" />
                  <label className="errorvalues">{confirmpassword.error.join()}</label>
                </nav>
              </nav>
              <nav className="buttonContainer">
                <button className='button-body' id='submitbutton' disabled={!isAllInputValid}> Submit</button>
              </nav>
                  <nav className="excistingvalue">
                  <label>Already have an account? <Link to="/userregister">Login in</Link></label>
                  </nav>
            </form>
          </nav>
        </nav>
        <footer>
                <nav className="container4">
                    <nav className="backtotop">
                        <Link to={"/home"} ><label>Back to top</label></Link>
                    </nav>
                    <nav className="logo-box"><Link to={"/home"} ><label>BarterLand</label></Link></nav>
                    <section className="box5">
                        <label> Developed by Humans </label>
                    </section>
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
