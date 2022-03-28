import React from 'react';
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import TitleSection from '../../home/js/TitleSection';
import MenuSection from '../../home/js/MenuSection';
import FooterSection from '../../home/js/FooterSection';
import { ReactSession } from 'react-client-session';
import '../css/UserUpdate.css';



export default function UserUpdate(props) {

  let navigate = useNavigate();

  const email = ReactSession.get("email");
  const first_name = ReactSession.get("first_name");
  const last_name = ReactSession.get("last_name");
  const address = ReactSession.get("address");
  const user_id= ReactSession.get("user_id");




  const handleSubmit = (event) => {
    event.preventDefault();
    
    
      const user = {
        user_id: user_id
      };

      const url= process.env.REACT_APP_BACKEND_URL + '/api/delete';
      axios.post(url, user).then((response) => {

        console.log(response.data);
        if (response.data.success) {
          alert(response.data.message);
          localStorage.clear();
          navigate('/home')

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
  

  return (

    <>
      <TitleSection />
      <MenuSection />
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <section>
        <div className="container-box-view">
          <div className="centre-box">
            <nav className="titlevalue">User Profile Data</nav>
            <nav className="content">
              <form >
                <nav className="userdata">
                  <nav className="inputvalue">                    
                    <h3 className="inputdetails">FirstName</h3>
                    <label className="inputdetails">{first_name}</label>
                  </nav>
                  <nav className="inputvalue">
                  <h3 className="inputdetails">LastName</h3>
                    <label className="inputdetails">{last_name}</label>
                  </nav>
                  <nav className="inputvalue"> 
                  <h3 className="inputdetails">Email</h3>
                    <label className="inputdetails">{email}</label>
                  </nav>
                  <nav className="inputvalue">
                  <h3 className="inputdetails">Address</h3>
                    <label className="inputdetails">{address}</label>
                  </nav>
                </nav>
              </form>
            </nav>

          </div>
         
          <nav>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          
          
        <nav className="buttonContainer">
          <Link to='/emailupdate'>
            <button className='button-body' id='submitbutton' > Update Email</button>
          </Link>
        </nav>
        <br></br>

        <nav className="buttonContainer">
          <Link to='/passwordupdate'>
            <button className='button-body' id='submitbutton' > Update Password</button>
          </Link>
        </nav>
        <br></br>

        <nav className="buttonContainer">
          <Link to='/addressupdate'>
            <button className='button-body' id='submitbutton'> Update Address</button>
          </Link>
        </nav>
        <br></br>

        <nav className="buttonContainer">
          <Link to='/nameupdate'>
            <button className='button-body' id='submitbutton'> Update Name</button>
          </Link>
        </nav>
        <br></br>

        <nav className="buttonContainer">
          <Link to='/nameupdate'>
            <button className='button-body' id='submitbutton' onClick={handleSubmit}>Delete My Account</button>
          </Link>
        </nav>
        <br></br>
        <br></br>

      </nav>
        </div>

        
       
      </section>

      
      <FooterSection />
    </>

  );
}
