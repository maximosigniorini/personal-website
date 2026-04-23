"use client"

import { useState, useEffect, useMemo } from "react"
import { useRouter, useSearchParams, usePathname } from "next/navigation"
import Image from "next/image";
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Navigation } from "@/components/navigation"
import { AudioPlayer } from "@/components/audio-player"
import { VideoPlayer } from "@/components/video-player"
import { Play, ExternalLink, Mail, X, ChevronLeft, ChevronRight } from "lucide-react"
import { SiLinkedin, SiInstagram, SiYoutube, SiImdb } from "react-icons/si"
import videos from "@/data/videos/"

export type Video = {
  id: number;
  category: string;
  title: string;
  url?: string;
  thumbnail: string;
  description: string;
  credits?: Record<string, string | undefined>;
  year: number;
  tags: string[];
  featuredIndex?: number;
  urls?: string[];
  projectType?: string;
  [key: string]: any;
};

const showreelVideo: Video = {
  id: 0,
  category: "showreel",
  title: 'Showreel 2025',
  url: 'https://www.cdn.maximosigniorini.com/reel.mp4',
  thumbnail: '/assets/video-thumbnails/portfolio.jpg',
  description: "A collection of my recent work in sound design and music composition across film, advertisement, and motion graphics.",
  credits: { client: 'Various' },
  year: 2025,
  tags: ["sound design", "music composition", "film", "advertisement"]
};

export default function HomePage() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const pathname = usePathname()

  const [selectedFilter, setSelectedFilter] = useState("All")
  const [visibleVideos, setVisibleVideos] = useState(9)
  const [selectedVideo, setSelectedVideo] = useState<Video | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [currentSubVideoIndex, setCurrentSubVideoIndex] = useState(0)

  useEffect(() => {
    if (selectedVideo) {
      setCurrentSubVideoIndex(0)
    }
  }, [selectedVideo])

  // Custom-sorted array for the "All" view
  const allWorksCustomSorted = useMemo(() => {

    const sortedVideos = [...(videos as Video[])]

    sortedVideos.sort((a, b) => {
      const hasA = a.featuredIndex !== undefined
      const hasB = b.featuredIndex !== undefined

      // If both have a featuredIndex, sort by that number
      if (hasA && hasB) {
        return a.featuredIndex! - b.featuredIndex!
      }
      // If only 'a' has a featuredIndex, it comes first
      if (hasA) return -1
      // If only 'b' has a featuredIndex, it comes first
      if (hasB) return 1
      
      // Otherwise, keep the original order (based on the auto-generated ID)
      return a.id - b.id
    })

    return sortedVideos
  }, [])

  const filteredVideos =
    selectedFilter === "All"
      ? allWorksCustomSorted
      : videos.filter(video => video.category === selectedFilter)

  const displayedVideos = filteredVideos.slice(0, visibleVideos)
  const categories = ["All", ...new Set(videos.map(video => video.category))]

  const loadMoreVideos = () => {
    setVisibleVideos(prev => Math.min(prev + 9, filteredVideos.length))
  }

  const handleFilterChange = (filter: string) => {
    setSelectedFilter(filter)
    setVisibleVideos(9)
  }

  const getVideoDuration = (url: string) => {
    return "2:30"
  }

  const categoryDisplayNames: Record<string, string> = {
    film: "Film",
    motionGraphics: "Motion Graphics",
    advertisement: "Advertisement",
    animation: "Animation",
    logo: "Logo",
  }

  const createSlug = (title: string) => {
    return title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-|-$/g, '')
  }

  const findVideoBySlug = (slug: string) => {
    return videos.find(video => createSlug(video.title) === slug)
  }

  useEffect(() => {
    let categorySlug = searchParams.get('category')
    
    if (!categorySlug && pathname?.startsWith('/work/')) {
      categorySlug = pathname.split('/work/')[1]
    }

    if (categorySlug) {
      const normalizedSlug = categorySlug.toLowerCase().replace(/-/g, ' ')
      const validCategories = ["All", ...new Set(videos.map(v => v.category))]
      const matchingCategory = validCategories.find(c => c.toLowerCase() === normalizedSlug)
      
      if (matchingCategory) {
        setSelectedFilter(matchingCategory)
        setVisibleVideos(9)
        // Give the DOM a moment to update the grid before scrolling
        setTimeout(() => {
          document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' })
        }, 300)
      }
    }
  }, [searchParams, pathname])

  useEffect(() => {
    const videoSlug = searchParams.get('video')

    if (videoSlug) {
      let videoToOpen = null;

      if (videoSlug === 'portfolio') {
        videoToOpen = showreelVideo;
      } else {
        videoToOpen = findVideoBySlug(videoSlug);
      }

      if (videoToOpen) {
        setSelectedVideo(videoToOpen)
        setIsModalOpen(true)
        document.body.style.overflow = 'hidden'
      } else {
        router.push('/', { scroll: false })
      }
    }
  }, [searchParams, router])

  const openVideoModal = (video: Video) => {
    const slug = createSlug(video.title)
    setSelectedVideo(video)
    setIsModalOpen(true)
    document.body.style.overflow = 'hidden'
    router.push(`?video=${slug}`, { scroll: false })
  }

  const openShowreelModal = () => {
    setSelectedVideo(showreelVideo);
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
    router.push('/?video=portfolio', { scroll: false });
  }

  const closeModal = () => {
    setIsModalOpen(false)
    setSelectedVideo(null)
    document.body.style.overflow = 'unset'
    router.push('/', { scroll: false })
  }

  const navigateVideo = (direction: 'next' | 'prev') => {
    if (!selectedVideo) return

    const currentIndex = filteredVideos.findIndex(v => v.id === selectedVideo.id)
    let newIndex = direction === 'next' ? currentIndex + 1 : currentIndex - 1

    if (newIndex >= filteredVideos.length) newIndex = 0
    if (newIndex < 0) newIndex = filteredVideos.length - 1

    const newVideo = filteredVideos[newIndex]
    const slug = createSlug(newVideo.title)

    setSelectedVideo(newVideo)
    router.push(`?video=${slug}`, { scroll: false })
  }

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isModalOpen) return
      if (e.key === 'Escape') closeModal()
      if (e.key === 'ArrowRight') navigateVideo('next')
      if (e.key === 'ArrowLeft') navigateVideo('prev')
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [isModalOpen, selectedVideo])

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section id="hero" className="px-6 pt-24 pb-16 md:pt-32 md:pb-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 md:gap-16 items-center">
            {/* --- TEXT CONTAINER --- */}
            <div className="space-y-8 animate-fade-in-up text-center lg:text-left">
              <div className="space-y-6">
                <Badge variant="secondary" className="w-fit mx-auto lg:mx-0">
                  Sound Designer & Music Composer
                </Badge>
                <h1 className="text-4xl sm:text-5xl lg:text-7xl font-serif font-bold leading-[0.85] text-balance tracking-tight">
                  Crafting
                  <span className="text-primary block">Sonic</span>
                  Experiences
                </h1>
                <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-lg text-pretty mx-auto lg:mx-0">
                  Passionate sound artist specializing in immersive audio design for film, advertisements, and digital media.
                  Transforming stories through sound.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button size="lg" className="text-base sm:text-lg px-6 sm:px-8" onClick={openShowreelModal}>
                  <Play className="w-5 h-5 mr-2" />
                  View Full Portfolio
                </Button>
              </div>

              <div className="flex items-center space-x-6 pt-4 justify-center lg:justify-start">
                <a href="https://www.linkedin.com/in/maximo-signiorini/" className="text-muted-foreground hover:text-primary transition-colors" target="_blank">
                  <SiLinkedin className="w-6 h-6" />
                </a>
                <a href="https://www.instagram.com/maxsig.lab/" className="text-muted-foreground hover:text-primary transition-colors" target="_blank">
                  <SiInstagram className="w-6 h-6" />
                </a>
                <a href="https://www.imdb.com/name/nm17833006/?ref_=ttfc_fcr_13_4" className="text-muted-foreground hover:text-primary transition-colors" target="_blank">
                  <SiImdb className="w-6 h-6" />
                </a>
                <a href="https://www.youtube.com/@maximosigniorini" className="text-muted-foreground hover:text-primary transition-colors" target="_blank">
                  <SiYoutube className="w-6 h-6" />
                </a>
              </div>
            </div>

            {/* --- VIDEO PLAYER CONTAINER --- */}
            <div className="relative w-full max-w-lg mx-auto lg:max-w-none">
              <VideoPlayer
                title="Showreel 2025"
                duration="3:45"
                posterUrl="/assets/video-thumbnails/portfolio.jpg"
                className="backdrop-blur-sm border border-border bg-gradient-to-br from-primary/5 to-accent/5"
              />

              <div className="absolute -top-4 -right-4 w-20 h-20 rounded-full bg-primary/20 backdrop-blur-sm border border-border animate-pulse"></div>
              <div className="absolute -bottom-6 -left-6 w-16 h-16 rounded-full bg-accent/20 backdrop-blur-sm border border-border animate-pulse delay-1000"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Gallery */}
      <section id="work" className="py-24 md:py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-8 mb-16 md:mb-24">
            <Badge variant="secondary" className="w-fit mx-auto">
              Work
            </Badge>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-balance leading-tight">
              Selected
              <span className="text-primary block">Projects</span>
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed text-pretty">
              Explore my diverse range of audio work, from sound design to music composition. Each
              project represents a unique sonic journey crafted with precision and creativity.
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-12 md:mb-16">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedFilter === category ? "default" : "outline"}
                className="px-4 py-1.5 text-sm sm:px-6 sm:py-2 capitalize"
                onClick={() => handleFilterChange(category)}
              >
                {categoryDisplayNames[category] || category}
              </Button>
            ))}
          </div>

          {/* Project Grid */}
          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-8">
            {displayedVideos.map((video) => (
              <Card
                key={video.id}
                className="group overflow-hidden hover:shadow-xl transition-all duration-500 cursor-pointer"
                onClick={() => openVideoModal(video)}
              >
                <div className="aspect-video bg-gradient-to-br from-primary/10 to-accent/10 relative overflow-hidden">
                  <Image
                    src={video.thumbnail}
                    alt={video.title}
                    fill
                    className="object-cover transition-all duration-500 group-hover:scale-105 blur-[0.5px] group-hover:blur-none"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute top-4 left-4">
                    <Badge variant="secondary" className="bg-background/50 backdrop-blur-sm capitalize">
                      {categoryDisplayNames[video.category] || video.category}
                    </Badge>
                  </div>
                </div>
                <div className="p-6 space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                        {video.title}
                      </h3>
                      <span className="text-sm text-muted-foreground">{video.year}</span>
                    </div>
                    <div className="flex flex-wrap gap-x-3 gap-y-2">
                      {video.tags.map((tag) => (
                        <span className="text-sm text-white/30 group-hover:text-white/80" key={tag}>
                          #{tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="flex items-center justify-between pt-2">
                    <AudioPlayer
                      title={video.title}
                      duration={getVideoDuration(video.url || "")}
                      variant="minimal"
                      className="text-primary hover:text-primary"
                    />
                    <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Load More */}
          {visibleVideos < filteredVideos.length && (
            <div className="text-center mt-16">
              <Button
                variant="outline"
                size="lg"
                className="px-12 bg-transparent"
                onClick={loadMoreVideos}
              >
                Load More Projects
              </Button>
            </div>
          )}

          {/* Show total count */}
          <div className="text-center mt-8">
            <p className="text-sm text-muted-foreground">
              Showing {displayedVideos.length} of {filteredVideos.length} projects
            </p>
          </div>
        </div>
      </section>

      {/* Video Modal */}
      {isModalOpen && selectedVideo && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            onClick={closeModal}
          ></div>
          <div className="relative z-10 w-full max-w-7xl mx-4 max-h-[90vh] overflow-y-auto">
            <Card className="overflow-hidden">
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-black/50 hover:bg-black/70 backdrop-blur-sm text-white flex items-center justify-center transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="grid lg:grid-cols-3 gap-0">
                <div className="lg:col-span-2 relative group flex flex-col justify-center bg-black">
                  {selectedVideo.urls && selectedVideo.urls.length > 1 ? (
                    <>
                      <VideoPlayer
                        key={selectedVideo.urls[currentSubVideoIndex]}
                        title={`${selectedVideo.title} - Part ${currentSubVideoIndex + 1}`}
                        duration={getVideoDuration(selectedVideo.urls[currentSubVideoIndex])}
                        videoUrl={selectedVideo.urls[currentSubVideoIndex]}
                        posterUrl={selectedVideo.thumbnail}
                        variant="full"
                        autoplay={true}
                      />
                      <div className="absolute inset-y-0 left-4 flex items-center opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-10">
                        <Button
                          variant="secondary"
                          size="icon"
                          className="w-10 h-10 rounded-full opacity-70 hover:opacity-100 pointer-events-auto"
                          onClick={(e) => {
                            e.stopPropagation();
                            setCurrentSubVideoIndex((prev) => (prev > 0 ? prev - 1 : selectedVideo.urls!.length - 1));
                          }}
                        >
                          <ChevronLeft className="w-6 h-6" />
                        </Button>
                      </div>
                      <div className="absolute inset-y-0 right-4 flex items-center opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-10">
                        <Button
                          variant="secondary"
                          size="icon"
                          className="w-10 h-10 rounded-full opacity-70 hover:opacity-100 pointer-events-auto"
                          onClick={(e) => {
                            e.stopPropagation();
                            setCurrentSubVideoIndex((prev) => (prev < selectedVideo.urls!.length - 1 ? prev + 1 : 0));
                          }}
                        >
                          <ChevronRight className="w-6 h-6" />
                        </Button>
                      </div>
                      <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-2 z-10">
                        {selectedVideo.urls.map((_, idx) => (
                          <div
                            key={idx}
                            className={`w-2 h-2 rounded-full cursor-pointer transition-colors ${
                              currentSubVideoIndex === idx ? "bg-primary" : "bg-primary/50 hover:bg-primary/80"
                            }`}
                            onClick={(e) => {
                              e.stopPropagation();
                              setCurrentSubVideoIndex(idx);
                            }}
                          />
                        ))}
                      </div>
                    </>
                  ) : (
                    <VideoPlayer
                      key={selectedVideo.url}
                      title={selectedVideo.title}
                      duration={getVideoDuration(selectedVideo.url || "")}
                      videoUrl={selectedVideo.url}
                      posterUrl={selectedVideo.thumbnail}
                      variant="full"
                      autoplay={true}
                    />
                  )}
                </div>

                <div className="p-8 space-y-6 bg-muted/30">
                  <div className="space-y-4">
                    <Badge variant="secondary" className="capitalize">
                      {categoryDisplayNames[selectedVideo.category] || selectedVideo.category}
                    </Badge>
                    <h2 className="text-3xl font-bold">{selectedVideo.title}</h2>
                    <div className="flex flex-wrap gap-2">
                      {selectedVideo.tags.map((tag) => (
                        <Badge key={tag} variant="outline" className="text-xs">
                          #{tag}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {selectedVideo.description && (
                    <div className="space-y-2 pt-5">
                      <h3 className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">
                        Description
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {selectedVideo.description}
                      </p>
                    </div>
                  )}

                  {selectedVideo.credits && (selectedVideo.credits.director || selectedVideo.credits.client || selectedVideo.credits.sound || selectedVideo.credits.music || selectedVideo.credits.video) && (
                    <div className="space-y-2 pt-10">
                      <h3 className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">
                        Credits
                      </h3>
                      <div className="space-y-1 text-sm">
                        {selectedVideo.credits.director && (
                          <div className="flex justify-between">
                            <span className="text-muted-foreground">Director:</span>
                            <span className="font-medium text-right">{selectedVideo.credits.director}</span>
                          </div>
                        )}
                        {selectedVideo.credits.client && (
                          <div className="flex justify-between">
                            <span className="text-muted-foreground">Client:</span>
                            <span className="font-medium text-right">{selectedVideo.credits.client}</span>
                          </div>
                        )}
                        {selectedVideo.credits.video && (
                          <div className="flex justify-between">
                            <span className="text-muted-foreground">Video:</span>
                            <span className="font-medium text-right">{selectedVideo.credits.video}</span>
                          </div>
                        )}
                        {selectedVideo.credits.sound && selectedVideo.credits.music && selectedVideo.credits.sound === selectedVideo.credits.music ? (
                          <div className="flex justify-between">
                            <span className="text-muted-foreground">Sound & Music:</span>
                            <span className="font-medium text-right">{selectedVideo.credits.sound}</span>
                          </div>
                        ) : (
                          <>
                            {selectedVideo.credits.sound && (
                              <div className="flex justify-between">
                                <span className="text-muted-foreground">Sound:</span>
                                <span className="font-medium text-right">{selectedVideo.credits.sound}</span>
                              </div>
                            )}
                            {selectedVideo.credits.music && (
                              <div className="flex justify-between">
                                <span className="text-muted-foreground">Music:</span>
                                <span className="font-medium text-right">{selectedVideo.credits.music}</span>
                              </div>
                            )}
                          </>
                        )}
                      </div>
                    </div>
                  )}

                  <div className="space-y-1 text-sm pt-4 border-t border-border">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Year:</span>
                      <span className="font-medium">{selectedVideo.year || "2024"}</span>
                    </div>
                  </div>

                  {selectedVideo.url?.includes('youtube') && (
                    <Button variant="outline" className="w-full" asChild>
                      <a href={selectedVideo.url} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Watch on YouTube
                      </a>
                    </Button>
                  )}
                </div>
              </div>
            </Card>
          </div>
        </div>
      )}

      {/* About Section */}
      <section id="about" className="py-24 md:py-32 px-6 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">
            <div className="space-y-10">
              <div className="space-y-8">
                <Badge variant="secondary" className="w-fit">
                  About Me
                </Badge>
                <h2 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-balance leading-tight">
                  Passionate About
                  <span className="text-primary block">Sound & Story</span>
                </h2>
                <div className="space-y-6 text-base sm:text-lg text-muted-foreground leading-relaxed">
                  <p className="text-pretty">
                    With over 6 years of experience in audio production, I specialize in creating immersive soundscapes
                    that elevate storytelling across multiple mediums, from advertisements to
                    film and other visual media.
                  </p>
                  <p className="text-pretty">
                    In 2024 I completed my Masters degree in Sound Design for Screen at Bournemouth University. Worked for <a href="https://ronrocoaudio.com/" target='_blank' className='font-bold text-accent'>Ronroco Audio</a>, a sound design and music studio that has worked for brands such as Toyota, Splice and Adidas. Collaborated alongside Tom Joyce from <a href="https://soundcanvas.co/" target='_blank' className='font-bold text-accent'>Sound Canvas</a>.
                  </p>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 p-8 border border-border overflow-hidden">
                <div className="w-full h-full rounded-xl bg-card border border-border relative overflow-hidden">
                  <div className="absolute inset-0 bg-[url('/assets/profile-2.png')] bg-cover bg-center"></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="space-y-2">
                      <h3 className="text-xl font-semibold text-white">Maximo Signiorini</h3>
                      <p className="text-white/80">Sound Designer & Composer</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 md:py-32 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="space-y-10">
            <Badge variant="secondary" className="w-fit mx-auto">
              Get In Touch
            </Badge>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-balance leading-tight">
              Ready to Create
              <span className="text-primary block">Something Amazing?</span>
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed text-pretty">
              Whether you're working on a film, commercial project, game, or need custom audio solutions, I'd love to
              hear about your vision and discuss how we can bring it to life through sound.
            </p>
          </div>

          <div className="mt-12">
            <Button size="lg" className="text-lg px-12" asChild>
              <a href="mailto:maximosigniorini97@gmail.com">
                <Mail className="w-5 h-5 mr-2" />
                Start a Project
              </a>
            </Button>
            <p className="text-sm text-muted-foreground text-pretty pt-10">
              maximosigniorini97 [at] gmail [dot] com
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-border bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-center md:text-left">
              <div className="font-bold text-xl mb-2">Maximo Signiorini</div>
              <p className="text-muted-foreground">Sound Designer & Music Composer</p>
            </div>

            <div className="flex items-center space-x-6">
              <a href="https://www.linkedin.com/in/maximo-signiorini/" className="text-muted-foreground hover:text-primary transition-colors" target="_blank">
                <SiLinkedin className="w-5 h-5" />
              </a>
              <a href="https://www.instagram.com/maxsig.lab/" className="text-muted-foreground hover:text-primary transition-colors" target="_blank">
                <SiInstagram className="w-5 h-5" />
              </a>
              <a href="https://www.youtube.com/@maximosigniorini" className="text-muted-foreground hover:text-primary transition-colors" target="_blank">
                <SiYoutube className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-border text-center text-muted-foreground">
            <p>&copy; 2025 Maximo Signiorini. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}