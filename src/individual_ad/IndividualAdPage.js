import React from "react";
import './IndividualAdPage.css'
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

import TitleSection from "../home/TitleSection";
import MenuSection from "../home/MenuSection";
import FooterSection from "../home/FooterSection";
import axios from "axios";

function IndividualAdPage(props) {

    let location = useLocation();
    let navigate = useNavigate();

    const [isRegistered, setIsRegistered] = useState(false);
    const [userData, setUserData] = useState();
    const [adDetails, setAdDetails] = useState();

    const [userId, setUserId] = useState();

    let { post_id } = useParams();
    useEffect(() => {
        if (userData) {
            return () => { }
        }

        if (location.state) {
            let data = userData;
            data = location.state.data;
            setUserData(data);
            if (location.state.data.f_name.valid) {
                setIsRegistered(true);
            }
        }
    }, [userData])

    useEffect(() => {

        const user_id = window.localStorage.getItem('user_id');
        // console.log(user_id);
        setUserId(user_id);

        let config = {
            headers: {
                user_id: user_id,
            }
        }
        const url = process.env.REACT_APP_BACKEND_URL + '/home/posts/' + post_id;
        axios.get(url, config).then((res) => {
            setAdDetails(res.data);
        }).catch((err) => {
            alert('Ad not found!');
            navigate("/home");
        });

    }, []);

    const data = userData;
    const ad = adDetails;

    if (!ad) {
        return (
            <div className="loader"></div>
        );
    }

    return (
        <>
            <TitleSection isRegistered={isRegistered} userData={data} />
            <MenuSection />
            <AdPageBody ad={ad} post_id={post_id} user_id={userId} />
            <FooterSection />
        </>

    );

}

function AdPageBody(props) {
    const ad = props.ad;
    const [inputValues, setInputValue] = useState({
        Name: "",
        mobile: "",
        title: "",
        location: "",
        description: ""
    });

    const [validation, setValidation] = useState({
        Name: "",
        mobile: "",
        title: "",
        location: "",
        description: ""
    });

    let navigate = useNavigate();
    const [dealProposed, setDealProposed] = useState(false);
    const [updateDeal, setUpdateDeal] = useState(false);

    useEffect(() => {
        if (dealProposed === true) {
            window.location.reload();
        }
    }, [dealProposed]);

    useEffect(() => {

    }, [updateDeal]);

    function handleChange(event) {
        const { name, value } = event.target;
        setInputValue({ ...inputValues, [name]: value });

        let errors = validation;
        switch (name) {
            case 'Name': {
                if (value.trim().length < 1) {
                    errors.Name = "First name is required.";
                } else if (!value.toLowerCase().match(/^[a-zA-Z ]+$/)) {
                    errors.Name = "Name can contain only alphabets.";
                } else {
                    errors.Name = "";
                }
                break;
            }
            case 'mobile': {
                if (!value.trim()) {
                    errors.mobile = "Mobile Number is required.";
                } else if (!value.toLowerCase().match(/^\d+$/)) {
                    errors.mobile = "Mobile Number can contain only numbers.";
                } else if (value.length > 10) {
                    errors.mobile = "Invalid Mobile Number.";
                } else {
                    errors.mobile = "";
                }
                break;
            }
            case 'title': {
                if (!value.trim()) {
                    errors.title = "Title is required.";
                } else {
                    errors.title = "";
                }
                break;
            }
            case 'location': {
                if (!value.trim()) {
                    errors.location = "Location is required.";
                } else {
                    errors.location = "";
                }
                break;
            }
            case 'description': {
                if (!value.trim()) {
                    errors.description = "Description is required.";
                } else {
                    errors.description = "";
                }
                break;
            }
            default: {
                return;
            }
        }
        setValidation(errors);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        let errors = validation;
        if (!isEmpty(errors.Name) || !isEmpty(errors.mobile) || !isEmpty(errors.title) || !isEmpty(errors.location) || !isEmpty(errors.description)) {
            alert('Invalid Inputs ! Please fix the errors!');
            return;
        }

        const requestBody = {
            "user_id": props.user_id,
            "name": inputValues.Name,
            "mobile": inputValues.mobile,
            "title": inputValues.title,
            "location": inputValues.location,
            "description": inputValues.description
        }
        const url = process.env.REACT_APP_BACKEND_URL + '/home/posts/' + props.post_id + '/deals';
        axios.post(url, requestBody).then((res) => {
            if (res.data.success === true) {
                alert('Deal Submitted successfully!');
                setDealProposed(true);
                return;
            }
        }).catch((err) => {
            if (err.response) {
                if (err.response.status === 400) {
                    alert(err.response.data.message);
                } else {
                    alert('Unknown error ! Please try again!');
                }
            } else {
                alert('Unknown error ! Please try again!');
            }
            return;
        });
    };

    const handleReset = (e) => {
        e.preventDefault();
        const inputs = {
            Name: "",
            mobile: "",
            title: "",
            location: "",
            description: ""
        }
        setInputValue(inputs);
        setValidation(inputs);
        return;
    };

    const handleUpdate = (e) => {
        e.preventDefault();
        const inputs = {
            Name: ad.proposedDeal.deal_details.name,
            mobile: ad.proposedDeal.deal_details.mobile,
            title: ad.proposedDeal.deal_details.title,
            location: ad.proposedDeal.deal_details.location,
            description: ad.proposedDeal.deal_details.description
        }
        setInputValue(inputs);
        setDealProposed(false);
        setUpdateDeal(true);
    }

    const handleDelete = (e) => {
        e.preventDefault();
        const ad_id = ad.data.ad_id;
        const deal_id = ad.proposedDeal.deal_id;

        const url = process.env.REACT_APP_BACKEND_URL + '/home/posts/' + ad_id + '/deals/' + deal_id;
        axios.delete(url).then((res) => {
            alert('Deal deleted!');
            setUpdateDeal(true);
        }).catch((err) => {
            alert('Something went wrong!');
            navigate("/home");
        });
    }

    const renderForm = () => {

        if (ad.isDealProposed === false || updateDeal === true) {
            return (
                <form
                    id='proposalDealForm'
                >
                    <h3> Name </h3>
                    <input
                        type='text'
                        name='Name'
                        id='Name'
                        placeholder='John'
                        onChange={(e) => handleChange(e)}
                        value={inputValues.Name} />
                    <h4>{validation.Name}</h4>
                    <h3> How to contact you? </h3>
                    <input
                        type='text'
                        name='mobile'
                        id='mobile'
                        placeholder='9029832222'
                        onChange={(e) => handleChange(e)}
                        value={inputValues.mobile} />
                    <h4>{validation.mobile}</h4>
                    <h3> Title </h3>
                    <input
                        type='text'
                        name='title'
                        id='title'
                        placeholder='Give a brief title.'
                        onChange={(e) => handleChange(e)}
                        value={inputValues.title} />
                    <h4>{validation.title}</h4>
                    <h3> Location </h3>
                    <input
                        type='text'
                        name='location'
                        id='location'
                        placeholder='Enter your location'
                        onChange={(e) => handleChange(e)}
                        value={inputValues.location} />
                    <h4>{validation.location}</h4>
                    <h3> Description </h3>
                    <textarea
                        name='description'
                        id='description'
                        cols='28'
                        rows='5'
                        placeholder='Enter your proposal. Be Specific to details.'
                        onChange={(e) => handleChange(e)}
                        value={inputValues.description} ></textarea>
                    <h4>{validation.description}</h4>
                    <h3> Upload Images </h3>
                    <input
                        type='file'
                        name='image'
                        id='image' />
                    <h3></h3>
                    <button onClick={(e) => handleSubmit(e)}>Send Proposal</button>
                    <button onClick={(e) => handleReset(e)}>Reset Form</button>
                </form>);

        } else {
            return (
                <><h2>Deal Proposed!</h2>
                    <h3> <b>Name: </b> {ad.proposedDeal.deal_details.name} </h3>
                    <h3> <b>Mobile: </b> {ad.proposedDeal.deal_details.mobile} </h3>
                    <h3> <b>Location: </b> {ad.proposedDeal.deal_details.location} </h3>
                    <h3> <b>Title: </b> {ad.proposedDeal.deal_details.title} </h3>
                    <h3> <b>Description: </b>{ad.proposedDeal.deal_details.description} </h3>
                    <button onClick={(e) => handleUpdate(e)}>Update Deal</button>
                    <button onClick={(e) => handleDelete(e)}>Delete Deal</button>
                </>

            );
        }
    };


    return (
        <section>
            <div className="wrapper-individual">
                <div className="main-box">
                    <h2>{ad.data.ad_details.title}</h2>
                    <img src={ad.data.ad_details.image_url} alt="" className="img-ad-individual" />
                    <p><b>Description</b>
                        <br></br>
                        {ad.data.ad_details.description}
                        <br></br><br></br>
                        <b>Category: </b> {ad.data.ad_details.category}
                        <br></br>
                        <b>Location: </b> {ad.data.ad_details.location}
                        <br></br>
                        <b>Valid Till: </b>{ad.data.ad_details.valid_till ? ad.data.ad_details.valid_till : 'Not Available'}
                        <br></br>
                        <b>Posted On: </b>{ad.data.ad_details.created_at ? ad.data.ad_details.created_at : 'Not Available'}
                    </p>
                    <h3>{ad.data.deals.length > 1 ? ad.data.deals.length + ' People have proposed a deal for this Ad !'
                        :
                        ad.data.deals.length < 1 ? 'No one has made a propose for this Ad ! Be the first one!' : '1 Person has made a proposal!'} </h3>
                </div>
                <div className="main-box">
                    <h2> {ad.isDealProposed === false ? 'Propose a deal' : ''} </h2>
                    {renderForm()}
                </div>
            </div>
        </section>
    );
}

function isEmpty(str) {
    return (!str || str.length === 0);
}

export default IndividualAdPage;
