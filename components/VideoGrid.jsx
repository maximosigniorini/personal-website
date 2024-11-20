import React, { useState, useRef, useEffect } from 'react';
import ReactPlayer from 'react-player';
import { FaPlay, FaPause, FaVolumeMute, FaVolumeUp } from 'react-icons/fa';
import PlayButton from './ui/PlayButton';
import Image from 'next/image';

const VideoGrid = ({ videos }) => {
  const [playingIndex, setPlayingIndex] = useState(null);
  const [isFullScreen, setIsFullScreen] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [progress, setProgress] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  const playerRef = useRef(null);
  const containerRef = useRef(null);

  const handlePlay = (index) => {
    setPlayingIndex(index);
    setIsFullScreen(true);
    setIsPlaying(true);
    setIsLoading(true);
  };

  const handleClose = () => {
    setPlayingIndex(null);
    setIsFullScreen(false);
    setIsPlaying(false);
    setProgress(0);
    setIsLoading(true);
  };

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const handleMute = () => {
    setIsMuted(!isMuted);
  };

  const handleProgress = (progress) => {
    setProgress(progress.played * 100);
  };

  const handleReady = () => {
    setIsLoading(false);
  };

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape" && isFullScreen) {
        handleClose();
      }
    };

    const handleClickOutside = (event) => {
      if (
        isFullScreen &&
        containerRef.current &&
        !containerRef.current.contains(event.target)
      ) {
        handleClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isFullScreen]);

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {videos.map((video, index) => (
          <div
            key={index}
            className="relative w-full h-64 overflow-hidden group cursor-pointer"
            onClick={() => handlePlay(index)}
            data-index={index}
          >
            {/* Custom Thumbnail */}
            <Image
              src={`${video.thumbnail}`}
              alt={video.title}
              width={800}
              height={600}
              className="w-full h-full object-cover transition-all duration-300 brightness-50 group-hover:brightness-75"
            />

            {/* Overlay with Title */}
            <div className="absolute top-10 inset-x-0 text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <p className="text-white/80 text-lg font-semibold">{video.title}</p>
            </div>

            {/* Play Button Overlay */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="bg-gray-300 bg-opacity-50 rounded-full p-4 group-hover:bg-opacity-80">
                <PlayButton />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Fullscreen Video Player */}
      {isFullScreen && (
        <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50">
          <div ref={containerRef} className="relative w-full max-w-3xl">
            {/* Video Player */}
            <ReactPlayer
              ref={playerRef}
              url={videos[playingIndex]?.url}
              width="100%"
              height="100%"
              playing={isPlaying}
              muted={isMuted}
              onProgress={handleProgress}
              onReady={handleReady} // When video is ready, hide the loading spinner
            />

            {/* Loading Spinner (Minimal Style) */}
            {isLoading && (
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-12 h-12 border-4 border-t-4 border-white border-solid rounded-full animate-spin"></div>
              </div>
            )}

            {/* Custom Controls */}
            <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between">
              {/* Play/Pause Button */}
              <button onClick={handlePlayPause} className="text-white text-2xl">
                {isPlaying ? <FaPause /> : <FaPlay />}
              </button>

              {/* Smoother Progress Bar */}
              <div className="flex-grow mx-4 h-1 bg-gray-700 rounded-full overflow-hidden">
                <div
                  className="h-1 bg-white rounded-full transition-all duration-300"
                  style={{ width: `${progress}%` }}
                ></div>
              </div>

              {/* Mute Button */}
              <button onClick={handleMute} className="text-white text-2xl">
                {isMuted ? <FaVolumeMute /> : <FaVolumeUp />}
              </button>
            </div>

            {/* Minimalist Close Button */}
            <button
              onClick={handleClose}
              className="absolute top-4 right-4 p-2 text-lg text-white hover:bg-gray-700/70 rounded-full transition-all duration-200"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default VideoGrid;