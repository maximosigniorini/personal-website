"use client"

import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Slider } from "@/components/ui/slider"
import { Play, Pause, SkipBack, SkipForward, Volume2, VolumeX } from "lucide-react"
import { cn } from "@/lib/utils"

interface VideoPlayerProps {
  title: string
  artist?: string
  duration: string // Keeping this for display, but will also get it from the video
  videoUrl?: string
  posterUrl?: string
  className?: string
  variant?: "compact" | "full" | "minimal"
  autoplay?: boolean // Add autoplay prop
}

export function VideoPlayer({
  title,
  artist = "Maximo Signiorini",
  duration: initialDuration,
  videoUrl = "https://www.cdn.maximosigniorini.com/reel.mp4",
  posterUrl,
  className,
  variant = "full",
  autoplay = false, // Default to false
}: VideoPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentTime, setCurrentTime] = useState(0)
  const [totalDuration, setTotalDuration] = useState(0)
  const [volume, setVolume] = useState(0.75)
  const [isMuted, setIsMuted] = useState(false)
  const [isLoaded, setIsLoaded] = useState(false) // Track if video metadata is loaded
  const videoRef = useRef<HTMLVideoElement>(null)
  const playerRef = useRef<HTMLDivElement>(null)

  // Connect the 'isPlaying' state to the video element
  useEffect(() => {
    if (videoRef.current && isLoaded) {
      if (isPlaying) {
        videoRef.current.play().catch(console.error)
      } else {
        videoRef.current.pause()
      }
    }
  }, [isPlaying, isLoaded])

  // **FIX: Initialize video when component mounts**
  useEffect(() => {
    const video = videoRef.current
    if (video) {
      // Force load metadata
      video.load()
      
      const handleLoadedMetadata = () => {
        setTotalDuration(video.duration)
        setIsLoaded(true)
        // Set initial volume and mute state here, after metadata loads
        video.volume = volume
        video.muted = isMuted
        console.log('Video duration loaded:', video.duration)
        
        // Autoplay if prop is true
        if (autoplay) {
          video.play().then(() => {
            setIsPlaying(true)
            console.log('Autoplay started')
          }).catch(err => {
            console.log('Autoplay failed:', err)
          })
        }
      }

      const handleTimeUpdate = () => {
        setCurrentTime(video.currentTime)
      }

      const handleEnded = () => {
        setIsPlaying(false)
      }

      const handleLoadStart = () => {
        console.log('Video loading started')
      }

      const handleCanPlay = () => {
        console.log('Video can start playing')
      }

      const handleError = (e: Event) => {
        console.error('Video error:', e)
      }

      // Add all event listeners
      video.addEventListener('loadedmetadata', handleLoadedMetadata)
      video.addEventListener('timeupdate', handleTimeUpdate)
      video.addEventListener('ended', handleEnded)
      video.addEventListener('loadstart', handleLoadStart)
      video.addEventListener('canplay', handleCanPlay)
      video.addEventListener('error', handleError)

      return () => {
        video.removeEventListener('loadedmetadata', handleLoadedMetadata)
        video.removeEventListener('timeupdate', handleTimeUpdate)
        video.removeEventListener('ended', handleEnded)
        video.removeEventListener('loadstart', handleLoadStart)
        video.removeEventListener('canplay', handleCanPlay)
        video.removeEventListener('error', handleError)
      }
    }
  }, []) // Remove volume and isMuted from dependencies

  const formatTime = (seconds: number) => {
    if (isNaN(seconds) || seconds === 0) return "0:00"
    const mins = Math.floor(seconds / 60)
    const secs = Math.floor(seconds % 60)
    return `${mins}:${secs.toString().padStart(2, "0")}`
  }

  const handlePlayPause = () => {
    console.log('Play/Pause clicked, isLoaded:', isLoaded, 'isPlaying:', isPlaying)
    if (!isLoaded) {
      console.log('Video not loaded yet')
      return
    }
    setIsPlaying(!isPlaying)
  }

  const handleSeek = (value: number[]) => {
    if (videoRef.current && isLoaded) {
      const newTime = value[0]
      videoRef.current.currentTime = newTime
      setCurrentTime(newTime)
    }
  }

  const handleVolumeChange = (value: number[]) => {
    const newVolume = value[0]
    setVolume(newVolume)
    setIsMuted(newVolume === 0)
    
    // Use requestAnimationFrame to ensure state updates don't interfere
    requestAnimationFrame(() => {
      const video = videoRef.current
      if (video && isLoaded) {
        video.volume = newVolume
        video.muted = newVolume === 0
      }
    })
  }

  const toggleMute = () => {
    const newMutedState = !isMuted
    setIsMuted(newMutedState)
    
    // Use requestAnimationFrame to ensure state updates don't interfere
    requestAnimationFrame(() => {
      const video = videoRef.current
      if (video && isLoaded) {
        video.muted = newMutedState
      }
    })
  }
  
  if (variant === "minimal") {
    return (
      <Button variant="ghost" size="sm" onClick={handlePlayPause} className={cn("p-2 h-auto", className)}>
        {isPlaying ? <Pause className="w-4 h-4 mr-2" /> : <Play className="w-4 h-4 mr-2" />}
        {isPlaying ? "Pause" : "Play"}
      </Button>
    )
  }

  if (variant === "compact") {
    return (
      <Card className={cn("p-4", className)}>
        <div className="flex items-center space-x-4">
          <Button
            variant="ghost"
            size="sm"
            onClick={handlePlayPause}
            className="w-10 h-10 rounded-full bg-primary/10 hover:bg-primary/20"
          >
            {isPlaying ? <Pause className="w-4 h-4 text-primary" /> : <Play className="w-4 h-4 text-primary" />}
          </Button>

          <div className="flex-1 space-y-1">
            <div className="text-sm font-medium truncate">{title}</div>
            <div className="text-xs text-muted-foreground">{artist}</div>
          </div>

          <div className="text-xs text-muted-foreground font-mono">
            {formatTime(currentTime)} / {formatTime(totalDuration)}
          </div>
        </div>

        <div className="mt-3">
          <Slider value={[currentTime]} max={totalDuration || 100} step={1} onValueChange={handleSeek} className="w-full" />
        </div>
      </Card>
    )
  }

  return (
    <Card ref={playerRef} className={cn("overflow-hidden", className)}>
      <div className="space-y-4">
        <div className="relative aspect-[16/8.5] bg-black rounded-lg overflow-hidden group">
          <video
            ref={videoRef}
            className="w-full h-full object-cover cursor-pointer"
            poster={posterUrl}
            muted={isMuted}
            preload="metadata" // **FIX: Ensure metadata loads**
            // crossOrigin="anonymous" // Removed temporarily due to CORS issues
            onClick={handlePlayPause}
            onLoadedData={() => console.log('Video data loaded')}
          >
            <source src={videoUrl} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          
          {/* Hover overlay without play button */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
            <div className="absolute inset-0 bg-black/20"></div>
          </div>
        </div>

        <div className="p-6 space-y-4">
          <div className="text-center space-y-2">
            <h3 className="text-lg font-semibold">{title}</h3>
            <p className="text-muted-foreground">{artist}</p>
          </div>
          <div className="space-y-2">
            <Slider 
              value={[currentTime]} 
              max={totalDuration || 100} 
              step={0.1} 
              onValueChange={handleSeek} 
              className="w-full"
              disabled={!isLoaded} // **FIX: Disable until loaded**
            />
            <div className="flex justify-between text-xs text-muted-foreground font-mono">
              <span>{formatTime(currentTime)}</span>
              <span>{isLoaded ? formatTime(totalDuration) : "Loading..."}</span>
            </div>
          </div>
          <div className="flex items-center justify-center space-x-4">
            <Button variant="ghost" size="sm" className="w-10 h-10 rounded-full">
              <SkipBack className="w-4 h-4" />
            </Button>
            <Button 
              onClick={handlePlayPause} 
              size="lg" 
              className="w-14 h-14 rounded-full"
              disabled={!isLoaded} // **FIX: Disable until loaded**
            >
              {isPlaying ? <Pause className="w-6 h-6" /> : <Play className="w-6 h-6" />}
            </Button>
            <Button variant="ghost" size="sm" className="w-10 h-10 rounded-full">
              <SkipForward className="w-4 h-4" />
            </Button>
          </div>
          <div className="flex items-center space-x-3">
            <Button variant="ghost" size="sm" onClick={toggleMute} className="w-8 h-8 rounded-full">
              {isMuted || volume === 0 ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
            </Button>
            <Slider
              value={[isMuted ? 0 : volume]}
              max={1}
              step={0.01}
              onValueChange={handleVolumeChange}
              className="flex-1"
            />
            <span className="text-xs text-muted-foreground font-mono w-8">{Math.round(volume * 100)}%</span>
          </div>
        </div>
      </div>
    </Card>
  )
}