'use client'
import { useState, useEffect } from 'react'
import LoadingScreen from '@/components/LoadingScreen'

const ClientWrapper = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true)
  const [hasLoaded, setHasLoaded] = useState(false)

  useEffect(() => {
    // Check if user has already seen loading screen in this session
    const hasSeenLoading = sessionStorage.getItem('hasSeenLoading')
    
    if (hasSeenLoading) {
      setIsLoading(false)
      setHasLoaded(true)
    }
  }, [])

  const handleLoadingComplete = () => {
    setIsLoading(false)
    setHasLoaded(true)
    // Store in session so loading doesn't show again during same session
    sessionStorage.setItem('hasSeenLoading', 'true')
  }

  return (
    <>
      {isLoading && !hasLoaded && (
        <LoadingScreen onLoadingComplete={handleLoadingComplete} />
      )}
      <div className={`transition-opacity duration-500 ${isLoading && !hasLoaded ? 'opacity-0' : 'opacity-100'}`}>
        {children}
      </div>
    </>
  )
}

export default ClientWrapper
