import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import BannerImage from '../assets/images/samuel-girven-VJ2s0c20qCo-unsplash.jpg';

export default function Banner() {
    return (
        <Box
            sx={{
                height: "650px",
                width: "90%",
                position: 'relative',
                mx: '5%',
                my: '2%',
                overflow: "hidden",
                display: "flex",
                flexWrap: "wrap",
                flexDirection: "column",
                justifyContent: "center"
            }}
        >
            <Typography 
                fontSize="50px" 
                fontWeight="700" 
                lineHeight="50px"
                color="primary.dark"
            >
                Want to Work Out?<br />We've Got You Covered.
            </Typography>
            <Typography
                fontSize="25px" 
                fontWeight="350"
                mt="3px"
                mb="7px"
                color="primary.dark"
            >
                Find tutorials to all your favorite exercises here.
            </Typography>
            <Button
                variant="contained"
                color="secondary"
                disableElevation
                disableRipple
                sx={{
                    alignSelf: "flex-start"
                }}
                onClick={() => {
                    window.scrollTo({
                        top: 780,
                        behavior: 'smooth'
                    })
                }}
            >
                Explore Exercises
            </Button>
            <img src={BannerImage} alt="banner" className="banner-img" />
        </Box>
    )
}