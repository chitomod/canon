import { motion } from 'framer-motion'

export default function ConclusionSlide() {
  const keyTakeaways = [
    {
      icon: "🏆",
      title: "Historic Achievement",
      description: "First $8M NIL deal sets new standard for college athletics"
    },
    {
      icon: "👨‍👩‍👧‍👦",
      title: "Family Values",
      description: "Decision driven by desire for generational financial freedom"
    },
    {
      icon: "🏈",
      title: "Market Evolution",
      description: "College football enters professional compensation era"
    },
    {
      icon: "🚀",
      title: "Future Impact",
      description: "Catalyst for industry-wide transformation and regulation"
    }
  ]

  const nextSteps = [
    "Monitor upcoming NIL deals and market trends",
    "Track House v. NCAA settlement implementation",
    "Follow Mensah's performance at Duke",
    "Observe competitive balance changes"
  ]

  return (
    <div className="relative h-full bg-gradient-to-br from-blue-900 via-blue-800 to-blue-600 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <img 
          src="/imgs/duke_football_nil_hero.png" 
          alt="Duke Football Background"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-blue-900/90 via-blue-800/70 to-transparent"></div>

      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-8 w-full">
          
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              The Story <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">Continues</span>
            </h1>
            <p className="text-2xl text-white opacity-75 max-w-3xl mx-auto">
              Darian Mensah's $8M deal marks the beginning of a new chapter in college sports history
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* Left Side - Key Takeaways */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h2 className="text-3xl font-bold text-white mb-8">Key Takeaways</h2>
              
              <div className="space-y-6">
                {keyTakeaways.map((takeaway, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                    className="bg-white bg-opacity-15 backdrop-blur-sm rounded-xl p-6 border border-white border-opacity-20 hover:bg-opacity-20 transition-all duration-300"
                  >
                    <div className="flex items-start gap-4">
                      <div className="text-4xl">{takeaway.icon}</div>
                      <div>
                        <h3 className="text-xl font-bold text-white mb-2">{takeaway.title}</h3>
                        <p className="text-white opacity-75">{takeaway.description}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Summary Stats */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="mt-8 bg-gradient-to-r from-yellow-500/20 to-orange-500/20 backdrop-blur-sm rounded-xl p-6 border border-yellow-400/40"
              >
                <h3 className="text-xl font-bold text-white mb-4">By the Numbers</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <p className="text-3xl font-bold text-yellow-300">$8M</p>
                    <p className="text-white opacity-75 text-sm">Contract Value</p>
                  </div>
                  <div className="text-center">
                    <p className="text-3xl font-bold text-yellow-300">100%</p>
                    <p className="text-white opacity-75 text-sm">Market Increase</p>
                  </div>
                  <div className="text-center">
                    <p className="text-3xl font-bold text-yellow-300">20</p>
                    <p className="text-white opacity-75 text-sm">Years Old</p>
                  </div>
                  <div className="text-center">
                    <p className="text-3xl font-bold text-yellow-300">#1</p>
                    <p className="text-white opacity-75 text-sm">Historic Deal</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Right Side - What's Next & Call to Action */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="space-y-8"
            >
              <h2 className="text-3xl font-bold text-white">What's Next?</h2>
              
              {/* Future Monitoring */}
              <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 border border-white border-opacity-20">
                <h3 className="text-xl font-bold text-white mb-4">🔍 What to Watch</h3>
                <ul className="space-y-3">
                  {nextSteps.map((step, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                      className="flex items-center text-white opacity-75"
                    >
                      <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
                      {step}
                    </motion.li>
                  ))}
                </ul>
              </div>

              {/* Duke 2025 Outlook */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1 }}
                className="bg-blue-700/30 backdrop-blur-sm rounded-xl p-6 border border-blue-400/40"
              >
                <h3 className="text-xl font-bold text-white mb-4">🏈 Duke 2025 Season</h3>
                <div className="space-y-3 text-white">
                  <div className="flex items-center justify-between">
                    <span>Championship Expectations</span>
                    <span className="text-blue-300 font-bold">High</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Playoff Potential</span>
                    <span className="text-blue-300 font-bold">Strong</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Mensah NFL Draft Stock</span>
                    <span className="text-blue-300 font-bold">Rising</span>
                  </div>
                </div>
              </motion.div>

              {/* Call to Action */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.2 }}
                className="bg-gradient-to-r from-purple-500/30 to-pink-500/30 backdrop-blur-sm rounded-xl p-6 border border-purple-400/40"
              >
                <h3 className="text-xl font-bold text-white mb-4">📚 Learn More</h3>
                <p className="text-white opacity-75 text-sm mb-4">
                  Stay updated on this historic story and the evolution of college athletics:
                </p>
                <div className="space-y-2">
                  <button className="w-full bg-white bg-opacity-20 hover:bg-opacity-30 text-white font-semibold py-3 px-4 rounded-lg transition-all duration-300 text-sm">
                    Follow Duke Football
                  </button>
                  <button className="w-full bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-400 hover:to-orange-400 text-black font-semibold py-3 px-4 rounded-lg transition-all duration-300 text-sm">
                    Track NIL Market Trends
                  </button>
                </div>
              </motion.div>

              {/* Final Quote */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.4 }}
                className="bg-black bg-opacity-30 backdrop-blur-sm rounded-xl p-6 border border-white border-opacity-20"
              >
                <div className="text-center">
                  <div className="text-4xl text-yellow-400 opacity-30 mb-2">"</div>
                  <blockquote className="text-lg text-white italic mb-3">
                    The playoffs are definitely a feat I think we can accomplish. I'm trying to be one of the best in the country next year.
                  </blockquote>
                  <p className="text-yellow-300 font-semibold">— Darian Mensah</p>
                  <p className="text-white opacity-60 text-sm">Looking ahead to 2025</p>
                </div>
              </motion.div>
            </motion.div>
          </div>

          {/* Footer */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.6 }}
            className="text-center mt-12 text-white opacity-60"
          >
            <p className="text-sm">Thank you for following this historic journey</p>
            <p className="text-xs mt-2">Interactive Presentation • 2025</p>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
