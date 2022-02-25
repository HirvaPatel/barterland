import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './HomePage';
import ComingSoonPage from './ComingSoonPage';
import LoginPage from './LoginPage';
import RegisterForm from './RegisterForm';
import UserProfilePage  from './UserProfilePage';
export default function RoutingConfig(props) {

    return (

        <Router>
            <Routes>
                <Route exact path="/" element={<LoginPage />} ></Route>
                <Route exact path="/home" element={<HomePage />}></Route>
                <Route exact path="/loginpage" element={<LoginPage />} ></Route>
                <Route exact path="/userregister" element={<RegisterForm />} ></Route>
                <Route exact path="/userprofile" element={<UserProfilePage />}></Route>
                <Route exact path="/comingsoon" element={<ComingSoonPage />}></Route>
            </Routes>
        </Router>
    );
}