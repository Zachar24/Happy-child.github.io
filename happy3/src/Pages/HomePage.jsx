import React from 'react'
import { Heart, Users, BookOpen, CheckCircle, ArrowRight, Download, Calendar, MessageCircle } from 'lucide-react'

const HomePage = () => {
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
    <div className="container mx-auto px-4 py-12">
      
      {/* Герой-секция */}
      <section className="text-center mb-20">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          <span className="bg-gradient-to-r from-blue-600 to-pink-600 bg-clip-text text-transparent">
            Счастливый ребенок — 
          </span>
          <br />
          <span className="text-gray-800">в руках семьи и сада</span>
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
          Единое пространство для родителей и педагогов. Бесплатный помощник на время адаптации к детскому саду.
        </p>
        <button className="bg-gradient-to-r from-blue-500 to-pink-500 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:from-blue-600 hover:to-pink-600 transition-all shadow-lg hover:shadow-xl">
          Перейти в «Карманный помощник»
        </button>
      </section>

      {/* Краткое описание */}
      <section className="bg-gradient-to-r from-blue-50 to-pink-50 rounded-2xl p-8 mb-20 border border-blue-200">
        <p className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto text-center">
          Мы объединили родителей и педагогов, чтобы поступление в детский сад было радостным, 
          а не тревожным событием. Здесь вы найдете не просто теорию, а готовые инструменты: 
          чек-листы, памятки и советы специалистов, написанные простым языком. 
          Все материалы бесплатны и доступны 24/7.
        </p>
      </section>

      {/* Преимущества */}
      <section className="mb-20">
        <h2 className="text-3xl font-bold text-center mb-12">
          <span className="bg-gradient-to-r from-blue-600 to-pink-600 bg-clip-text text-transparent">
            Почему нам можно доверять?
          </span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
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
              <div key={index} className="text-center p-6 bg-white rounded-xl shadow-md hover:shadow-xl transition-all border border-blue-100">
                <div className={`bg-gradient-to-r ${item.color} w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            )
          })}
        </div>
      </section>

      {/* Инструменты */}
      <section className="mb-20">
        <h2 className="text-3xl font-bold text-center mb-4">
          <span className="bg-gradient-to-r from-blue-600 to-pink-600 bg-clip-text text-transparent">
            Библиотека инструментов
          </span>
        </h2>
        <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          Бесплатные материалы для скачивания, которые помогут вам и вашему ребенку
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {tools.map((tool, index) => {
            const Icon = tool.icon
            return (
              <div key={index} className="bg-white border border-blue-200 rounded-xl p-6 hover:shadow-xl transition-all group">
                <div className={`bg-gradient-to-r ${tool.color} w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-semibold text-lg mb-1 text-gray-800">{tool.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{tool.description}</p>
                <button className={`text-transparent bg-gradient-to-r ${tool.color} bg-clip-text font-medium flex items-center group-hover:underline`}>
                  Скачать <ArrowRight className="w-4 h-4 ml-1" />
                </button>
              </div>
            )
          })}
        </div>
      </section>

      {/* Результаты */}
      <section className="bg-gradient-to-r from-blue-600 to-pink-600 text-white rounded-2xl p-12 mb-20">
        <h2 className="text-3xl font-bold text-center mb-12">
          Когда семья и сад действуют сообща, выигрывает ребенок
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
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
              <div key={index} className="text-center p-6 bg-white/10 rounded-xl backdrop-blur-sm">
                <div className="bg-white/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-blue-100">{item.description}</p>
              </div>
            )
          })}
        </div>
      </section>

      {/* Призыв к действию */}
      <section className="text-center">
        <h2 className="text-3xl font-bold mb-4 text-gray-800">Готовы начать?</h2>
        <p className="text-gray-600 mb-8 max-w-xl mx-auto">
          Присоединяйтесь к сообществу родителей и педагогов уже сегодня
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-gradient-to-r from-blue-500 to-pink-500 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-600 hover:to-pink-600 transition-all shadow-lg">
            Зарегистрироваться
          </button>
          <button className="border-2 border-pink-500 text-pink-600 px-8 py-3 rounded-lg font-semibold hover:bg-pink-50 transition-all">
            Узнать больше
          </button>
        </div>
      </section>
    </div>
  )
}

export default HomePage