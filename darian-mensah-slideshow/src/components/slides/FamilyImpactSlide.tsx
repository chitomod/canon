import { motion } from 'framer-motion'

export default function FamilyImpactSlide() {
  const keyQuotes = [
    {
      quote: "I knew this move would set my family up for financial freedom. Those are some of the things that went into that decision.",
      context: "On his transfer decision",
      emphasis: "financial freedom"
    },
    {
      quote: "It was very tough to leave my home. I was at Tulane for two years, super grateful for that place. It made me who I am today.",
      context: "On leaving Tulane",
      emphasis: "tough to leave my home"
    },
    {
      quote: "Obviously, the NIL component was pretty important, but it wasn't the primary focus. The primary focus is to play in the NFL.",
      context: "On balancing priorities",
      emphasis: "wasn't the primary focus"
    }
  ]

  const familyValues = [
    { icon: "❤️", title: "Family First", description: "Prioritizing his family's long-term security" },
    { icon: "🏠", title: "Generational Impact", description: "Creating opportunities for future generations" },
    { icon: "💪", title: "Sacrifice & Growth", description: "Leaving comfort zone for family's benefit" },
    { icon: "🙏", title: "Gratitude", description: "Honoring those who supported his journey" }
  ]

  return (
    <div className="relative h-full bg-gradient-to-br from-blue-900 via-blue-800 to-blue-600 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 border border-white rounded-full transform rotate-12"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 border border-white rounded-full transform -rotate-12"></div>
      </div>

      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-8 w-full">
          
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
              Beyond the <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">Money</span>
            </h1>
            <p className="text-xl text-white opacity-75">
              The personal story behind the historic decision
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* Left Side - Key Quotes */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h2 className="text-3xl font-bold text-white mb-8">In His Own Words</h2>
              
              <div className="space-y-6">
                {keyQuotes.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 + index * 0.2 }}
                    className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 border border-white border-opacity-20 hover:bg-opacity-15 transition-all duration-300"
                  >
                    <div className="relative">
                      <div className="text-6xl text-yellow-400 opacity-30 absolute -top-4 -left-2">"</div>
                      <blockquote className="text-lg text-white leading-relaxed relative z-10 pl-6">
                        {item.quote.split(item.emphasis).map((part, i) => (
                          <span key={i}>
                            {part}
                            {i < item.quote.split(item.emphasis).length - 1 && (
                              <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent font-bold">
                                {item.emphasis}
                              </span>
                            )}
                          </span>
                        ))}
                      </blockquote>
                      <div className="text-6xl text-yellow-400 opacity-30 absolute -bottom-8 right-0">"</div>
                    </div>
                    <div className="mt-4 pt-4 border-t border-white border-opacity-20">
                      <p className="text-yellow-300 text-sm font-semibold">— Darian Mensah</p>
                      <p className="text-white opacity-60 text-xs">{item.context}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Right Side - Family Values & Impact */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="space-y-8"
            >
              <h2 className="text-3xl font-bold text-white mb-8">Core Values</h2>
              
              {/* Family Values */}
              <div className="grid grid-cols-2 gap-4">
                {familyValues.map((value, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                    className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 text-center border border-white border-opacity-20 hover:bg-opacity-15 transition-all duration-300"
                  >
                    <div className="text-4xl mb-3">{value.icon}</div>
                    <h3 className="text-lg font-bold text-white mb-2">{value.title}</h3>
                    <p className="text-white opacity-75 text-sm">{value.description}</p>
                  </motion.div>
                ))}
              </div>

              {/* Financial Freedom Impact */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1 }}
                className="bg-gradient-to-r from-green-500/20 to-blue-500/20 backdrop-blur-sm rounded-xl p-6 border border-green-400/40"
              >
                <h3 className="text-xl font-bold text-white mb-4">💰 Financial Freedom Impact</h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-white">Generational Security</span>
                    <span className="text-green-300 font-bold">✓ Achieved</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-white">Family Support</span>
                    <span className="text-green-300 font-bold">✓ Enabled</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-white">Future Opportunities</span>
                    <span className="text-green-300 font-bold">✓ Secured</span>
                  </div>
                </div>
              </motion.div>

              {/* Character Spotlight */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.2 }}
                className="bg-purple-700/30 backdrop-blur-sm rounded-xl p-6 border border-purple-400/40"
              >
                <h3 className="text-xl font-bold text-white mb-4">🌟 Character Profile</h3>
                <div className="space-y-3 text-white">
                  <div className="flex items-center">
                    <span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>
                    <span className="text-sm">Values family above personal gain</span>
                  </div>
                  <div className="flex items-center">
                    <span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>
                    <span className="text-sm">Balanced approach to life and career</span>
                  </div>
                  <div className="flex items-center">
                    <span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>
                    <span className="text-sm">Grateful for opportunities and support</span>
                  </div>
                  <div className="flex items-center">
                    <span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>
                    <span className="text-sm">NFL dreams remain the primary focus</span>
                  </div>
                </div>
              </motion.div>

              {/* Emotional Journey */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.4 }}
                className="bg-gradient-to-r from-blue-500/20 to-indigo-500/20 backdrop-blur-sm rounded-xl p-6 border border-blue-400/40"
              >
                <h3 className="text-lg font-bold text-white mb-3">💭 The Decision Process</h3>
                <p className="text-white opacity-75 text-sm leading-relaxed">
                  Leaving Tulane wasn't easy for Mensah. After two years building relationships and 
                  establishing himself, the decision to transfer was deeply personal—motivated by 
                  both competitive aspirations and the opportunity to secure his family's future 
                  through this historic NIL arrangement.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}
