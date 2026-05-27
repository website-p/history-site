
const App = () => {
  // Historical facts
  const historicalFacts = [
    { year: "1776", fact: "American Declaration of Independence signed" },
    { year: "1945", fact: "End of World War II" },
    { year: "1969", fact: "First human moon landing" },
    { year: "1991", fact: "Dissolution of Soviet Union" }
  ];

  // World Wars info
  const warsInfo = [
    { war: "World War I", years: "1914-1918", keyFact: "Over 20 million casualties" },
    { war: "World War II", years: "1939-1945", keyFact: "Most destructive conflict in history" }
  ];

  // Current affairs headlines
  const currentAffairs = [
    { headline: "Global climate summit announces new targets", source: "Reuters" },
    { headline: "AI regulation talks intensify in Brussels", source: "BBC" },
    { headline: "SpaceX sets new launch records in 2024", source: "Space News" }
  ];

  // Inspiring quotes
  const quotes = [
    { text: "The only thing we have to fear is fear itself.", author: "Franklin D. Roosevelt" },
    { text: "In the midst of chaos, there is also opportunity.", author: "Sun Tzu" },
    { text: "Those who cannot remember the past are condemned to repeat it.", author: "George Santayana" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      {/* Hero Header */}
      <div className="bg-black/50 backdrop-blur-sm border-b border-yellow-500/30">
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-4xl md:text-5xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">
            World Knowledge Hub
          </h1>
          <p className="text-center text-gray-400 mt-2 text-lg">Historical insights • World events • Wisdom quotes</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Three Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          
          {/* Historical Facts Column */}
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl border border-yellow-500/20 shadow-xl overflow-hidden">
            <div className="bg-gradient-to-r from-amber-700 to-yellow-700 px-4 py-3">
              <h2 className="text-xl font-bold text-white flex items-center gap-2">
                📜 Historical Facts
              </h2>
            </div>
            <div className="p-4 space-y-3">
              {historicalFacts.map((item, idx) => (
                <div key={idx} className="border-l-4 border-yellow-500 pl-3 py-2 bg-gray-700/30 rounded-r">
                  <span className="text-yellow-400 font-bold text-sm">{item.year}</span>
                  <p className="text-gray-200 text-sm mt-1">{item.fact}</p>
                </div>
              ))}
            </div>
          </div>

          {/* World Wars Column */}
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl border border-red-500/20 shadow-xl overflow-hidden">
            <div className="bg-gradient-to-r from-red-800 to-red-700 px-4 py-3">
              <h2 className="text-xl font-bold text-white flex items-center gap-2">
                ⚔️ World Wars
              </h2>
            </div>
            <div className="p-4 space-y-4">
              {warsInfo.map((war, idx) => (
                <div key={idx} className="bg-gray-700/30 rounded-lg p-3">
                  <h3 className="text-red-400 font-bold text-lg">{war.war}</h3>
                  <p className="text-gray-300 text-sm">{war.years}</p>
                  <p className="text-gray-400 text-xs mt-2">{war.keyFact}</p>
                </div>
              ))}
              {/* Additional war fact */}
              <div className="mt-3 p-2 bg-red-900/20 rounded text-center">
                <p className="text-gray-300 text-xs">💥 Total WW casualties: ~85 million</p>
              </div>
            </div>
          </div>

          {/* Current Affairs Column */}
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl border border-blue-500/20 shadow-xl overflow-hidden">
            <div className="bg-gradient-to-r from-blue-800 to-cyan-700 px-4 py-3">
              <h2 className="text-xl font-bold text-white flex items-center gap-2">
                📰 Current Affairs
              </h2>
            </div>
            <div className="p-4 space-y-3">
              {currentAffairs.map((news, idx) => (
                <div key={idx} className="bg-gray-700/30 rounded-lg p-3">
                  <p className="text-gray-200 text-sm font-medium">{news.headline}</p>
                  <p className="text-blue-400 text-xs mt-1">Source: {news.source}</p>
                </div>
              ))}
              <div className="mt-2 text-center text-gray-500 text-xs">
                Updated daily
              </div>
            </div>
          </div>
        </div>

        {/* Quotes Section - Full Width */}
        <div className="mt-8 bg-gradient-to-r from-purple-900/40 to-indigo-900/40 rounded-xl border border-purple-500/30 p-6 backdrop-blur-sm">
          <h2 className="text-2xl font-bold text-center text-purple-300 mb-4 flex items-center justify-center gap-2">
            💭 Wisdom Quotes
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {quotes.map((quote, idx) => (
              <div key={idx} className="text-center p-4 bg-gray-800/30 rounded-lg">
                <p className="text-gray-200 italic">"{quote.text}"</p>
                <p className="text-purple-400 text-sm mt-2">— {quote.author}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Footer Note */}
        <div className="mt-8 text-center text-gray-500 text-xs border-t border-gray-700 pt-6">
          <p>📌 Historical facts • World War insights • Latest headlines • Inspiring quotes</p>
          <p className="mt-1">Knowledge is power — stay informed</p>
        </div>
      </div>
    </div>
  );
};

export default App;