import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline'

// Import slide components
import TitleSlide from './slides/TitleSlide'
import PlayerIntroSlide from './slides/PlayerIntroSlide'
import TransferTimelineSlide from './slides/TransferTimelineSlide'
import ContractSlide from './slides/ContractSlide'
import MarketImpactSlide from './slides/MarketImpactSlide'
import FamilyImpactSlide from './slides/FamilyImpactSlide'
import FutureImplicationsSlide from './slides/FutureImplicationsSlide'
import ConclusionSlide from './slides/ConclusionSlide'

const slides = [
  { id: 1, component: TitleSlide, title: "Title" },
  { id: 2, component: PlayerIntroSlide, title: "Player Introduction" },
  { id: 3, component: TransferTimelineSlide, title: "Transfer Timeline" },
  { id: 4, component: ContractSlide, title: "The Contract" },
  { id: 5, component: MarketImpactSlide, title: "Market Impact" },
  { id: 6, component: FamilyImpactSlide, title: "Family Impact" },
  { id: 7, component: FutureImplicationsSlide, title: "Future Implications" },
  { id: 8, component: ConclusionSlide, title: "Conclusion" }
]

export default function Slideshow() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isFullscreen, setIsFullscreen] = useState(false)

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
  }

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      switch (event.key) {
        case 'ArrowLeft':
          prevSlide()
          break
        case 'ArrowRight':
        case ' ':
          nextSlide()
          break
        case 'Escape':
          setIsFullscreen(false)
          break
        case 'f':
        case 'F':
          setIsFullscreen(!isFullscreen)
          break
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [isFullscreen])

  const CurrentSlideComponent = slides[currentSlide].component

  return (
    <div className={`relative ${isFullscreen ? 'fixed inset-0 z-50' : 'min-h-screen'} bg-gradient-to-br from-blue-900 via-blue-800 to-blue-600`}>
      {/* Header with Navigation */}
      {!isFullscreen && (
        <div className="absolute top-0 left-0 right-0 z-10 bg-black bg-opacity-20 backdrop-blur-sm">
          <div className="flex items-center justify-between p-4">
            <div className="text-white">
              <h2 className="text-lg font-semibold">Darian Mensah NIL Story</h2>
              <p className="text-sm opacity-75">
                Slide {currentSlide + 1} of {slides.length}: {slides[currentSlide].title}
              </p>
            </div>
            <button
              onClick={() => setIsFullscreen(true)}
              className="px-4 py-2 bg-white bg-opacity-20 text-white rounded-lg hover:bg-opacity-30 transition-all duration-200"
            >
              Fullscreen
            </button>
          </div>
        </div>
      )}

      {/* Main Slide Container */}
      <div className="relative w-full h-screen overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            <CurrentSlideComponent />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation Controls */}
      <div className="absolute bottom-0 left-0 right-0 z-10 bg-black bg-opacity-20 backdrop-blur-sm">
        <div className="flex items-center justify-between p-4">
          {/* Previous Button */}
          <button
            onClick={prevSlide}
            disabled={currentSlide === 0}
            className="flex items-center gap-2 px-4 py-2 bg-white bg-opacity-20 text-white rounded-lg hover:bg-opacity-30 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <ChevronLeftIcon className="w-5 h-5" />
            Previous
          </button>

          {/* Slide Indicators */}
          <div className="flex gap-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-200 ${
                  index === currentSlide
                    ? 'bg-white scale-110'
                    : 'bg-white bg-opacity-50 hover:bg-opacity-75'
                }`}
              />
            ))}
          </div>

          {/* Next Button */}
          <button
            onClick={nextSlide}
            disabled={currentSlide === slides.length - 1}
            className="flex items-center gap-2 px-4 py-2 bg-white bg-opacity-20 text-white rounded-lg hover:bg-opacity-30 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Next
            <ChevronRightIcon className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Fullscreen Exit Button */}
      {isFullscreen && (
        <button
          onClick={() => setIsFullscreen(false)}
          className="absolute top-4 right-4 z-20 px-4 py-2 bg-black bg-opacity-50 text-white rounded-lg hover:bg-opacity-70 transition-all duration-200"
        >
          Exit Fullscreen
        </button>
      )}

      {/* Keyboard Shortcuts Help */}
      <div className="absolute bottom-16 right-4 text-white text-xs opacity-60">
        <p>Keyboard: ← → Space F Esc</p>
      </div>
    </div>
  )
}
