"use client"

import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Slider } from "@/components/ui/slider"
import { Play, Pause, SkipBack, SkipForward, Volume2, VolumeX, Maximize, Minimize } from "lucide-react"
import { cn } from "@/lib/utils"

interface VideoPlayerProps {
  title: string
  artist?: string
  duration: string // Keeping this for display, but will also get it from the video
  videoUrl?: string
  posterUrl?: string
  className?: string
  variant?: "compact" | "full" | "minimal"
}

export function VideoPlayer({
  title,
  artist = "Maximo Signiorini",
  duration: initialDuration,
  videoUrl = "https://www.cdn.maximosigniorini.com/reel.mp4",
  posterUrl,
  className,
  variant = "full",
}: VideoPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentTime, setCurrentTime] = useState(0)
  const [totalDuration, setTotalDuration] = useState(0)
  const [volume, setVolume] = useState(0.75) // Volume is a value between 0 and 1
  const [isMuted, setIsMuted] = useState(false)
  const [isFullscreen, setIsFullscreen] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)
  const playerRef = useRef<HTMLDivElement>(null) // Ref for the player container for fullscreen

  // **FIX 1: Connect the 'isPlaying' state to the video element**
  useEffect(() => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.play()
      } else {
        videoRef.current.pause()
      }
    }
  }, [isPlaying])

  const formatTime = (seconds: number) => {
    if (isNaN(seconds)) return "0:00"
    const mins = Math.floor(seconds / 60)
    const secs = Math.floor(seconds % 60)
    return `${mins}:${secs.toString().padStart(2, "0")}`
  }

  // **FIX 2: Update the play/pause handler**
  const handlePlayPause = () => {
    setIsPlaying(!isPlaying)
  }

  // **FIX 3: Update the seek handler to change video time**
  const handleSeek = (value: number[]) => {
    if (videoRef.current) {
      videoRef.current.currentTime = value[0]
      setCurrentTime(value[0])
    }
  }

  // **FIX 4: Update volume handler and connect to video**
  const handleVolumeChange = (value: number[]) => {
    const newVolume = value[0]
    if (videoRef.current) {
      videoRef.current.volume = newVolume
      videoRef.current.muted = newVolume === 0
    }
    setVolume(newVolume)
    setIsMuted(newVolume === 0)
  }

  // **FIX 5: Update mute toggle**
  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted
    }
    setIsMuted(!isMuted)
  }

  const toggleFullscreen = () => {
    const playerElement = playerRef.current
    if (!playerElement) return

    if (!document.fullscreenElement) {
      playerElement.requestFullscreen().catch((err) => {
        alert(`Error attempting to enable full-screen mode: ${err.message} (${err.name})`)
      })
      setIsFullscreen(true)
    } else {
      document.exitFullscreen()
      setIsFullscreen(false)
    }
  }

  // Listen for fullscreen changes to update state
  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement)
    }
    document.addEventListener("fullscreenchange", handleFullscreenChange)
    return () => document.removeEventListener("fullscreenchange", handleFullscreenChange)
  }, [])
  
  if (variant === "minimal") {
    // Minimal variant code (unchanged)
    return (
        <Button variant="ghost" size="sm" onClick={handlePlayPause} className={cn("p-2 h-auto", className)}>
          {isPlaying ? <Pause className="w-4 h-4 mr-2" /> : <Play className="w-4 h-4 mr-2" />}
          {isPlaying ? "Pause" : "Play"}
        </Button>
      )
  }

  if (variant === "compact") {
    // Compact variant code (unchanged, but would need similar fixes if used with video)
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
            <Slider value={[currentTime]} max={totalDuration} step={1} onValueChange={handleSeek} className="w-full" />
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
            className="w-full h-full object-cover"
            poster={posterUrl}
            muted={isMuted}
            // **FIX 6: Add event listeners to the video element**
            onTimeUpdate={() => setCurrentTime(videoRef.current?.currentTime || 0)}
            onLoadedMetadata={() => setTotalDuration(videoRef.current?.duration || 0)}
            onEnded={() => setIsPlaying(false)}
            onClick={handlePlayPause} // Allow clicking video to play/pause
          >
            <source src={videoUrl} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center pointer-events-none">
            <div
              className={cn(
                "w-16 h-16 rounded-full bg-primary/90 hover:bg-primary backdrop-blur-sm flex items-center justify-center transition-opacity",
                isPlaying ? "opacity-0" : "opacity-100" // Hide play icon when playing
              )}
            >
              <Play className="w-8 h-8" />
            </div>
          </div>
          <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleFullscreen}
              className="w-10 h-10 rounded-full bg-black/50 hover:bg-black/70 backdrop-blur-sm text-white"
            >
              {isFullscreen ? <Minimize className="w-4 h-4" /> : <Maximize className="w-4 h-4" />}
            </Button>
          </div>
        </div>

        <div className="p-6 space-y-4">
          <div className="text-center space-y-2">
            <h3 className="text-lg font-semibold">{title}</h3>
            <p className="text-muted-foreground">{artist}</p>
          </div>
          <div className="space-y-2">
            <Slider value={[currentTime]} max={totalDuration} step={1} onValueChange={handleSeek} className="w-full" />
            <div className="flex justify-between text-xs text-muted-foreground font-mono">
              <span>{formatTime(currentTime)}</span>
              <span>{formatTime(totalDuration)}</span>
            </div>
          </div>
          <div className="flex items-center justify-center space-x-4">
            <Button variant="ghost" size="sm" className="w-10 h-10 rounded-full">
              <SkipBack className="w-4 h-4" />
            </Button>
            <Button onClick={handlePlayPause} size="lg" className="w-14 h-14 rounded-full">
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
              max={1} // HTML5 volume is between 0 and 1
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