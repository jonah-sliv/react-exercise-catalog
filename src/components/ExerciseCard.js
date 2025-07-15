import React from 'react';
import { Box, Stack, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

export default function ExerciseCard({ exercise }) {
    return (
        <Link 
            className="exercise-card" 
            to={`/exercise/${exercise.id}`}
            onClick={() => {
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                })
            }}
        >
            <img src={exercise.gifUrl} alt={exercise.name} loading="lazy" />
            <Typography
                display="flex"
                height="30px"
                my="10px"
                mx="10px"
                color="black"
                textTransform="uppercase"
                textAlign="center"
                alignItems="center"
                justifyContent="center"
                fontSize="20px"
                fontWeight="700"
                lineHeight="20px"
            >
                {exercise.name}
            </Typography>
            <Stack 
                direction="row"
                justifyContent="center"
                flexWrap="wrap"
            >
                <Box
                    position="relative"
                    m="5px"
                    p="10px"
                    borderRadius="6px"
                    bgcolor="secondary.light"
                    color="white"
                >
                    <Typography
                        textTransform="uppercase"
                        px="4px"
                    >
                        {exercise.target}
                    </Typography>
                </Box>
                <Box
                    position="relative"
                    m="5px"
                    p="10px"
                    borderRadius="6px"
                    bgcolor="custom.main"
                    color="white"
                >
                    
                    <Typography
                        textTransform="uppercase"
                        px="4px"
                    >
                        {exercise.secondaryMuscles[0]}
                    </Typography>
                </Box>
            </Stack>
        </Link>
    )
}