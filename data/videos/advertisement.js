const advertisement = [
  {
    category: "advertisement",
    title: 'AirBnB',
    url: 'https://www.cdn.maximosigniorini.com/advertisement/airbnb.mp4',
    thumbnail: '/assets/video-thumbnails/airbnb.jpg',
    description: 'Original Music produced as part of the Sound Canvas team.',
    credits: {
      sound: 'Sound Canvas'
    },
    year: 2025,
    tags: ["music"],
    featuredIndex: 1,
    projectType: "commissioned",
    originalVideoCredit: null,
  },
  {
    category: "advertisement",
    title: 'Google OnHub',
    url: 'https://www.cdn.maximosigniorini.com/advertisement/google-onhub.mp4',
    thumbnail: '/assets/video-thumbnails/google-onhub.jpg',
    description: 'Original Music & Sound Design. All audio recreated from scratch as part of a personal project to demonstrate sound design and music composition skills.',
    credits: {
      client: 'Ronroco Audio'
    },
    year: 2022,
    tags: ["spec-sound", "music", "sound-design"],
    featuredIndex: 2,
    projectType: "spec"
  },
  {
    category: "advertisement",
    title: 'Climate Change',
    url: 'https://www.cdn.maximosigniorini.com/advertisement/climate-change.mp4',
    thumbnail: '/assets/video-thumbnails/climate-change.jpg',
    description: 'Music editing & Sound Design produced as part of the Ronroco Audio team.',
    credits: {
      client: 'Ravie',
      sound: 'Ronroco Audio',
      music: 'Ronroco Audio'
    },
    year: 2023,
    tags: ["music-editing", "sound-design"],
    projectType: "commissioned"
  },
  {
    category: "advertisement",
    title: 'BMW',
    url: 'https://www.cdn.maximosigniorini.com/advertisement/fakery.mp4',
    thumbnail: '/assets/video-thumbnails/fakery.jpg',
    description: 'Original Music & Sound Design. Original visuals by Fakery.',
    credits: {
      client: 'Ronroco Audio',
      studio: 'Fakery'
    },
    year: 2024,
    tags: ["music", "sound-design"],
    featuredIndex: 4,
    projectType: "spec"
  },
  {
    category: "advertisement",
    title: 'Equiline Xanto',
    url: 'https://www.cdn.maximosigniorini.com/advertisement/equiline-x-anto.mp4',
    thumbnail: '/assets/video-thumbnails/equiline-xanto.jpg',
    description: 'Original Music & Sound Design produced as part of the Ronroco Audio team.',
    credits: {
      client: 'Equiline',
      sound: 'Ronroco Audio',
      music: 'Ronroco Audio'
    },
    year: 2024,
    tags: ["music", "sound-design"],
    featuredIndex: 9,
    projectType: 'commisioned'
  },
  {
    category: "advertisement",
    title: 'Adidas',
    url: 'https://www.cdn.maximosigniorini.com/advertisement/Adidas.mp4',
    thumbnail: '/assets/video-thumbnails/adidas.jpg',
    description: 'Original Sound Design produced as part of the Ronroco Audio team.',
    credits: {
      client: 'TotalMedios',
      sound: 'Ronroco Audio'
    },
    year: 2021,
    tags: ["sound-design"],
    projectType: "commissioned"
  },
  {
    category: "advertisement",
    title: 'New Balance Fresh Foam X 1080v12',
    url: 'https://www.cdn.maximosigniorini.com/advertisement/resight.mp4',
    thumbnail: '/assets/video-thumbnails/resight.jpg',
    description: 'Original Music & Sound Design. Original visuals by Resight.',
    credits: {
      client: 'Ronroco Audio'
    },
    year: 2023,
    tags: ["music", "sound-design"],
    projectType: 'spec'
  },
  {
    category: "advertisement",
    title: 'Mutek',
    url: 'https://www.cdn.maximosigniorini.com/advertisement/mutek.mp4',
    thumbnail: '/assets/video-thumbnails/mutek.jpg',
    description: 'Original Music & Sound Design',
    credits: {
      client: 'Mutek Argentina'
    },
    year: 2022,
    tags: ["music", "sound-design"],
    featuredIndex: 8,
    projectType: "commissioned"
  },
  {
    category: "advertisement",
    title: 'Splice',
    url: 'https://www.cdn.maximosigniorini.com/advertisement/splice.mp4',
    thumbnail: '/assets/video-thumbnails/splice.jpg',
    description: 'Original Music & Sound Design produced as part of the Ronroco Audio team.',
    credits: {
      client: 'Ravie',
      sound: 'Ronroco Audio',
      music: 'Ronroco Audio'
    },
    year: 2024,
    tags: ["music", "sound-design"],
    featuredIndex: 5,
    projectType: "commissioned"
  },
  {
    category: "advertisement",
    title: 'Tempo Core Rooms',
    url: 'https://www.cdn.maximosigniorini.com/advertisement/tempo-core-rooms.mp4',
    thumbnail: '/assets/video-thumbnails/tempo-core-rooms.jpg',
    description: 'Original Music & Sound Design.',
    credits: {
      client: ''
    },
    year: 2023,
    tags: ["music", "sound-design"],
    projectType: "spec"
  },
  {
    category: "advertisement",
    title: 'Audi',
    url: 'https://www.cdn.maximosigniorini.com/advertisement/audi.mp4',
    thumbnail: '/assets/video-thumbnails/audi.jpg',
    description: 'Original visuals by Audi.',
    credits: {
      client: ''
    },
    year: 2021,
    tags: ["sound-design"],
    projectType: "spec"
  },
  {
    category: "advertisement",
    title: 'Bang Olufsen 2',
    url: 'https://www.cdn.maximosigniorini.com/advertisement/bang-olufsen-2.mp4',
    thumbnail: '/assets/video-thumbnails/bang-olufsen-2.jpg',
    description: 'Original Music & Sound Design. Original visuals by Bang Olufsen.',
    credits: {
      client: 'Ronroco Audio'
    },
    year: 2022,
    tags: ["music", "sound-design"],
    projectType: "spec"
  },
  {
    category: "advertisement",
    title: 'NBA x Crocs',
    url: 'https://www.cdn.maximosigniorini.com/advertisement/crocs-nba.mp4',
    thumbnail: '/assets/video-thumbnails/barkandbite.jpg',
    description: 'Original Music & Sound Design. Original visuals by Barkandbite.',
    credits: {
      client: 'Barkandbite'
    },
    year: 2024,
    tags: ["music", "sound-design"],
    projectType: "spec"
  },
  {
    category: "advertisement",
    title: 'Omoda 5',
    url: 'https://www.cdn.maximosigniorini.com/advertisement/the-berry.mp4',
    thumbnail: '/assets/video-thumbnails/the-berry.jpg',
    description: '',
    credits: {
      client: ''
    },
    year: 2024,
    tags: ["sound-design"],
    projectType: "spec"
  },
  {
    category: "advertisement",
    title: 'Pick your weapon',
    url: 'https://www.cdn.maximosigniorini.com/advertisement/pick-your-weapon.mp4',
    thumbnail: '/assets/video-thumbnails/pick-your-weapon.jpg',
    description: 'Music Editing & Sound Design produced as part of the Ronroco Audio team.',
    credits: {
      client: 'Vicver',
      sound: 'Ronroco Audio',
      music: 'Ronroco Audio'
    },
    year: 2024,
    tags: ["music-editing", "sound-design"],
    projectType: "commissioned"
  },
  {
    category: "advertisement",
    title: 'Platinum Love Bands',
    url: 'https://www.cdn.maximosigniorini.com/advertisement/post-office.mp4',
    thumbnail: '/assets/video-thumbnails/post-office.jpg',
    description: 'Original Music & Sound Design. Original visuals by Post Office',
    credits: {
      client: 'Post Office'
    },
    year: 2024,
    tags: ["music", "sound-design"],
    projectType: "spec"
  },
   {
    category: "advertisement",
    title: 'Diesel Daddies',
    url: 'https://www.cdn.maximosigniorini.com/advertisement/diesel-daddies.mp4',
    thumbnail: '/assets/video-thumbnails/diesel-daddies.jpg',
    description: 'Original music & Sound Design. Original visuals by Jader Rachid.',
    credits: {
      client: 'Jader Rachid'
    },
    year: 2024,
    tags: ["sound-design"],
    projectType: "spec"
  },
  {
    category: "advertisement",
    title: 'Chubb',
    url: 'https://www.cdn.maximosigniorini.com/advertisement/chubb.mp4',
    thumbnail: '/assets/video-thumbnails/blublu.jpg',
    description: 'Original Music & Sound Design. Original Visuals by BluBlu.',
    credits: {
      client: 'Chubb',
      studio: 'BluBlu'
    },
    year: 2024,
    tags: ["music", "sound-design"],
    projectType: "spec"
  },
  {
    category: "advertisement",
    title: 'NIO ET5',
    url: 'https://www.cdn.maximosigniorini.com/advertisement/nio-et5.mp4',
    thumbnail: '/assets/video-thumbnails/nio-et5.jpg',
    description: 'Original Music & Sound Design produced as part of the Ronroco Audio team.',
    credits: {
      client: 'NIO',
      sound: 'Ronroco Audio',
      music: 'Ronroco Audio'
    },
    year: 2021,
    tags: ["music", "sound-design"],
    projectType: "commissioned"
  },
  {
    category: "advertisement",
    title: 'Bang Olufsen',
    url: 'https://www.cdn.maximosigniorini.com/advertisement/bang-olufsen.mp4',
    thumbnail: '/assets/video-thumbnails/bang-olufsen.jpg',
    description: 'Original Music & Sound Design',
    credits: {
      client: 'Bang Olufsen'
    },
    year: 2022,
    tags: ["music", "sound-design"],
    projectType: "spec"
  },
  {
    category: "advertisement",
    title: 'ng-voice',
    url: 'https://www.cdn.maximosigniorini.com/advertisement/reveland.mp4',
    thumbnail: '/assets/video-thumbnails/reveland.jpg',
    description: 'Original Music & Sound Design. Original Visuals by Reveland.',
    credits: {
      client: 'Reveland'
    },
    year: 2024,
    tags: ["music", "sound-design"],
    projectType: "spec"
  },
  {
    category: "advertisement",
    title: 'HPE Playful inventiveness',
    url: 'https://www.cdn.maximosigniorini.com/advertisement/hpe-playful-inventiveness.mp4',
    thumbnail: '/assets/video-thumbnails/hpe-playful-inventiveness.jpg',
    description: 'Original Music & Sound Design produced as part of the Ronroco Audio team.',
    credits: {
      client: 'HPE',
      sound: 'Ronroco Audio',
      music: 'Ronroco Audio'
    },
    year: 2022,
    tags: ["music", "sound-design"],
    projectType: "commissioned"
  },
  {
    category: "advertisement",
    title: 'HPE In Data we Trust',
    url: 'https://www.cdn.maximosigniorini.com/advertisement/hpe-in-data-we-trust.mp4',
    thumbnail: '/assets/video-thumbnails/hpe-in-data-we-trust.jpg',
    description: 'Original Music & Sound Design produced as part of the Ronroco Audio team.',
    credits: {
      client: 'HPE',
      sound: 'Ronroco Audio',
      music: 'Ronroco Audio'
    },
    year: 2022,
    tags: ["music", "sound-design"],
    projectType: "commissioned"
  },
  {
    category: "advertisement",
    title: 'HPE Lightness of Touch',
    url: 'https://www.cdn.maximosigniorini.com/advertisement/hpe-lightness-of-touch-intro.mp4',
    thumbnail: '/assets/video-thumbnails/hpe-lightness-of-touch.jpg',
    description: 'Original Music & Sound Design produced as part of the Ronroco Audio team.',
    credits: {
      client: 'HPE',
      sound: 'Ronroco Audio',
      music: 'Ronroco Audio'
    },
    year: 2022,
    tags: ["music", "sound-design"],
    projectType: "commissioned"
  },
  {
    category: "advertisement",
    title: 'Florence',
    url: 'https://www.cdn.maximosigniorini.com/advertisement/florence.mp4',
    thumbnail: '/assets/video-thumbnails/florence.jpg',
    description: 'Music Editing & Sound Design produced as part of the Ronroco Audio team.',
    credits: {
      client: 'Florence',
      visuals: 'Ravie',
      sound: 'Ronroco Audio',
      music: 'Ronroco Audio'
    },
    year: 2025,
    tags: ["music", "sound-design"],
    projectType: "commissioned"
  },
  {
    category: "advertisement",
    title: 'Head x BOA',
    url: 'https://www.cdn.maximosigniorini.com/advertisement/head-x-boa.mp4',
    thumbnail: '/assets/video-thumbnails/head-x-boa.jpg',
    description: 'Original Music & Sound Design produced as part of the Ronroco Audio team.',
    credits: {
      client: 'BOA',
      sound: 'Ronroco Audio',
      music: 'Ronroco Audio'
    },
    year: 2025,
    tags: ["music", "sound-design"],
    projectType: "commissioned"
  },
  {
    category: "advertisement",
    title: "Let's get to work",
    url: 'https://www.cdn.maximosigniorini.com/advertisement/lets-get-to-work.mp4',
    thumbnail: '/assets/video-thumbnails/lets-get-to-work.jpg',
    description: 'Sound Design produced as part of the Ronroco Audio team.',
    credits: {
      sound: 'Ronroco Audio'
    },
    year: 2024,
    tags: ["sound-design"],
    projectType: "commissioned"
  },
  {
    category: "advertisement",
    title: "Natural Museum",
    url: 'https://www.cdn.maximosigniorini.com/advertisement/natural-museum.mp4',
    thumbnail: '/assets/video-thumbnails/natural-museum.jpg',
    description: 'Original Music & Sound Design',
    credits: {
      client: ''
    },
    year: 2025,
    tags: ["music", "sound-design"],
    projectType: "spec"
  },
  {
    category: "advertisement",
    title: "NU3",
    url: 'https://www.cdn.maximosigniorini.com/advertisement/nu3.mp4',
    thumbnail: '/assets/video-thumbnails/nu3.jpg',
    description: 'Original Music & Sound Design produced as part of the Ronroco Audio team.',
    credits: {
      client: 'Ravie',
      sound: 'Ronroco Audio',
      music: 'Ronroco Audio'
    },
    year: 2025,
    tags: ["music", "sound-design"],
    projectType: "commissioned"
  },
  {
    category: "advertisement",
    title: "Obsidian Veil",
    url: 'https://www.cdn.maximosigniorini.com/advertisement/obsidian-veil.mp4',
    thumbnail: '/assets/video-thumbnails/obsidian-veil.jpg',
    description: 'Original Music & Sound Design produced as part of the Ronroco Audio team.',
    credits: {
      sound: 'Ronroco Audio',
      music: 'Ronroco Audio'
    },
    year: 2025,
    tags: ["music", "sound-design"],
    projectType: "commissioned"
  },
  {
    category: "advertisement",
    title: "Selle Italia",
    url: 'https://www.cdn.maximosigniorini.com/advertisement/selle-italia.mp4',
    thumbnail: '/assets/video-thumbnails/selle-italia.jpg',
    description: 'Music Editing & Sound Design produced as part of the Ronroco Audio team.',
    credits: {
      client: 'Selle Italia',
      sound: 'Ronroco Audio',
      music: 'Ronroco Audio'
    },
    year: 2025,
    tags: ["music", "sound-design"],
    featuredIndex: 7,
    projectType: "commissioned"
  },
  {
    category: "advertisement",
    title: 'Timberland x BOA',
    url: 'https://www.cdn.maximosigniorini.com/advertisement/timberland-x-boa.mp4',
    thumbnail: '/assets/video-thumbnails/timberland-x-boa.jpg',
    description: 'Original Music & Sound Design produced as part of the Ronroco Audio team.',
    credits: {
      client: 'BOA',
      sound: 'Ronroco Audio',
      music: 'Ronroco Audio'
    },
    year: 2025,
    tags: ["music", "sound-design"],
    projectType: "commissioned"
  },
  {
    category: "advertisement",
    title: 'Tom Dixon - Pose',
    url: 'https://www.cdn.maximosigniorini.com/advertisement/tom-dixon.mp4',
    thumbnail: '/assets/video-thumbnails/tom-dixon.jpg',
    description: 'Original Music & Sound Design produced as part of the Ronroco Audio team. Original Visuals by Tom Dixon',
    credits: {
      client: 'Tom Dixon',
      visuals: 'jformento',
      sound: 'Ronroco Audio',
      music: 'Ronroco Audio'
    },
    year: 2024,
    tags: ["music", "sound-design"],
    featuredIndex: 3,
    projectType: "commissioned"
  },
  {
    category: "advertisement",
    title: '24 Bottles',
    url: 'https://www.cdn.maximosigniorini.com/advertisement/van-orton-design.mp4',
    thumbnail: '/assets/video-thumbnails/van-orton.jpg',
    description: 'Music Editing & Sound Design produced as part of the Ronroco Audio team.',
    credits: {
      client: '24 Bottles',
      visuals: 'Van Orton Design',
      sound: 'Ronroco Audio',
      music: 'Ronroco Audio'
    },
    year: 2024,
    tags: ["music", "sound-design"],
    projectType: "commissioned"
  },
  {
    category: "advertisement",
    title: 'Vivo Barefoot',
    url: 'https://www.cdn.maximosigniorini.com/advertisement/vivo-barefoot.mp4',
    thumbnail: '/assets/video-thumbnails/vivo-barefoot.jpg',
    description: 'Original Music & Sound Design produced as part of the Ronroco Audio team.',
    credits: {
      client: 'Vivobarefoot',
      visuals: 'Morning Star AI',
      sound: 'Ronroco Audio',
      music: 'Ronroco Audio'
    },
    year: 2025,
    tags: ["music", "sound-design"],
    projectType: "commissioned"
  },
]

export default advertisement