import React from 'react'
import { Heart, Users, BookOpen, CheckCircle, ArrowRight, Download, Calendar } from 'lucide-react'

const HomePage = ({ onNavigate }) => {
  const [something, setIsChatOpen] = React.useState(false)
  const tools = [
    { 
      title: 'Чек-лист', 
      description: '«Готов ли ребенок к саду?»',
      color: 'from-blue-500 to-blue-600',
      icon: CheckCircle
    },
    { 
      title: 'Памятка', 
      description: '«Что положить в шкафчик?»',
      color: 'from-pink-500 to-pink-600',
      icon: Download
    },
    { 
      title: 'Список', 
      description: 'Книг и игр для подготовки',
      color: 'from-purple-500 to-purple-600',
      icon: BookOpen
    },
    { 
      title: 'Дневник', 
      description: 'Адаптации ребенка',
      color: 'from-indigo-500 to-indigo-600',
      icon: Calendar
    },
  ]

  return (
    <article className="w-full">
      <section className="text-center mb-12 sm:mb-16 lg:mb-20">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 px-4">
          <span className="bg-gradient-to-r from-blue-600 to-pink-600 bg-clip-text text-transparent">
            Счастливый ребенок — 
          </span>
          <br className="hidden xs:block" />
          <span className="text-gray-800"> в руках семьи и сада</span>
        </h1>
        <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mb-6 sm:mb-8 px-4">
          Единое пространство для родителей и педагогов. Бесплатный помощник на время адаптации к детскому саду.
        </p>
        <button 
          onClick={() => onNavigate('assistant')}
          className="bg-gradient-to-r from-blue-500 to-pink-500 text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-lg text-base sm:text-lg font-semibold hover:from-blue-600 hover:to-pink-600 transition-all shadow-lg hover:shadow-xl"
        >
          Перейти в «Карманный помощник»
        </button>
      </section>

      <section className="bg-gradient-to-r from-blue-50 to-pink-50 rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 mb-12 sm:mb-16 lg:mb-20 mx-4 sm:mx-6 lg:mx-0 border border-blue-200">
        <p className="text-sm sm:text-base lg:text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto text-center">
          Мы объединили родителей и педагогов, чтобы поступление в детский сад было радостным, 
          а не тревожным событием. Здесь вы найдете не просто теорию, а готовые инструменты: 
          чек-листы, памятки и советы специалистов, написанные простым языком. 
          Все материалы бесплатны и доступны 24/7.
        </p>
      </section>

      <section className="mb-12 sm:mb-16 lg:mb-20 px-4 sm:px-6 lg:px-0">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-12">
          <span className="bg-gradient-to-r from-blue-600 to-pink-600 bg-clip-text text-transparent">
            Почему нам можно доверять?
          </span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          
          {[
            { 
              icon: Heart, 
              title: 'Компетентно', 
              description: 'Материалы созданы при участии практикующих студентов педагогических направлений, психологов и педагогов ДОУ.',
              color: 'from-blue-500 to-blue-600'
            },
            { 
              icon: CheckCircle, 
              title: 'Актуально', 
              description: 'Информация соответствует принципам ФГОС ДО и учитывает реальные потребности современных родителей.',
              color: 'from-pink-500 to-pink-600'
            },
            { 
              icon: Users, 
              title: 'Доступно', 
              description: 'Вся информация в открытом бесплатном доступе 24/7. Простым языком о сложном.',
              color: 'from-purple-500 to-purple-600'
            },
          ].map((item, index) => {
            const Icon = item.icon
            return (
              <div key={index} className="text-center p-4 sm:p-6 bg-white rounded-xl shadow-md hover:shadow-xl transition-all border border-blue-100">
                <div className={`bg-gradient-to-r ${item.color} w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4 shadow-lg`}>
                  <Icon className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-white" />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold mb-2 text-gray-800">{item.title}</h3>
                <p className="text-sm sm:text-base text-gray-600">{item.description}</p>
              </div>
            )
          })}
        </div>
      </section>

      <section className="mb-12 sm:mb-16 lg:mb-20 px-4 sm:px-6 lg:px-0">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-2 sm:mb-3">
          <span className="bg-gradient-to-r from-blue-600 to-pink-600 bg-clip-text text-transparent">
            Библиотека инструментов для родителей
          </span>
        </h2>
        <p className="text-sm sm:text-base text-gray-600 text-center mb-8 sm:mb-12 max-w-2xl mx-auto">
          Бесплатные материалы для скачивания, которые помогут вам и вашему ребенку
        </p>

        <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6">
          {tools.map((tool, index) => {
            const Icon = tool.icon
            return (
              <div key={index} className="bg-white border border-blue-200 rounded-lg sm:rounded-xl p-4 sm:p-5 lg:p-6 hover:shadow-xl transition-all group">
                <div className={`bg-gradient-to-r ${tool.color} w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 rounded-lg flex items-center justify-center mb-3 sm:mb-4 group-hover:scale-110 transition-transform`}>
                  <Icon className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-white" />
                </div>
                <h3 className="font-semibold text-base sm:text-lg mb-1 text-gray-800">{tool.title}</h3>
                <p className="text-gray-600 text-xs sm:text-sm mb-3 sm:mb-4">{tool.description}</p>
                <button className={`text-xs sm:text-sm text-transparent bg-gradient-to-r ${tool.color} bg-clip-text font-medium flex items-center group-hover:underline`}>
                  Скачать <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 ml-1" />
                </button>
              </div>
            )
          })}
        </div>
      </section>

      <section className="bg-gradient-to-r from-blue-600 to-pink-600 text-white rounded-xl sm:rounded-2xl p-6 sm:p-8 lg:p-12 mb-12 sm:mb-16 lg:mb-20 mx-4 sm:mx-6 lg:mx-0">
        <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-center mb-6 sm:mb-8 lg:mb-12">
          Когда семья и сад действуют сообща, выигрывает ребенок
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          
          {[
            { 
              icon: Users, 
              title: 'Для родителей',
              description: 'Уходит тревожность, появляется уверенность и понимание потребностей ребенка'
            },
            { 
              icon: Heart, 
              title: 'Для ребенка',
              description: 'Адаптация проходит мягко и быстро, ребенок чувствует себя защищенным'
            },
            { 
              icon: BookOpen, 
              title: 'Для детского сада',
              description: 'Растет доверие к педагогам, снижается количество конфликтов'
            },
          ].map((item, index) => {
            const Icon = item.icon
            return (
              <div key={index} className="text-center p-4 sm:p-5 lg:p-6 bg-white/10 rounded-lg sm:rounded-xl backdrop-blur-sm">
                <div className="bg-white/20 w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                  <Icon className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7" />
                </div>
                <h3 className="text-base sm:text-lg lg:text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-xs sm:text-sm lg:text-base text-blue-100">{item.description}</p>
              </div>
            )
          })}
        </div>
      </section>

      <section className="text-center px-4 mt-8 sm:mt-12">
        <h2 className="text-lg sm:text-xl lg:text-2xl font-bold mb-2 text-gray-800">Готовы начать?</h2>
        <p className="text-xs sm:text-sm text-gray-600 mb-4 max-w-xl mx-auto">
          Присоединяйтесь к сообществу родителей и педагогов
        </p>
        <div className="flex flex-col xs:flex-row gap-2 justify-center">
          <button 
            onClick={() => onNavigate('register')}
            className="bg-gradient-to-r from-blue-500 to-pink-500 text-white px-4 sm:px-5 py-2 sm:py-2.5 rounded-lg text-xs sm:text-sm font-medium hover:from-blue-600 hover:to-pink-600 transition-all shadow-sm"
          >
            Зарегистрироваться
          </button>
          <button 
            onClick={() => onNavigate('about')}
            className="border border-pink-500 text-pink-600 px-4 sm:px-5 py-2 sm:py-2.5 rounded-lg text-xs sm:text-sm font-medium hover:bg-pink-50 transition-all"
          >
            Узнать больше
          </button>
        </div>
      </section>
    </article>
  )
}

export default HomePage