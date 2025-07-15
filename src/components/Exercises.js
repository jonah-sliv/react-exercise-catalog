import React, { useState, useEffect } from 'react';
import Pagination from '@mui/material/Pagination';
import { Box, Stack, Typography } from '@mui/material';

import ExerciseCard from './ExerciseCard';

export default function Exercises({ allExercises, exercises, setExercises, bodyPart, currentPage, setCurrentPage }) {
    const [exercisesPerPage] = useState(12);

    useEffect(() => {
        if(bodyPart === 'all') {
            setExercises(allExercises);
        } else {
            const selectedExercises = allExercises.filter(exercise => exercise.bodyPart.toLowerCase() === bodyPart.toLowerCase());
            setExercises(selectedExercises);
        }

        setCurrentPage(1);
    }, [allExercises, bodyPart]);

    const lastIndex = currentPage * exercisesPerPage;
    const firstIndex =  lastIndex - exercisesPerPage;
    const currentExercises = exercises.slice(firstIndex, lastIndex);

    const paginate = (e, value) => {
        setCurrentPage(value);

        window.scrollTo({
            top: 1150,
            behavior: 'smooth'
         })
       
    }
    
    return (
        <Box
            width="90%"
            mx='5%'
            my='2%'
            pb='20px'
        >
            <Typography
                fontWeight="700"
                fontSize="30px"
                textAlign="center"
                mt="5px"
                color="primary.dark"
            >
                Exercises
            </Typography>
            <Stack
                direction="row"
                flexWrap="wrap"
                justifyContent="center"
                gap="24px"
                my="5px"
            >
                {currentExercises.length > 0 ? (
                    currentExercises.map((exercise, index) => (
                        <ExerciseCard key={index} exercise={exercise} />
                    ))
                ) : (
                    <Typography 
                        mt="40px"
                        color="primary.dark"
                    >
                        We couldn't find any exercises related to that search. Sorry! Check your spelling.
                    </Typography>
                )}
            </Stack>
            <Stack
                alignItems="center"
                mt="20px"
                mb="-10px"
            >
                {exercises.length > exercisesPerPage && (
                    <Pagination 
                        color="primary"
                        shape="rounded"
                        size="large"
                        defaultPage={1}
                        count={Math.ceil(exercises.length / exercisesPerPage)}
                        page={currentPage}
                        onChange={paginate}
                    />
                )}
            </Stack>
        </Box>
    )
}