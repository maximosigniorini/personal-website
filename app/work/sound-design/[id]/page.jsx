"use client";

export const runtime = 'edge';

import { useState, useEffect, useRef } from "react";
import { useParams, useRouter } from "next/navigation";
import { FaPlay, FaPause, FaVolumeMute, FaVolumeUp, FaArrowLeft } from "react-icons/fa";
import VideoData from "@/data/videos";

export default function VideoPage() {
  const { id } = useParams();
  const video = VideoData.find((v) => v.id.toString() === id);
  const router = useRouter();

  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [progress, setProgress] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  const videoRef = useRef(null);

  useEffect(() => {
    if (!videoRef.current) return;

    const video = videoRef.current;

    const handleLoadedData = () => {
      setIsLoading(false);
    };

    if (video.readyState >= 3) {
      setIsLoading(false);
    }

    video.addEventListener("loadeddata", handleLoadedData);
    video.addEventListener("canplay", handleLoadedData);
    video.addEventListener("error", handleLoadedData);

    return () => {
      video.removeEventListener("loadeddata", handleLoadedData);
      video.removeEventListener("canplay", handleLoadedData);
      video.removeEventListener("error", handleLoadedData);
    };
  }, [videoRef.current]);

  const togglePlayPause = () => {
    if (!videoRef.current) return;
    if (videoRef.current.paused) {
      videoRef.current.play();
    } else {
      videoRef.current.pause();
    }
    setIsPlaying(!isPlaying);
  };

  const handleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !videoRef.current.muted;
    setIsMuted(!isMuted);
  };

  const handleProgress = () => {
    if (!videoRef.current) return;
    setProgress((videoRef.current.currentTime / videoRef.current.duration) * 100);
  };

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.addEventListener("timeupdate", handleProgress);
    }

    return () => {
      if (videoRef.current) {
        videoRef.current.removeEventListener("timeupdate", handleProgress);
      }
    };
  }, []);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.code === "Space") {
        event.preventDefault();
        togglePlayPause();
      }
    };
  
    window.addEventListener("keydown", handleKeyDown);
  
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  if (!video) return <p className="text-white text-center">Video not found.</p>;

  return (
    <div className="max-w-4xl mx-auto my-8">
      <div className="relative w-full">
        <video
          ref={videoRef}
          className="w-full rounded-lg"
          src={video.url}
          onPlay={() => setIsPlaying(true)}
          onPause={() => setIsPlaying(false)}
          onLoadedData={() => setIsLoading(false)}
          onContextMenu={(e) => e.preventDefault()}
          onCanPlay={() => setIsLoading(false)}
          controls={false}
          autoPlay
          onClick={() => {
            if (videoRef.current.paused) {
              videoRef.current.play();
            } else {
              videoRef.current.pause();
            }
          }}
        />

        {/* Loading Indicator */}
        {isLoading && (
          <div className="absolute inset-0 flex items-center justify-center bg-black/50">
            <div className="w-12 h-12 border-4 border-t-4 border-white border-solid rounded-full animate-spin"></div>
          </div>
        )}

        {/* Custom Controls */}
        <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
          {/* Play/Pause Button */}
          <button onClick={togglePlayPause} className="text-white text-2xl">
            {isPlaying ? <FaPause /> : <FaPlay />}
          </button>

          {/* Progress Bar */}
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
      </div>
    </div>
  );
}