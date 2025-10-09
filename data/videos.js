const videos = [
  {
    id: 1,
    category: "film",
    title: 'Under the Skin',
    url: 'https://www.youtube.com/watch?v=_O7zk4tI5Hs',
    thumbnail: '/assets/video-thumbnails/under-the-skin.jpg',
    description: "Sound re-design and music editing for Jonathan Glazer's 'Under the Skin' as part of my 2nd semester final project during my MA in Sound Design for Screen at Bournemouth University.",
    credits: {
      client: 'Bournemouth University'
    },
    year: 2024,
    tags: ["sound design", "film", "music editing", "foley", "mixing", "ADR"]
  },
  {
    id: 2,
    category: "film",
    title: 'Filtrate',
    url: 'https://www.youtube.com/watch?v=2qLE6G_bDoE',
    thumbnail: '/assets/video-thumbnails/filtrate.jpg',
    description: "Filtrate was my final project for my MA in Sound Design for Screen at Bournemouth University. I redesigned the sound and music for Mishka Kornai's short film. My main approach was to blend sound design and music and erase the barriers between the two, to create a more complex piece.",
    credits: {
      client: 'Bournemouth University'
    },
    year: 2024,
    tags: ["sound design", "film", "music editing", "foley", "mixing", "music composition"]
  },
  {
    id: 3,
    category: "advertisement",
    title: 'Google OnHub',
    url: 'https://www.cdn.maximosigniorini.com/google-onhub.mp4',
    thumbnail: '/assets/video-thumbnails/google-onhub.jpg',
    description: 'Original Music & Sound Design',
    credits: {
      client: 'Ronroco Audio'
    },
    year: 2022,
    tags: ["music", "sound design"]
  },
  {
    id: 4,
    category: "motion graphics",
    title: 'London Move',
    url: 'https://www.cdn.maximosigniorini.com/Sound%20Design/London%20Move.mp4',
    thumbnail: '/assets/video-thumbnails/london-move.jpg',
    description: 'Original Music & Sound Design',
    credits: {
      client: 'Ronroco Audio'
    },
    year: 2023,
    tags: ["music", "sound design"]
  },
  {
    id: 5,
    category: "advertisement",
    title: 'Climate Change',
    url: 'https://www.cdn.maximosigniorini.com/Climate%20Change.mp4',
    thumbnail: '/assets/video-thumbnails/climate-change.jpg',
    description: '',
    credits: {
      client: 'Ronroco Audio'
    },
    year: 2023,
    tags: ["music editing", "sound design"]
  },
  {
    id: 6,
    category: "motion graphics",
    title: 'Momby',
    url: 'https://www.cdn.maximosigniorini.com/Sound%20Design/Momby.mp4',
    thumbnail: '/assets/video-thumbnails/momby.jpg',
    description: '',
    credits: {
      client: 'Mattia Beltrame'
    },
    year: 2021,
    tags: ["sound design"]
  },
  {
    id: 7,
    category: "advertisement",
    title: 'HPE Playful inventiveness',
    url: 'https://www.cdn.maximosigniorini.com/Sound%20Design/HPE%20Playful%20inventiveness.mp4',
    thumbnail: '/assets/video-thumbnails/hpe-playful-inventiveness.jpg',
    description: '',
    credits: {
      client: 'Ronroco Audio'
    },
    year: 2022,
    tags: ["music", "sound design"]
  },
  {
    id: 8,
    category: "advertisement",
    title: 'HPE In Data we Trust',
    url: 'https://www.cdn.maximosigniorini.com/Sound%20Design/HPE%20In%20Data%20We%20Trust.mp4',
    thumbnail: '/assets/video-thumbnails/hpe-in-data-we-trust.jpg',
    description: '',
    credits: {
      client: 'Ronroco Audio'
    },
    year: 2022,
    tags: ["music", "sound design"]
  },
  {
    id: 9,
    category: "advertisement",
    title: 'HPE Lightness of Touch',
    url: 'https://www.cdn.maximosigniorini.com/Sound%20Design/HPE%20Lightness%20Of%20Touch%20intro.mp4',
    thumbnail: '/assets/video-thumbnails/hpe-lightness-of-touch.jpg',
    description: '',
    credits: {
      client: 'Ronroco Audio'
    },
    year: 2022,
    tags: ["music", "sound design"]
  },
  {
    id: 10,
    category: "logo",
    title: 'Byclo',
    url: 'https://www.cdn.maximosigniorini.com/Sound%20Design/Byclo.mp4',
    thumbnail: '/assets/video-thumbnails/byclo.jpg',
    description: 'Original Music & Sound Design',
    credits: {
      client: 'Byclops Animation'
    },
    year: 2021,
    tags: ["music", "sound design"]
  },
  {
    id: 11,
    category: "motion graphics",
    title: 'DL Motion',
    url: 'https://www.cdn.maximosigniorini.com/Sound%20Design/DL%20Motion.mp4',
    thumbnail: '/assets/video-thumbnails/dl-motion.jpg',
    description: 'Original Music & Sound Design',
    credits: {
      client: ''
    },
    year: 2022,
    tags: ["music", "sound design"]
  },
  {
    id: 12,
    category: "animation",
    title: 'Record',
    url: 'https://www.cdn.maximosigniorini.com/Record.mp4',
    thumbnail: '/assets/video-thumbnails/record.jpg',
    description: 'Original Music & Sound Design',
    credits: {
      client: ''
    },
    year: 2022,
    tags: ["music", "sound design"]
  },
  {
    id: 13,
    category: "motion graphics",
    title: 'Zapatillas',
    url: 'https://www.cdn.maximosigniorini.com/Sound%20Design/Zapatillas.mp4',
    thumbnail: '/assets/video-thumbnails/zapatillas.jpg',
    description: 'Original Music & Sound Design',
    credits: {
      client: 'Jader Rachid'
    },
    year: 2022,
    tags: ["music", "sound design"]
  },
  {
    id: 14,
    category: "motion graphics",
    title: 'Natural',
    url: 'https://www.cdn.maximosigniorini.com/Sound%20Design/Natural%20Master.mp4',
    thumbnail: '/assets/video-thumbnails/natural.jpg',
    description: 'Original Music & Sound Design',
    credits: {
      client: ''
    },
    year: 2022,
    tags: ["music", "sound design"]
  },
  {
    id: 15,
    category: "animation",
    title: 'Football',
    url: 'https://www.cdn.maximosigniorini.com/Sound%20Design/Portfolio%20Football.mp4',
    thumbnail: '/assets/video-thumbnails/football.jpg',
    description: '',
    credits: {
      client: 'Jonathan Pui'
    },
    year: 2023,
    tags: ["sound design"]
  },
  {
    id: 16,
    category: "motion graphics",
    title: 'Bamboo Traveller',
    url: 'https://www.cdn.maximosigniorini.com/Sound%20Design/Bamboo%20Traveller%20Master.mp4',
    thumbnail: '/assets/video-thumbnails/bamboo-traveller.jpg',
    description: 'Original Music & Sound Design',
    credits: {
      client: ''
    },
    year: 2022,
    tags: ["music", "sound design"]
  },
  {
    id: 17,
    category: "animation",
    title: 'Sweet Cocoon',
    url: 'https://www.cdn.maximosigniorini.com/Sound%20Design/Sweet%20Cocoon.mp4',
    thumbnail: '/assets/video-thumbnails/sweet-cocoon.jpg',
    description: '',
    credits: {
      client: ''
    },
    year: 2022,
    tags: ["music", "sound design"]
  },
  {
    id: 18,
    category: "advertisement",
    title: 'Adidas',
    url: 'https://www.cdn.maximosigniorini.com/Sound%20Design/Adidas.mp4',
    thumbnail: '/assets/video-thumbnails/adidas.jpg',
    description: '',
    credits: {
      client: 'Adidas'
    },
    year: 2021,
    tags: ["music", "sound design"]
  },
  {
    id: 19,
    category: "motion graphics",
    title: 'Livio Maraniello',
    url: 'https://www.cdn.maximosigniorini.com/Sound%20Design/Livio%20Maraniello.mp4',
    thumbnail: '/assets/video-thumbnails/livio-maraniello.jpg',
    description: 'Original Music & Sound Design',
    credits: {
      client: 'Livio Maraniello'
    },
    year: 2021,
    tags: ["music", "sound design"]
  },
  {
    id: 20,
    category: "motion graphics",
    title: 'BMW',
    url: 'https://www.cdn.maximosigniorini.com/Sound%20Design/241126/2_Fakery.mp4',
    thumbnail: '/assets/video-thumbnails/fakery.jpg',
    description: 'Original Music & Sound Design',
    credits: {
      client: 'Fakery'
    },
    year: 2024,
    tags: ["music", "sound design"]
  },
  {
    id: 21,
    category: "motion graphics",
    title: 'Formento Autumn',
    url: 'https://www.cdn.maximosigniorini.com/Sound%20Design/241126/2_formento-autumn.mp4',
    thumbnail: '/assets/video-thumbnails/formento-autumn.jpg',
    description: 'Original Music & Sound Design',
    credits: {
      client: ''
    },
    year: 2023,
    tags: ["music", "sound design"]
  },
  {
    id: 22,
    category: "advertisement",
    title: 'Equiline Xanto',
    url: 'https://www.cdn.maximosigniorini.com/Sound%20Design/241126/2_equiline-xanto.mp4',
    thumbnail: '/assets/video-thumbnails/equiline-xanto.jpg',
    description: 'Original Music & Sound Design',
    credits: {
      client: ''
    },
    year: 2024,
    tags: ["music", "sound design"]
  },
  {
    id: 23,
    category: "motion graphics",
    title: 'Kristoffer Moth',
    url: 'https://www.cdn.maximosigniorini.com/Sound%20Design/241126/2_kristoffer-moth.mp4',
    thumbnail: '/assets/video-thumbnails/kristoffer-moth.jpg',
    description: 'Original Music & Sound Design',
    credits: {
      client: ''
    },
    year: 2024,
    tags: ["music", "sound design"]
  },
  {
    id: 24,
    category: "animation",
    title: 'Mamba Dragon',
    url: 'https://www.cdn.maximosigniorini.com/Sound%20Design/241126/2_mamba-dragon.mp4',
    thumbnail: '/assets/video-thumbnails/mamba-dragon.jpg',
    description: '',
    credits: {
      client: 'Mamba Studio'
    },
    year: 2024,
    tags: ["music", "sound design"]
  },
  {
    id: 25,
    category: "animation",
    title: 'Dragon',
    url: 'https://www.cdn.maximosigniorini.com/Sound%20Design/241126/2_dragon.mp4',
    thumbnail: '/assets/video-thumbnails/dragon.jpg',
    description: '',
    credits: {
      client: ''
    },
    year: 2024,
    tags: ["music", "sound design"]
  },
  {
    id: 26,
    category: "motion graphics",
    title: 'Onesal',
    url: 'https://www.cdn.maximosigniorini.com/Sound%20Design/241126/2_onesal.mp4',
    thumbnail: '/assets/video-thumbnails/onesal.jpg',
    description: 'Original Music & Sound Design',
    credits: {
      client: 'Onesal'
    },
    year: 2024,
    tags: ["music", "sound design"]
  },
  {
    id: 27,
    category: "advertisement",
    title: 'Resight',
    url: 'https://www.cdn.maximosigniorini.com/Sound%20Design/241126/2_resight.mp4',
    thumbnail: '/assets/video-thumbnails/resight.jpg',
    description: '',
    credits: {
      client: ''
    },
    year: 2023,
    tags: ["music", "sound design"]
  },
  {
    id: 28,
    category: "advertisement",
    title: 'The Berry',
    url: 'https://www.cdn.maximosigniorini.com/Sound%20Design/241126/2_the-berry.mp4',
    thumbnail: '/assets/video-thumbnails/the-berry.jpg',
    description: '',
    credits: {
      client: ''
    },
    year: 2024,
    tags: ["sound design"]
  },
  {
    id: 29,
    category: "animation",
    title: 'TC 1890',
    url: 'https://www.cdn.maximosigniorini.com/Sound%20Design/241126/2_tc-1890.mp4',
    thumbnail: '/assets/video-thumbnails/tc-1890.jpg',
    description: '',
    credits: {
      client: 'Bournemouth University'
    },
    year: 2023,
    tags: ["sound design"]
  },
  {
    id: 30,
    category: "motion graphics",
    title: 'Shapemove',
    url: 'https://www.cdn.maximosigniorini.com/Sound%20Design/241126/2_shapemove.mp4',
    thumbnail: '/assets/video-thumbnails/shapemove.jpg',
    description: 'Original Music & Sound Design',
    credits: {
      client: ''
    },
    year: 2023,
    tags: ["music", "sound design"]
  },
  {
    id: 31,
    category: "advertisement",
    title: 'Pick your weapon',
    url: 'https://www.cdn.maximosigniorini.com/Sound%20Design/241126/2_pick-your-weapon.mp4',
    thumbnail: '/assets/video-thumbnails/pick-your-weapon.jpg',
    description: '',
    credits: {
      client: ''
    },
    year: 2024,
    tags: ["music editing", "sound design"]
  },
  {
    id: 32,
    category: "advertisement",
    title: 'Post Office',
    url: 'https://www.cdn.maximosigniorini.com/Sound%20Design/241126/2_post-office.mp4',
    thumbnail: '/assets/video-thumbnails/post-office.jpg',
    description: 'Original Music & Sound Design',
    credits: {
      client: ''
    },
    year: 2024,
    tags: ["music", "sound design"]
  },
  {
    id: 33,
    category: "motion graphics",
    title: 'Restless Mind',
    url: 'https://www.cdn.maximosigniorini.com/Sound%20Design/241126/2_restless-mind.mp4',
    thumbnail: '/assets/video-thumbnails/restless-mind.jpg',
    description: 'Original Music & Sound Design',
    credits: {
      client: ''
    },
    year: 2023,
    tags: ["music", "sound design"]
  },
  {
    id: 34,
    category: "advertisement",
    title: 'Diesel Daddies',
    url: 'https://www.cdn.maximosigniorini.com/Sound%20Design/241126/2_diesel-daddies.mp4',
    thumbnail: '/assets/video-thumbnails/diesel-daddies.jpg',
    description: '',
    credits: {
      client: 'Diesel'
    },
    year: 2024,
    tags: ["sound design"]
  },
  {
    id: 35,
    category: "advertisement",
    title: 'NBA x Crocs',
    url: 'https://www.cdn.maximosigniorini.com/Sound%20Design/241126/2_barkandbite.mp4',
    thumbnail: '/assets/video-thumbnails/barkandbite.jpg',
    description: 'Original Music & Sound Design',
    credits: {
      client: ''
    },
    year: 2024,
    tags: ["music", "sound design"]
  },
  {
    id: 36,
    category: "advertisement",
    title: 'Blublu',
    url: 'https://www.cdn.maximosigniorini.com/Sound%20Design/241126/2_blublu.mp4',
    thumbnail: '/assets/video-thumbnails/blublu.jpg',
    description: 'Original Music & Sound Design',
    credits: {
      client: 'Chubb'
    },
    year: 2024,
    tags: ["music", "sound design"]
  },
  {
    id: 37,
    category: "film",
    title: 'Reclamation',
    url: 'https://www.cdn.maximosigniorini.com/Sound%20Design/241126/2_reclamation.mp4',
    thumbnail: '/assets/video-thumbnails/reclamation.jpg',
    description: 'Original Music & Sound Design',
    credits: {
      client: ''
    },
    year: 2024,
    tags: ["music", "sound design"]
  },
  {
    id: 38,
    category: "motion graphics",
    title: 'Austin',
    url: 'https://www.cdn.maximosigniorini.com/Music/mus_austin_2.mp4',
    thumbnail: '/assets/video-thumbnails/austin.jpg',
    description: 'Original Music & Sound Design',
    credits: {
      client: ''
    },
    year: 2022,
    tags: ["music", "sound design"]
  },
  {
    id: 39,
    category: "motion graphics",
    title: 'Austin Unlock',
    url: 'https://www.cdn.maximosigniorini.com/Music/mus_austin_unlock.mp4',
    thumbnail: '/assets/video-thumbnails/austin-unlock.jpg',
    description: 'Original Music & Sound Design',
    credits: {
      client: ''
    },
    year: 2022,
    tags: ["music", "sound design"]
  },
  {
    id: 40,
    category: "motion graphics",
    title: 'Crinimo',
    url: 'https://www.cdn.maximosigniorini.com/Music/mus_crinimo.mp4',
    thumbnail: '/assets/video-thumbnails/crinimo.jpg',
    description: 'Original Music & Sound Design',
    credits: {
      client: 'Crinimo Studio'
    },
    year: 2022,
    tags: ["music", "sound design"]
  },
  {
    id: 41,
    category: "logo",
    title: 'La Luna',
    url: 'https://www.cdn.maximosigniorini.com/Music/mus_la_luna.mp4',
    thumbnail: '/assets/video-thumbnails/la-luna.jpg',
    description: 'Original Music & Sound Design',
    credits: {
      client: ''
    },
    year: 2022,
    tags: ["music", "sound design"]
  },
  {
    id: 42,
    category: "logo",
    title: 'Lerato',
    url: 'https://www.cdn.maximosigniorini.com/Music/mus_lerato.mp4',
    thumbnail: '/assets/video-thumbnails/lerato.jpg',
    description: 'Original Music & Sound Design',
    credits: {
      client: ''
    },
    year: 2021,
    tags: ["music", "sound design"]
  },
  {
    id: 43,
    category: "motion graphics",
    title: 'Nanobot',
    url: 'https://www.cdn.maximosigniorini.com/Music/mus_nanobot.mp4',
    thumbnail: '/assets/video-thumbnails/nanobot.jpg',
    description: 'Original Music & Sound Design',
    credits: {
      client: 'Crinimo Studio'
    },
    year: 2022,
    tags: ["music", "sound design"]
  },
  {
    id: 44,
    category: "advertisement",
    title: 'NIO ET5',
    url: 'https://www.cdn.maximosigniorini.com/Music/mus_nio_et5.mp4',
    thumbnail: '/assets/video-thumbnails/nio-et5.jpg',
    description: 'Original Music & Sound Design',
    credits: {
      client: 'NIO'
    },
    year: 2021,
    tags: ["music", "sound design"]
  },
  {
    id: 45,
    category: "logo",
    title: 'Order Up',
    url: 'https://www.cdn.maximosigniorini.com/Music/mus_orderup.mp4',
    thumbnail: '/assets/video-thumbnails/order-up.jpg',
    description: 'Original Music & Sound Design',
    credits: {
      client: ''
    },
    year: 2021,
    tags: ["music", "sound design"]
  },
  {
    id: 46,
    category: "motion graphics",
    title: 'Phases',
    url: 'https://www.cdn.maximosigniorini.com/Music/mus_phases.mp4',
    thumbnail: '/assets/video-thumbnails/phases.jpg',
    description: '',
    credits: {
      client: ''
    },
    year: 2022,
    tags: ["music editing", "sound design"]
  },
  {
    id: 47,
    category: "advertisement",
    title: 'Bang Olufsen',
    url: 'https://www.cdn.maximosigniorini.com/Music/241127/2_bang-olufsen.mp4',
    thumbnail: '/assets/video-thumbnails/bang-olufsen.jpg',
    description: 'Original Music & Sound Design',
    credits: {
      client: 'Bang Olufsen'
    },
    year: 2022,
    tags: ["music", "sound design"]
  },
  {
    id: 48,
    category: "advertisement",
    title: 'Mutek',
    url: 'https://www.cdn.maximosigniorini.com/Music/241127/2_mutek.mp4',
    thumbnail: '/assets/video-thumbnails/mutek.jpg',
    description: 'Original Music & Sound Design',
    credits: {
      client: 'Mutek Argentina'
    },
    year: 2022,
    tags: ["music", "sound design"]
  },
  {
    id: 49,
    category: "advertisement",
    title: 'Reveland',
    url: 'https://www.cdn.maximosigniorini.com/Music/241127/2_reveland.mp4',
    thumbnail: '/assets/video-thumbnails/reveland.jpg',
    description: 'Original Music & Sound Design',
    credits: {
      client: ''
    },
    year: 2024,
    tags: ["music", "sound design"]
  },
  {
    id: 50,
    category: "advertisement",
    title: 'Splice',
    url: 'https://www.cdn.maximosigniorini.com/Music/241127/2_splice.mp4',
    thumbnail: '/assets/video-thumbnails/splice.jpg',
    description: 'Original Music & Sound Design',
    credits: {
      client: 'Splice'
    },
    year: 2024,
    tags: ["music", "sound design"]
  },
  {
    id: 51,
    category: "advertisement",
    title: 'Tempo Core Rooms',
    url: 'https://www.cdn.maximosigniorini.com/Music/241127/2_tempo-core-rooms.mp4',
    thumbnail: '/assets/video-thumbnails/tempo-core-rooms.jpg',
    description: 'Original Music & Sound Design',
    credits: {
      client: ''
    },
    year: 2023,
    tags: ["music", "sound design"]
  },
  {
    id: 52,
    category: "motion graphics",
    title: 'Sam Loop',
    url: 'https://www.cdn.maximosigniorini.com/Music/241127/2_sam-loop.mp4',
    thumbnail: '/assets/video-thumbnails/sam-loop.jpg',
    description: 'Original Music & Sound Design',
    credits: {
      client: ''
    },
    year: 2022,
    tags: ["music", "sound design"]
  },
  {
    id: 53,
    category: "logo",
    title: 'Save As',
    url: 'https://www.cdn.maximosigniorini.com/Music/241127/2_save-as.mp4',
    thumbnail: '/assets/video-thumbnails/save-as.jpg',
    description: 'Original Music & Sound Design',
    credits: {
      client: ''
    },
    year: 2024,
    tags: ["music", "sound design"]
  },
  {
    id: 54,
    category: "motion graphics",
    title: "Flexin' those keyframes",
    url: 'https://www.cdn.maximosigniorini.com/Music/241127/2_flexin-those-keyframes.mp4',
    thumbnail: '/assets/video-thumbnails/flexin-those-keyframes.jpg',
    description: 'Original Music & Sound Design',
    credits: {
      client: ''
    },
    year: 2024,
    tags: ["music", "sound design"]
  },
];

export default videos;