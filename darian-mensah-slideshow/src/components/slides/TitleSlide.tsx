import { motion } from 'framer-motion'

export default function TitleSlide() {
  return (
    <div className="relative h-full flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url(/imgs/duke_football_nil_hero.png)',
          filter: 'brightness(0.4)'
        }}
      />
      
      {/* Overlay Gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 via-blue-800/50 to-transparent" />
      
      {/* Content */}
      <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <h1 className="text-6xl md:text-8xl font-bold mb-6 leading-tight">
            Darian Mensah
          </h1>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              The $8M NIL Deal
            </h2>
          </motion.div>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="text-2xl md:text-3xl mb-12 font-light"
          >
            That Changed College Football
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.4 }}
            className="space-y-4"
          >
            <div className="inline-block px-8 py-4 bg-white bg-opacity-10 backdrop-blur-sm rounded-full border border-white border-opacity-20">
              <p className="text-lg font-semibold">Duke University • 2025</p>
            </div>
            <div className="inline-block px-8 py-4 bg-blue-600 bg-opacity-80 backdrop-blur-sm rounded-full border border-blue-400 border-opacity-50 ml-4">
              <p className="text-lg font-semibold">Record-Breaking Transfer</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
      
      {/* Decorative Elements */}
      <motion.div
        className="absolute top-20 left-20 w-32 h-32 border-2 border-white border-opacity-20 rounded-full"
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        className="absolute bottom-20 right-20 w-24 h-24 border-2 border-yellow-400 border-opacity-30 rounded-full"
        animate={{ rotate: -360 }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
      />
    </div>
  )
}
