import React from 'react'
import { Heart, Users, BookOpen, MessageCircle, Sparkles, ArrowRight } from 'lucide-react'

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 via-white to-pink-50">

      <section className="relative overflow-hidden bg-gradient-to-r from-blue-600 via-pink-500 to-purple-600 text-white py-20">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-40 h-40 bg-white rounded-full"></div>
          <div className="absolute bottom-10 right-10 w-60 h-60 bg-white rounded-full"></div>
        </div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Проект «Уютный переход: <br />в садик с любовью»
          </h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Современные подходы к адаптации, чтобы первый шаг в сад был мягким и радостным.
          </p>
          <div className="flex justify-center space-x-2 mt-8">
            <Heart className="w-6 h-6 text-pink-200" />
            <Heart className="w-6 h-6 text-pink-200" />
            <Heart className="w-6 h-6 text-pink-200" />
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16 max-w-4xl">

        <section className="bg-white rounded-2xl shadow-xl p-8 md:p-12 mb-12 border border-pink-100">
          <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-pink-600 bg-clip-text text-transparent">
            Садик без слез? Это возможно! 🌿
          </h2>
          
          <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
            <p>
              Первый поход в детский сад — важный шаг не только для малыша, но и для всей семьи. 
              Как часто этот праздник омрачается тревогой, страхом разлуки и утренними капризами... 
              Мы уверены: так быть не должно!
            </p>
            
            <div className="bg-gradient-to-r from-blue-50 to-pink-50 p-6 rounded-xl border-l-4 border-pink-500">
              <p className="font-medium">
                «Уютный переход: в садик с любовью» — это проект, созданный студентами педагогического колледжа 
                специально для вас. Мы объединили свежие знания современной педагогики, мудрость опытных 
                наставников и реальные лайфхаки от родителей, чтобы превратить адаптацию в бережное и 
                радостное приключение.
              </p>
            </div>
            
            <p>
              Здесь вы не найдете сухих лекций. Только живое общение, проверенные рекомендации и поддержка 
              тех, кто действительно понимает, через что проходят мамы и папы первокурсников... то есть, 
              первосадиковцев 😉
            </p>
            
            <div className="flex items-center space-x-2 text-pink-600 font-medium">
              <Sparkles className="w-5 h-5" />
              <p>Присоединяйтесь к нашему уютному сообществу. Вместе мы сделаем первый шаг в большой мир мягким!</p>
            </div>
          </div>
        </section>

        <section className="bg-gradient-to-r from-blue-600 to-pink-600 text-white rounded-2xl shadow-xl p-8 md:p-12 mb-12">
          <h2 className="text-3xl font-bold mb-8 text-center">Почему вам стоит быть с нами?</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            <div className="text-center p-6 bg-white/10 rounded-xl backdrop-blur-sm">
              <div className="bg-white/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <BookOpen className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-3">🏡 Советы экспертов</h3>
              <p className="text-blue-100">
                Студенты педагогического колледжа под чутким руководством наставников делятся 
                самыми актуальными и бережными методиками адаптации.
              </p>
            </div>

            <div className="text-center p-6 bg-white/10 rounded-xl backdrop-blur-sm">
              <div className="bg-white/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-3">👪 Опыт живых людей</h3>
              <p className="text-blue-100">
                Мы собираем лайфхаки от родителей, которые уже прошли этот путь. Никакой теории — 
                только то, что работает на практике.
              </p>
            </div>

            <div className="text-center p-6 bg-white/10 rounded-xl backdrop-blur-sm">
              <div className="bg-white/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <MessageCircle className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-3">🤝 Культура общения</h3>
              <p className="text-blue-100">
                Рассказываем, как выстроить здоровые отношения с воспитателями и стать с ними 
                одной командой в интересах вашего ребенка.
              </p>
            </div>
          </div>
          
          <p className="text-center text-xl mt-8 text-blue-100">
            Заходите к нам на огонек! Давайте растить счастливых детей без лишнего стресса ✨
          </p>
        </section>

        <section className="bg-white rounded-2xl shadow-xl p-8 md:p-12 mb-12 border border-blue-100">
          <h2 className="text-3xl font-bold mb-8 text-center bg-gradient-to-r from-blue-600 to-pink-600 bg-clip-text text-transparent">
            Что мы делаем?
          </h2>

          <div className="space-y-6">
            
            <div className="flex items-start space-x-4 p-4 hover:bg-blue-50 rounded-xl transition-all">
              <div className="bg-blue-100 p-3 rounded-full">
                <BookOpen className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800">👩‍🏫 Консультируем со знанием дела</h3>
                <p className="text-gray-600">
                  Здесь вы найдете проверенные советы психологов и педагогов о том, как подготовить 
                  ребенка к саду и поддержать его в первые недели.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4 p-4 hover:bg-pink-50 rounded-xl transition-all">
              <div className="bg-pink-100 p-3 rounded-full">
                <Users className="w-6 h-6 text-pink-600" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800">🗣 Делимся опытом</h3>
                <p className="text-gray-600">
                  Вместе с опытными родителями мы собираем реальные лайфхаки: от выбора самого 
                  удобного рюкзака до ритуалов, которые помогут легче расставаться по утрам.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4 p-4 hover:bg-purple-50 rounded-xl transition-all">
              <div className="bg-purple-100 p-3 rounded-full">
                <MessageCircle className="w-6 h-6 text-purple-600" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800">🤝 Учим общаться с воспитателями</h3>
                <p className="text-gray-600">
                  Мы расскажем, как выстроить доверительный диалог с персоналом сада, чтобы вы 
                  всегда были спокойны за своего ребенка.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4 p-4 hover:bg-indigo-50 rounded-xl transition-all">
              <div className="bg-indigo-100 p-3 rounded-full">
                <Sparkles className="w-6 h-6 text-indigo-600" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800">📚 Создаем полезный контент</h3>
                <p className="text-gray-600">
                  У нас вы не просто читаете статьи, а становитесь частью процесса: участвуете в 
                  обсуждениях, задаете вопросы и получаете поддержку от тех, кто уже это прошел.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-gradient-to-br from-blue-100 to-pink-100 rounded-2xl p-8 md:p-12 text-center">
          <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-pink-600 bg-clip-text text-transparent">
            Кто мы
          </h2>
          
          <div className="max-w-2xl mx-auto">
            <div className="flex justify-center mb-6">
              <div className="bg-white p-3 rounded-full shadow-lg">
                <Heart className="w-12 h-12 text-pink-500" />
              </div>
            </div>
            
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Мы — команда инициативных студентов, которые горят своим делом и хотят внедрять 
              современные подходы в дошкольное образование. Рядом с нами — мудрые наставники и 
              родители-практики, готовые делиться секретами своего материнства и отцовства.
            </p>
            
            <div className="bg-white p-6 rounded-xl">
              <p className="text-xl font-medium text-gray-800 mb-3">
                Присоединяйтесь к нашему уютному сообществу. Здесь каждый найдет поддержку, 
                понимание и полезные знания.
              </p>
              <p className="text-pink-600 font-semibold">
                Вместе мы сделаем переход в садик временем радостных открытий! 🏠
              </p>
            </div>
          </div>
        </section>

        <section className="text-center mt-12">
          <button className="bg-gradient-to-r from-blue-500 to-pink-500 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:from-blue-600 hover:to-pink-600 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1">
            Присоединиться к сообществу
          </button>
        </section>
      </div>
    </div>
  )
}

export default AboutPage