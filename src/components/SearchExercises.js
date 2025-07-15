import React, { useState, useEffect } from 'react';
import { Box, Stack, Typography, TextField, Button } from '@mui/material';

import HorizontalScroll from './HorizontalScroll';

export default function SearchExercises({ allExercises, setExercises, bodyPart, setBodyPart, setCurrentPage }) {
    const [search, setSearch] = useState('');
    const [bodyParts, setBodyParts] = useState([]);

    useEffect(() => {
        const uniqueBodyParts = ['all', ...[...new Set(allExercises.map(exercise => exercise.bodyPart))].sort()];
        setBodyParts(uniqueBodyParts);
    }, [allExercises]);

    const handleSearch = () => {
        if (search) {
        
            const searchedExercises = allExercises.filter((exercise) => {
                return (
                    exercise.name.toLowerCase().includes(search.toLowerCase()) ||
                    exercise.target.toLowerCase().includes(search.toLowerCase()) ||
                    exercise.equipment.toLowerCase().includes(search.toLowerCase()) ||
                    exercise.bodyPart.toLowerCase().includes(search.toLowerCase())
                )
            });

            setSearch('');
            setExercises(searchedExercises);
        }
    }

    return (
        <Stack
            alignItems="center"
            justifyContent="center"
            width="100%"
            //mx='5%'
            my='2%'
            position='relative'
        >
            <Typography
                fontWeight="700"
                fontSize="30px"
                textAlign="center"
                mt="5px"
                color="primary.dark"
            >
                Search For Exercises
            </Typography>
            <Box
                position="relative"
                my="5px"
                display="flex"
                alignItems="center"
                justifyContent="center"
            >
                <TextField
                    sx={{
                        input: { fontWeight: '700', border: 'none', height: '10px' },
                        width: { lg: '900px', xs: '400px' },
                        backgroundColor: '#fff',
                        border: 'none',
                        borderRadius: '6px'
                    }}
                    value={search}
                    onChange={(e) => setSearch(e.target.value.toLowerCase())}
                    placeholder="e.g. bench press, chest, dumbbell, etc."
                    type="text"
                />
                <Button
                    sx={{
                        height: "43px",
                        borderRadius: '6px',
                        ml: '8px',
                        position: 'relative'
                    }}
                    color="secondary"
                    variant="contained"
                    disableElevation
                    disableRipple
                    onClick={() => {
                        handleSearch();
                        setCurrentPage(1);
                        setTimeout(() => {
                            window.scrollTo({
                                top: 1150,
                                behavior: 'smooth'
                            })
                        }, 100);
                    }}
                >
                    Search
                </Button>
            </Box>
            <Box
                sx={{
                    position: 'relative',
                    width: '100%',
                    my: '5px',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}
            >
                <HorizontalScroll
                    data={bodyParts}
                    bodyPart={bodyPart}
                    setBodyPart={setBodyPart}
                    isBPC={true}
                />
            </Box>
        </Stack>
    )
}