import React from 'react'
import { Heart, Mail, Phone, MapPin, MessageCircle } from 'lucide-react'

const Footer = ({ setCurrentPage }) => {

    const telegramUsername = "https://https://t.me/+7ndHk9KRuRw0NTli"

    const maxChannelId = "https://max.ru/join/7JDGnMc"

    const chatUsername = "happy_child_support"

    const telegramLink = "https://t.me/+7ndHk9KRuRw0NTli"
    const telegramAppLink = "tg://+7ndHk9KRuRw0NTli"

    const maxLink = "max://join/7JDGnMc"
    const maxWebLink = "https://max.ru/join/7JDGnMc"
    
    const chatLink = "https://t.me/happy_child_chat"
    const chatAppLink = "tg://resolve?domain=happy_child_chat"

     const openLink = (appUrl, webUrl) => {
    console.log('Открываю:', appUrl, 'или', webUrl)
    
    const appWindow = window.open(appUrl, '_blank')

      setTimeout(() => {
        if (!appWindow || appWindow.closed) {
          window.open(webUrl, '_blank')
        }
      }, 500)
    }

  return (
    <footer className="bg-gradient-to-r from-blue-900 to-pink-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">

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

          <div>
            <h4 className="text-lg font-semibold mb-4 text-pink-300">Навигация</h4>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => setCurrentPage('home')}
                  className="text-blue-200 hover:text-pink-300 transition-colors"
                >
                  Главная
                </button>
              </li>
              <li>
                <button 
                  onClick={() => setCurrentPage('about')}
                  className="text-blue-200 hover:text-pink-300 transition-colors"
                >
                  О проекте
                </button>
              </li>
              <li>
                <button 
                  onClick={() => setCurrentPage('community')}
                  className="text-blue-200 hover:text-pink-300 transition-colors"
                >
                  Сообщество
                </button>
              </li>
              <li>
                <button 
                  onClick={() => setCurrentPage('contacts')}
                  className="text-blue-200 hover:text-pink-300 transition-colors"
                >
                  Контакты
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-pink-300">Контакты</h4>
            <ul className="space-y-3">
              <li className="flex items-center space-x-2 text-blue-200">
                <Mail className="w-4 h-4 text-pink-400" />
                <span>kseniyakolesnina@mail.ru</span>
              </li>
              <li className="flex items-center space-x-2 text-blue-200">
                <Phone className="w-4 h-4 text-pink-400" />
                <span>+7 (965) 339-52-47</span>
              </li>
              <li className="flex items-center space-x-2 text-blue-200">
                <MapPin className="w-4 h-4 text-pink-400" />
                <span>г. Москва, Измайловский бул., 19</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-pink-300">Мы в соцсетях</h4>
            <div className="flex flex-col space-y-3">

              <button 
                onClick={() => openLink(telegramAppLink, telegramLink)}
                className="flex items-center space-x-3 bg-blue-800/50 hover:bg-blue-600 p-2 rounded-lg transition-all group text-left w-full"
              >
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.6-1.38-.97-2.23-1.56-.99-.67-.35-1.04.22-1.64.15-.15 2.71-2.48 2.76-2.69.01-.03.01-.14-.05-.2-.06-.06-.16-.04-.23-.02-.1.02-1.7 1.08-4.8 3.17-.45.31-.86.46-1.23.45-.4-.01-1.18-.23-1.76-.42-.73-.24-1.31-.37-1.26-.78.03-.21.32-.43.88-.66 3.44-1.5 5.74-2.49 6.9-2.96 3.29-1.34 3.97-1.57 4.41-1.58.1 0 .32.02.46.13.12.09.15.22.16.29.01.1.01.18-.01.28z"/>
                </svg>
                <span className="text-sm text-white">Telegram-канал</span>
              </button>

              <button 
                onClick={() => openLink(maxLink, maxWebLink)}
                className="flex items-center space-x-3 bg-purple-800/50 hover:bg-purple-600 p-2 rounded-lg transition-all group text-left w-full"
              >
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20 2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h4l4 4 4-4h4c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z"/>
                </svg>
                <span className="text-sm text-white">MAX</span>
              </button>

              <button 
                onClick={() => openLink(chatAppLink, chatLink)}
                className="flex items-center space-x-3 bg-pink-800/50 hover:bg-pink-600 p-2 rounded-lg transition-all group text-left w-full"
              >
                <MessageCircle className="w-5 h-5 text-white" />
                <span className="text-sm text-white">Чат поддержки</span>
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-blue-800 mt-8 pt-8 text-center text-blue-200 text-sm">
          <p>© 2026 Счастливый ребенок. Все права защищены.</p>
          <p className="mt-2">
            Сделано с <Heart className="w-4 h-4 inline-block text-pink-500" /> для родителей и педагогов
          </p>
          <p className="mt-2 text-xs text-blue-300">
            Присоединяйтесь к нам в Telegram и MAX — будьте в курсе новостей!
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer