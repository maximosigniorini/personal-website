"use client";

export const runtime = "edge";

import VideoGrid from "@/components/VideoGrid";
import { useRouter } from 'next/navigation';
import { FaArrowLeft } from 'react-icons/fa';

const musicVideos = [
  { id: 1, 
    title: 'Google OnHub', 
    url: 'https://www.cdn.maximosigniorini.com/google-onhub.mp4',
    thumbnail: '/assets/video-thumbnails/google-onhub.jpg' 
  },
  { id: 2, 
    title: 'Austin', 
    url: 'https://www.cdn.maximosigniorini.com/Music/mus_austin_2.mp4',
    thumbnail: '/assets/video-thumbnails/austin.jpg' 
  },
  { id: 3, 
    title: 'Austin Unlock', 
    url: 'https://www.cdn.maximosigniorini.com/Music/mus_austin_unlock.mp4',
    thumbnail: '/assets/video-thumbnails/austin-unlock.jpg' 
  },
  { id: 4, 
    title: 'Crinimo', 
    url: 'https://www.cdn.maximosigniorini.com/Music/mus_crinimo.mp4',
    thumbnail: '/assets/video-thumbnails/crinimo.jpg' 
  },
  { id: 5, 
    title: 'La Luna', 
    url: 'https://www.cdn.maximosigniorini.com/Music/mus_la_luna.mp4',
    thumbnail: '/assets/video-thumbnails/la-luna.jpg'
  },
  { id: 6, 
    title: 'Lerato', 
    url: 'https://www.cdn.maximosigniorini.com/Music/mus_lerato.mp4',
    thumbnail: '/assets/video-thumbnails/lerato.jpg' 
  },
  { id: 7, 
    title: 'Nanobot', 
    url: 'https://www.cdn.maximosigniorini.com/Music/mus_nanobot.mp4',
    thumbnail: '/assets/video-thumbnails/nanobot.jpg' 
  },
  { id: 8, 
    title: 'NIO ET5', 
    url: 'https://www.cdn.maximosigniorini.com/Music/mus_nio_et5.mp4',
    thumbnail: '/assets/video-thumbnails/nio-et5.jpg' 
  },
  { id: 9, 
    title: 'Order Up', 
    url: 'https://www.cdn.maximosigniorini.com/Music/mus_orderup.mp4',
    thumbnail: '/assets/video-thumbnails/order-up.jpg' 
  },
  { id: 10, 
    title: 'Phases', 
    url: 'https://www.cdn.maximosigniorini.com/Music/mus_phases.mp4',
    thumbnail: '/assets/video-thumbnails/phases.jpg' 
  },
  { id: 11, 
    title: 'Bang Olufsen', 
    url: 'https://www.cdn.maximosigniorini.com/Music/241127/2_bang-olufsen.mp4',
    thumbnail: '/assets/video-thumbnails/bang-olufsen.jpg' 
  },
  { id: 12, 
    title: 'Mutek', 
    url: 'https://www.cdn.maximosigniorini.com/Music/241127/2_mutek.mp4',
    thumbnail: '/assets/video-thumbnails/mutek.jpg' 
  },
  { id: 13, 
    title: 'Reveland', 
    url: 'https://www.cdn.maximosigniorini.com/Music/241127/2_reveland.mp4',
    thumbnail: '/assets/video-thumbnails/reveland.jpg' 
  },
  { id: 14, 
    title: 'Splice', 
    url: 'https://www.cdn.maximosigniorini.com/Music/241127/2_splice.mp4',
    thumbnail: '/assets/video-thumbnails/splice.jpg' 
  },
  { id: 15, 
    title: 'Tempo Core Rooms', 
    url: 'https://www.cdn.maximosigniorini.com/Music/241127/2_tempo-core-rooms.mp4',
    thumbnail: '/assets/video-thumbnails/tempo-core-rooms.jpg' 
  },
  { id: 16, 
    title: 'Sam Loop', 
    url: 'https://www.cdn.maximosigniorini.com/Music/241127/2_sam-loop.mp4',
    thumbnail: '/assets/video-thumbnails/sam-loop.jpg' 
  },
  { id: 17, 
    title: 'Save As', 
    url: 'https://www.cdn.maximosigniorini.com/Music/241127/2_save-as.mp4',
    thumbnail: '/assets/video-thumbnails/save-as.jpg' 
  },
  { id: 18, 
    title: "Flexin' those keyframes", 
    url: 'https://www.cdn.maximosigniorini.com/Music/241127/2_flexin-those-keyframes.mp4',
    thumbnail: '/assets/video-thumbnails/flexin-those-keyframes.jpg' 
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
