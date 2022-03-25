import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "../home/HomePage";
import ComingSoonPage from "../home/ComingSoonPage";
import LoginPage from "../Authentication/LoginPage";
import RegisterForm from "../Authentication/RegisterForm";
import UserProfilePage from "../Authentication/UserProfilePage";
import IndividualAdPage from "../individual_ad/IndividualAdPage";
import ForgotPassword from "../Authentication/ForgotPassword";
import EmailValidation from "../Authentication/EmailValidation";
import UserData from "../Authentication/UserData";
import MyAdsHome from "../myAdvertisements/MyAdsHome";
import MyIndividualAd from "../myAdvertisements/MyIndividualAd";
import MyAdEdit from "../myAdvertisements/MyAdEdit";

export default function RoutingConfig(props) {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<HomePage />}></Route>
        <Route exact path="/home" element={<HomePage />}></Route>
        <Route exact path="/loginpage" element={<LoginPage />}></Route>
        <Route
          exact
          path="/forgotpassword"
          element={<ForgotPassword />}
        ></Route>
        <Route exact path="/userregister" element={<RegisterForm />}></Route>
        <Route exact path="/userdata" element={<UserData />}></Route>
        <Route exact path="/userprofile" element={<UserProfilePage />}></Route>
        <Route
          exact
          path="/emailvalidation"
          element={<EmailValidation />}
        ></Route>
        <Route exact path="/comingsoon" element={<ComingSoonPage />}></Route>
        <Route exact path="/adpage" element={<IndividualAdPage />}></Route>
        <Route exact path="/myads" element={<MyAdsHome />}></Route>
        <Route
          exact
          path="/myads/myadpage"
          element={<MyIndividualAd />}
        ></Route>
        <Route exact path="/myads/myadpage/edit" element={<MyAdEdit />}></Route>
      </Routes>
    </Router>
  );
}
