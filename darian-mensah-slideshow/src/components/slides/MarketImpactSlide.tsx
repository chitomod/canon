import { motion } from 'framer-motion'

export default function MarketImpactSlide() {
  const marketStats = [
    { metric: "NIL Market Growth", value: "300%", period: "2021-2024", color: "yellow" },
    { metric: "Transfer Portal Entries", value: "3,000+", period: "2024 Season", color: "blue" },
    { metric: "Average QB Deal", value: "$2.5M", period: "Pre-Mensah", color: "green" },
    { metric: "New Market Ceiling", value: "$8M+", period: "Post-Mensah", color: "orange" }
  ]

  const trends = [
    {
      title: "Revenue Sharing Revolution",
      description: "House v. NCAA settlement could allow $22M annual player payments",
      impact: "high",
      icon: "💼"
    },
    {
      title: "Transfer Portal Evolution",
      description: "Top players now command professional-level contracts",
      impact: "high",
      icon: "🔄"
    },
    {
      title: "Conference Realignment",
      description: "Schools investing heavily to compete for top talent",
      impact: "medium",
      icon: "🏟️"
    },
    {
      title: "Recruiting Strategy Shift",
      description: "NIL packages becoming primary recruiting tool",
      impact: "high",
      icon: "📈"
    }
  ]

  return (
    <div className="relative h-full bg-gradient-to-br from-blue-900 via-blue-800 to-blue-600 overflow-hidden">
      {/* Background Infographic */}
      <div className="absolute inset-0 opacity-15">
        <img 
          src="/imgs/nil_recruiting_impact_infographic.png" 
          alt="NIL Impact Background"
          className="w-full h-full object-cover"
        />
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
              Market <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">Revolution</span>
            </h1>
            <p className="text-xl text-white opacity-75">
              How Mensah's deal is reshaping college football economics
            </p>
          </motion.div>

          {/* Market Statistics */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-12"
          >
            <h2 className="text-3xl font-bold text-white mb-8 text-center">NIL Market Evolution</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {marketStats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  className={`bg-white bg-opacity-15 backdrop-blur-sm rounded-xl p-6 text-center border border-white border-opacity-20 hover:bg-opacity-20 transition-all duration-300 ${
                    stat.color === 'yellow' ? 'hover:border-yellow-400/50' :
                    stat.color === 'blue' ? 'hover:border-blue-400/50' :
                    stat.color === 'green' ? 'hover:border-green-400/50' :
                    'hover:border-orange-400/50'
                  }`}
                >
                  <div className={`text-4xl font-bold mb-2 ${
                    stat.color === 'yellow' ? 'text-yellow-300' :
                    stat.color === 'blue' ? 'text-blue-300' :
                    stat.color === 'green' ? 'text-green-300' :
                    'text-orange-300'
                  }`}>
                    {stat.value}
                  </div>
                  <div className="text-white font-semibold mb-1">{stat.metric}</div>
                  <div className="text-white opacity-60 text-sm">{stat.period}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Industry Trends */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            
            {/* Left Side - Trends */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <h2 className="text-3xl font-bold text-white mb-6">Industry Impact Trends</h2>
              <div className="space-y-4">
                {trends.map((trend, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                    className={`bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 border border-white border-opacity-20 hover:bg-opacity-15 transition-all duration-300 ${
                      trend.impact === 'high' ? 'border-l-4 border-l-red-400' :
                      trend.impact === 'medium' ? 'border-l-4 border-l-yellow-400' :
                      'border-l-4 border-l-green-400'
                    }`}
                  >
                    <div className="flex items-start gap-4">
                      <div className="text-3xl">{trend.icon}</div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-white mb-2">{trend.title}</h3>
                        <p className="text-white opacity-75 text-sm mb-2">{trend.description}</p>
                        <div className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${
                          trend.impact === 'high' ? 'bg-red-500/20 text-red-300 border border-red-400/30' :
                          trend.impact === 'medium' ? 'bg-yellow-500/20 text-yellow-300 border border-yellow-400/30' :
                          'bg-green-500/20 text-green-300 border border-green-400/30'
                        }`}>
                          {trend.impact.toUpperCase()} IMPACT
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Right Side - Predictions & Analysis */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="space-y-6"
            >
              <h2 className="text-3xl font-bold text-white mb-6">Market Predictions</h2>
              
              <div className="bg-gradient-to-r from-yellow-500/20 to-orange-500/20 backdrop-blur-sm rounded-xl p-6 border border-yellow-400/40">
                <h3 className="text-xl font-bold text-white mb-4">🔮 2025 Projections</h3>
                <ul className="space-y-3 text-white">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></span>
                    Multiple $10M+ deals expected
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></span>
                    Schools restructuring budgets for NIL
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></span>
                    Revenue sharing implementation
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></span>
                    New NIL regulations likely
                  </li>
                </ul>
              </div>

              <div className="bg-blue-700/30 backdrop-blur-sm rounded-xl p-6 border border-blue-400/40">
                <h3 className="text-xl font-bold text-white mb-4">📊 Economic Impact</h3>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-white">Total NIL Market Size</span>
                      <span className="text-blue-300 font-bold">$1.7B</span>
                    </div>
                    <div className="bg-white bg-opacity-20 rounded-full h-2">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: '85%' }}
                        transition={{ duration: 1.5, delay: 1.2 }}
                        className="bg-gradient-to-r from-blue-400 to-blue-600 h-2 rounded-full"
                      ></motion.div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-white">QB Market Share</span>
                      <span className="text-blue-300 font-bold">35%</span>
                    </div>
                    <div className="bg-white bg-opacity-20 rounded-full h-2">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: '35%' }}
                        transition={{ duration: 1.5, delay: 1.4 }}
                        className="bg-gradient-to-r from-orange-400 to-orange-600 h-2 rounded-full"
                      ></motion.div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-purple-700/30 backdrop-blur-sm rounded-xl p-6 border border-purple-400/40">
                <h3 className="text-lg font-bold text-white mb-3">💡 Expert Analysis</h3>
                <p className="text-white opacity-75 text-sm leading-relaxed">
                  "Mensah's deal signals we're entering the 'professional college era' where top athletes 
                  command salaries comparable to professional leagues. This will fundamentally change 
                  recruitment, retention, and competitive balance across college football."
                </p>
                <p className="text-purple-300 text-xs mt-2">- College Sports Financial Analyst</p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}
