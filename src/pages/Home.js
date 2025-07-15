import React, { useState } from 'react';
import { Box } from '@mui/material';

import Banner from '../components/Banner';
import SearchExercises from '../components/SearchExercises';
import Exercises from '../components/Exercises';

export default function Home({ allExercises }) {
    const [exercises, setExercises] = useState([]);
    const [bodyPart, setBodyPart] = useState('all');
    const [currentPage, setCurrentPage] = useState(1);

    return (
        <Box>
            <Banner />
            <SearchExercises 
                allExercises={allExercises}
                setExercises={setExercises}
                bodyPart={bodyPart}
                setBodyPart={setBodyPart}
                setCurrentPage={setCurrentPage}
            />
            <Exercises
                allExercises={allExercises}
                exercises={exercises}
                setExercises={setExercises}
                bodyPart={bodyPart}
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
            />
        </Box>
    )
}