/* Author : Vikram Babu Rajendran */

import React from "react";
import '../css/IndividualAdPage.css'
import { Link, useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

import TitleSection from "../../home/js/TitleSection";
import MenuSection from "../../home/js/MenuSection";
import FooterSection from "../../home/js/FooterSection";
import axios from "axios";
import { ReactSession } from 'react-client-session';

import storage from "./firebase";


/* Component that renders the individual Ad page. */
function IndividualAdPage(props) {

    let location = useLocation();
    let navigate = useNavigate();

    const [userData, setUserData] = useState({});
    const [adDetails, setAdDetails] = useState();

    let { post_id } = useParams();

    useEffect(() => {

        if (userData && userData.user_id) {
            return;
        }

    }, [userData]);

    // Fetch user details from localstorage and set in session
    useEffect(() => {

        ReactSession.setStoreType("localStorage");
        const user_id = ReactSession.get("user_id");
        const email = ReactSession.get("email");
        const first_name = ReactSession.get("first_name");
        const userData = {
            user_id: user_id,
            email: email,
            first_name: first_name
        }
        if (userData && userData.user_id) {
            setUserData(userData);
        }

        // Fetch the details of the Ad and set in state.
        let config = {
            headers: {
                user_id: userData.user_id,
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
            <TitleSection />
            <MenuSection />
            <AdPageBody ad={ad} post_id={post_id} userData={userData} />
            <FooterSection />
        </>
    );

}

// Component that renders the Ad Page Body.
function AdPageBody(props) {
    const ad = props.ad;
    const userData = props.userData;
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
    const [image, setImage] = useState('');
    const [Url, setUrl] = useState('');

    let navigate = useNavigate();
    const [dealProposed, setDealProposed] = useState(false);
    const [updateDeal, setUpdateDeal] = useState(false);

    // Reload page after the deal is proposed.
    useEffect(() => {
        if (dealProposed === true) {
            window.location.reload();
        }
    }, [dealProposed]);

    useEffect(() => {

    }, [updateDeal]);

    function handleFileChange(e) {
        setImage(e.target.files[0]);
        if (image == null) {
            console.log('Image is null');
            return;
        }
        storage.ref(`/barterland/${e.target.files[0].name}`).put(e.target.files[0])
            .on("state_changed", () => {

                // Getting Download Link
                storage.ref("barterland").child(e.target.files[0].name).getDownloadURL()
                    .then((url) => {
                        setUrl(url);
                        console.log(url);
                    });
            });
    }

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

        console.log('URL - ' + Url);
        const requestBody = {
            "user_id": userData.user_id,
            "name": inputValues.Name,
            "mobile": inputValues.mobile,
            "title": inputValues.title,
            "location": inputValues.location,
            "description": inputValues.description,
            "image": Url
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

    const upload = () => {
        if (image == null) {
            console.log('Image is null');
            return;
        }
        storage.ref(`/barterland/${image.name}`).put(image)
            .on("state_changed", alert("success"), alert, () => {

                // Getting Download Link
                storage.ref("barterland").child(image.name).getDownloadURL()
                    .then((url) => {
                        setUrl(url);
                        console.log(url);
                    })
            });

    }

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

    const handleRedirectRegister = (e) => {
        e.preventDefault();
        navigate("/userregister");
    }

    const handleRedirectLogin = (e) => {
        e.preventDefault();
        navigate("/loginpage");
    }



    // Conditional Rendering based on deal state.
    const renderForm = () => {

        console.log(!userData || !userData.user_id);
        if (!userData || !userData.user_id) {
            return (<><h2>Login or Register to propose a Deal!</h2>
                <button onClick={(e) => handleRedirectRegister(e)}>Register</button>
                <button onClick={(e) => handleRedirectLogin(e)}>Login</button>
            </>);
        }

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
                        id='image'
                        onChange={(e) => handleFileChange(e)}
                    />
                    <h3></h3>
                    <button onClick={(e) => handleSubmit(e)}>Send Proposal</button>
                    <button onClick={(e) => handleReset(e)}>Reset Form</button>
                </form>);

        } else {
            return (
                <><h2>Deal Proposed!</h2>
                    <img src={ad.proposedDeal.deal_details.image_url} alt="" className="img-ad-individual" />
                    <h3> <b>Name: </b> {ad.proposedDeal.deal_details.name} </h3>
                    <h3> <b>Mobile: </b> {ad.proposedDeal.deal_details.mobile} </h3>
                    <h3> <b>Location: </b> {ad.proposedDeal.deal_details.location} </h3>
                    <h3> <b>Title: </b> {ad.proposedDeal.deal_details.title} </h3>
                    <h3> <b>Description: </b>{ad.proposedDeal.deal_details.description} </h3>
                    <h3> <b>Deal Status: </b>{ad.proposedDeal.deal_details.status ? ad.proposedDeal.deal_details.status : 'OPEN'} </h3>
                    <button onClick={(e) => handleUpdate(e)}>Update Deal</button>
                    <button onClick={(e) => { if (window.confirm('Delete this deal?')) { handleDelete(e); } }}>Delete Deal</button>
                </>
            );
        }
    };


    return (
        <section>
            <div className="wrapper-individual">
                <div className="main-box-individual">
                    <h2>{ad.data.ad_details.title}</h2>
                    <img src={ad.data.ad_details.image_url} alt="" className="img-ad-individual" />
                    <p><b>Description</b>
                        <br></br>
                        {ad.data.ad_details.description}
                        <br></br><br></br>
                        <b>Ad Status: </b> {ad.data.ad_details.status ? ad.data.ad_details.status : 'OPEN'}
                        <br></br>
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
                <div className="main-box-individual">
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
