import React from 'react';
import { Box, Stack, Typography } from '@mui/material';

import HorizontalScroll from './HorizontalScroll';

export default function SimilarExercises({ target, similarExercises }) {
  return (
    <Box>
      <Box
        position='relative'
        mx='5%'
        my='2%'
      >
        <Typography
          textTransform="capitalize"
          color="primary.dark"
          fontSize="25px"
          fontWeight="700"
          mb="-30px"
        >
          Explore More {target} Exercises 
        </Typography>
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
            data={similarExercises}
            isBPC={false}
          />
      </Box>
    </Box>
  )
}