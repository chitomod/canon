import { motion } from 'framer-motion'

export default function ContractSlide() {
  const contractDetails = [
    { label: "Total Value", value: "$8 Million", icon: "💰" },
    { label: "Duration", value: "2 Years", icon: "📅" },
    { label: "Annual Average", value: "$4 Million", icon: "📊" },
    { label: "Status", value: "Highest in CFB History", icon: "🏆" }
  ]

  const comparisons = [
    { player: "Darian Mensah", school: "Duke", amount: "$8M", year: "2024", isHighlight: true },
    { player: "AJ Dybantsa", school: "BYU", amount: "$7M", year: "2024", isHighlight: false },
    { player: "Cam Ward", school: "Miami", amount: "$4M", year: "2023", isHighlight: false },
    { player: "Riley Leonard", school: "Notre Dame", amount: "$3.5M", year: "2023", isHighlight: false }
  ]

  return (
    <div className="relative h-full bg-gradient-to-br from-blue-900 via-blue-800 to-blue-600 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 text-9xl font-bold text-white">$8M</div>
        <div className="absolute bottom-20 right-20 text-6xl font-bold text-white">2 YEARS</div>
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
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-4">
              The <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">$8M</span> Deal
            </h1>
            <p className="text-2xl text-white opacity-75">
              Breaking down the record-setting NIL contract
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* Left Side - Contract Details */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h2 className="text-3xl font-bold text-white mb-8">Contract Breakdown</h2>
              
              <div className="grid grid-cols-2 gap-6 mb-8">
                {contractDetails.map((detail, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                    className="bg-white bg-opacity-15 backdrop-blur-sm rounded-xl p-6 text-center border border-white border-opacity-20 hover:bg-opacity-20 transition-all duration-300"
                  >
                    <div className="text-4xl mb-3">{detail.icon}</div>
                    <div className="text-2xl font-bold text-yellow-300 mb-2">{detail.value}</div>
                    <div className="text-sm text-white opacity-75">{detail.label}</div>
                  </motion.div>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="bg-gradient-to-r from-yellow-500/20 to-orange-500/20 backdrop-blur-sm rounded-xl p-6 border border-yellow-400/40"
              >
                <h3 className="text-xl font-bold text-white mb-4">Deal Significance</h3>
                <ul className="space-y-3 text-white">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></span>
                    First $8M NIL deal in college football
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></span>
                    100% increase over previous top QB deals
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></span>
                    Sets new standard for transfer portal
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></span>
                    Signals evolution of college athletics
                  </li>
                </ul>
              </motion.div>
            </motion.div>

            {/* Right Side - Comparison Chart */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <h2 className="text-3xl font-bold text-white mb-8">Top NIL Deals Comparison</h2>
              
              <div className="space-y-4">
                {comparisons.map((comparison, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                    className={`relative overflow-hidden rounded-xl p-6 border transition-all duration-300 ${
                      comparison.isHighlight 
                        ? 'bg-gradient-to-r from-yellow-500/30 to-orange-500/30 border-yellow-400/60 transform scale-105' 
                        : 'bg-white bg-opacity-10 border-white border-opacity-20 hover:bg-opacity-15'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className={`text-xl font-bold ${comparison.isHighlight ? 'text-yellow-300' : 'text-white'}`}>
                          {comparison.player}
                        </h3>
                        <p className="text-white opacity-75">{comparison.school}</p>
                        <p className="text-sm text-white opacity-60">{comparison.year}</p>
                      </div>
                      <div className="text-right">
                        <p className={`text-3xl font-bold ${comparison.isHighlight ? 'text-yellow-300' : 'text-white'}`}>
                          {comparison.amount}
                        </p>
                        {comparison.isHighlight && (
                          <div className="inline-block px-3 py-1 bg-gradient-to-r from-yellow-400 to-orange-500 text-black text-xs font-bold rounded-full mt-2">
                            RECORD
                          </div>
                        )}
                      </div>
                    </div>
                    
                    {/* Progress Bar */}
                    <div className="mt-4 bg-white bg-opacity-20 rounded-full h-2">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: comparison.isHighlight ? '100%' : `${(parseFloat(comparison.amount.replace('$', '').replace('M', '')) / 8) * 100}%` }}
                        transition={{ duration: 1, delay: 0.8 + index * 0.1 }}
                        className={`h-2 rounded-full ${
                          comparison.isHighlight 
                            ? 'bg-gradient-to-r from-yellow-400 to-orange-500' 
                            : 'bg-white bg-opacity-60'
                        }`}
                      ></motion.div>
                    </div>
                  </motion.div>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.2 }}
                className="mt-8 bg-blue-700/30 backdrop-blur-sm rounded-xl p-6 border border-blue-400/40"
              >
                <h3 className="text-lg font-bold text-white mb-3">Market Impact</h3>
                <p className="text-white opacity-75 text-sm">
                  This deal represents a seismic shift in college athletics, potentially influencing 
                  the upcoming House v. NCAA settlement that could allow schools to share up to $22M 
                  annually with players starting in 2025.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}
