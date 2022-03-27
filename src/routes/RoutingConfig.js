import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from '../home/js/HomePage';
import ComingSoonPage from '../home/js/ComingSoonPage';
import LoginPage from '../Authentication/LoginPage';
import RegisterForm from '../Authentication/RegisterForm';
import IndividualAdPage from '../individual_ad/js/IndividualAdPage';
import ForgotPassword from '../Authentication/ForgotPassword';
import EmailValidation from '../Authentication/EmailValidation';
import UserUpdate from '../Authentication/UserUpdate';
import EmailUpdate from '../Authentication/EmailUpdate';
import PasswordUpdate from '../Authentication/PasswordUpdate';
import AddressUpdate from '../Authentication/AddressUpdate';
import NameUpdate from '../Authentication/NameUpdate';

import MyDeals from '../deals/js/MyDeals';
import Logout from '../Authentication/Logout';

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
                <Route exact path="/home/mydeals" element={<MyDeals />}></Route>
                <Route exact path="/logout" element={<Logout />}></Route>
            </Routes>
        </Router>
    );
}