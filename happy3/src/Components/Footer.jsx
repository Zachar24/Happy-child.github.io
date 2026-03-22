import React from 'react'
import { Heart, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Youtube } from 'lucide-react'

const Footer = ({ setCurrentPage }) => {
  return (
    <footer className="bg-gradient-to-r from-blue-900 to-pink-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* О проекте */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Heart className="w-6 h-6 text-pink-400" />
              <h3 className="text-lg font-bold">Счастливый ребенок</h3>
            </div>
            <p className="text-blue-200 text-sm">
              Единое пространство для родителей и педагогов. 
              Помогаем сделать адаптацию к детскому саду радостной и мягкой.
            </p>
          </div>

          {/* Навигация */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-pink-300">Навигация</h4>
            <ul className="space-y-2">
              {['home', 'about', 'community', 'tools'].map((page) => (
                <li key={page}>
                  <button 
                    onClick={() => setCurrentPage(page)}
                    className="text-blue-200 hover:text-pink-300 transition-colors"
                  >
                    {page === 'home' && 'Главная'}
                    {page === 'about' && 'О проекте'}
                    {page === 'community' && 'Сообщество'}
                    {page === 'tools' && 'Инструменты'}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Контакты */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-pink-300">Контакты</h4>
            <ul className="space-y-3">
              <li className="flex items-center space-x-2 text-blue-200">
                <Mail className="w-4 h-4 text-pink-400" />
                <span>happy.child@edu.ru</span>
              </li>
              <li className="flex items-center space-x-2 text-blue-200">
                <Phone className="w-4 h-4 text-pink-400" />
                <span>+7 (495) 123-45-67</span>
              </li>
              <li className="flex items-center space-x-2 text-blue-200">
                <MapPin className="w-4 h-4 text-pink-400" />
                <span>Москва, ул. Образцова, 9</span>
              </li>
            </ul>
          </div>

          {/* Социальные сети */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-pink-300">Мы в соцсетях</h4>
            <div className="flex space-x-3">
              {[Facebook, Twitter, Instagram, Youtube].map((Icon, index) => (
                <a 
                  key={index}
                  href="#" 
                  className="bg-blue-800 p-2 rounded-lg hover:bg-pink-600 transition-colors"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Нижняя часть */}
        <div className="border-t border-blue-800 mt-8 pt-8 text-center text-blue-200 text-sm">
          <p>© 2026 Счастливый ребенок. Все права защищены.</p>
          <p className="mt-2">
            Сделано с <Heart className="w-4 h-4 inline-block text-pink-500" /> для родителей и педагогов
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer