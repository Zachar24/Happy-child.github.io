import React from 'react'
import { Heart, Shield, Target, Users, CheckCircle, Award } from 'lucide-react'

const AboutPage = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      
      {/* Заголовок */}
      <section className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          <span className="bg-gradient-to-r from-blue-600 to-pink-600 bg-clip-text text-transparent">
            Проект «Счастливый ребенок»
          </span>
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Ваш надежный мост между семьей и детским садом
        </p>
      </section>

      {/* Миссия */}
      <section className="bg-gradient-to-r from-blue-50 to-pink-50 rounded-2xl p-8 md:p-12 mb-16">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center justify-center mb-6">
            <Target className="w-12 h-12 text-pink-600" />
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-6 text-gray-800">Наша миссия</h2>
          <p className="text-lg text-gray-700 leading-relaxed text-center">
            Сделать адаптацию ребенка мягкой и быстрой, вооружив родителей простыми и работающими 
            инструментами, а педагогам помогая выстраивать доверительные отношения с семьями.
          </p>
        </div>
      </section>

      {/* Что такое продукт */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-center mb-8">
          <span className="bg-gradient-to-r from-blue-600 to-pink-600 bg-clip-text text-transparent">
            Что такое наш продукт?
          </span>
        </h2>
        <div className="bg-white rounded-2xl p-8 shadow-lg border border-blue-100 max-w-3xl mx-auto">
          <p className="text-lg text-gray-700 leading-relaxed">
            Это ваш <span className="font-semibold text-pink-600">«карманный помощник»</span> — единое информационное поле, 
            где встречаются мамы, папы и воспитатели. Мы говорим о сложных вещах простым языком.
          </p>
        </div>
      </section>

      {/* Почему нам можно доверять */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-center mb-12">
          <span className="bg-gradient-to-r from-blue-600 to-pink-600 bg-clip-text text-transparent">
            Почему нам можно доверять?
          </span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          <div className="bg-white p-8 rounded-xl shadow-md border border-blue-100 text-center">
            <div className="bg-gradient-to-r from-blue-500 to-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Shield className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-blue-600">Компетентно</h3>
            <p className="text-gray-600">
              Все материалы созданы при участии практикующих студентов педагогических направлений, 
              психологов и педагогов ДОУ.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-md border border-pink-100 text-center">
            <div className="bg-gradient-to-r from-pink-500 to-pink-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-pink-600">Актуально</h3>
            <p className="text-gray-600">
              Информация соответствует принципам ФГОС ДО и учитывает реальные потребности 
              современных родителей.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-md border border-purple-100 text-center">
            <div className="bg-gradient-to-r from-purple-500 to-purple-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Award className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-purple-600">Доступно</h3>
            <p className="text-gray-600">
              Вся информация в открытом бесплатном доступе 24/7. Простым языком о сложном.
            </p>
          </div>
        </div>
      </section>

      {/* Что вы получите */}
      <section className="bg-gradient-to-r from-blue-600 to-pink-600 text-white rounded-2xl p-12">
        <h2 className="text-3xl font-bold text-center mb-12">Что вы получите?</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          <div className="text-center p-6">
            <div className="bg-white/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Heart className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Не просто чтение, а действие</h3>
            <p className="text-blue-100">
              Мы даем готовые памятки и чек-листы, которые можно использовать прямо сейчас
            </p>
          </div>

          <div className="text-center p-6">
            <div className="bg-white/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <MessageCircle className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Обратную связь</h3>
            <p className="text-blue-100">
              Вы можете напрямую задать вопросы представителям ДОУ
            </p>
          </div>

          <div className="text-center p-6">
            <div className="bg-white/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Сообщество</h3>
            <p className="text-blue-100">
              Поддержка специалистов и других родителей, проходящих через тот же этап
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default AboutPage