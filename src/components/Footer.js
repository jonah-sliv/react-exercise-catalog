import React from 'react';
import { Stack, Typography } from '@mui/material';

export default function Footer() {
    return (
        <Stack
            alignItems="center"
            justifyContent="center"
            p="20px"
            sx={{
                bgcolor: 'primary.main'
            }}
        >
            <Typography
                color="white"
                onClick={() => {
                    window.scrollTo({
                        top: 0,
                        behavior: 'smooth'
                    })
                }}
                sx={{
                    cursor: "pointer",
                    "&:hover": {
                        textDecoration: "underline"
                    }
                }}
            >
                Back to Top
            </Typography>
        </Stack>
    )
}