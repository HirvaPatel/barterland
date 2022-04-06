//Author: Shivam Barot

import React from 'react';
import { useState } from 'react';
import axios from 'axios';
import Box from '@material-ui/core/Box';
import TextField from '@mui/material/TextField';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
import { makeStyles } from '@material-ui/core';
import './../css/AddBlogForm.css';
import { ReactSession } from 'react-client-session';
import { useNavigate } from 'react-router-dom';


const useStyles = makeStyles({
    field: {
        marginTop: 20,
        marginBottom: 20,
        display: 'block'
    }
})

export default function AddBlogForm() {

    const classes = useStyles()
    const [title, setTitle] = useState('')
    const [details, setDetails] = useState('')
    const [titleError, setTitleError] = useState(false);
    const [detailsError, setDetailsError] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault()
        setTitleError(false);
        setDetailsError(false);

        if (title === '') {
            setTitleError(true);
            alert("Please enter Blog Title");
        }
        if (details === '') {
            setDetailsError(true);
            alert("Please enter Blog Description");

        }
        if (title && details) {

            ReactSession.setStoreType("localStorage");
            const userid = ReactSession.get("user_id");
            let api_url = process.env.REACT_APP_BACKEND_URL + '/blog/add';

            console.log("In axios");

            axios.post(api_url, {

                user_id: userid,
                title: title,
                description: details
            }).then((response) => {

                alert("Blog added!!");
                navigate("/blog");

            }).catch((error) => {
                console.log(error);
            });
        }
    }

    return (
        <>
            <Box sx={{ p: 2 }}>
                <Container size="sm">
                    <h1>
                        Add New Blog
                    </h1>
                    <h2>Blog Title </h2>
                    <form noValidate autoComplete="off" onSubmit={handleSubmit}>
                        <TextField className={classes.field}
                            onChange={(e) => setTitle(e.target.value)}
                            style={{
                                backgroundColor: 'white'
                            }}
                            variant="outlined"
                            color="secondary"
                            fullWidth
                            required
                            error={titleError}
                        />
                        <br></br>
                        <br></br>
                        <h2>Blog Description </h2>

                        <TextField className={classes.field}
                            onChange={(e) => setDetails(e.target.value)}
                            style={{
                                backgroundColor: 'white'
                            }}
                            variant="outlined"
                            color="secondary"
                            multiline
                            rows={10}
                            fullWidth
                            required
                            error={detailsError}
                        />
                        <br></br>
                        <br></br>
                        <Button
                            type="submit"
                            color="secondary"
                            variant="contained"
                            endIcon={<KeyboardArrowRightIcon />}>
                            Submit
                        </Button>
                    </form>
                </Container>
            </Box>
        </>
    )
}
