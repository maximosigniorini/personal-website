"use client"

import { useState, useEffect } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import Image from "next/image"
import { Navigation } from "@/components/navigation"
import { VideoPlayer } from "@/components/video-player"
import { Badge } from "@/components/ui/badge"
import { SiLinkedin, SiInstagram, SiYoutube } from "react-icons/si"
import { Play, X } from "lucide-react"
import { Card } from "@/components/ui/card"

const showreels = [
  {
    id: 1,
    title: "Advertisement",
    category: "Advertisement",
    url: "https://www.cdn.maximosigniorini.com/showreels/showreel_ads.mp4",
    thumbnail: [
      "/assets/video-thumbnails/airbnb.jpg",
      "/assets/video-thumbnails/defender.jpg",
      "/assets/video-thumbnails/burberry.jpg",
      "/assets/video-thumbnails/loreal.jpg"
    ],
    description: "A collection of my recent sound design and composition work for global brand advertisements."
  },
  {
    id: 2,
    title: "Animation",
    category: "Animation",
    url: "https://www.cdn.maximosigniorini.com/showreels/showreel_animation.mp4",
    thumbnail: [
      "/assets/video-thumbnails/intro-olga.jpg",
      "/assets/video-thumbnails/2veinte.jpg",
      "/assets/video-thumbnails/climate-change.jpg",
      "/assets/video-thumbnails/dragon.jpg"
    ],
    description: "Immersive soundscapes and foley designed specifically for animated shorts and features."
  },
  {
    id: 3,
    title: "Explainers",
    category: "Explainers",
    url: "https://www.cdn.maximosigniorini.com/showreels/showreel_explainer.mp4",
    thumbnail: [
      "/assets/video-thumbnails/google-fiber.jpg",
      "/assets/video-thumbnails/google-onhub.jpg",
      "/assets/video-thumbnails/Fundbox.jpg",
      "/assets/video-thumbnails/versius.jpg"
    ],
    description: "Clear and engaging audio tracks supporting educational and explainer video content."
  },
  {
    id: 4,
    title: "Film Showreel",
    category: "Film",
    url: "https://www.cdn.maximosigniorini.com/showreels/showreel_film.mp4",
    thumbnail: [
      "/assets/video-thumbnails/healer.jpg",
      "/assets/video-thumbnails/limbo.jpg",
      "/assets/video-thumbnails/untranslatable-forest.jpg",
      "/assets/video-thumbnails/reclamation.jpg"
    ],
    description: "Cinematic sound design and musical scoring for live-action films and documentaries."
  },
  {
    id: 5,
    title: "Logos",
    category: "Logos",
    url: "https://www.cdn.maximosigniorini.com/showreels/showreel_logo.mp4",
    thumbnail: [
      "/assets/video-thumbnails/ozone.jpg",
      "/assets/video-thumbnails/byclo.jpg",
      "/assets/video-thumbnails/qovery.jpg",
      "/assets/video-thumbnails/la-luna.jpg"
    ],
    description: "Short, impactful audio logos and sonic branding for various corporate identities."
  },
  {
    id: 6,
    title: "Motion Graphics",
    category: "Motion Graphics",
    url: "https://www.cdn.maximosigniorini.com/showreels/showreel_motion_graphics.mp4",
    thumbnail: [
      "/assets/video-thumbnails/splice.jpg",
      "/assets/video-thumbnails/kay-hilman.jpg",
      "/assets/video-thumbnails/leo-quinter.jpg",
      "/assets/video-thumbnails/medtronics.jpg"
    ],
    description: "Dynamic sound effects and rhythmic compositions tailored for motion graphic sequences."
  }
]

type Reel = {
  id: number;
  title: string;
  category: string;
  url: string;
  thumbnail: string | string[];
  description: string;
};

export default function ShowreelsPage() {
  const router = useRouter()
  const searchParams = useSearchParams()

  const [selectedVideo, setSelectedVideo] = useState<Reel | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const createSlug = (title: string) => {
    return title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-|-$/g, '')
  }

  useEffect(() => {
    const videoSlug = searchParams.get('video')

    if (videoSlug) {
      const videoToOpen = showreels.find(video => createSlug(video.title) === videoSlug)

      if (videoToOpen) {
        setSelectedVideo(videoToOpen as Reel)
        setIsModalOpen(true)
        document.body.style.overflow = 'hidden'
      } else {
        router.push('/showreels', { scroll: false })
      }
    }
  }, [searchParams, router])

  const openVideoModal = (video: Reel) => {
    const slug = createSlug(video.title)
    setSelectedVideo(video)
    setIsModalOpen(true)
    document.body.style.overflow = 'hidden'
    router.push(`?video=${slug}`, { scroll: false })
  }

  const closeModal = () => {
    setIsModalOpen(false)
    setSelectedVideo(null)
    document.body.style.overflow = 'unset'
    router.push('/showreels', { scroll: false })
  }

  const navigateVideo = (direction: 'next' | 'prev') => {
    if (!selectedVideo) return

    const currentIndex = showreels.findIndex(v => v.id === selectedVideo.id)
    let newIndex = direction === 'next' ? currentIndex + 1 : currentIndex - 1

    if (newIndex >= showreels.length) newIndex = 0
    if (newIndex < 0) newIndex = showreels.length - 1

    const newVideo = showreels[newIndex]
    const slug = createSlug(newVideo.title)

    setSelectedVideo(newVideo as Reel)
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
    <div className="min-h-screen bg-background flex flex-col">
      <Navigation />

      <main className="flex-1 pt-32 pb-24 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center space-y-8 mb-16 md:mb-24">
            <Badge variant="secondary" className="w-fit mx-auto">
              Showreels
            </Badge>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-balance leading-tight">
              Selected
              <span className="text-primary block">Showreels</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed text-pretty">
              A curated collection of my specialized work divided by industry and medium.
            </p>
          </div>

          {/* Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {showreels.map((reel) => (
              <Card 
                key={reel.id} 
                className="overflow-hidden bg-card/50 border-border/50 hover:shadow-xl transition-all duration-500 cursor-pointer group"
                onClick={() => openVideoModal(reel as Reel)}
              >
                <div className="aspect-video bg-gradient-to-br from-primary/10 to-accent/10 relative overflow-hidden">
                  {Array.isArray(reel.thumbnail) ? (
                    <div className="grid grid-cols-2 grid-rows-2 w-full h-full gap-0.5">
                      {reel.thumbnail.map((imageSrc, i) => (
                        <div key={i} className="relative w-full h-full overflow-hidden">
                          {imageSrc && (
                            <Image
                              src={imageSrc}
                              alt={`${reel.title} - ${i}`}
                              fill
                              className="object-cover transition-all duration-500 group-hover:scale-105 blur-[0.5px] group-hover:blur-none"
                            />
                          )}
                        </div>
                      ))}
                    </div>
                  ) : (
                    <Image
                      src={reel.thumbnail}
                      alt={reel.title}
                      fill
                      className="object-cover transition-all duration-500 group-hover:scale-105 blur-[0.5px] group-hover:blur-none"
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none"></div>
                </div>
                <div className="p-5 md:p-6 space-y-3">
                  <div className="flex items-center justify-between gap-2">
                    <h2 className="text-lg md:text-xl font-bold line-clamp-1 group-hover:text-primary transition-colors">{reel.title}</h2>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">
                    {reel.description}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </main>

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
                  <VideoPlayer
                    key={selectedVideo.url}
                    title={selectedVideo.title}
                    duration="1:00"
                    videoUrl={selectedVideo.url}
                    posterUrl={Array.isArray(selectedVideo.thumbnail) ? selectedVideo.thumbnail[0] : selectedVideo.thumbnail}
                    variant="full"
                    autoplay={true}
                  />
                </div>

                <div className="p-8 space-y-6 bg-muted/30">
                  <div className="space-y-4">
                    <Badge variant="secondary" className="capitalize">
                      {selectedVideo.category}
                    </Badge>
                    <h2 className="text-3xl font-bold">{selectedVideo.title}</h2>
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

                  <div className="space-y-1 text-sm pt-4 border-t border-border">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Year:</span>
                      <span className="font-medium">2025</span>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-border bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-center md:text-left">
              <div className="font-bold text-xl mb-2">Maximo Signiorini</div>
              <p className="text-muted-foreground">Sound Designer & Music Composer</p>
            </div>

            <div className="flex items-center space-x-6">
              <a href="https://www.linkedin.com/in/maximo-signiorini/" className="text-muted-foreground hover:text-primary transition-colors" target="_blank" rel="noreferrer">
                <SiLinkedin className="w-5 h-5" />
              </a>
              <a href="https://www.instagram.com/maxsig.lab/" className="text-muted-foreground hover:text-primary transition-colors" target="_blank" rel="noreferrer">
                <SiInstagram className="w-5 h-5" />
              </a>
              <a href="https://www.youtube.com/@maximosigniorini" className="text-muted-foreground hover:text-primary transition-colors" target="_blank" rel="noreferrer">
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
