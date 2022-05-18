//Author: Shivam Barot

import React, { useEffect } from 'react';
import { Button, Box } from '@material-ui/core';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import { Card, CardActions, CardContent, Typography } from '@material-ui/core';
import './../css/ViewBlog.css';

const cardStyle = {

    transitionDuration: "0.3s",
    height: "25vw"
};

const cardContentStyle = {

    height: "19vw"
};

export default function ViewBlog() {

    const navigate = useNavigate();

    const [articles, setArticles] = useState([]);

    // method to display all the articles in the blog
    useEffect(() => {

        let api_url = process.env.REACT_APP_BACKEND_URL + "/blog/getblog/";

        axios.get(api_url)
            .then((response) => {

                setArticles(response.data.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);



    const handleAddBlog = (e) => {

        navigate("/addblog");
    };

    const handleReadMore = (a) => {

        const values = {
            title: a.title, details: a.description
        }

        navigate("/showarticle", { state: { values } });
    }



    return (
        <>
            <Box sx={{ p: 8 }}>
                <Button variant="contained" onClick={handleAddBlog}>
                    Add Your Blog
                </Button>
                <h1>Blogs</h1>
                <Grid container spacing={2} align="justify" >
                    {articles.map((article, index) => {

                        return (
                            <Grid item xs={12} md={6} lg={4}>
                                <Card elevation={12} style={cardStyle}>
                                    <CardContent style={cardContentStyle}>
                                        <Typography gutterBottom component="div">
                                            <strong>{article.title}</strong>
                                        </Typography>
                                        <Typography gutterBottom component="div" className='limit'>
                                            {article.description}...
                                        </Typography>
                                    </CardContent>
                                    <CardActions>
                                        <Button variant="contained"
                                            onClick={handleReadMore.bind(this, article)}
                                        >
                                            Read more
                                        </Button>
                                    </CardActions>
                                </Card>
                            </Grid>
                        )
                    })}
                </Grid>
            </Box>
        </>
    )
}
