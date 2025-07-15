import React from 'react';
import { Stack, Typography } from '@mui/material';


export default function BodyPartCard({ item, icon, bodyPart, setBodyPart }) {
    return (
        <Stack
            className="bodyPart-card"
            type="button"
            alignItems="center"
            justifyContent="center"
            borderRadius="12px"
            m="8px"
            sx={{
                backgroundColor: 'white',
                height: '200px',
                width: '200px',
                cursor: 'pointer'
            }}
            onClick={() => {
                setBodyPart(item)
                setTimeout(() => {
                    window.scrollTo({
                        top: 1150,
                        behavior: 'smooth'
                    })
                }, 100)
            }}
        >
            <img src={icon} alt={item} height="100px" />
            <Typography
                fontWeight="350"
                textTransform="uppercase"
                textAlign="center"
                p="5px"
            >
                {item}
            </Typography>
        </Stack>
    )
}