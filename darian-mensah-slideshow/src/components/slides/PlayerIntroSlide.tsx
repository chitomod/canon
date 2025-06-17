import { motion } from 'framer-motion'

export default function PlayerIntroSlide() {
  const stats = [
    { label: "Completion Rate", value: "65.9%", icon: "🎯" },
    { label: "Passing Yards", value: "2,723", icon: "🏈" },
    { label: "Touchdowns", value: "22", icon: "⚡" },
    { label: "QBR Rating", value: "209.5", icon: "📊" }
  ]

  const achievements = [
    "Mountain League Player of the Year (High School)",
    "Named Tulane Starting QB (2024)",
    "Led Tulane to 9-4 Season Record",
    "Top Transfer Portal QB (#7 by 247Sports)"
  ]

  return (
    <div className="relative h-full bg-gradient-to-br from-blue-900 via-blue-800 to-blue-600 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-64 h-64 border border-white rounded-full"></div>
        <div className="absolute bottom-10 right-10 w-48 h-48 border border-white rounded-full"></div>
        <div className="absolute top-1/2 left-1/4 w-32 h-32 border border-white rounded-full"></div>
      </div>

      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-8 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Left Side - Player Info */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-white"
            >
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-5xl md:text-6xl font-bold mb-6"
              >
                Meet Darian Mensah
              </motion.h1>
              
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="space-y-6 mb-8"
              >
                <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 border border-white border-opacity-20">
                  <h3 className="text-xl font-semibold mb-4 text-yellow-300">Personal Details</h3>
                  <div className="grid grid-cols-2 gap-4 text-lg">
                    <div>
                      <p className="opacity-75">Position:</p>
                      <p className="font-semibold">Quarterback</p>
                    </div>
                    <div>
                      <p className="opacity-75">Age:</p>
                      <p className="font-semibold">20 years old</p>
                    </div>
                    <div>
                      <p className="opacity-75">Height:</p>
                      <p className="font-semibold">6'3" (1.91m)</p>
                    </div>
                    <div>
                      <p className="opacity-75">Weight:</p>
                      <p className="font-semibold">200 lbs</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 border border-white border-opacity-20">
                  <h3 className="text-xl font-semibold mb-4 text-yellow-300">Background</h3>
                  <div className="space-y-2 text-lg">
                    <p><span className="opacity-75">From:</span> Santa Maria, California</p>
                    <p><span className="opacity-75">High School:</span> St. Joseph High School</p>
                    <p><span className="opacity-75">Major:</span> Sociology</p>
                    <p><span className="opacity-75">Class:</span> Redshirt Sophomore</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="bg-gradient-to-r from-yellow-500 to-orange-500 rounded-xl p-6"
              >
                <h3 className="text-xl font-semibold mb-3 text-black">Key Achievements</h3>
                <ul className="space-y-2 text-black">
                  {achievements.map((achievement, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: 0.8 + index * 0.1 }}
                      className="flex items-center"
                    >
                      <span className="w-2 h-2 bg-black rounded-full mr-3"></span>
                      {achievement}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </motion.div>

            {/* Right Side - 2024 Statistics */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-white"
            >
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="text-4xl font-bold mb-8 text-center"
              >
                2024 Season Stats
              </motion.h2>
              
              <div className="grid grid-cols-2 gap-6">
                {stats.map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                    className="bg-white bg-opacity-15 backdrop-blur-sm rounded-xl p-6 text-center border border-white border-opacity-20 hover:bg-opacity-20 transition-all duration-300"
                  >
                    <div className="text-4xl mb-2">{stat.icon}</div>
                    <div className="text-3xl font-bold mb-2 text-yellow-300">{stat.value}</div>
                    <div className="text-sm opacity-75">{stat.label}</div>
                  </motion.div>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.2 }}
                className="mt-8 bg-blue-700 bg-opacity-50 backdrop-blur-sm rounded-xl p-6 border border-blue-400 border-opacity-30"
              >
                <h3 className="text-xl font-semibold mb-4 text-center">Season Highlights</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                  <div>
                    <p className="text-2xl font-bold text-yellow-300">13</p>
                    <p className="text-sm opacity-75">Games Started</p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-yellow-300">9-4</p>
                    <p className="text-sm opacity-75">Season Record</p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-yellow-300">6</p>
                    <p className="text-sm opacity-75">Interceptions</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}
