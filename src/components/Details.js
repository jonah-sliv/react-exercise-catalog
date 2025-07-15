import React, { useEffect } from 'react';
import { Stack, Box, Typography, Button } from '@mui/material';

export default function Details({ exercise, setExercise }) {
    
    /*
    useEffect(() => {
        const callBack = () => {
            if(!exercise) {
                localStorage.setItem("selectedExercise", JSON.stringify(exercise));
                console.log(JSON.parse(localStorage.getItem("selectedExercise")));
            } else {
                const storedExercise = localStorage.getItem("selectedExercise",);
                console.log(JSON.parse(storedExercise));
                setExercise(JSON.parse(storedExercise));
            }
        }

        callBack();
    }, []);
    */

    if (!exercise) return (
        <Typography
            mx='5%'
            my='2%'
            color="primary.dark"
        >
            Exercise not found.
        </Typography>
    );

    const { name, description, bodyPart, target, secondaryMuscles, instructions, gifUrl } = exercise;
    let secondaryTitle;

    return (
        <Stack
            width="90%"
            justifyContent="space-between"
            sx={{
                flexDirection: { lg: "row" }
            }}
            position='relative'
            gap="30px"
            mx='5%'
            my='2%'
        >
            <Box
                width="100%"
                display="flex"
                alignItems="center"
                sx={{
                    width: { lg: "700px" }
                }}
                overflow="hidden"
            >
                <img src={gifUrl} alt={name} loading="lazy" className="detail-image"/>
            </Box>
            <Box
                width="100%"
                display="flex"
                flexDirection="column"
                justifyContent="top"
                height="700px"
                sx={{
                    width: { lg: "600px" },
                    justifyContent: { lg: "center" }
                }}
            >
                <Typography
                    fontWeight="700"
                    fontSize="40px"
                    textTransform="uppercase"
                    display="flex"
                    flexWrap="wrap"
                    flexDirection="column"
                    lineHeight="40px"
                    color="primary.dark"
                    mb="10px"
                >
                    {name}
                </Typography>
                <Typography
                    color="primary.dark"
                    my="10px"
                >
                    {description}
                </Typography>
                <Stack
                    direction="row"
                    alignItems="center"
                    my="10px"
                >
                    <Typography
                        color="primary.dark"
                    >
                        Primary Muscle:
                    </Typography>
                    <Box
                        position="relative"
                        mx="5px"
                        p="10px"
                        borderRadius="6px"
                        bgcolor="secondary.light"
                        color="white"
                        alignSelf="center"
                    >
                        <Typography
                            textTransform="uppercase"
                            px="4px"
                        >
                            {target}
                        </Typography>
                    </Box>
                </Stack>
                <Stack
                    direction="row"
                    alignItems="center"
                    my="10px"
                    display="flex"
                    flexWrap="wrap"
                >
                    <Typography
                        color="primary.dark"
                    >
                        {Array.isArray(secondaryMuscles) && secondaryMuscles.length == 1 ? (
                            secondaryTitle = "Secondary Muscle:" 
                        ) : (
                            secondaryTitle = "Secondary Muscles:"
                        )}
                    </Typography>
                    {Array.isArray(secondaryMuscles) && secondaryMuscles.length > 0 ? (
                        secondaryMuscles.map((muscle) => (
                            <Box
                                position="relative"
                                mx="5px"
                                p="10px"
                                borderRadius="6px"
                                bgcolor="custom.main"
                                color="white"
                                alignSelf="center"
                            >
                                <Typography
                                    textTransform="uppercase"
                                    px="4px"
                                >
                                    {muscle}
                                </Typography>
                            </Box>
                        ))
                    ) : (
                        <Typography>
                            Loading...
                        </Typography>
                    )}
                </Stack>
                <Typography
                    color="primary.dark"
                    my="10px"
                >
                    Instructions:
                </Typography>
                <ol className='instructions-list'>
                    {Array.isArray(instructions) && instructions.length > 0 ? (
                        instructions.map((direction) => (
                            <Typography
                                color="primary.dark"
                            >
                                <li>{direction}</li>
                            </Typography>
                        ))
                    ) : (
                        <Typography>
                            Loading...
                        </Typography>
                    )}
                </ol>
            </Box>
        </Stack>
    )
}