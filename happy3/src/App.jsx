import React, { useState, useEffect } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import HomePage from './Pages/HomePage'
import AboutPage from './pages/AboutPage'
import CommunityPage from './pages/CommunityPage'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import AssistantPage from './Pages/AssistantPage'

function App() {
  const [currentPage, setCurrentPage] = useState('home')
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [user, setUser] = useState(null)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [currentPage])

  const handleLogin = (userData) => {
    setIsAuthenticated(true)
    setUser(userData)
    setCurrentPage('home')
  }

  const handleRegister = (userData) => {
    setIsAuthenticated(true)
    setUser(userData)
    setCurrentPage('home')
  }

  const handleLogout = () => {
    setIsAuthenticated(false)
    setUser(null)
    setCurrentPage('home')
  }

  const handleNavigate = (page) => {
    setCurrentPage(page)
  }

  const renderPage = () => {
    switch(currentPage) {
      case 'home':
        return <HomePage 
          isAuthenticated={isAuthenticated}
          onNavigate={handleNavigate}
        />
      case 'about':
        return <AboutPage onNavigate={handleNavigate} />
      case 'community':
        return <CommunityPage 
          isAuthenticated={isAuthenticated}
          user={user}
          onNavigate={handleNavigate}
        />
      case 'assistant':
        return <AssistantPage onNavigate={handleNavigate} />
      case 'login':
        return <LoginPage 
          onLogin={handleLogin} 
          onNavigate={handleNavigate} 
        />
      case 'register':
        return <RegisterPage 
          onRegister={handleRegister} 
          onNavigate={handleNavigate} 
        />
      default:
        return <HomePage 
          isAuthenticated={isAuthenticated}
          onNavigate={handleNavigate}
        />
    }
  }

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-blue-50 to-pink-50">
      {currentPage !== 'login' && currentPage !== 'register' && (
        <Header 
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          isAuthenticated={isAuthenticated}
          user={user}
          onLogout={handleLogout}
          onNavigate={handleNavigate}
        />
      )}
      
      <main className="flex-grow w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6 lg:py-8">
        {renderPage()}
      </main>

      {currentPage !== 'login' && currentPage !== 'register' && (
        <Footer setCurrentPage={setCurrentPage} />
      )}
    </div>
  )
}

export default App