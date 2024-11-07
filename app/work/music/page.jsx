"use client";

export const runtime = "edge";

import VideoGrid from "@/components/VideoGrid";
import { useRouter } from 'next/navigation';
import { FaArrowLeft } from 'react-icons/fa';

const musicVideos = [
  { id: 1, 
    title: 'Austin', 
    url: 'https://pub-3b208947b00644e0b2561af8dd4d5bfc.r2.dev/Music/mus_austin_2.mp4',
    thumbnail: '/assets/video-thumbnails/Austin.jpg' 
  },
  { id: 2, 
    title: 'Austin Unlock', 
    url: 'https://pub-3b208947b00644e0b2561af8dd4d5bfc.r2.dev/Music/mus_austin_unlock.mp4',
    thumbnail: '/assets/video-thumbnails/Austin Unlock.jpg' 
  },
  { id: 3, 
    title: 'Crinimo', 
    url: 'https://pub-3b208947b00644e0b2561af8dd4d5bfc.r2.dev/Music/mus_crinimo.mp4',
    thumbnail: '/assets/video-thumbnails/Crinimo.jpg' 
  },
  { id: 4, 
    title: 'La Luna', 
    url: 'https://pub-3b208947b00644e0b2561af8dd4d5bfc.r2.dev/Music/mus_la_luna.mp4',
    thumbnail: '/assets/video-thumbnails/La Luna.jpg'
  },
  { id: 5, 
    title: 'Lerato', 
    url: 'https://pub-3b208947b00644e0b2561af8dd4d5bfc.r2.dev/Music/mus_lerato.mp4',
    thumbnail: '/assets/video-thumbnails/Lerato.jpg' 
  },
  { id: 6, 
    title: 'Nanobot', 
    url: 'https://pub-3b208947b00644e0b2561af8dd4d5bfc.r2.dev/Music/mus_nanobot.mp4',
    thumbnail: '/assets/video-thumbnails/Nanobot.jpg' 
  },
  { id: 7, 
    title: 'NIO ET5', 
    url: 'https://pub-3b208947b00644e0b2561af8dd4d5bfc.r2.dev/Music/mus_nio_et5.mp4',
    thumbnail: '/assets/video-thumbnails/NIO ET5.jpg' 
  },
  { id: 8, 
    title: 'Order Up', 
    url: 'https://pub-3b208947b00644e0b2561af8dd4d5bfc.r2.dev/Music/mus_orderup.mp4',
    thumbnail: '/assets/video-thumbnails/Order Up.jpg' 
  },
  { id: 9, 
    title: 'Phases', 
    url: 'https://pub-3b208947b00644e0b2561af8dd4d5bfc.r2.dev/Music/mus_phases.mp4',
    thumbnail: '/assets/video-thumbnails/Phases.jpg' 
  },
];

const Music = () => {
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
          Music Composition Projects
        </h1>
      </div>

      {/* Video Grid */}
      <VideoGrid videos={musicVideos} />
    </div>
  );
};

export default Music;
