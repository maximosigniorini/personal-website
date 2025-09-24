import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Navigation } from "@/components/navigation"
import { AudioPlayer } from "@/components/audio-player"
import { VideoPlayer } from "@/components/video-player"
import { Play, ExternalLink, Mail } from "lucide-react"
import { SiLinkedin, SiInstagram, SiYoutube } from "react-icons/si"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section id="hero" className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8 animate-fade-in-up">
              <div className="space-y-6">
                <Badge variant="secondary" className="w-fit">
                  Sound Designer & Music Composer
                </Badge>
                <h1 className="text-5xl lg:text-7xl font-serif font-bold leading-[0.85] text-balance tracking-tight">
                  Crafting
                  <span className="text-primary block">Sonic</span>
                  Experiences
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed max-w-lg text-pretty">
                  Passionate sound artist specializing in immersive audio design for film, advertisements, and digital media.
                  Transforming stories through sound.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="text-lg px-8">
                  <Play className="w-5 h-5 mr-2" />
                  Portfolio
                </Button>
                <Button variant="outline" size="lg" className="text-lg px-8 bg-transparent">
                  <ExternalLink className="w-5 h-5 mr-2" />
                  View Work
                </Button>
              </div>

              <div className="flex items-center space-x-6 pt-4">
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  <SiLinkedin className="w-6 h-6" />
                </a>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  <SiInstagram className="w-6 h-6" />
                </a>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  <SiYoutube className="w-6 h-6" />
                </a>
              </div>
            </div>

            <div className="relative">
              {/* Replaced static featured track card with interactive video player */}
              <VideoPlayer
                title="Showreel 2025"
                duration="3:45"
                posterUrl="/assets/video-thumbnails/portfolio.jpg"
                className="backdrop-blur-sm border border-border bg-gradient-to-br from-primary/5 to-accent/5"
              />

              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 rounded-full bg-primary/20 backdrop-blur-sm border border-border animate-pulse"></div>
              <div className="absolute -bottom-6 -left-6 w-16 h-16 rounded-full bg-accent/20 backdrop-blur-sm border border-border animate-pulse delay-1000"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Gallery */}
      <section id="work" className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-8 mb-24">
            <Badge variant="secondary" className="w-fit mx-auto">
              Work
            </Badge>
            <h2 className="text-5xl lg:text-6xl font-serif font-bold text-balance leading-tight">
              Selected
              <span className="text-primary block">Projects</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed text-pretty">
              Explore my diverse range of audio work, from sound design to music composing. Each
              project represents a unique sonic journey crafted with precision and creativity.
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {["All", "Film", "Advertisements", "Motion Graphics", "Logos", "Explainers"].map((filter) => (
              <Button key={filter} variant={filter === "All" ? "default" : "outline"} className="px-6 py-2">
                {filter}
              </Button>
            ))}
          </div>

          {/* Project Grid */}
          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
            {[
              {
                title: "Mystic Forest",
                category: "Game Audio",
                duration: "5:12",
                year: "2024",
                description:
                  "Ambient soundscape for an indie adventure game featuring organic textures and mystical elements.",
                image: "fantasy+forest+audio+visualization",
              },
              {
                title: "Corporate Anthem",
                category: "Commercial",
                duration: "1:30",
                year: "2024",
                description: "Uplifting corporate music for a tech startup's brand campaign.",
                image: "corporate+modern+audio+waveform",
              },
              {
                title: "Tension Rising",
                category: "Film Score",
                duration: "4:45",
                year: "2023",
                description: "Suspenseful orchestral piece for a psychological thriller's climactic scene.",
                image: "dramatic+orchestral+music+visualization",
              },
              {
                title: "Digital Pulse",
                category: "Sound Design",
                duration: "2:33",
                year: "2023",
                description: "Electronic sound effects and UI audio for a mobile gaming application.",
                image: "digital+electronic+sound+design",
              },
              {
                title: "Ocean Depths",
                category: "Film Score",
                duration: "6:18",
                year: "2023",
                description: "Underwater documentary score featuring deep, resonant tones and flowing melodies.",
                image: "underwater+ocean+ambient+music",
              },
              {
                title: "Retro Arcade",
                category: "Game Audio",
                duration: "3:27",
                year: "2023",
                description: "Nostalgic chiptune-inspired soundtrack for a retro-style platformer game.",
                image: "retro+arcade+chiptune+music",
              },
            ].map((project, index) => (
              <Card
                key={index}
                className="group overflow-hidden hover:shadow-xl transition-all duration-500 cursor-pointer"
              >
                <div className="aspect-video bg-gradient-to-br from-primary/10 to-accent/10 relative overflow-hidden">
                  <div
                    className={`absolute inset-0 bg-[url('/abstract-geometric-shapes.png')] bg-cover bg-center opacity-30`}
                  ></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-16 h-16 rounded-full bg-primary/90 backdrop-blur-sm flex items-center justify-center">
                      <Play className="w-8 h-8 text-primary-foreground" />
                    </div>
                  </div>
                  <div className="absolute top-4 left-4">
                    <Badge variant="secondary" className="bg-background/80 backdrop-blur-sm">
                      {project.category}
                    </Badge>
                  </div>
                  <div className="absolute bottom-4 right-4">
                    <span className="text-white font-mono text-sm bg-black/50 backdrop-blur-sm px-2 py-1 rounded">
                      {project.duration}
                    </span>
                  </div>
                </div>
                <div className="p-6 space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                        {project.title}
                      </h3>
                      <span className="text-sm text-muted-foreground">{project.year}</span>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">{project.description}</p>
                  </div>
                  {/* Added minimal audio player to project cards */}
                  <div className="flex items-center justify-between pt-2">
                    <AudioPlayer
                      title={project.title}
                      duration={project.duration}
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
          <div className="text-center mt-16">
            <Button variant="outline" size="lg" className="px-12 bg-transparent">
              Load More Projects
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 px-6 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            <div className="space-y-10">
              <div className="space-y-8">
                <Badge variant="secondary" className="w-fit">
                  About Me
                </Badge>
                <h2 className="text-5xl lg:text-6xl font-serif font-bold text-balance leading-tight">
                  Passionate About
                  <span className="text-primary block">Sound & Story</span>
                </h2>
                <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                  <p className="text-pretty">
                    With over 6 years of experience in audio production, I specialize in creating immersive soundscapes
                    that elevate storytelling across multiple mediums. My work spans from advertisements to
                    film and other visual media.
                  </p>
                  <p className="text-pretty">
                    I believe that sound is the invisible thread that connects audiences to emotions, memories, and
                    experiences. Every project is an opportunity to craft something unique and meaningful.
                  </p>
                </div>
              </div>

              <Button size="lg" className="w-fit">
                <Mail className="w-5 h-5 mr-2" />
                Let's Collaborate
              </Button>
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

      {/* Skills & Expertise */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-8 mb-24">
            <Badge variant="secondary" className="w-fit mx-auto">
              Expertise
            </Badge>
            <h2 className="text-5xl lg:text-6xl font-serif font-bold text-balance leading-tight">
              Skills &<span className="text-primary block">Specializations</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed text-pretty">
              A comprehensive toolkit built through years of experience across diverse audio production environments.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Sound Design",
                description: "Creating custom sound effects, foley, and atmospheric audio for various media projects.",
                skills: ["Field Recording", "Synthesis", "Audio Processing", "Foley Art"],
              },
              {
                title: "Audio Post-Production",
                description: "Complete audio post services including dialogue editing, ADR, and final mix.",
                skills: ["Dialogue Editing", "ADR", "Sound Mixing", "Delivery"],
              },
              {
                title: "Film Scoring",
                description:
                  "Orchestral and electronic compositions for narrative films, documentaries, and short films.",
                skills: ["Orchestration", "Thematic Development", "Sync to Picture", "Mixing"],
              },
              {
                title: "Audio Branding",
                description: "Sonic identity for brands, logo sound design.",
                skills: ["Brand Identity", "Synthesis", "Mixing", "Mastering"],
              },
              {
                title: "Music Production",
                description: "Full-service music production from composition to final master for artists and brands.",
                skills: ["Arrangement", "Recording", "Mixing", "Mastering"],
              },
              {
                title: "Commercial Audio",
                description: "Brand-focused audio content including explainers, podcasts, and advertising soundtracks.",
                skills: ["Brand Identity", "Voice Over", "Podcast Production", "Advertising"],
              },
            ].map((skill, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-all duration-300 group">
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <div className="w-6 h-6 bg-primary rounded-sm"></div>
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-semibold">{skill.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{skill.description}</p>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {skill.skills.map((item, skillIndex) => (
                      <Badge key={skillIndex} variant="outline" className="text-xs">
                        {item}
                      </Badge>
                    ))}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Tools & Software */}
      <section className="py-20 px-6 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-4 mb-16">
            <h3 className="text-3xl font-bold">Professional Tools</h3>
            <p className="text-lg text-muted-foreground">Industry-standard software and hardware I work with daily</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {[
              "Pro Tools",
              "Logic Pro X",
              "Ableton Live",
              "Reaper",
              "VST",
            ].map((tool, index) => (
              <Card
                key={index}
                className="p-4 text-center hover:shadow-md transition-all duration-300 group cursor-pointer"
              >
                <div className="space-y-2">
                  <div className="w-12 h-12 mx-auto rounded-lg bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center group-hover:from-primary/20 group-hover:to-accent/20 transition-all">
                    <div className="w-6 h-6 bg-primary/60 rounded"></div>
                  </div>
                  <div className="text-sm font-medium">{tool}</div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="space-y-10">
            <Badge variant="secondary" className="w-fit mx-auto">
              Get In Touch
            </Badge>
            <h2 className="text-5xl lg:text-6xl font-serif font-bold text-balance leading-tight">
              Ready to Create
              <span className="text-primary block">Something Amazing?</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed text-pretty">
              Whether you're working on a film, commercial project, game, or need custom audio solutions, I'd love to
              hear about your vision and discuss how we can bring it to life through sound.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mt-16">
            <Card className="p-6 text-center hover:shadow-lg transition-all duration-300">
              <div className="space-y-4">
                <div className="w-12 h-12 mx-auto rounded-lg bg-primary/10 flex items-center justify-center">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Email</h3>
                  <p className="text-muted-foreground">maximosigniorini97@gmail.com</p>
                </div>
              </div>
            </Card>

            <Card className="p-6 text-center hover:shadow-lg transition-all duration-300">
              <div className="space-y-4">
                <div className="w-12 h-12 mx-auto rounded-lg bg-primary/10 flex items-center justify-center">
                  <SiLinkedin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-2">LinkedIn</h3>
                  <p className="text-muted-foreground">@maximosigniorini</p>
                </div>
              </div>
            </Card>

            <Card className="p-6 text-center hover:shadow-lg transition-all duration-300">
              <div className="space-y-4">
                <div className="w-12 h-12 mx-auto rounded-lg bg-primary/10 flex items-center justify-center">
                  <SiYoutube className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-2">YouTube</h3>
                  <p className="text-muted-foreground">Maximo Signiorini</p>
                </div>
              </div>
            </Card>
          </div>

          <div className="mt-12">
            <Button size="lg" className="text-lg px-12">
              <Mail className="w-5 h-5 mr-2" />
              Start a Project
            </Button>
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
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <SiLinkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <SiInstagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
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
