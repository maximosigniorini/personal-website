"use client";

export const runtime = "edge";

import VideoGrid from "@/components/VideoGrid";
import { useRouter } from 'next/navigation';
import { FaArrowLeft } from 'react-icons/fa';

const soundDesignVideos = [
  { id: 1, 
    title: 'London Move', 
    url: 'https://pub-3b208947b00644e0b2561af8dd4d5bfc.r2.dev/London%20Move.mp4' 
  },
  { id: 2, 
    title: 'HPE Playful inventiveness', 
    url: 'https://pub-3b208947b00644e0b2561af8dd4d5bfc.r2.dev/HPE%20Playful%20inventiveness.mp4' 
  },
  { id: 3, 
    title: 'HPE In Data we Trust', 
    url: 'https://pub-3b208947b00644e0b2561af8dd4d5bfc.r2.dev/HPE%20In%20Data%20We%20Trust.mp4' 
  },
  { id: 4, 
    title: 'Byclo', 
    url: 'https://pub-3b208947b00644e0b2561af8dd4d5bfc.r2.dev/Byclo.mp4',
    thumbnail: '/assets/video-thumbnails/byclo.png'
  },
  { id: 5, 
    title: 'DL Motion', 
    url: 'https://pub-3b208947b00644e0b2561af8dd4d5bfc.r2.dev/DL%20Motion.mp4' 
  },
  { id: 6, 
    title: 'Momby', 
    url: 'https://pub-3b208947b00644e0b2561af8dd4d5bfc.r2.dev/Momby.mp4' 
  },
  { id: 7, 
    title: 'Zapatillas', 
    url: 'https://pub-3b208947b00644e0b2561af8dd4d5bfc.r2.dev/Zapatillas.mp4' 
  },
  { id: 8, 
    title: 'HPE Lightness of Touch', 
    url: 'https://pub-3b208947b00644e0b2561af8dd4d5bfc.r2.dev/HPE%20Lightness%20Of%20Touch%20intro.mp4' 
  },
  { id: 9, 
    title: 'Natural', 
    url: 'https://pub-3b208947b00644e0b2561af8dd4d5bfc.r2.dev/Natural%20Master.mp4' 
  },
  { id: 10, 
    title: 'Football', 
    url: 'https://pub-3b208947b00644e0b2561af8dd4d5bfc.r2.dev/Portfolio%20Football.mp4' 
  },
  { id: 11, 
    title: 'Bamboo Traveller', 
    url: 'https://pub-3b208947b00644e0b2561af8dd4d5bfc.r2.dev/Bamboo%20Traveller%20Master.mp4' 
  },
  { id: 12, 
    title: 'Sweet Cocoon', 
    url: 'https://pub-3b208947b00644e0b2561af8dd4d5bfc.r2.dev/Sweet%20Cocoon.mp4' 
  },
  { id: 13, 
    title: 'Adidas', 
    url: 'https://pub-3b208947b00644e0b2561af8dd4d5bfc.r2.dev/Adidas.mp4' 
  },
  { id: 14, 
    title: 'Bamboo Traveler', 
    url: 'https://pub-3b208947b00644e0b2561af8dd4d5bfc.r2.dev/Bamboo%20Traveller%20Master.mp4' 
  },
  { id: 15, 
    title: 'Peter Tarka', 
    url: 'https://pub-3b208947b00644e0b2561af8dd4d5bfc.r2.dev/Peter%20Tarka%20Spotify.mp4' 
  },
  { id: 16, 
    title: 'Livio Maraniello', 
    url: 'https://pub-3b208947b00644e0b2561af8dd4d5bfc.r2.dev/Livio%20Maraniello.mp4' 
  },
  { id: 17, 
    title: 'Buck', 
    url: 'https://pub-3b208947b00644e0b2561af8dd4d5bfc.r2.dev/Buck.mp4' 
  },
  { id: 18, 
    title: 'Fundbox', 
    url: 'https://pub-3b208947b00644e0b2561af8dd4d5bfc.r2.dev/Fundbox.mp4' 
  },
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
