import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './HomePage';
import ComingSoonPage from './ComingSoonPage';

export default function RoutingConfig(props) {

    return (

        <Router>
            <Routes>
                <Route exact path="/" element={<HomePage />} ></Route>
                <Route exact path="/home" element={<HomePage />}></Route>
                <Route exact path="/comingsoon" element={<ComingSoonPage />}></Route>
            </Routes>
        </Router>
    );
}