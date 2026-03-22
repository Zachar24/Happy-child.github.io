import React from 'react'
import { MessageCircle, Headphones, Mail, Phone, Clock, Send, HelpCircle, BookOpen } from 'lucide-react'

const AssistantPage = () => {
  const [message, setMessage] = React.useState('')
  const [messages, setMessages] = React.useState([
    { id: 1, text: 'Здравствуйте! Я виртуальный помощник проекта "Счастливый ребенок". Чем могу помочь?', sender: 'bot', time: '10:00' }
  ])
  const [isTyping, setIsTyping] = React.useState(false)
  
  const chatContainerRef = React.useRef(null)

  // Скролл вниз при добавлении новых сообщений (только если пользователь внизу)
  const scrollToBottom = () => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight
    }
  }

  // Автоскролл при новых сообщениях
  React.useEffect(() => {
    scrollToBottom()
  }, [messages])

  const handleSendMessage = () => {
    if (!message.trim()) return

    // Добавляем сообщение пользователя
    setMessages(prev => [...prev, {
      id: Date.now(),
      text: message,
      sender: 'user',
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    }])
    setMessage('')
    setIsTyping(true)

    // Имитация ответа
    setTimeout(() => {
      const userMessage = message.toLowerCase()
      let response = 'Спасибо за вопрос! Наши специалисты свяжутся с вами в ближайшее время. А пока вы можете ознакомиться с нашими материалами в разделе "Библиотека инструментов".'
      
      if (userMessage.includes('адаптация')) {
        response = 'Адаптация к детскому саду — важный этап. Рекомендую начать с чек-листа "Готов ли ребенок к саду?" в разделе "Библиотека инструментов". Также у нас есть памятки для родителей и советы психологов.'
      } else if (userMessage.includes('чек-лист') || userMessage.includes('памятка')) {
        response = 'Все чек-листы и памятки доступны бесплатно в разделе "Библиотека инструментов" на главной странице. Там вы найдете: "Готов ли ребенок к саду?", "Что положить в шкафчик?", список книг и дневник адаптации.'
      } else if (userMessage.includes('регистрация')) {
        response = 'Чтобы зарегистрироваться, нажмите кнопку "Регистрация" в правом верхнем углу. Это займет всего минуту, и вы получите доступ к дополнительным материалам и возможности задавать вопросы экспертам!'
      } else if (userMessage.includes('педагог')) {
        response = 'Для педагогов у нас есть специальные материалы: методические рекомендации, советы по работе с родителями и адаптации детей. Также вы можете задать вопросы нашим экспертам через эту форму!'
      }
      
      setMessages(prev => [...prev, {
        id: Date.now() + 1,
        text: response,
        sender: 'bot',
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      }])
      setIsTyping(false)
    }, 1000)
  }

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSendMessage()
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-pink-50 py-8 sm:py-12">
      <div className="container mx-auto px-4 max-w-6xl">
        
        {/* Заголовок */}
        <div className="text-center mb-8 sm:mb-12">
          <h1 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-blue-600 to-pink-600 bg-clip-text text-transparent">
            Карманный помощник
          </h1>
          <p className="text-gray-600 mt-2">Ваш личный консультант по адаптации к детскому саду</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          
          {/* Левая колонка - информация */}
          <div className="lg:col-span-1 space-y-6">
            
            {/* Контактная информация */}
            <div className="bg-white rounded-2xl shadow-lg p-6 border border-blue-100">
              <h2 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
                <Headphones className="w-5 h-5 text-pink-500 mr-2" />
                Связь с поддержкой
              </h2>
              <div className="space-y-3">
                <div className="flex items-center space-x-3 text-gray-600">
                  <Mail className="w-4 h-4 text-blue-500" />
                  <span className="text-sm">kseniyakolesnina@mail.ru</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-600">
                  <Phone className="w-4 h-4 text-pink-500" />
                  <span className="text-sm">+7 (965) 339-52-47</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-600">
                  <Clock className="w-4 h-4 text-purple-500" />
                  <span className="text-sm">Ежедневно: 9:00 - 21:00</span>
                </div>
              </div>
            </div>

            {/* Быстрые ответы */}
            <div className="bg-gradient-to-r from-blue-50 to-pink-50 rounded-2xl p-6 border border-blue-100">
              <h2 className="text-lg font-semibold text-gray-800 mb-3 flex items-center">
                <HelpCircle className="w-5 h-5 text-pink-500 mr-2" />
                Частые вопросы
              </h2>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-start space-x-2">
                  <span className="text-pink-500">•</span>
                  <span>Как подготовить ребенка к саду?</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-pink-500">•</span>
                  <span>Что положить в шкафчик?</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-pink-500">•</span>
                  <span>Сколько длится адаптация?</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-pink-500">•</span>
                  <span>Как общаться с воспитателем?</span>
                </li>
              </ul>
              <button className="mt-4 text-sm text-pink-600 hover:text-blue-600 transition-colors">
                Все вопросы →
              </button>
            </div>

            {/* Полезные ссылки */}
            <div className="bg-white rounded-2xl shadow-lg p-6 border border-blue-100">
              <h2 className="text-lg font-semibold text-gray-800 mb-3 flex items-center">
                <BookOpen className="w-5 h-5 text-blue-500 mr-2" />
                Полезные материалы
              </h2>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="text-gray-600 hover:text-pink-600 transition-colors">📋 Чек-лист подготовки к саду</a></li>
                <li><a href="#" className="text-gray-600 hover:text-pink-600 transition-colors">📚 Список книг для адаптации</a></li>
                <li><a href="#" className="text-gray-600 hover:text-pink-600 transition-colors">🎮 Игры для знакомства с садом</a></li>
                <li><a href="#" className="text-gray-600 hover:text-pink-600 transition-colors">📝 Дневник адаптации</a></li>
              </ul>
            </div>
          </div>

          {/* Правая колонка - чат */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-blue-200 flex flex-col h-[600px]">
              
              {/* Заголовок чата */}
              <div className="bg-gradient-to-r from-blue-600 to-pink-600 text-white p-4">
                <div className="flex items-center space-x-3">
                  <div className="bg-white/20 p-2 rounded-full">
                    <MessageCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <h2 className="font-semibold">Чат с поддержкой</h2>
                    <p className="text-xs text-blue-100">Отвечаем быстро • Онлайн</p>
                  </div>
                </div>
              </div>

              {/* Сообщения - с ref для скролла */}
              <div 
                ref={chatContainerRef}
                className="flex-1 overflow-y-auto p-4 bg-gradient-to-b from-blue-50 to-pink-50"
              >
                {messages.map((msg) => (
                  <div
                    key={msg.id}
                    className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'} mb-3`}
                  >
                    <div
                      className={`max-w-[80%] p-3 rounded-xl ${
                        msg.sender === 'user'
                          ? 'bg-gradient-to-r from-blue-500 to-pink-500 text-white rounded-br-none'
                          : 'bg-white border border-blue-200 text-gray-700 rounded-bl-none'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-xs opacity-70">{msg.time}</span>
                      </div>
                      <p className="text-sm">{msg.text}</p>
                    </div>
                  </div>
                ))}
                
                {isTyping && (
                  <div className="flex justify-start mb-3">
                    <div className="bg-white border border-blue-200 p-3 rounded-xl rounded-bl-none">
                      <div className="flex space-x-1">
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Поле ввода */}
              <div className="p-4 border-t border-blue-100 bg-white">
                <div className="flex items-center space-x-2">
                  <textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder="Напишите ваш вопрос..."
                    className="flex-1 p-3 border border-blue-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-500 resize-none text-sm"
                    rows="2"
                  />
                  <button
                    onClick={handleSendMessage}
                    disabled={!message.trim()}
                    className="bg-gradient-to-r from-blue-500 to-pink-500 text-white p-3 rounded-xl hover:from-blue-600 hover:to-pink-600 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <Send className="w-5 h-5" />
                  </button>
                </div>
                <p className="text-xs text-gray-400 mt-2 text-center">
                  Напишите: адаптация, чек-лист, регистрация, педагог
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AssistantPage