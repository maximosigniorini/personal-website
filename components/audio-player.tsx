"use client"

import React, { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Slider } from "@/components/ui/slider"
import { Play, Pause, SkipBack, SkipForward, Volume2, VolumeX } from "lucide-react"
import { cn } from "@/lib/utils"

interface AudioPlayerProps {
  title: string
  artist?: string
  duration: string
  className?: string
  variant?: "compact" | "full" | "minimal"
}

export function AudioPlayer({
  title,
  artist = "Maximo Signiorini",
  duration,
  className,
  variant = "full",
}: AudioPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentTime, setCurrentTime] = useState(0)
  const [volume, setVolume] = useState(75)
  const [isMuted, setIsMuted] = useState(false)
  const [barHeights, setBarHeights] = useState<number[]>([]);
  const audioRef = useRef<HTMLAudioElement>(null)

  // Convert duration string to seconds for demo purposes
  const totalDuration = duration.split(":").reduce((acc, time) => 60 * acc + +time, 0)

  useEffect(() => {
    // Generate random heights only on the client
    const heights = Array.from({ length: 40 }, () => Math.random() * 60 + 20);
    setBarHeights(heights);
  }, []);

  useEffect(() => {
    let interval: NodeJS.Timeout
    if (isPlaying) {
      interval = setInterval(() => {
        setCurrentTime((prev) => {
          if (prev >= totalDuration) {
            setIsPlaying(false)
            return 0
          }
          return prev + 1
        })
      }, 1000)
    }
    return () => clearInterval(interval)
  }, [isPlaying, totalDuration])

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins}:${secs.toString().padStart(2, "0")}`
  }

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying)
  }

  const handleSeek = (value: number[]) => {
    setCurrentTime(value[0])
  }

  const handleVolumeChange = (value: number[]) => {
    setVolume(value[0])
    setIsMuted(value[0] === 0)
  }

  const toggleMute = () => {
    setIsMuted(!isMuted)
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
            {formatTime(currentTime)} / {duration}
          </div>
        </div>

        <div className="mt-3">
          <Slider value={[currentTime]} max={totalDuration} step={1} onValueChange={handleSeek} className="w-full" />
        </div>
      </Card>
    )
  }

  return (
    <Card className={cn("p-6", className)}>
      <div className="space-y-4">
        {/* Track Info */}
        <div className="text-center space-y-2">
          <h3 className="text-lg font-semibold">{title}</h3>
          <p className="text-muted-foreground">{artist}</p>
        </div>

        {/* Waveform Visualization */}
        <div className="h-20 bg-gradient-to-r from-primary/10 via-primary/20 to-primary/10 rounded-lg flex items-end justify-center space-x-1 p-2">
          {Array.from({ length: 40 }).map((_, i) => (
            <div
              key={i}
              className={cn(
                "w-1 bg-primary/30 rounded-full transition-all duration-150",
                isPlaying && i < (currentTime / totalDuration) * 40 ? "bg-primary" : "bg-primary/20",
              )}
              style={{
                height: `${barHeights[i] || 20}%`,
                animationDelay: `${i * 50}ms`,
              }}
            />
          ))}
        </div>

        {/* Progress Bar */}
        <div className="space-y-2">
          <Slider value={[currentTime]} max={totalDuration} step={1} onValueChange={handleSeek} className="w-full" />
          <div className="flex justify-between text-xs text-muted-foreground font-mono">
            <span>{formatTime(currentTime)}</span>
            <span>{duration}</span>
          </div>
        </div>

        {/* Controls */}
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

        {/* Volume Control */}
        <div className="flex items-center space-x-3">
          <Button variant="ghost" size="sm" onClick={toggleMute} className="w-8 h-8 rounded-full">
            {isMuted || volume === 0 ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
          </Button>

          <Slider
            value={[isMuted ? 0 : volume]}
            max={100}
            step={1}
            onValueChange={handleVolumeChange}
            className="flex-1"
          />

          <span className="text-xs text-muted-foreground font-mono w-8">{isMuted ? 0 : volume}%</span>
        </div>
      </div>
    </Card>
  )
}