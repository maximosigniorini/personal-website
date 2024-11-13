"use client";

export const runtime = "edge";

import VideoGrid from "@/components/VideoGrid";
import { useRouter } from 'next/navigation';
import { FaArrowLeft } from 'react-icons/fa';

const musicVideos = [
  { id: 1, 
    title: 'Austin', 
    url: 'https://www.cdn.maximosigniorini.com/Music/mus_austin_2.mp4',
    thumbnail: '/assets/video-thumbnails/austin.jpg' 
  },
  { id: 2, 
    title: 'Austin Unlock', 
    url: 'https://www.cdn.maximosigniorini.com/Music/mus_austin_unlock.mp4',
    thumbnail: '/assets/video-thumbnails/austin-unlock.jpg' 
  },
  { id: 3, 
    title: 'Crinimo', 
    url: 'https://www.cdn.maximosigniorini.com/Music/mus_crinimo.mp4',
    thumbnail: '/assets/video-thumbnails/crinimo.jpg' 
  },
  { id: 4, 
    title: 'La Luna', 
    url: 'https://www.cdn.maximosigniorini.com/Music/mus_la_luna.mp4',
    thumbnail: '/assets/video-thumbnails/la-luna.jpg'
  },
  { id: 5, 
    title: 'Lerato', 
    url: 'https://www.cdn.maximosigniorini.com/Music/mus_lerato.mp4',
    thumbnail: '/assets/video-thumbnails/lerato.jpg' 
  },
  { id: 6, 
    title: 'Nanobot', 
    url: 'https://www.cdn.maximosigniorini.com/Music/mus_nanobot.mp4',
    thumbnail: '/assets/video-thumbnails/nanobot.jpg' 
  },
  { id: 7, 
    title: 'NIO ET5', 
    url: 'https://www.cdn.maximosigniorini.com/Music/mus_nio_et5.mp4',
    thumbnail: '/assets/video-thumbnails/nio-et5.jpg' 
  },
  { id: 8, 
    title: 'Order Up', 
    url: 'https://www.cdn.maximosigniorini.com/Music/mus_orderup.mp4',
    thumbnail: '/assets/video-thumbnails/order-up.jpg' 
  },
  { id: 9, 
    title: 'Phases', 
    url: 'https://www.cdn.maximosigniorini.com/Music/mus_phases.mp4',
    thumbnail: '/assets/video-thumbnails/phases.jpg' 
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
