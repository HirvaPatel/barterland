// Author: Shivam Barot

import React, { useEffect } from 'react';
import TitleSection from '../../home/js/TitleSection';
import FooterSection from '../../home/js/FooterSection';
import MenuSection from '../../home/js/MenuSection';
import { useLocation, useNavigate } from 'react-router-dom';
import { Button, Box } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import { Card, CardActions, CardContent, Typography } from '@material-ui/core';

export default function ShowArticle(props) {

    const location = useLocation();
    const navigate = useNavigate();
    useEffect(() => {
        if (!location.state) {
            navigate("/blog");
        }
    }, []);

    const handleBack = (e) => {

        navigate("/blog");
    };

    return (
        <>
            <TitleSection />
            <MenuSection />
            <Box sx={{ p: 4 }}>
                <Button variant="contained" onClick={handleBack}>
                    Back
                </Button>
                <br></br>
                <br></br>

                <Grid item xs={12} md={12} lg={12}>
                    <Card elevation={12}>
                        <CardContent>
                            <Typography gutterBottom component="div">
                                <strong>{location.state?.values.title}</strong>
                            </Typography>
                            <Typography gutterBottom component="div">
                                {location.state?.values.details}
                            </Typography>
                        </CardContent>
                        <CardActions>
                        </CardActions>
                    </Card>
                </Grid>
            </Box>
            <FooterSection />
        </>
    )
}
