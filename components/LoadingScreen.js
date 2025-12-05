'use client'
import { useState, useEffect } from 'react'

const LoadingScreen = ({ onLoadingComplete }) => {
  const [progress, setProgress] = useState(0)
  const [isExiting, setIsExiting] = useState(false)
  const [codeText, setCodeText] = useState('')
  const [showWelcome, setShowWelcome] = useState(false)
  const [showCode, setShowCode] = useState(false)
  const [showTea, setShowTea] = useState(false)
  const [currentFact, setCurrentFact] = useState(0)
  
  const funFacts = [
    "Brewing your experience... 🍵",
    "Building dreams with code... 💻",
    "Turning caffeine into features... ☕",
    "Debugging the universe... 🔧",
    "Crafting pixel-perfect magic... ✨",
  ]
  
  const fullCode = `const developer = {
  name: "Namit Tickoo",
  role: "Full Stack Developer",
  skills: ["React", "Next.js", "Node.js", "MongoDB"],
  passion: "Building beautiful web apps",
  goal: "GSoC 2026 🚀",
  status: "Ready to collaborate!"
};

console.log("Welcome to my portfolio!");`

  useEffect(() => {
    // Staged animations
    setTimeout(() => setShowWelcome(true), 300)
    setTimeout(() => setShowCode(true), 1000)
    setTimeout(() => setShowTea(true), 2500)

    // Rotate through fun facts
    const factInterval = setInterval(() => {
      setCurrentFact(prev => (prev + 1) % funFacts.length)
    }, 2000)

    // Typing animation for code - starts after code block appears
    const typingTimeout = setTimeout(() => {
      let currentIndex = 0
      const typingInterval = setInterval(() => {
        if (currentIndex <= fullCode.length) {
          setCodeText(fullCode.slice(0, currentIndex))
          currentIndex++
        } else {
          clearInterval(typingInterval)
        }
      }, 20)
      
      return () => clearInterval(typingInterval)
    }, 1200)

    // Slower progress animation for longer loading
    const progressInterval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressInterval)
          return 100
        }
        return Math.min(prev + 0.8, 100)
      })
    }, 60)

    return () => {
      clearTimeout(typingTimeout)
      clearInterval(progressInterval)
      clearInterval(factInterval)
    }
  }, [])

  useEffect(() => {
    if (progress >= 100) {
      setTimeout(() => setIsExiting(true), 800)
      setTimeout(() => onLoadingComplete(), 1500)
    }
  }, [progress, onLoadingComplete])

  return (
    <div className={`fixed inset-0 z-9999 flex flex-col items-center justify-center transition-all duration-700 ${isExiting ? 'opacity-0 -translate-y-full' : 'opacity-100 translate-y-0'}`}
      style={{ background: 'linear-gradient(135deg, #254f1a 0%, #1e2330 50%, #2665d6 100%)' }}
    >
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Glowing orbs */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-[#d2e823]/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-[#2665d6]/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-48 h-48 bg-[#780016]/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        
        {/* Floating Tea Cups */}
        <span className="absolute text-4xl animate-bounce opacity-60" style={{ top: '10%', left: '10%', animationDelay: '0s', animationDuration: '3s' }}>🍵</span>
        <span className="absolute text-3xl animate-bounce opacity-60" style={{ top: '20%', right: '15%', animationDelay: '0.5s', animationDuration: '3.5s' }}>☕</span>
        <span className="absolute text-5xl animate-bounce opacity-60" style={{ bottom: '25%', left: '8%', animationDelay: '1s', animationDuration: '3.2s' }}>🍵</span>
        <span className="absolute text-3xl animate-bounce opacity-60" style={{ bottom: '15%', right: '10%', animationDelay: '1.5s', animationDuration: '2.8s' }}>☕</span>
        <span className="absolute text-4xl animate-bounce opacity-60" style={{ top: '50%', right: '5%', animationDelay: '2s', animationDuration: '3.3s' }}>🍵</span>
        <span className="absolute text-2xl animate-bounce opacity-40" style={{ top: '70%', left: '20%', animationDelay: '2.5s', animationDuration: '4s' }}>💻</span>
        <span className="absolute text-2xl animate-bounce opacity-40" style={{ top: '30%', left: '5%', animationDelay: '3s', animationDuration: '3.8s' }}>⚡</span>
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center px-4 max-w-2xl">
        
        {/* Welcome Text */}
        <div className="mb-8 overflow-hidden text-center">
          <p className={`text-[#d2e823] font-extrabold text-3xl md:text-5xl lg:text-6xl transition-all duration-1000 ${showWelcome ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'}`}>
            Welcome To My
          </p>
          <p className={`text-white font-extrabold text-3xl md:text-5xl lg:text-6xl transition-all duration-1000 ${showWelcome ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'}`} style={{ transitionDelay: '0.3s' }}>
            Portfolio<span className="text-[#d2e823]">.</span>
          </p>
        </div>

        {/* Code Block */}
        <div className={`bg-[#0d1117] rounded-2xl p-4 md:p-6 mb-8 w-full shadow-2xl border border-white/10 transition-all duration-700 ${showCode ? 'scale-100 opacity-100' : 'scale-90 opacity-0'}`}>
          {/* Terminal Header */}
          <div className="flex items-center gap-2 mb-4 pb-3 border-b border-white/10">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-[#ff5f57]"></div>
              <div className="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
              <div className="w-3 h-3 rounded-full bg-[#28ca42]"></div>
            </div>
            <span className="text-white/40 text-xs ml-2 font-mono">developer.js</span>
          </div>
          <pre className="text-[#d2e823] font-mono text-xs md:text-sm overflow-hidden leading-relaxed">
            <code>{codeText}<span className="animate-pulse text-white">|</span></code>
          </pre>
        </div>

        {/* Loading Section */}
        <div className={`w-full max-w-md transition-all duration-500 ${showTea ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {/* Progress Text */}
          <div className="flex justify-between mb-2">
            <span className="text-[#d2e823] font-bold text-sm transition-all duration-300">
              {funFacts[currentFact]}
            </span>
            <span className="text-white font-bold text-sm">{Math.round(progress)}%</span>
          </div>
          
          {/* Progress Bar */}
          <div className="h-2 bg-white/10 rounded-full overflow-hidden mb-6">
            <div 
              className="h-full rounded-full transition-all duration-200 ease-out"
              style={{ 
                width: `${progress}%`,
                background: 'linear-gradient(90deg, #d2e823, #2665d6, #780016)'
              }}
            ></div>
          </div>

        </div>
      </div>

      {/* Corner Decorations */}
      <div className={`absolute top-6 left-6 transition-all duration-1000 ${showWelcome ? 'opacity-100' : 'opacity-0'}`}>
        <div className="w-16 h-16 md:w-24 md:h-24 border-l-4 border-t-4 border-[#d2e823]/40 rounded-tl-3xl"></div>
      </div>
      <div className={`absolute bottom-6 right-6 transition-all duration-1000 ${showWelcome ? 'opacity-100' : 'opacity-0'}`}>
        <div className="w-16 h-16 md:w-24 md:h-24 border-r-4 border-b-4 border-[#2665d6]/40 rounded-br-3xl"></div>
      </div>
      <div className={`absolute top-6 right-6 transition-all duration-1000 ${showCode ? 'opacity-100' : 'opacity-0'}`}>
        <div className="w-12 h-12 md:w-16 md:h-16 border-r-4 border-t-4 border-[#780016]/40 rounded-tr-3xl"></div>
      </div>
      <div className={`absolute bottom-6 left-6 transition-all duration-1000 ${showCode ? 'opacity-100' : 'opacity-0'}`}>
        <div className="w-12 h-12 md:w-16 md:h-16 border-l-4 border-b-4 border-white/20 rounded-bl-3xl"></div>
      </div>

      {/* Tech Stack Badges - Bottom */}
      <div className={`absolute bottom-6 left-1/2 transform -translate-x-1/2 flex flex-wrap justify-center gap-2 md:gap-3 transition-all duration-700 ${progress > 70 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <span className="bg-[#d2e823] text-[#254f1a] px-3 py-1 md:px-4 md:py-2 rounded-full text-xs md:text-sm font-bold">React</span>
        <span className="bg-white text-[#1e2330] px-3 py-1 md:px-4 md:py-2 rounded-full text-xs md:text-sm font-bold">Next.js</span>
        <span className="bg-[#2665d6] text-white px-3 py-1 md:px-4 md:py-2 rounded-full text-xs md:text-sm font-bold">Node.js</span>
        <span className="bg-[#780016] text-white px-3 py-1 md:px-4 md:py-2 rounded-full text-xs md:text-sm font-bold">MongoDB</span>
      </div>
    </div>
  )
}

export default LoadingScreen
