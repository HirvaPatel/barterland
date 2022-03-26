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
                setProducts(response.data.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    const handleClickAdd = async (e) => {

        e.preventDefault();
        const id1 = await e.target.getAttribute('id');
        console.log(id1);
        alert("Item added to cart!!");

    };

    const handleClickRemove = async (e) => {

        e.preventDefault();
        const id2 = await parseInt(e.target.getAttribute('id'));
        console.log(id2);

        let api_url = 'http://localhost:8080/wishlist/remove/' + id2;
        console.log(api_url);

        axios.put(api_url)
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
                                        <Button size="small"
                                            style={{
                                                borderRadius: 10,
                                                backgroundColor: "#21b6ae",
                                                padding: "9px 18px",
                                                fontSize: "12px"
                                            }}
                                            id={product.ad_id} onClick={handleClickAdd}
                                        >Add to Cart</Button>

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
