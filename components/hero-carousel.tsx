"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight, Pause, Play } from "lucide-react"

const images = [
  {
    url: "/banner1.png",
    title: "Some lives don't have time to wait.",
  },
  {
    url: "/banner2.png",
    title: "But what if care could come before the crisis?",
  },
  {
    url: "/banner3.png",
    title: "Every second counts. So does every action.",
  },
  {
    url: "/banner4.png",
    title: "Prevention isn't a luxury. It's survival.",
  },
  {
    url: "/banner5.png",
    title: "Real help starts before the pain.",
  },
  {
    url: "/banner6.png",
    title: "A simple signal can change everything.",
  },
  {
    url: "/banner7.png",
    title: "Healing starts with seeing earlier, deeper, smarter.",
  },
  {
    url: "/banner8.png",
    title: "Join the only mission that fights disease before it strikes.",
  },
]

export default function HeroCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isPlaying, setIsPlaying] = useState(true)
  const [isLoading, setIsLoading] = useState(false) // Désactivé le chargement initial

  // Fonction pour passer à l'image suivante
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
  }

  // Fonction pour passer à l'image précédente
  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length)
  }

  // Fonction pour aller à une image spécifique
  const goToSlide = (index: number) => {
    setCurrentIndex(index)
  }

  // Fonction pour basculer l'autoplay
  const toggleAutoplay = () => {
    setIsPlaying(!isPlaying)
  }

  // Effet pour l'autoplay
  useEffect(() => {
    let interval: NodeJS.Timeout | null = null

    if (isPlaying) {
      interval = setInterval(() => {
        nextSlide()
      }, 5000)
    }

    return () => {
      if (interval) clearInterval(interval)
    }
  }, [isPlaying, currentIndex])

  return (
    <div className="relative overflow-hidden h-[50vh] md:h-[70vh]">
      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-70 z-10" />

      {/* Loading indicator */}
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-white"></div>
        </div>
      )}

      {/* Images */}
      <div className="relative h-full w-full">
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentIndex ? "opacity-100" : "opacity-0 pointer-events-none"
            }`}
          >
            <img
              src={image.url || "/placeholder.svg"}
              alt={`Slide ${index + 1}`}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40" />

            {/* Caption with improved styling */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 z-20">
              <div className="max-w-3xl mx-auto bg-black/30 p-6 rounded-lg backdrop-blur-sm">
                <h2 className="text-3xl md:text-5xl font-bold text-white drop-shadow-md">{image.title}</h2>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation arrows */}
      <button
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-black/50 text-white p-2 rounded-full backdrop-blur-sm hover:bg-black/70 transition-all"
        onClick={prevSlide}
      >
        <ChevronLeft className="h-6 w-6" />
      </button>

      <button
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-black/50 text-white p-2 rounded-full backdrop-blur-sm hover:bg-black/70 transition-all"
        onClick={nextSlide}
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      {/* Play/Pause button */}
      <button
        className="absolute top-4 right-4 z-20 bg-black/50 text-white p-2 rounded-full backdrop-blur-sm hover:bg-black/70 transition-all"
        onClick={toggleAutoplay}
      >
        {isPlaying ? <Pause className="h-5 w-5" /> : <Play className="h-5 w-5" />}
      </button>

      {/* Dots - position ajustée plus bas */}
      <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-1 z-20">
        {images.map((_, index) => (
          <button
            key={index}
            className={`transition-all ${
              index === currentIndex ? "w-4 h-1 bg-white/30" : "w-2 h-1 bg-white/20 hover:bg-white/30"
            }`}
            onClick={() => goToSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
