import React from 'react';
import { Link } from "react-router-dom";
import './App.css';
import './UserProfilePage';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

      firstname: {
        value: '', error: [], validinput: false
      },

      lastname: {
        value: '', error: [], validinput: false
      },

      email: {
        value: '', error: [], validinput: false
      },

      password: {
        value: '', error: [], validinput: false
      },

      confirmpassword: {
        value: '', error: [], validinput: false
      }
    }

    this.handleChange = this.handleChange.bind(this);
  }

  isAllInputValid() {
    const state = this.state;
    return (state.firstname.validinput && state.lastname.validinput && state.email.validinput && state.password.validinput && state.confirmpassword.validinput)
  }

  handleChange(event) {

    const err = []
    let state = this.state;
    const { name, value } = event.target;

    
    switch (name) {
      case 'firstname':
        state.firstname.value = value;
       
        if (!validateFirstName(value)) {
          state.firstname.validinput = false;
          err.push('Alphabets are only allowed');
          state.firstname.error = err;
          break;

        }
        state.firstname.error = [];
        state.firstname.validinput = true;
        break;

      case 'lastname':
        state.lastname.value = value;
        if (!validateLastName(value)) {

          state.lastname.validinput = false;
          err.push('Alphabets are only allowed')
          state.lastname.error = err;
          break;

        }
        state.lastname.error = [];
        state.lastname.validinput = true;
        break;

      case 'email':
        state.email.value = value;
        if (!validateEmail(value)) {
          err.push('invalid email!')
          state.email.validinput = false;
          state.email.error = err;
          break;
        }

        state.email.error = [];
        state.email.validinput = true;
        break;

      case 'password':
        state.password.value = value;

        if (!validatePassword(value)) {
          state.password.validinput = false;
          err.push('Atleast have 8 charachter, one capital letter, one number and one special character');
          state.password.error = err;
          break;
        }
        state.password.error = [];
        state.password.validinput = true;
        break;

      case 'confirmpassword':
        state.confirmpassword.value = value;

        if (value !== state.password.value) {
          state.confirmpassword.validinput = false;
          err.push('Passwords dont match');
          state.confirmpassword.error = err;
          break;
        }
        state.confirmpassword.error = [];
        state.confirmpassword.validinput = true;
        break;

      default:
        break;
    }

    this.setState(state);
  }

  render() {
    return (
      <nav>
        <title> Registration Form </title>
        <nav className="container">
          <nav className="title">Registration</nav>
          <nav className="content">
            <form >
              <nav className="userdata">
                <nav className="inputvalue">
                  <label className="inputdetails">First Name</label>
                  <input type="text" name="firstname" value={this.state.firstname.value} onChange={this.handleChange} id="firstname" placeholder="Enter your first name" />
                  <label className="errorvalues">{this.state.firstname.error.join()}</label>
                </nav>
                <nav className="inputvalue">
                  <label className="inputdetails">Last Name</label>
                  <input type="text" name="lastname" value={this.state.lastname.value} onChange={this.handleChange} id="lastname" placeholder="Enter your last name" />
                  <label className="errorvalues">{this.state.lastname.error.join()}</label>
                </nav>
                <nav className="inputvalue">
                  <label className="inputdetails">Email</label>
                  <input type="text" name="email" value={this.state.email.value} onChange={this.handleChange} id="email" placeholder="Enter your email" />
                  <label className="errorvalues">{this.state.email.error.join()}</label>
                </nav>
                <nav className="inputvalue">
                  <label className="inputdetails">Password</label>
                  <input type="password" name="password" value={this.state.password.value} onChange={this.handleChange} id="password" placeholder="Enter your password" />
                  <label className="errorvalues">{this.state.password.error.join()}</label>
                </nav>
                <nav className="inputvalue">
                  <label className="inputdetails">Confirm Password</label>
                  <input type="password" name="confirmpassword" value={this.state.confirmpassword.value} onChange={this.handleChange} id="confirmpassword" placeholder="Confirm your password" />
                  <label className="errorvalues">{this.state.confirmpassword.error.join()}</label>
                </nav>
              </nav>
              <nav className="buttonContainer">
                <Link to='/userprofile'>
                  <button className='button-body-id' id='submit' disabled={!this.isAllInputValid()} onClick={() => alert('Registation successful !')}> Submit</button>
                </Link>
              </nav>
            </form>
          </nav>
        </nav>
      </nav>

    );
  }

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


export default Form;