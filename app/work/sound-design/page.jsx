"use client";

export const runtime = "edge";

import VideoGrid from "@/components/VideoGrid";
import { useRouter } from 'next/navigation';
import { FaArrowLeft } from 'react-icons/fa';

const soundDesignVideos = [
  { id: 1, 
    title: 'London Move', 
    url: 'https://www.maximosigniorini.com/Sound%20Design/London%20Move.mp4',
    thumbnail: '/assets/video-thumbnails/london-move.jpg' 
  },
  { id: 2, 
    title: 'Climate Change', 
    url: 'https://www.maximosigniorini.com/Climate%20Change.mp4',
    thumbnail: '/assets/video-thumbnails/climate-change.jpg' 
  },
  { id: 3, 
    title: 'Momby', 
    url: 'https://www.maximosigniorini.com/Sound%20Design/Momby.mp4',
    thumbnail: '/assets/video-thumbnails/momby.jpg' 
  },
  { id: 4, 
    title: 'HPE Playful inventiveness', 
    url: 'https://www.maximosigniorini.com/Sound%20Design/HPE%20Playful%20inventiveness.mp4',
    thumbnail: '/assets/video-thumbnails/hpe-playful-inventiveness.jpg' 
  },
  { id: 5, 
    title: 'HPE In Data we Trust', 
    url: 'https://www.maximosigniorini.com/Sound%20Design/HPE%20In%20Data%20We%20Trust.mp4',
    thumbnail: '/assets/video-thumbnails/hpe-in-data-we-trust.jpg' 
  },
  { id: 6, 
    title: 'HPE Lightness of Touch', 
    url: 'https://www.maximosigniorini.com/Sound%20Design/HPE%20Lightness%20Of%20Touch%20intro.mp4',
    thumbnail: '/assets/video-thumbnails/hpe-lightness-of-touch.jpg' 
  },
  { id: 7, 
    title: 'Byclo', 
    url: 'https://www.maximosigniorini.com/Sound%20Design/Byclo.mp4',
    thumbnail: '/assets/video-thumbnails/byclo.jpg'
  },
  { id: 8, 
    title: 'DL Motion', 
    url: 'https://www.maximosigniorini.com/Sound%20Design/DL%20Motion.mp4',
    thumbnail: '/assets/video-thumbnails/dl-motion.jpg' 
  },
  { id: 9, 
    title: 'Record', 
    url: 'https://www.maximosigniorini.com/Record.mp4',
    thumbnail: '/assets/video-thumbnails/record.jpg' 
  },
  { id: 10, 
    title: 'Zapatillas', 
    url: 'https://www.maximosigniorini.com/Sound%20Design/Zapatillas.mp4',
    thumbnail: '/assets/video-thumbnails/zapatillas.jpg' 
  },
  { id: 11, 
    title: 'Natural', 
    url: 'https://www.maximosigniorini.com/Sound%20Design/Natural%20Master.mp4',
    thumbnail: '/assets/video-thumbnails/natural.jpg' 
  },
  { id: 12, 
    title: 'Football', 
    url: 'https://www.maximosigniorini.com/Sound%20Design/Portfolio%20Football.mp4',
    thumbnail: '/assets/video-thumbnails/football.jpg' 
  },
  { id: 13, 
    title: 'Bamboo Traveller', 
    url: 'https://www.maximosigniorini.com/Sound%20Design/Bamboo%20Traveller%20Master.mp4',
    thumbnail: '/assets/video-thumbnails/bamboo-traveller.jpg' 
  },
  { id: 14, 
    title: 'Sweet Cocoon', 
    url: 'https://www.maximosigniorini.com/Sound%20Design/Sweet%20Cocoon.mp4',
    thumbnail: '/assets/video-thumbnails/sweet-cocoon.jpg' 
  },
  { id: 15, 
    title: 'Adidas', 
    url: 'https://www.maximosigniorini.com/Sound%20Design/Adidas.mp4',
    thumbnail: '/assets/video-thumbnails/adidas.jpg' 
  },
  { id: 16, 
    title: 'Peter Tarka', 
    url: 'https://www.maximosigniorini.com/Sound%20Design/Peter%20Tarka%20Spotify.mp4',
    thumbnail: '/assets/video-thumbnails/peter-tarka.jpg' 
  },
  { id: 17, 
    title: 'Livio Maraniello', 
    url: 'https://www.maximosigniorini.com/Sound%20Design/Livio%20Maraniello.mp4',
    thumbnail: '/assets/video-thumbnails/livio-maraniello.jpg' 
  },
  { id: 18, 
    title: 'Buck', 
    url: 'https://www.maximosigniorini.com/Sound%20Design/Buck.mp4',
    thumbnail: '/assets/video-thumbnails/buck.jpg' 
  },
  // { id: 19, 
  //   title: 'Fundbox', 
  //   url: 'https://pub-3b208947b00644e0b2561af8dd4d5bfc.r2.dev/Fundbox.mp4',
  //   thumbnail: '/assets/video-thumbnails/Fundbox.jpg'
  // },
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
