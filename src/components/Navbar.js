import React from 'react';
import { Link } from 'react-router-dom';
import { Stack } from '@mui/material';
import logo from '../assets/icons/icons8-fitness-50.png'

export default function NavBar() {
    return (
        <Stack
            direction="row"
            justifyContent="center"
            sx={{
                bgcolor: 'primary.main'
            }}
        >
            <Link to="/">
                <img src={logo}
                    style={{
                        marginTop: '7px',
                        marginInline: '20px',
                        filter: 'invert(1)'
                    }}
                />
            </Link>
            <Stack 
                direction="row"
                gap="40px"
                fontSize="24px"
                p="20px"
            >
                <Link to="/" className="nav-link">
                    Home
                </Link>
            </Stack>
        </Stack>
    )
}
