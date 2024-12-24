"use client";

export const runtime = "edge";

import VideoGrid from "@/components/VideoGrid";
import { useRouter } from 'next/navigation';
import { FaArrowLeft } from 'react-icons/fa';

const soundDesignVideos = [
  { id: 1, 
    title: 'Under the Skin', 
    url: 'https://www.youtube.com/watch?v=_O7zk4tI5Hs',
    thumbnail: '/assets/video-thumbnails/under-the-skin.jpg' 
  },
  { id: 2, 
    title: 'Filtrate', 
    url: 'https://www.youtube.com/watch?v=2qLE6G_bDoE',
    thumbnail: '/assets/video-thumbnails/filtrate.jpg' 
  },
  { id: 3, 
    title: 'Google OnHub', 
    url: 'https://www.cdn.maximosigniorini.com/google-onhub.mp4',
    thumbnail: '/assets/video-thumbnails/google-onhub.jpg' 
  },
  { id: 4, 
    title: 'London Move', 
    url: 'https://www.cdn.maximosigniorini.com/Sound%20Design/London%20Move.mp4',
    thumbnail: '/assets/video-thumbnails/london-move.jpg' 
  },
  { id: 5, 
    title: 'Climate Change', 
    url: 'https://www.cdn.maximosigniorini.com/Climate%20Change.mp4',
    thumbnail: '/assets/video-thumbnails/climate-change.jpg' 
  },
  { id: 6, 
    title: 'Momby', 
    url: 'https://www.cdn.maximosigniorini.com/Sound%20Design/Momby.mp4',
    thumbnail: '/assets/video-thumbnails/momby.jpg' 
  },
  { id: 7, 
    title: 'HPE Playful inventiveness', 
    url: 'https://www.cdn.maximosigniorini.com/Sound%20Design/HPE%20Playful%20inventiveness.mp4',
    thumbnail: '/assets/video-thumbnails/hpe-playful-inventiveness.jpg' 
  },
  { id: 8, 
    title: 'HPE In Data we Trust', 
    url: 'https://www.cdn.maximosigniorini.com/Sound%20Design/HPE%20In%20Data%20We%20Trust.mp4',
    thumbnail: '/assets/video-thumbnails/hpe-in-data-we-trust.jpg' 
  },
  { id: 9, 
    title: 'HPE Lightness of Touch', 
    url: 'https://www.cdn.maximosigniorini.com/Sound%20Design/HPE%20Lightness%20Of%20Touch%20intro.mp4',
    thumbnail: '/assets/video-thumbnails/hpe-lightness-of-touch.jpg' 
  },
  { id: 10, 
    title: 'Byclo', 
    url: 'https://www.cdn.maximosigniorini.com/Sound%20Design/Byclo.mp4',
    thumbnail: '/assets/video-thumbnails/byclo.jpg'
  },
  { id: 11, 
    title: 'DL Motion', 
    url: 'https://www.cdn.maximosigniorini.com/Sound%20Design/DL%20Motion.mp4',
    thumbnail: '/assets/video-thumbnails/dl-motion.jpg' 
  },
  { id: 12, 
    title: 'Record', 
    url: 'https://www.cdn.maximosigniorini.com/Record.mp4',
    thumbnail: '/assets/video-thumbnails/record.jpg' 
  },
  { id: 13, 
    title: 'Zapatillas', 
    url: 'https://www.cdn.maximosigniorini.com/Sound%20Design/Zapatillas.mp4',
    thumbnail: '/assets/video-thumbnails/zapatillas.jpg' 
  },
  { id: 14, 
    title: 'Natural', 
    url: 'https://www.cdn.maximosigniorini.com/Sound%20Design/Natural%20Master.mp4',
    thumbnail: '/assets/video-thumbnails/natural.jpg' 
  },
  { id: 15, 
    title: 'Football', 
    url: 'https://www.cdn.maximosigniorini.com/Sound%20Design/Portfolio%20Football.mp4',
    thumbnail: '/assets/video-thumbnails/football.jpg' 
  },
  { id: 16, 
    title: 'Bamboo Traveller', 
    url: 'https://www.cdn.maximosigniorini.com/Sound%20Design/Bamboo%20Traveller%20Master.mp4',
    thumbnail: '/assets/video-thumbnails/bamboo-traveller.jpg' 
  },
  { id: 17, 
    title: 'Sweet Cocoon', 
    url: 'https://www.cdn.maximosigniorini.com/Sound%20Design/Sweet%20Cocoon.mp4',
    thumbnail: '/assets/video-thumbnails/sweet-cocoon.jpg' 
  },
  { id: 18, 
    title: 'Adidas', 
    url: 'https://www.cdn.maximosigniorini.com/Sound%20Design/Adidas.mp4',
    thumbnail: '/assets/video-thumbnails/adidas.jpg' 
  },
  { id: 19, 
    title: 'Peter Tarka', 
    url: 'https://www.cdn.maximosigniorini.com/Sound%20Design/Peter%20Tarka%20Spotify.mp4',
    thumbnail: '/assets/video-thumbnails/peter-tarka.jpg' 
  },
  { id: 20, 
    title: 'Livio Maraniello', 
    url: 'https://www.cdn.maximosigniorini.com/Sound%20Design/Livio%20Maraniello.mp4',
    thumbnail: '/assets/video-thumbnails/livio-maraniello.jpg' 
  },
  { id: 21, 
    title: 'Buck', 
    url: 'https://www.cdn.maximosigniorini.com/Sound%20Design/Buck.mp4',
    thumbnail: '/assets/video-thumbnails/buck.jpg' 
  },
  { id: 22, 
    title: 'Fakery', 
    url: 'https://www.cdn.maximosigniorini.com/Sound%20Design/241126/2_Fakery.mp4',
    thumbnail: '/assets/video-thumbnails/fakery.jpg'
  },
  { id: 23, 
    title: 'Formento Autumn', 
    url: 'https://www.cdn.maximosigniorini.com/Sound%20Design/241126/2_formento-autumn.mp4',
    thumbnail: '/assets/video-thumbnails/formento-autumn.jpg'
  },
  { id: 24, 
    title: 'Equiline Xanto', 
    url: 'https://www.cdn.maximosigniorini.com/Sound%20Design/241126/2_equiline-xanto.mp4',
    thumbnail: '/assets/video-thumbnails/equiline-xanto.jpg'
  },
  { id: 25, 
    title: 'Kristoffer Moth', 
    url: 'https://www.cdn.maximosigniorini.com/Sound%20Design/241126/2_kristoffer-moth.mp4',
    thumbnail: '/assets/video-thumbnails/kristoffer-moth.jpg'
  },
  { id: 26, 
    title: 'Mamba Dragon', 
    url: 'https://www.cdn.maximosigniorini.com/Sound%20Design/241126/2_mamba-dragon.mp4',
    thumbnail: '/assets/video-thumbnails/mamba-dragon.jpg'
  },
  { id: 27, 
    title: 'Dragon', 
    url: 'https://www.cdn.maximosigniorini.com/Sound%20Design/241126/2_dragon.mp4',
    thumbnail: '/assets/video-thumbnails/dragon.jpg'
  },
  { id: 28, 
    title: 'Onesal', 
    url: 'https://www.cdn.maximosigniorini.com/Sound%20Design/241126/2_onesal.mp4',
    thumbnail: '/assets/video-thumbnails/onesal.jpg'
  },
  { id: 29, 
    title: 'Resight', 
    url: 'https://www.cdn.maximosigniorini.com/Sound%20Design/241126/2_resight.mp4',
    thumbnail: '/assets/video-thumbnails/resight.jpg'
  },
  { id: 30, 
    title: 'The Berry', 
    url: 'https://www.cdn.maximosigniorini.com/Sound%20Design/241126/2_the-berry.mp4',
    thumbnail: '/assets/video-thumbnails/the-berry.jpg'
  },
  { id: 31, 
    title: 'TC 1890', 
    url: 'https://www.cdn.maximosigniorini.com/Sound%20Design/241126/2_tc-1890.mp4',
    thumbnail: '/assets/video-thumbnails/tc-1890.jpg'
  },
  { id: 32, 
    title: 'Shapemove', 
    url: 'https://www.cdn.maximosigniorini.com/Sound%20Design/241126/2_shapemove.mp4',
    thumbnail: '/assets/video-thumbnails/shapemove.jpg'
  },
  { id: 33, 
    title: 'Pick your weapon', 
    url: 'https://www.cdn.maximosigniorini.com/Sound%20Design/241126/2_pick-your-weapon.mp4',
    thumbnail: '/assets/video-thumbnails/pick-your-weapon.jpg'
  },
  { id: 34, 
    title: 'Post Office', 
    url: 'https://www.cdn.maximosigniorini.com/Sound%20Design/241126/2_post-office.mp4',
    thumbnail: '/assets/video-thumbnails/post-office.jpg'
  },
  { id: 35, 
    title: 'Restless Mind', 
    url: 'https://www.cdn.maximosigniorini.com/Sound%20Design/241126/2_restless-mind.mp4',
    thumbnail: '/assets/video-thumbnails/restless-mind.jpg'
  },
  { id: 36, 
    title: 'Diesel Daddies', 
    url: 'https://www.cdn.maximosigniorini.com/Sound%20Design/241126/2_diesel-daddies.mp4',
    thumbnail: '/assets/video-thumbnails/diesel-daddies.jpg'
  },
  { id: 37, 
    title: 'Barkandbite', 
    url: 'https://www.cdn.maximosigniorini.com/Sound%20Design/241126/2_barkandbite.mp4',
    thumbnail: '/assets/video-thumbnails/barkandbite.jpg'
  },
  { id: 38, 
    title: 'Blublu', 
    url: 'https://www.cdn.maximosigniorini.com/Sound%20Design/241126/2_blublu.mp4',
    thumbnail: '/assets/video-thumbnails/blublu.jpg'
  },
  { id: 39, 
    title: 'Reclamation', 
    url: 'https://www.cdn.maximosigniorini.com/Sound%20Design/241126/2_reclamation.mp4',
    thumbnail: '/assets/video-thumbnails/reclamation.jpg'
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
