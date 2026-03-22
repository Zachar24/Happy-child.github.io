import React, { useState } from 'react'
import { Heart, User, LogOut, Home, BookOpen, Users, Menu, X } from 'lucide-react'
import Фото from '../assets/Фото.svg'

const Header = ({ 
  currentPage, 
  setCurrentPage, 
  isAuthenticated, 
  user, 
  onLogout,
  onNavigate 
}) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const navItems = [
    { id: 'home', label: 'Главная', icon: Home },
    { id: 'about', label: 'О проекте', icon: BookOpen },
    { id: 'community', label: 'Сообщество', icon: Users },
  ]

  const handleNavClick = (pageId) => {
    setCurrentPage(pageId)
    setIsMobileMenuOpen(false)
  }

  return (
    <header className="bg-white/95 backdrop-blur-md shadow-lg sticky top-0 z-50 border-b border-pink-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">

          <div 
            className="flex items-center space-x-2 sm:space-x-3 cursor-pointer group flex-shrink-0"
            onClick={() => handleNavClick('home')}
          >
            <div className="h-15 w-15 bg-gradient-to-r from-blue-500 to-pink-500 p-2 rounded-xl shadow-lg group-hover:shadow-xl transition-all">
              <img src={Фото} alt="#" />
            </div>
            <div className="block">
              <h1 className="text-base sm:text-xl font-bold bg-gradient-to-r from-blue-600 to-pink-600 bg-clip-text text-transparent">
                Счастливый ребенок
              </h1>
            </div>
          </div>

          <nav className="hidden md:flex items-center space-x-1 lg:space-x-2">
            {navItems.map((item) => {
              const Icon = item.icon
              const isActive = currentPage === item.id
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`flex items-center space-x-1 lg:space-x-2 px-3 lg:px-4 py-2 rounded-xl transition-all text-sm lg:text-base ${
                    isActive 
                      ? 'bg-gradient-to-r from-blue-500 to-pink-500 text-white shadow-md' 
                      : 'text-gray-600 hover:bg-pink-50 hover:text-pink-600'
                  }`}
                >
                  <Icon className="w-4 h-4 lg:w-5 lg:h-5" />
                  <span>{item.label}</span>
                </button>
              )
            })}
          </nav>

          <div className="flex items-center space-x-2 sm:space-x-3">
            {isAuthenticated ? (
              <div className="flex items-center space-x-2 sm:space-x-3">
                <div className="hidden sm:flex items-center space-x-2 px-3 sm:px-4 py-2 bg-gradient-to-r from-blue-100 to-pink-100 rounded-xl">
                  <User className="w-4 h-4 text-pink-600" />
                  <span className="text-xs sm:text-sm font-medium text-gray-700 truncate max-w-[100px]">
                    {user?.name || 'Пользователь'}
                  </span>
                </div>
                <button
                  onClick={onLogout}
                  className="flex items-center space-x-1 sm:space-x-2 px-3 sm:px-4 py-2 text-gray-600 hover:text-pink-600 hover:bg-pink-50 rounded-xl transition-all"
                >
                  <LogOut className="w-4 h-4" />
                  <span className="hidden sm:inline">Выйти</span>
                </button>
              </div>
            ) : (
              <div className="flex items-center space-x-1 sm:space-x-2">
                <button
                  onClick={() => onNavigate('login')}
                  className="px-3 sm:px-4 py-2 text-sm sm:text-base text-blue-600 hover:text-pink-600 font-medium transition-all hover:bg-pink-50 rounded-xl"
                >
                  Войти
                </button>
                <button
                  onClick={() => onNavigate('register')}
                  className="px-3 sm:px-4 py-2 text-sm sm:text-base bg-gradient-to-r from-blue-500 to-pink-500 text-white rounded-xl hover:from-blue-600 hover:to-pink-600 shadow-md hover:shadow-lg transition-all"
                >
                  Регистрация
                </button>
              </div>
            )}

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 text-gray-600 hover:text-pink-600 hover:bg-pink-50 rounded-lg transition-all"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-pink-100 animate-fade-in-down">
            <nav className="flex flex-col space-y-2">
              {navItems.map((item) => {
                const Icon = item.icon
                const isActive = currentPage === item.id
                return (
                  <button
                    key={item.id}
                    onClick={() => handleNavClick(item.id)}
                    className={`flex items-center space-x-3 px-4 py-3 rounded-xl transition-all ${
                      isActive 
                        ? 'bg-gradient-to-r from-blue-500 to-pink-500 text-white' 
                        : 'text-gray-600 hover:bg-pink-50 hover:text-pink-600'
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                    <span className="font-medium">{item.label}</span>
                  </button>
                )
              })}
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header