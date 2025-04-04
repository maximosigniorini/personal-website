"use client";

import { useEffect, useRef, useState } from "react";
import VideoPlayerControls from "@/components/VideoPlayerControls";
import { motion } from "framer-motion";

export const runtime = "edge";

export default function Portfolio() {
  const [isPaused, setIsPaused] = useState(true);
  const [hasPlayed, setHasPlayed] = useState(false);
  const [videoEnded, setVideoEnded] = useState(false); // Track if video has ended
  const videoRef = useRef(null);
  const [videoDuration, setVideoDuration] = useState();
  const [videoProgress, setVideoProgress] = useState(0);

  useEffect(() => {
    const video = videoRef.current;

    if (video) {
      const handleLoadedMetadata = () => {
        setVideoDuration(video.duration);
      };

      const handleTimeUpdate = () => {
        setVideoProgress(video.currentTime / video.duration);
      };

      const handleEnded = () => {
        setIsPaused(true);
        setVideoEnded(true); // Mark video as ended
      };

      video.addEventListener("loadedmetadata", handleLoadedMetadata);
      video.addEventListener("timeupdate", handleTimeUpdate);
      video.addEventListener("ended", handleEnded);

      return () => {
        video.removeEventListener("loadedmetadata", handleLoadedMetadata);
        video.removeEventListener("timeupdate", handleTimeUpdate);
        video.removeEventListener("ended", handleEnded);
      };
    }
  }, []);

  const togglePlayPause = () => {
    const video = videoRef.current;
    if (video) {
      if (video.paused) {
        video.play();
        video.muted = false;
        setHasPlayed(true);
        setVideoEnded(false); // Reset end state
      } else {
        video.pause();
      }
      setIsPaused(video.paused);
    }
  };

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
  }, [hasPlayed, isPaused]);

  return (
    <section>
      <div
        className="relative w-[90%] max-w-6xl mx-auto my-0 my-8 rounded-xl overflow-hidden cursor-pointer"
        onClick={hasPlayed ? togglePlayPause : null}
        onContextMenu={(e) => e.preventDefault()}
      >
        <video
          className={`w-full ${!hasPlayed ? "opacity-0" : "opacity-100"}`}
          ref={videoRef}
          style={{ backgroundColor: "black" }}
          onContextMenu={(e) => e.preventDefault()}
        >
          <source src="https://www.cdn.maximosigniorini.com/reel.mp4" />
        </video>

        {/* Initial Play Button Overlay */}
        {!hasPlayed && (
          <div
            className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 cursor-pointer"
            onClick={togglePlayPause}
          >
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center justify-center w-20 h-20 bg-white bg-opacity-60 rounded-full"
              style={{ backgroundColor: "rgba(255, 255, 255, 0.6)" }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-10 h-10 text-gray-900"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
            </motion.div>
          </div>
        )}

        {/* Video Progress Controls */}
        {hasPlayed && !videoEnded && (
          <div className="absolute top-4 right-4">
            <VideoPlayerControls
              progress={videoProgress}
              isPaused={isPaused}
              onPlayPause={togglePlayPause}
            />
          </div>
        )}

        {/* Button Overlay for YouTube Link */}
        {videoEnded && (
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-70"
          onClick={(e) => e.stopPropagation()}>
            <p className="text-white text-lg mb-4">Watch the full video on YouTube!</p>
            <a
              href="https://www.youtube.com/watch?v=HpG_KAuj2AY"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-yellow-500 text-black font-semibold py-2 px-4 rounded hover:bg-yellow-600 transition-all"
            >
              Go to YouTube
            </a>
          </div>
        )}
      </div>
    </section>
  );
}