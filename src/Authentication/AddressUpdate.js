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

export default function AddressUpdate(props) {

  const [disablebutton, setdisablebutton] = useState(false);

  let navigate = useNavigate();

  const [address, setAddressValue] = useState(
    {

      value: '', validinput: false, error: []

    });

    ReactSession.setStoreType("localStorage");

    const user_id = ReactSession.get("user_id");
    console.log(user_id);


  function isAllInputValid() {
    return (address.validinput)
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    setdisablebutton(true);
    if (isAllInputValid()) {
    
      const user = {
        user_id:user_id,
        address: address.value.toLowerCase()
      };
      axios.post('http://0.0.0.0:8080/api/updateaddress', user).then((response) => {

        console.log(response.data);
        if (response.data.success) {
          alert(response.data.message);

          ReactSession.set("address",response.data.address);

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
   
    let addressStateValue = address;
    
    const err = []
    const { name, value } = event.target;

    switch (name) {

      case 'address':
        addressStateValue.value = value;
        addressStateValue.error = [];
        addressStateValue.validinput = true;
        break;

       
      default:
        break;
    }

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
      <title> Login Form </title>
      <nav className="containerform">
        <nav className="title">Update Address Form</nav>
        <nav className="content">
          <form onSubmit={handleSubmit}>
            <nav className="userdata">
              <nav className="inputvalue">
                <label className="inputdetails">Address</label>
                <input type="textarea" name="address" value={address.value} onChange={handleChange} id="address" placeholder="Enter your Address" />
                <label className="errorvalues">{address.error.join()}</label>
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




