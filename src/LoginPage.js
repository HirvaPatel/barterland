import React from 'react';
import './LoginPage.css'
import { Link } from "react-router-dom";
import logo from './logo.svg';
import usericon from './usericon.png';
import exchange from './exchange.png';
import exchange2 from './exchange2.png';
import exchange3 from './exchange3.png';



class LoginPage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {

      email: {
        value: '', error: [], validinput: false
      },

      password: {
        value: '', error: [], validinput: false
      }

    }

    this.handleChange = this.handleChange.bind(this);
  }


  isAllInputValid() {
    const state = this.state;
    return (state.email.validinput && state.password.validinput)
  }


  handleChange(event) {

    const err = []
    let state = this.state;
    const { name, value } = event.target;


    switch (name) {
      case 'email':
        state.email.value = value;
        if (!validateEmail(value)) {
          err.push('Invalid email!')
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
          err.push('Atleast have 8 character, one capital letter, one number and one special character');
          state.password.error = err;
          break;
        }
        state.password.error = [];
        state.password.validinput = true;
        break;
    }

    this.setState(state);
  }

  render() {
    return (
      <>
        <header>

          <nav className="container1">
            <nav className="field1"><a href="blankpage" className="logo">Logo</a></nav>
            <nav className="field2"><a href="blankpage" className="logo">Home</a></nav>
            <nav className="field3"><a href="blankpage" className="logo">Blog</a></nav>
            <nav className="header-right">
            <nav className="field4"><a href="blankpage" className="logo1"><img src={usericon} className="image1" alt="icon" /></a></nav>

            </nav>
          </nav>

        </header>

        <section>
          <nav className="container6-parent">
            <nav className="container6">
              <nav className="title1">Welcome Back!!</nav>
              <nav className="title"> Login </nav>
              <nav className="content">
                <form>
                  <nav className="userdata">
                    <nav className="inputvalue">
                      <label className="inputdetails">Email ID</label>
                      <input type="text" name="email" value={this.state.email.value} onChange={this.handleChange} id="email" placeholder="Enter your email" />
                      <label className="errorvalues">{this.state.email.error.join()}</label>
                    </nav>
                    <nav className="inputvalue">
                      <label className="inputdetails">Password</label>
                      <input type="password" name="password" value={this.state.password.value} onChange={this.handleChange} id="password" placeholder="Enter your Password" />
                      <label className="errorvalues">{this.state.password.error.join()}</label>
                    </nav>
                    <nav className="buttonContainer">
                      <Link to='/userprofile'>
                        <button className="button-body" id="submit" disabled={!this.isAllInputValid()}  >  Submit </button>
                      </Link>
                    </nav>
                    <nav className="excistingvalue1">
                      <Link to="/comingsoon"><label>Forgot Password?</label></Link>
                    </nav>
                    <nav className="excistingvalue">
                      <label>Don't have an account? <Link to="/userregister">Sign up</Link></label>
                    </nav>

                  </nav>
                </form>
              </nav>
            </nav>

            <nav className="pack">
              <img src={exchange3} className="image2"></img>
              <p> "In ancient times, this barter system involved people living in the same area, however, today bartering is known globally. The value of bartering items can be negotiated with the other party. Bartering is not about exchanging the item only for money which is one of the advantages. You can buy items by exchanging an item you have but no longer want or need. Trading in this manner is done through Online auctions and swap markets. This system is all about the agreement between the two users involved in trading and proper communication."</p>
            </nav>
          </nav>
        </section>

        <section>
          <nav className="container3">
            <nav className="pack1">
              <img src={exchange2} className="image"></img>
              <p> "In an economic crunch, bartering can be a fantastic way to get the goods and services you need without having to pull money out of your pocket. Virtually any item or service can be bartered if the parties involved agree to the terms of the trade. Innaviduals, companies, and countries can all benefit from such cashless exchanges, particularly if they are lacking hard currency to obtain goods and services. On a broader level, bartering can result in the optimal allocation of resources by exchanging goods in quantities that represent similar values. Bartering can also help economies achieve equilibrium, which occurs when demand equals supply."</p>
            </nav>
            <nav className="pack1">
              <img src={exchange} className="image"></img>
              <p> "Barter is a system of exchange or an act of trading goods between the users for other goods or services. It is considered the oldest method of exchange. The history of this method goes a long way back to the days when money was not even invented. Due to lack of money, bartering became popular in the 1930s during the Great Depression. It was done through groups or between people who acted like banks. If any items were sold, the owner would receive credit and the buyer’s account would be debited."</p>
            </nav>
          </nav>
        </section>

        <footer>
          <nav className="container4">
            <nav className="feild1"> <a href="comingsoon"> About us</a> </nav>
            <nav className="feild2"> <a href="comingsoon"> Contact us</a> </nav>
            <nav className="feild3"> <a href="comingsoon"> Feedback </a> </nav>
            <nav className="feild4"> <a href="comingsoon"> Ratings </a> </nav>
          </nav>
        </footer></>

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

export default LoginPage;

