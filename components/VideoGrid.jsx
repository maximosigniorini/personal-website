"use client";
import { useState, useRef, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import ReactPlayer from 'react-player';
import { FaPlay, FaPause, FaVolumeMute, FaVolumeUp } from 'react-icons/fa';
import PlayButton from './ui/PlayButton';
import Image from 'next/image';

const VideoGrid = ({ videos }) => {
  const [playingIndex, setPlayingIndex] = useState(null);
  const [isFullScreen, setIsFullScreen] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const playerRef = useRef(null);
  const router = useRouter();

  // Function to check if the URL is a YouTube link
  const isYouTubeLink = (url) => url.includes("youtube.com") || url.includes("youtu.be");

  const handleThumbnailClick = (video) => {
    if (isYouTubeLink(video.url)) {
      window.open(video.url, '_blank', 'noopener,noreferrer');
    } else {
      router.push(`/work/${video.category}/${video.id}`);
    }
  };  

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {videos.map((video, index) => (
          <div key={index} className="relative w-full h-64 overflow-hidden group cursor-pointer" onClick={() => handleThumbnailClick(video, index)}>
            <Image src={video.thumbnail} alt={video.title} width={800} height={600} className="w-full h-full object-cover transition-all duration-300 brightness-50 group-hover:brightness-75" />
            <div className="absolute top-10 inset-x-0 text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <p className="text-white/80 text-lg font-semibold">{video.title}</p>
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="bg-gray-300 bg-opacity-50 rounded-full p-4 group-hover:bg-opacity-80">
                <PlayButton />
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default VideoGrid;