import React from 'react';
import { Box, Stack, Typography, Link } from '@mui/material';

export default function ExerciseVideos({ name, exerciseVideos }) {
  return (
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
        mb="10px"
      >
        Watch {name} Tutorials
      </Typography>
      <Stack
        justifyContent="space-between"
        alignItems="top"
        flexWrap="wrap"
        sx={{
            flexDirection: { md: "row" }
        }}
      >
        {exerciseVideos?.slice(0, 6).map((item, index) => (
            <Link
              key={index}
              className="exercise-video"
              href={`https://www.youtube.com/watch?v=${item.video.videoId}`}
              target="_blank"
              rel="noreferrer"
              underline='none'
            >
              <img src={item.video.thumbnails[0].url} alt={item.video.title} />
              <Box
                mb="15px"
              >
                <Typography
                  color="primary.dark"
                  fontWeight="700"
                >
                  {item.video.title}
                </Typography>
                <Typography
                  color="primary.main"
                >
                  {item.video.channelName}
                </Typography>
              </Box>
            </Link>
        ))}
      </Stack>
    </Box>
  )
}