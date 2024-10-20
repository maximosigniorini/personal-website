"use client";

import VideoGrid from "@/components/VideoGrid";
import { useRouter } from 'next/navigation';
import { FaArrowLeft } from 'react-icons/fa';

const soundDesignVideos = [
  { id: 1, url: 'https://youtu.be/_SmUsqJcNgo?si=xKTibN7LjuXHtpu-' },
  { id: 2, url: 'https://youtu.be/_SmUsqJcNgo?si=xKTibN7LjuXHtpu-' },
  { id: 3, url: 'https://youtu.be/_SmUsqJcNgo?si=xKTibN7LjuXHtpu-' },
];

const SoundDesign = () => {
  const router = useRouter();

  return (
    <div className="container mx-auto py-12">
      <div className="flex items-center mb-8">
        {/* Back Button */}
        <button
          onClick={router.back} 
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
