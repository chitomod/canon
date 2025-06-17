import { motion } from 'framer-motion'

export default function TransferTimelineSlide() {
  const timelineEvents = [
    {
      date: "2023",
      title: "Redshirt Year at Tulane",
      description: "Mensah takes a redshirt year to develop and learn the system",
      status: "development"
    },
    {
      date: "2024 Season",
      title: "Breakout Performance",
      description: "Named starting QB, leads Tulane to 9-4 record with impressive stats",
      status: "success"
    },
    {
      date: "Dec 8, 2024",
      title: "Transfer Portal Entry",
      description: "Announces entry into NCAA Transfer Portal, becomes top-rated QB",
      status: "decision"
    },
    {
      date: "Dec 11, 2024",
      title: "Duke Commitment",
      description: "Commits to Duke University after evaluating multiple programs",
      status: "commitment"
    },
    {
      date: "Dec 23, 2024",
      title: "$8M NIL Deal Announced",
      description: "Record-breaking 2-year, $8M NIL contract reported by CBS Sports",
      status: "historic"
    }
  ]

  return (
    <div className="relative h-full bg-gradient-to-br from-blue-900 via-blue-800 to-blue-600 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <img 
          src="/imgs/nil_contract_evolution_infographic.png" 
          alt="NIL Evolution Background"
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
              The Journey to Duke
            </h1>
            <p className="text-xl text-white opacity-75">
              From Tulane breakthrough to record-breaking transfer
            </p>
          </motion.div>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-0.5 h-full w-1 bg-gradient-to-b from-yellow-400 via-orange-500 to-red-500"></div>
            
            <div className="space-y-8">
              {timelineEvents.map((event, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className={`flex items-center ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}
                >
                  <div className={`w-5/12 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <div className={`bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 border border-white border-opacity-20 hover:bg-opacity-15 transition-all duration-300 ${
                      event.status === 'historic' ? 'bg-gradient-to-r from-yellow-500/20 to-orange-500/20 border-yellow-400/40' :
                      event.status === 'commitment' ? 'bg-blue-600/20 border-blue-400/40' :
                      event.status === 'decision' ? 'bg-purple-600/20 border-purple-400/40' :
                      event.status === 'success' ? 'bg-green-600/20 border-green-400/40' :
                      'bg-gray-600/20 border-gray-400/40'
                    }`}>
                      <div className={`inline-block px-3 py-1 rounded-full text-sm font-semibold mb-3 ${
                        event.status === 'historic' ? 'bg-gradient-to-r from-yellow-400 to-orange-500 text-black' :
                        event.status === 'commitment' ? 'bg-blue-500 text-white' :
                        event.status === 'decision' ? 'bg-purple-500 text-white' :
                        event.status === 'success' ? 'bg-green-500 text-white' :
                        'bg-gray-500 text-white'
                      }`}>
                        {event.date}
                      </div>
                      <h3 className="text-xl font-bold text-white mb-2">{event.title}</h3>
                      <p className="text-white opacity-75">{event.description}</p>
                    </div>
                  </div>
                  
                  {/* Timeline Dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2">
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 0.4, delay: index * 0.2 + 0.3 }}
                      className={`w-6 h-6 rounded-full border-4 ${
                        event.status === 'historic' ? 'bg-gradient-to-r from-yellow-400 to-orange-500 border-white' :
                        event.status === 'commitment' ? 'bg-blue-500 border-white' :
                        event.status === 'decision' ? 'bg-purple-500 border-white' :
                        event.status === 'success' ? 'bg-green-500 border-white' :
                        'bg-gray-500 border-white'
                      }`}
                    ></motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Bottom Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="mt-12 text-center"
          >
            <div className="bg-gradient-to-r from-yellow-500/20 to-orange-500/20 backdrop-blur-sm rounded-xl p-6 border border-yellow-400/40">
              <h3 className="text-2xl font-bold text-white mb-4">Impact Numbers</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <p className="text-3xl font-bold text-yellow-300">3 days</p>
                  <p className="text-white opacity-75">From portal to commitment</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-yellow-300">#7</p>
                  <p className="text-white opacity-75">Transfer portal ranking</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-yellow-300">100%</p>
                  <p className="text-white opacity-75">Increase over previous top deals</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
