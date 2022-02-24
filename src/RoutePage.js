import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import UserProfilePage from './UserProfilePage';
import UserForm from './UserForm';
import LoginPage from './LoginPage';
import BlankPage from './BlankPage';

export default function RoutePage(props) {

    return (

        <Router>
            <Routes>
                <Route exact path="/" element={<LoginPage />} ></Route>
                <Route exact path="/blankpage" element={<BlankPage />} ></Route>
                <Route exact path="/userregister" element={<UserForm />} ></Route>
                <Route exact path="/userprofile" element={<UserProfilePage />}></Route>
            </Routes>
        </Router>


    );


}
