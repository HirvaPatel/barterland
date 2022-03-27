import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import HomePage from '../home/js/HomePage';
import ComingSoonPage from '../home/js/ComingSoonPage';
import IndividualAdPage from '../individual_ad/js/IndividualAdPage';
import MyDeals from '../deals/js/MyDeals';

import LoginPage from '../Authentication/js/LoginPage';
import RegisterForm from '../Authentication/js/RegisterForm';
import ForgotPassword from '../Authentication/js/ForgotPassword';
import EmailValidation from '../Authentication/js/EmailValidation';
import UserUpdate from '../Authentication/js/UserUpdate';
import EmailUpdate from '../Authentication/js/EmailUpdate';
import PasswordUpdate from '../Authentication/js/PasswordUpdate';
import AddressUpdate from '../Authentication/js/AddressUpdate';
import NameUpdate from '../Authentication/js/NameUpdate';
import Logout from '../Authentication/js/Logout';


export default function RoutingConfig(props) {

    return (

        <Router>
            <Routes>
                <Route exact path="/" element={<HomePage />} ></Route>
                <Route exact path="/home" element={<HomePage />}></Route>
                <Route exact path="/loginpage" element={<LoginPage />} ></Route>
                <Route exact path="/forgotpassword" element={<ForgotPassword />} ></Route>
                <Route exact path="/userregister" element={<RegisterForm />} ></Route>
                <Route exact path="/emailvalidation" element={<EmailValidation />}></Route>
                <Route exact path="/comingsoon" element={<ComingSoonPage />}></Route>
                <Route exact path="/userupdate" element={<UserUpdate />}></Route>
                <Route exact path="/emailupdate" element={<EmailUpdate />}></Route>
                <Route exact path="/passwordupdate" element={<PasswordUpdate />}></Route>
                <Route exact path="/addressupdate" element={<AddressUpdate />}></Route>
                <Route exact path="/nameupdate" element={<NameUpdate />}></Route>
                <Route exact path="/post/:post_id" element={<IndividualAdPage />}></Route>
                <Route exact path="/logout" element={<Logout />}></Route>
                <Route exact path="/home/mydeals" element={<MyDeals />}></Route>
                
                
            </Routes>
        </Router>
    );
}