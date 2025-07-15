import React, { useContext } from 'react';
import { Box, Typography } from '@mui/material';
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';

import rightArrow from '../assets/icons/right-arrow.png';
import leftArrow from '../assets/icons/left-arrow.png';
import allImage from '../assets/icons/all.png'; 
import backImage from '../assets/icons/back.png'; 
import chestImage from '../assets/icons/chest.png'; 
import lowerArmsImage from '../assets/icons/forearm.png'; 
import upperArmsImage from '../assets/icons/biceps.png'; 
import lowerLegsImage from '../assets/icons/lower-leg.png'; 
import upperLegsImage from '../assets/icons/upper-leg.png'; 
import waistImage from '../assets/icons/core.png'; 
import neckImage from '../assets/icons/neck.png';
import shouldersImage from '../assets/icons/shoulder.png';
import cardioImage from '../assets/icons/cardio.png'

import BodyPartCard from './BodyPartCard';
import ExerciseCard from './ExerciseCard';

const iconMap = {
  'all': allImage,
  'back': backImage,
  'cardio': cardioImage,
  'chest': chestImage,
  'lower arms': lowerArmsImage,
  'upper arms': upperArmsImage,
  'lower legs': lowerLegsImage,
  'upper legs': upperLegsImage,
  'waist': waistImage,
  'neck': neckImage,
  'shoulders': shouldersImage,
}

const LeftArrow = () => {
  const { scrollPrev } = useContext(VisibilityContext);

  return (
    <Typography onClick={() => scrollPrev()} className="right-arrow">
      <img src={leftArrow} alt="right-arrow" style={{ height: '30px' }} />
    </Typography>
  );
};

const RightArrow = () => {
  const { scrollNext } = useContext(VisibilityContext);

  return (
    <Typography onClick={() => scrollNext()} className="left-arrow">
      <img src={rightArrow} alt="right-arrow" style={{ height: '30px' }} />
    </Typography>
  );
};

export default function HorizontalScroll({ data, bodyPart, setBodyPart, isBPC }) {
    return (
      <ScrollMenu LeftArrow={<LeftArrow />} RightArrow={<RightArrow />}> 
          {data.map((item) => (
              <Box
                  key={item.id || item}
                  itemId={item.id || item}
                  title={item.id || item}
              >
                {isBPC ? (
                  <BodyPartCard
                    item={item}  
                    icon={iconMap[item]} 
                    bodyPart={bodyPart}
                    setBodyPart={setBodyPart} 
                  />
                ) : (
                  <Box
                    sx={{
                      transform: 'scale(0.9)'
                    }}
                  >
                    <ExerciseCard
                      exercise={item}
                  />
                  </Box>
                )}
              </Box>
          ))}
      </ScrollMenu>
    )
}