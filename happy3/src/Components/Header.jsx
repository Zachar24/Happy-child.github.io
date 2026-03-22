import React from 'react'
import { Heart, User, LogOut, Home, BookOpen, Users } from 'lucide-react'

const Header = ({ 
  currentPage, 
  setCurrentPage, 
  isAuthenticated, 
  user, 
  onLogout,
  onNavigate 
}) => {
  const navItems = [
    { id: 'home', label: 'Главная', icon: Home },
    { id: 'about', label: 'О проекте', icon: BookOpen },
    { id: 'community', label: 'Сообщество', icon: Users },
  ]

  return (
    <header className="bg-white/80 backdrop-blur-md shadow-lg sticky top-0 z-50 border-b border-pink-200">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Логотип и название */}
          <div 
            className="flex items-center space-x-3 cursor-pointer group"
            onClick={() => setCurrentPage('home')}
          >
            <div className="h-15 w-15 bg-gradient-to-r from-blue-500 to-pink-500 p-2 rounded-xl shadow-lg group-hover:shadow-xl transition-all">
              <img src="/Фото.svg" alt="#" />
            </div>
            <div>
              <h1 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-pink-600 bg-clip-text text-transparent">
                Счастливый ребенок
              </h1>
            </div>
          </div>

          {/* Навигация */}
          <nav className="hidden md:flex items-center space-x-2">
            {navItems.map((item) => {
              const Icon = item.icon
              const isActive = currentPage === item.id
              return (
                <button
                  key={item.id}
                  onClick={() => setCurrentPage(item.id)}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-xl transition-all ${
                    isActive 
                      ? 'bg-gradient-to-r from-blue-500 to-pink-500 text-white shadow-md' 
                      : 'text-gray-600 hover:bg-pink-50 hover:text-pink-600'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{item.label}</span>
                </button>
              )
            })}
          </nav>

          {/* Кнопки авторизации */}
          <div className="flex items-center space-x-3">
            {isAuthenticated ? (
              <div className="flex items-center space-x-3">
                <div className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-blue-100 to-pink-100 rounded-xl">
                  <User className="w-4 h-4 text-pink-600" />
                  <span className="text-sm font-medium text-gray-700">
                    {user?.name || 'Пользователь'}
                  </span>
                </div>
                <button
                  onClick={onLogout}
                  className="flex items-center space-x-2 px-4 py-2 text-gray-600 hover:text-pink-600 hover:bg-pink-50 rounded-xl transition-all"
                >
                  <LogOut className="w-4 h-4" />
                  <span className="hidden sm:inline">Выйти</span>
                </button>
              </div>
            ) : (
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => onNavigate('login')}
                  className="px-4 py-2 text-blue-600 hover:text-pink-600 font-medium transition-all hover:bg-pink-50 rounded-xl"
                >
                  Войти
                </button>
                <button
                  onClick={() => onNavigate('register')}
                  className="px-4 py-2 bg-gradient-to-r from-blue-500 to-pink-500 text-white rounded-xl hover:from-blue-600 hover:to-pink-600 shadow-md hover:shadow-lg transition-all"
                >
                  Регистрация
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header