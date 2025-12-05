'use client'
import { useState, useEffect, useRef } from 'react'

const CursorGlow = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [isVisible, setIsVisible] = useState(false)
  const [isClicking, setIsClicking] = useState(false)
  const [trail, setTrail] = useState([])
  const idCounter = useRef(0)

  useEffect(() => {
    // Only show on desktop
    if (window.innerWidth < 1024) return

    const updatePosition = (e) => {
      setPosition({ x: e.clientX, y: e.clientY })
      setIsVisible(true)
      
      // Add to trail with unique incrementing ID
      idCounter.current += 1
      setTrail(prev => [...prev.slice(-12), { x: e.clientX, y: e.clientY, id: idCounter.current }])
    }

    const handleMouseDown = () => setIsClicking(true)
    const handleMouseUp = () => setIsClicking(false)
    const handleMouseLeave = () => setIsVisible(false)
    const handleMouseEnter = () => setIsVisible(true)

    window.addEventListener('mousemove', updatePosition)
    window.addEventListener('mousedown', handleMouseDown)
    window.addEventListener('mouseup', handleMouseUp)
    document.body.addEventListener('mouseleave', handleMouseLeave)
    document.body.addEventListener('mouseenter', handleMouseEnter)

    return () => {
      window.removeEventListener('mousemove', updatePosition)
      window.removeEventListener('mousedown', handleMouseDown)
      window.removeEventListener('mouseup', handleMouseUp)
      document.body.removeEventListener('mouseleave', handleMouseLeave)
      document.body.removeEventListener('mouseenter', handleMouseEnter)
    }
  }, [])

  // Don't render on mobile/tablet
  if (typeof window !== 'undefined' && window.innerWidth < 1024) {
    return null
  }

  return (
    <>
      {/* Trail particles */}
      {trail.map((point, index) => (
        <div
          key={point.id}
          className="fixed pointer-events-none z-[9999] rounded-full"
          style={{
            left: point.x,
            top: point.y,
            width: `${4 + index * 0.5}px`,
            height: `${4 + index * 0.5}px`,
            background: `rgba(210, 232, 35, ${0.1 + index * 0.05})`,
            transform: 'translate(-50%, -50%)',
            transition: 'opacity 0.3s ease-out',
            opacity: isVisible ? (index / trail.length) : 0,
          }}
        />
      ))}

      {/* Main cursor glow */}
      <div
        className={`fixed pointer-events-none z-[9999] transition-transform duration-100 ease-out ${isVisible ? 'opacity-100' : 'opacity-0'}`}
        style={{
          left: position.x,
          top: position.y,
          transform: `translate(-50%, -50%) scale(${isClicking ? 0.8 : 1})`,
        }}
      >
        {/* Outer glow */}
        <div 
          className="absolute rounded-full blur-xl transition-all duration-300"
          style={{
            width: isClicking ? '40px' : '60px',
            height: isClicking ? '40px' : '60px',
            background: 'radial-gradient(circle, rgba(210, 232, 35, 0.4) 0%, rgba(38, 101, 214, 0.2) 50%, transparent 70%)',
            transform: 'translate(-50%, -50%)',
            left: '50%',
            top: '50%',
          }}
        />
        
        {/* Inner dot */}
        <div 
          className="absolute rounded-full transition-all duration-150"
          style={{
            width: isClicking ? '8px' : '12px',
            height: isClicking ? '8px' : '12px',
            background: 'linear-gradient(135deg, #d2e823 0%, #2665d6 100%)',
            boxShadow: '0 0 20px rgba(210, 232, 35, 0.8), 0 0 40px rgba(38, 101, 214, 0.4)',
            transform: 'translate(-50%, -50%)',
            left: '50%',
            top: '50%',
          }}
        />
      </div>

      {/* Ring that follows with delay */}
      <div
        className={`fixed pointer-events-none z-[9998] transition-all duration-300 ease-out ${isVisible ? 'opacity-100' : 'opacity-0'}`}
        style={{
          left: position.x,
          top: position.y,
          transform: `translate(-50%, -50%) scale(${isClicking ? 1.5 : 1})`,
        }}
      >
        <div 
          className="rounded-full border-2 border-[#d2e823]/30 transition-all duration-300"
          style={{
            width: isClicking ? '50px' : '40px',
            height: isClicking ? '50px' : '40px',
          }}
        />
      </div>
    </>
  )
}

export default CursorGlow
