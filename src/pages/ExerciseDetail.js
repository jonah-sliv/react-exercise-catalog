import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Box } from '@mui/material';

import Details from '../components/Details';
import ExerciseVideos from '../components/ExerciseVideos';
import SimilarExercises from '../components/SimilarExercises';
import { CollectionsBookmarkOutlined } from '@mui/icons-material';

const ytURL = 'https://youtube-search-and-download.p.rapidapi.com'
const ytOptions = {
	method: 'GET',
	headers: {
		'x-rapidapi-host': 'youtube-search-and-download.p.rapidapi.com',
		'x-rapidapi-key': RAPID_API_KEY
	}
};

const fetchData = async (url, options) => {
    const response = await fetch(url, options);
    const data = await response.json();

    return data;
}

export default function ExerciseDetail({ allExercises }) {
    const [exercise, setExercise] = useState({});
    const [exerciseVideos, setExerciseVideos] = useState([]);
    const [similarExercises, setSimilarExercises] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        const fetchExercisesData = async () => {
            const selectedExercise = allExercises.find(ex => String(ex.id) === String(id));
            setExercise(selectedExercise);

            const videos = await fetchData(`${ytURL}/search?query=${selectedExercise.name}`, ytOptions);
            setExerciseVideos(videos.contents);

            const similar = allExercises.filter(ex => ex.target === selectedExercise.target);
            console.log(similar);
            setSimilarExercises(similar);
        }

        fetchExercisesData();
    }, [id]);

    return (
        <Box>
            <Details
                exercise={exercise}
                setExercise={setExercise}
            />
            <ExerciseVideos
                name={exercise.name}
                exerciseVideos={exerciseVideos}
            />
            <SimilarExercises 
                target={exercise.target}
                similarExercises={similarExercises}
            />
        </Box>
    )
}
