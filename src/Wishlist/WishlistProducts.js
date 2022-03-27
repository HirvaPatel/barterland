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


    // method to display all the items in the wishlist
    useEffect(() => {
        const user_id = "5c7b8740-0917-42bd-9c47-74700fa575fb";
        let api_url = process.env.REACT_APP_BACKEND_URL + "/wishlist/user/" + user_id;
        axios.get(api_url)
            .then((response) => {
                setProducts(response.data.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);


    // method to remove the item from wishlist
    const handleClickRemove = async (e) => {

        e.preventDefault();
        const id2 = await parseInt(e.target.getAttribute('id'));

        let api_url = process.env.REACT_APP_BACKEND_URL + '/wishlist/remove/' + id2;

        let config = {
            headers: {
                user_id: "5c7b8740-0917-42bd-9c47-74700fa575fb"
            }
        };

        axios.put(api_url, "", config)
            .then((response) => {
                alert("Item removed from wishlist!!");
                setProducts(response.data.data);
            })
            .catch((error) => {
                console.log(error);
            });

    };

    return (
        <>
            {/* Displaying all the items */}
            <Box sx={{ p: 6 }}>
                <h1>  Wishlisted Products</h1>
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
                                        <label>Remove from Wishlist<Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} id={product.ad_id} onClick={handleClickRemove} defaultChecked /></label>
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
