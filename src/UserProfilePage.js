import React from 'react';
import { Component } from "react/cjs/react.production.min";

class UserProfile extends React.Component{
 
 
 
    render(){
        return (
          <div>
          <title> Registration Form </title>
          <div className="container">
            <div className="title">Registered User</div>
            <div className="content">
              <form >
                <div className="userdata">
                  <div className="inputvalue">
                    <label className="inputdetails">First Name</label>
                    <input type="text" name="firstname" value="Caroline" />    
                 </div>
                  <div className="inputvalue">
                    <label className="inputdetails">Last Name</label>
                    <input type="text" name="lastname" value="Lodge" />   
                 </div>
                  <div className="inputvalue">
                    <label className="inputdetails">Email</label>
                    <input type="text" name="email" value="caroline@gmail.com" />
          
                  </div>
                 
                 
                </div>
                
  
  
              </form>
            </div>
          </div>
        </div>
);


}
}

export default UserProfile;