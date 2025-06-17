import { motion } from 'framer-motion'

export default function FutureImplicationsSlide() {
  const implications = [
    {
      category: "Recruiting",
      title: "NIL-First Recruiting Era",
      description: "Financial packages become the primary recruiting tool, fundamentally changing how programs attract talent.",
      impact: "High",
      timeline: "Immediate",
      color: "red"
    },
    {
      category: "Competition",
      title: "Competitive Balance Shift",
      description: "Schools with deeper pockets gain significant advantages in the transfer portal and recruiting.",
      impact: "High",
      timeline: "1-2 Years",
      color: "orange"
    },
    {
      category: "Regulation",
      title: "New NIL Frameworks",
      description: "Expect stricter regulations and potentially salary caps to maintain competitive integrity.",
      impact: "Medium",
      timeline: "2-3 Years",
      color: "yellow"
    },
    {
      category: "Economics",
      title: "Revenue Sharing Model",
      description: "House v. NCAA settlement could allow direct school payments up to $22M annually.",
      impact: "High",
      timeline: "6-12 Months",
      color: "green"
    }
  ]

  const predictions = [
    { year: "2025", event: "First $10M+ NIL Deal", probability: "90%" },
    { year: "2025", event: "Revenue Sharing Implementation", probability: "85%" },
    { year: "2026", event: "NIL Salary Cap Introduction", probability: "70%" },
    { year: "2027", event: "Professional College League", probability: "60%" }
  ]

  const stakeholders = [
    {
      group: "Players",
      benefits: ["Financial security", "Professional-level compensation", "Career flexibility"],
      concerns: ["Pressure & expectations", "Academic balance", "Career sustainability"]
    },
    {
      group: "Schools",
      benefits: ["Elite talent acquisition", "Competitive advantage", "Revenue opportunities"],
      concerns: ["Budget constraints", "Compliance complexity", "Traditional values"]
    },
    {
      group: "Fans",
      benefits: ["Higher quality play", "Star athlete retention", "Exciting storylines"],
      concerns: ["Pay-to-win culture", "Loss of tradition", "Ticket price increases"]
    }
  ]

  return (
    <div className="relative h-full bg-gradient-to-br from-blue-900 via-blue-800 to-blue-600 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 right-20 text-8xl font-bold text-white transform rotate-12">2025</div>
        <div className="absolute bottom-20 left-20 text-6xl font-bold text-white transform -rotate-12">FUTURE</div>
      </div>

      <div className="relative z-10 h-full flex items-center py-8">
        <div className="max-w-7xl mx-auto px-8 w-full">
          
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-8"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
              The <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">Future</span> Unfolds
            </h1>
            <p className="text-xl text-white opacity-75">
              What Mensah's deal means for college football's evolution
            </p>
          </motion.div>

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* Left Column - Key Implications */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="lg:col-span-2"
            >
              <h2 className="text-3xl font-bold text-white mb-6">Major Implications</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {implications.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                    className={`bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 border border-white border-opacity-20 hover:bg-opacity-15 transition-all duration-300 ${
                      item.color === 'red' ? 'border-l-4 border-l-red-400' :
                      item.color === 'orange' ? 'border-l-4 border-l-orange-400' :
                      item.color === 'yellow' ? 'border-l-4 border-l-yellow-400' :
                      'border-l-4 border-l-green-400'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-3">
                      <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
                        item.color === 'red' ? 'bg-red-500/20 text-red-300' :
                        item.color === 'orange' ? 'bg-orange-500/20 text-orange-300' :
                        item.color === 'yellow' ? 'bg-yellow-500/20 text-yellow-300' :
                        'bg-green-500/20 text-green-300'
                      }`}>
                        {item.category}
                      </span>
                      <span className="text-xs text-white opacity-60">{item.timeline}</span>
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                    <p className="text-white opacity-75 text-sm mb-3">{item.description}</p>
                    <div className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${
                      item.impact === 'High' ? 'bg-red-500/20 text-red-300 border border-red-400/30' :
                      'bg-yellow-500/20 text-yellow-300 border border-yellow-400/30'
                    }`}>
                      {item.impact} Impact
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Future Predictions Timeline */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="mt-8 bg-gradient-to-r from-purple-500/20 to-indigo-500/20 backdrop-blur-sm rounded-xl p-6 border border-purple-400/40"
              >
                <h3 className="text-xl font-bold text-white mb-4">🔮 Prediction Timeline</h3>
                <div className="space-y-3">
                  {predictions.map((prediction, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: 1 + index * 0.1 }}
                      className="flex items-center justify-between bg-white bg-opacity-10 rounded-lg p-3"
                    >
                      <div>
                        <span className="text-purple-300 font-bold text-sm">{prediction.year}</span>
                        <span className="text-white ml-3">{prediction.event}</span>
                      </div>
                      <span className="text-green-300 font-bold text-sm">{prediction.probability}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </motion.div>

            {/* Right Column - Stakeholder Impact */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <h2 className="text-2xl font-bold text-white mb-6">Stakeholder Impact</h2>
              
              <div className="space-y-6">
                {stakeholders.map((stakeholder, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 + index * 0.2 }}
                    className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 border border-white border-opacity-20"
                  >
                    <h3 className="text-lg font-bold text-white mb-4">{stakeholder.group}</h3>
                    
                    <div className="space-y-3">
                      <div>
                        <h4 className="text-sm font-semibold text-green-300 mb-2">Benefits</h4>
                        <ul className="space-y-1">
                          {stakeholder.benefits.map((benefit, i) => (
                            <li key={i} className="text-white opacity-75 text-xs flex items-center">
                              <span className="w-1.5 h-1.5 bg-green-400 rounded-full mr-2"></span>
                              {benefit}
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="text-sm font-semibold text-orange-300 mb-2">Concerns</h4>
                        <ul className="space-y-1">
                          {stakeholder.concerns.map((concern, i) => (
                            <li key={i} className="text-white opacity-75 text-xs flex items-center">
                              <span className="w-1.5 h-1.5 bg-orange-400 rounded-full mr-2"></span>
                              {concern}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Bottom Call-out */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.4 }}
                className="mt-6 bg-gradient-to-r from-yellow-500/20 to-orange-500/20 backdrop-blur-sm rounded-xl p-6 border border-yellow-400/40"
              >
                <h3 className="text-lg font-bold text-white mb-3">🚀 The Transformation</h3>
                <p className="text-white opacity-75 text-sm leading-relaxed">
                  We're witnessing the birth of a new era in college athletics—one where talent 
                  is compensated at professional levels, fundamentally changing the landscape forever.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}
