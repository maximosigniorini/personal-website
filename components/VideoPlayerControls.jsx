//import { transform } from 'next/dist/build/swc';
import React from 'react';

import PlayButton from './ui/PlayButton';
import PauseButton from './ui/PauseButton';

const VideoPlayerControls = ({
  progress,
  isPaused,
  onPlayPause,
  size = 48,
  width = 3
}) => {

  const center = size /2;
  const radius = center - width;
  const dashArray = 2 * Math.PI * radius;
  const dashOffset = dashArray * (1 - progress);  

  return(
    <div className='relative flex justify-center items-center'>
        <svg width={size} height={size} style={{transform: "rotate(-90deg)"}}>
            <circle cx={center} cy={center} r={radius} fill='transparent' stroke='#aaaaaa' strokeWidth={width}/>
            <circle cx={center} cy={center} r={radius} fill='transparent' stroke='#F9ED69' strokeWidth={width} strokeDasharray={dashArray} strokeDashoffset={dashOffset} strokeLinecap='round'/>
        </svg>
        <div className='absolute'>
            <button className='group cursor-pointer flex justify-center items-center' onClick={onPlayPause}>
                <div className='fill-white group-hover:fill-[#aaaaaa] transition-colors duration-200 ease-in-out'>
                    {isPaused ? <PlayButton /> : <PauseButton />} 
                </div>
            </button>
        </div>
    </div>
  )
};

export default VideoPlayerControls;