import React, { useState } from 'react'
import Header from './Components/Header'
import Footer from './Components/Footer'
import HomePage from './Pages/HomePage'
import AboutPage from './Pages/AboutPage'
import LoginPage from './Pages/LoginPage'
import RegisterPage from './Pages/RegisterPage'

function App() {
  const [currentPage, setCurrentPage] = useState('home')
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [user, setUser] = useState(null)

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
    <div className="flex flex-col min-h-screen">
      {/* Шапка показывается только не на страницах входа/регистрации */}
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
      
      <main className="flex-grow">
        {renderPage()}
      </main>

      {/* Подвал показывается только не на страницах входа/регистрации */}
      {currentPage !== 'login' && currentPage !== 'register' && (
        <Footer setCurrentPage={setCurrentPage} />
      )}
    </div>
  )
}

export default App