import React from 'react';
import './WishlistProducts.css';
import Grid from '@material-ui/core/Grid';
import { Card, CardActions, CardContent, CardMedia, Button, Typography, Box } from '@material-ui/core';
import { Checkbox } from "@material-ui/core";
import FavoriteBorder from "@material-ui/icons/FavoriteBorder";
import Favorite from "@material-ui/icons/Favorite";
import axios from 'axios';
import { useState, useEffect } from 'react';


export default function WishlistProducts() {

    const [products, setProducts] = useState([]);
    //const [adDetails, setAdDetails] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:8080/wishlist/user")
            .then((response) => {
                console.log(response.data.data);
                setProducts(response.data.data);
                //console.log(products[0]["ad_details"]);
                //console.log(products);
                //setAdDetails(products[0]);
                //console.log(adDetails);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    // const handleSubmit = (e) => {

    //     e.preventDefault();

    //     axios.post(api_url, {
    //         email: formValues.email,
    //         password: formValues.password
    //     }).then((response) => {

    //         navigate("/Profile");
    //     });
    // };

    return (
        <>
            <Box sx={{ p: 6 }}>
                <h1> &nbsp; &nbsp; Wishlisted Products</h1>
                <Grid container spacing={2} align="justify" >
                    {products.map((product, index) => {

                        return (
                            <Grid item xs={12} md={6} lg={3}>
                                <Card elevation={12}>
                                    <CardMedia
                                        component="img"
                                        height="150"
                                        image={product["ad_details"].image_url}
                                        alt="Product"
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="div">
                                            {product["ad_details"].title}
                                        </Typography>
                                        <Typography gutterBottom component="div">
                                            {product["ad_details"].description}
                                        </Typography>
                                    </CardContent>
                                    <CardActions>
                                        <Button size="small" style={{
                                            borderRadius: 10,
                                            backgroundColor: "#21b6ae",
                                            padding: "9px 18px",
                                            fontSize: "12px"
                                        }}>Add to Cart</Button>

                                        <label>Remove from Wishlist<Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} defaultChecked /></label>
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
