import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from '../home/HomePage';
import ComingSoonPage from '../home/ComingSoonPage';
import LoginPage from '../Authentication/LoginPage';
import RegisterForm from '../Authentication/RegisterForm';
import UserProfilePage  from '../Authentication/UserProfilePage';
import IndividualAdPage from '../individual_ad/IndividualAdPage';
import ForgotPassword from '../Authentication/ForgotPassword';
import EmailValidation from '../Authentication/EmailValidation';
import UserData from '../Authentication/UserData';
import MyDeals from '../deals/MyDeals';

export default function RoutingConfig(props) {

    return (

        <Router>
            <Routes>
                <Route exact path="/" element={<HomePage />} ></Route>
                <Route exact path="/home" element={<HomePage />}></Route>
                <Route exact path="/loginpage" element={<LoginPage />} ></Route>
                <Route exact path="/forgotpassword" element={<ForgotPassword />} ></Route>
                <Route exact path="/userregister" element={<RegisterForm />} ></Route>
                <Route exact path="/userdata" element={<UserData />}></Route>
                <Route exact path="/userprofile" element={<UserProfilePage />}></Route>
                <Route exact path="/emailvalidation" element={<EmailValidation/>}></Route>
                <Route exact path="/comingsoon" element={<ComingSoonPage />}></Route>
                <Route exact path="/post/:post_id" element={<IndividualAdPage />}></Route>
                <Route exact path="/home/mydeals" element={<MyDeals />}></Route>
            </Routes>
        </Router>
    );
}