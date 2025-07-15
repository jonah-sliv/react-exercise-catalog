import React, { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Box } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import './App.css';

import Home from './pages/Home';
import ExerciseDetail from './pages/ExerciseDetail';
import NavBar from './components/Navbar';
import Footer from './components/Footer';

const exerciseOptions = {
  method: 'GET',
  headers: {
    'x-rapidapi-host': 'exercisedb.p.rapidapi.com',
    'x-rapidapi-key': RAPID_API_KEY
  }
}

const fetchData = async (url, options) => {
    const response = await fetch(url, options);
    const data = await response.json();

    return data;
}

export default function App() {
  const [ allExercises, setAllExercises ] = useState([]);

  useEffect(() => {
          const fetchExercisesData = async () => {
              const exercisesData = await fetchData('https://exercisedb.p.rapidapi.com/exercises?limit=9999', exerciseOptions);
              console.log(exercisesData);
              setAllExercises(exercisesData);
          }
  
          fetchExercisesData();
      // dependency array is empty -> useEffect is only called at initial render
      }, []);

  const theme = createTheme({
    palette: {
      primary: {
        light: '#9fabce',
        main: '#484f69',
        dark: '#262a40',
        contrastText: '#fff',
      },
      secondary: {
        light: '#ff004f',
        main: '#bd184b',
        dark: '#821738',
        contrastText: '#fff',
      },
      custom: {
        main: '#ff8564'
      }
    }
  });

  return (
    <ThemeProvider theme={theme}>
      <Box width="400px" sx={{ width: {xl: '1488px'}}} m="auto">
        <NavBar />
        <Routes>
          <Route path="/" element={<Home allExercises={allExercises} />}></Route>
          <Route path="/exercise/:id" element={<ExerciseDetail allExercises={allExercises}/>}></Route>
        </Routes>
        <Footer />
      </Box>
    </ThemeProvider>
  );
}
