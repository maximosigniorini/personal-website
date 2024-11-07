import React, { useState, useRef, useEffect } from 'react';
import ReactPlayer from 'react-player';
import { FaPlay, FaPause, FaVolumeMute, FaVolumeUp } from 'react-icons/fa';
import PlayButton from './ui/PlayButton';

const VideoGrid = ({ videos }) => {
  const [playingIndex, setPlayingIndex] = useState(null);
  const [isFullScreen, setIsFullScreen] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [progress, setProgress] = useState(0);
  const [loading, setLoading] = useState(Array(videos.length).fill(true)); // Track loading for each video

  const playerRef = useRef(null);

  const handlePlay = (index) => {
    setPlayingIndex(index);
    setIsFullScreen(true);
    setIsPlaying(true);
  };

  const handleClose = () => {
    setPlayingIndex(null);
    setIsFullScreen(false);
    setIsPlaying(false);
    setProgress(0);
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

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape" && isFullScreen) {
        handleClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isFullScreen]);

  // Lazy load videos with Intersection Observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute("data-index"));
            observer.unobserve(entry.target);

            // Temporarily keep the video in loading state until onReady fires
          }
        });
      },
      { threshold: 0.1 }
    );

    const videoElements = document.querySelectorAll(".lazy-load-video");
    videoElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const handleVideoReady = (index) => {
    // Update loading state to indicate that this video has loaded
    setLoading((prevLoading) => {
      const newLoading = [...prevLoading];
      newLoading[index] = false;
      return newLoading;
    });
  };

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
            {/* Loading symbol in front of video */}
            {loading[index] && (
              <div className="absolute inset-0 flex items-center justify-center bg-gray-800 z-10">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-white"></div>
              </div>
            )}

            {/* Video or thumbnail display */}
            <ReactPlayer
              url={video.url}
              width="100%"
              height="100%"
              playing={false}
              controls={false}
              loop
              muted
              //light={!loading[index]} // Enables thumbnail display only if the video is loaded
              onReady={() => handleVideoReady(index)} // Calls handleVideoReady when video is fully loaded
              className="transition-all duration-300 brightness-50 group-hover:brightness-75"
            />

            <div className="absolute top-10 inset-x-0 text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <p className="text-white/80 text-lg font-semibold">{video.title}</p>
            </div>

            {playingIndex !== index && !loading[index] && (
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-gray-300 bg-opacity-50 rounded-full p-4 group-hover:bg-opacity-80">
                  <PlayButton />
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      {isFullScreen && (
        <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50">
          <div className="relative w-full max-w-3xl">
            <ReactPlayer
              ref={playerRef}
              url={videos[playingIndex]?.url}
              width="100%"
              height="100%"
              playing={isPlaying}
              muted={isMuted}
              onProgress={handleProgress}
            />

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
