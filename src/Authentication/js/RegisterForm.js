import React, { useState } from 'react';
import '../css/RegisterForm.css';
import '../css/LoginPage.css';
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import TitleSection from '../../home/js/TitleSection';
import MenuSection from '../../home/js/MenuSection';
import FooterSection from '../../home/js/FooterSection';

export default function RegisterForm(props) {

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
  const [securityquestion, setSecurityQuestionValue] = useState(
      {
  
        value: "default", validinput: false
  
      });
  const [securityanswer, setSecurityAnswerValue] = useState(
    {

      value: '', validinput: false, error: []

    });

  const [address, setAddressValue] = useState(
    {

      value: '', validinput: false, error: []

    });


  function isAllInputValid() {
    return (email.validinput && password.validinput && confirmpassword.validinput && firstname.validinput && lastname.validinput && securityanswer.validinput && address.validinput && securityquestion.validinput)
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    setdisablebutton(true);
    if (isAllInputValid()) {
    
      const user = {
        first_name: firstname.value.toLowerCase(),
        last_name: lastname.value.toLowerCase(),
        email: email.value.toLowerCase(),
        password: password.value,
        security_ques: securityquestion.value,
        security_ans: securityanswer.value.toLowerCase(),
        address: address.value.toLowerCase()
      };

      const url= process.env.REACT_APP_BACKEND_URL + '/api/register';
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
          alert('something went wrong please try again!');
        }
      });
    } 
      setdisablebutton(false);
  }

  const handleChange = (event) => {
    let emailStateValue = email;
    let passwordStateValue = password;
    let firstnameStateValue = firstname;
    let lastnameStateValue = lastname;
    let confirmpasswordStateValue = confirmpassword;
    let securityanswerStateValue = securityanswer;
    let addressStateValue = address;
    let securityquestionStateValue = securityquestion;

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

        if (value !== password.value) {
          confirmpasswordStateValue.validinput = false;
          err.push('Passwords dont match');
          confirmpasswordStateValue.error = err;
          break;
        }
        confirmpasswordStateValue.error = [];
        confirmpasswordStateValue.validinput = true;
        break;

        case 'securityquestion':
          securityquestionStateValue.value = value;
          console.log(securityquestionStateValue.value)
          securityquestionStateValue.validinput = true;
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

      case 'address':
        addressStateValue.value = value;
        addressStateValue.error = [];
        addressStateValue.validinput = true;
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

    setSecurityQuestionValue(prevState => ({
      ...prevState, value: securityquestionStateValue.value,
      validinput: securityquestionStateValue.validinput
    }));

    setSecurityAnswerValue(prevState => ({
      ...prevState, value: securityanswerStateValue.value,
      validinput: securityanswerStateValue.validinput,
      error: securityanswerStateValue.error

    }));

    setAddressValue(prevState => ({
      ...prevState, value: addressStateValue.value,
      validinput: addressStateValue.validinput,
      error: addressStateValue.error

    }));

    

  }

  return (

    <>
      <TitleSection />
      <MenuSection />
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
              <nav>
                <label className="inputdetails">Select your Security Question</label>
                <select id="securityquestion" className="selection" name="securityquestion" value ={securityquestion.value} onChange={handleChange} >
                  <option value="DEFAULT">Choose your question</option>
                  <option value="Name of your favourite color">Name of your favourite color</option> 
                  <option value="Name of your first pet">Name of your first pet</option> 
                  <option value="Name of your school">Name of your school</option>
                </select>
              </nav>
              <nav className="inputvalue">
                <label className="inputdetails">Security Answer</label>
                <input type="text" name="securityanswer" value={securityanswer.value} onChange={handleChange} id="securityanswer" placeholder="Enter your Security Answer" />
                <label className="errorvalues">{securityanswer.error.join()}</label>
              </nav>
              <nav className="inputvalue">
                <label className="inputdetails">Address</label>
                <input type="text" name="address" value={address.value} onChange={handleChange} id="address" placeholder="Enter your Address" />
                <label className="errorvalues">{address.error.join()}</label>
              </nav>
              <nav className="buttonContainer">
                <button className='button-body1' id='submitbutton' disabled={disablebutton}> Submit</button>
              </nav>
              <nav className="excistingvalue2">
                <label>Already have an account?<Link to="/loginpage">Login in</Link></label>
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
  return String(firstname).toLowerCase().match(
    /^[A-Za-z ]+$/

  );
}

function validateLastName(lastname) {
  return String(lastname).toLowerCase().match(
    /^[A-Za-z ]+$/

  );
}

function validateSecurityAnswer(securityanswer) {
  return String(securityanswer).toLowerCase().match(/^[a-zA-Z0-9]{5,}$/

  );
}
