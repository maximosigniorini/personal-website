"use client";

export const runtime = "edge";

import VideoGrid from "@/components/VideoGrid";
import { useRouter } from 'next/navigation';
import { FaArrowLeft } from 'react-icons/fa';

import videos from "@/data/videos.js"

const SoundDesign = () => {
  const router = useRouter();

  const soundDesignVideos = videos.filter(video => video.category === "sound-design");

  return (
    <div className="container mx-auto py-12">
      <div className="flex items-center mb-8">
        {/* Back Button */}
        <button
           onClick={() => router.push("/work")}
          className="flex items-center text-white transition-colors duration-200 mr-4 hover:text-accent-hover" 
        >
          <FaArrowLeft className="text-2xl" />
        </button>

        <h1 className="text-4xl font-bold text-center relative flex-grow">
          Sound Design Projects
        </h1>
      </div>

      {/* Video Grid */}
      <VideoGrid videos={soundDesignVideos} />
    </div>
  );
};

export default SoundDesign;
