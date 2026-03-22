import React, { useState, useEffect } from 'react'
import { Heart, MessageCircle, Share2, Eye, User, Calendar, ArrowRight, ThumbsUp } from 'lucide-react'

const CommunityPage = () => {
  const [posts, setPosts] = useState([])
  const [selectedPost, setSelectedPost] = useState(null)
  const [newComment, setNewComment] = useState('')
  const [commentAuthor, setCommentAuthor] = useState('')
  const [likedPosts, setLikedPosts] = useState({})

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  useEffect(() => {
    const savedLikes = localStorage.getItem('likedPosts')
    if (savedLikes) {
      setLikedPosts(JSON.parse(savedLikes))
    }

    const initialPosts = [
      {
        id: 1,
        title: 'Как подготовить ребенка к детскому саду за месяц',
        excerpt: 'Пошаговый план для родителей, чтобы первый день в саду был радостным, а не стрессовым...',
        content: `
          <p>Подготовка к детскому саду начинается задолго до первого сентября. Вот что важно сделать за месяц:</p>
          <ul>
            <li><strong>Соблюдайте режим дня</strong> — просыпайтесь и ложитесь спать в одно время</li>
            <li><strong>Рассказывайте о садике</strong> — читайте книги, смотрите мультики про детский сад</li>
            <li><strong>Учите самостоятельности</strong> — одеваться, кушать, ходить на горшок</li>
            <li><strong>Знакомьтесь с территорией</strong> — погуляйте возле садика, покажите где будет играть</li>
            <li><strong>Говорите о чувствах</strong> — объясните, что мама всегда возвращается</li>
          </ul>
          <p>Главное — ваше спокойствие! Дети чувствуют настроение родителей. Верьте в своего малыша, и у вас всё получится! 💪</p>
        `,
        author: 'Анна Петрова, педагог-психолог',
        date: '15 марта 2026',
        category: 'Адаптация',
        likes: 24,
        comments: [
          { id: 1, author: 'Екатерина', text: 'Очень полезная статья! Спасибо!', date: '16 марта 2026' },
          { id: 2, author: 'Мария', text: 'А что делать, если ребенок уже ходит и плачет?', date: '17 марта 2026' }
        ]
      },
      {
        id: 2,
        title: '5 книг для мягкой адаптации к детскому саду',
        excerpt: 'Книги, которые помогут ребенку понять, что садик — это интересно и безопасно...',
        content: `
          <p>Вот подборка книг, которые станут отличными помощниками в подготовке к детскому саду:</p>
          <ol>
            <li><strong>«Просто о важном»</strong> — Наталья Ремиш</li>
            <li><strong>«Детский сад без слез»</strong> — Елена Ульева</li>
            <li><strong>«Я иду в детский сад»</strong> — Анна Кутявина</li>
            <li><strong>«Хвостик в детском саду»</strong> — Елена Ракитина</li>
            <li><strong>«Зайчик Сева идёт в детский сад»</strong> — Ася Герман</li>
          </ol>
          <p>Читайте вместе с ребенком, обсуждайте героев, их чувства и переживания. Это поможет малышу лучше понять, что его ждёт, и снизить тревожность. 📚</p>
        `,
        author: 'Елена Смирнова, библиотекарь',
        date: '10 марта 2026',
        category: 'Книги',
        likes: 42,
        comments: [
          { id: 1, author: 'Ольга', text: 'Спасибо за подборку! "Зайчик Сева" — наша любимая книга!', date: '11 марта 2026' }
        ]
      },
      {
        id: 3,
        title: 'Что положить в шкафчик: полный список',
        excerpt: 'Ничего не забыть! Чек-лист вещей для детского сада на каждый день...',
        content: `
          <p>Собрали для вас удобный чек-лист вещей, которые должны быть в шкафчике ребенка:</p>
          <ul>
            <li><strong>Одежда:</strong> футболка, трусики, носочки (запасные), колготки, шорты/штаны</li>
            <li><strong>Верхняя одежда:</strong> куртка, шапка, шарф, варежки (по сезону)</li>
            <li><strong>Обувь:</strong> уличная и сменная (чешки или сандалии)</li>
            <li><strong>Гигиена:</strong> расческа, носовые платки, влажные салфетки</li>
            <li><strong>Для творчества:</strong> фартук, папка для работ</li>
            <li><strong>Спорт:</strong> форма для физкультуры</li>
            <li><strong>Пижама:</strong> если есть тихий час</li>
          </ul>
          <p>📌 Важно: все вещи подписать! Используйте маркировку одежды или несмываемый маркер.</p>
        `,
        author: 'Мария Козлова, мама двоих детей',
        date: '5 марта 2026',
        category: 'Чек-лист',
        likes: 67,
        comments: [
          { id: 1, author: 'Светлана', text: 'Спасибо! Очень удобный список', date: '6 марта 2026' }
        ]
      },
      {
        id: 4,
        title: 'Первые дни в саду: как пережить утренние расставания',
        excerpt: 'Советы психолога, которые помогут сделать утро добрым и спокойным...',
        content: `
          <p>Утренние расставания — самый сложный момент адаптации. Вот что поможет:</p>
          <ul>
            <li><strong>Создайте ритуал прощания</strong> — поцелуй, обнимашки, секретное рукопожатие</li>
            <li><strong>Не затягивайте прощание</strong> — уверенно скажите "я вернусь" и уходите</li>
            <li><strong>Не исчезайте тайком</strong> — это подрывает доверие ребенка</li>
            <li><strong>Дайте с собой "частичку дома"</strong> — игрушку, брелок, открытку</li>
            <li><strong>Будьте спокойны</strong> — дети считывают эмоции родителей</li>
          </ul>
          <p>Помните: это временно! Через 2-3 недели большинство детей привыкают и бегут в сад с радостью. 🌞</p>
        `,
        author: 'Дмитрий Иванов, детский психолог',
        date: '1 марта 2026',
        category: 'Психология',
        likes: 89,
        comments: [
          { id: 1, author: 'Анна', text: 'Очень полезно! Особенно про ритуал прощания', date: '2 марта 2026' }
        ]
      }
    ]
    setPosts(initialPosts)
  }, [])

  const toggleLike = (postId) => {
    const newLikedPosts = { ...likedPosts }
    if (newLikedPosts[postId]) {
      delete newLikedPosts[postId]
      setPosts(posts.map(post => 
        post.id === postId ? { ...post, likes: post.likes - 1 } : post
      ))
    } else {
      newLikedPosts[postId] = true
      setPosts(posts.map(post => 
        post.id === postId ? { ...post, likes: post.likes + 1 } : post
      ))
    }
    setLikedPosts(newLikedPosts)
    localStorage.setItem('likedPosts', JSON.stringify(newLikedPosts))
  }

  const addComment = (postId) => {
    if (!newComment.trim() || !commentAuthor.trim()) {
      alert('Пожалуйста, введите имя и текст комментария')
      return
    }

    const newCommentObj = {
      id: Date.now(),
      author: commentAuthor,
      text: newComment,
      date: new Date().toLocaleDateString('ru-RU')
    }

    setPosts(posts.map(post => 
      post.id === postId 
        ? { ...post, comments: [...post.comments, newCommentObj] }
        : post
    ))
    setNewComment('')
    setCommentAuthor('')
  }

  const handleSelectPost = (post) => {
    setSelectedPost(post)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handleBackToList = () => {
    setSelectedPost(null)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  if (selectedPost) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-blue-50 to-pink-50 py-8">
        <div className="container mx-auto px-4 max-w-4xl">

          <button
            onClick={handleBackToList}
            className="mb-6 flex items-center space-x-2 text-pink-600 hover:text-pink-700 transition-colors"
          >
            <ArrowRight className="w-5 h-5 rotate-180" />
            <span>Назад к статьям</span>
          </button>

          <article className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="bg-gradient-to-r from-blue-500 to-pink-500 px-6 py-3">
              <div className="flex items-center justify-between text-white">
                <span className="text-sm font-medium">{selectedPost.category}</span>
                <span className="text-sm flex items-center space-x-1">
                  <Calendar className="w-4 h-4" />
                  <span>{selectedPost.date}</span>
                </span>
              </div>
            </div>

            <div className="p-6 md:p-8">
              <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
                {selectedPost.title}
              </h1>

              <div className="flex items-center space-x-2 text-gray-500 mb-6 pb-4 border-b border-gray-200">
                <User className="w-4 h-4" />
                <span className="text-sm">{selectedPost.author}</span>
              </div>

              <div 
                className="prose prose-lg max-w-none"
                dangerouslySetInnerHTML={{ __html: selectedPost.content }}
              />
            </div>
          </article>

          <div className="flex items-center space-x-4 mt-6 mb-8">
            <button
              onClick={() => toggleLike(selectedPost.id)}
              className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all ${
                likedPosts[selectedPost.id]
                  ? 'bg-pink-100 text-pink-600'
                  : 'bg-gray-100 text-gray-600 hover:bg-pink-50 hover:text-pink-600'
              }`}
            >
              <ThumbsUp className="w-5 h-5" />
              <span>{selectedPost.likes}</span>
            </button>
            <button className="flex items-center space-x-2 px-4 py-2 rounded-lg bg-gray-100 text-gray-600 hover:bg-blue-50 hover:text-blue-600 transition-all">
              <Share2 className="w-5 h-5" />
              <span>Поделиться</span>
            </button>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-6">
            <h3 className="text-xl font-bold text-gray-800 mb-6 flex items-center space-x-2">
              <MessageCircle className="w-5 h-5 text-pink-500" />
              <span>Комментарии ({selectedPost.comments.length})</span>
            </h3>

            <div className="mb-8 p-4 bg-gray-50 rounded-xl">
              <input
                type="text"
                placeholder="Ваше имя"
                value={commentAuthor}
                onChange={(e) => setCommentAuthor(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg mb-3 focus:outline-none focus:ring-2 focus:ring-pink-500"
              />
              <textarea
                placeholder="Напишите комментарий..."
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
                rows="3"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
              />
              <button
                onClick={() => addComment(selectedPost.id)}
                className="mt-3 bg-gradient-to-r from-blue-500 to-pink-500 text-white px-6 py-2 rounded-lg font-medium hover:from-blue-600 hover:to-pink-600 transition-all"
              >
                Отправить
              </button>
            </div>

            <div className="space-y-4">
              {selectedPost.comments.map(comment => (
                <div key={comment.id} className="p-4 border border-gray-100 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center space-x-2">
                      <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-pink-500 rounded-full flex items-center justify-center">
                        <User className="w-4 h-4 text-white" />
                      </div>
                      <span className="font-medium text-gray-800">{comment.author}</span>
                    </div>
                    <span className="text-xs text-gray-400">{comment.date}</span>
                  </div>
                  <p className="text-gray-600 ml-10">{comment.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-pink-50 py-8">
      <div className="container mx-auto px-4">

        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-pink-600 bg-clip-text text-transparent">
            Сообщество родителей и педагогов
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Полезные статьи, советы экспертов и истории родителей, которые уже прошли путь адаптации к детскому саду
          </p>
        </div>

        <div className="flex flex-wrap gap-2 justify-center mb-8">
          <button className="px-4 py-2 bg-gradient-to-r from-blue-500 to-pink-500 text-white rounded-full text-sm font-medium">
            Все статьи
          </button>
          <button className="px-4 py-2 bg-white text-gray-600 rounded-full text-sm font-medium hover:bg-pink-50 transition-all">
            Адаптация
          </button>
          <button className="px-4 py-2 bg-white text-gray-600 rounded-full text-sm font-medium hover:bg-pink-50 transition-all">
            Психология
          </button>
          <button className="px-4 py-2 bg-white text-gray-600 rounded-full text-sm font-medium hover:bg-pink-50 transition-all">
            Книги
          </button>
          <button className="px-4 py-2 bg-white text-gray-600 rounded-full text-sm font-medium hover:bg-pink-50 transition-all">
            Чек-листы
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {posts.map(post => (
            <article 
              key={post.id}
              onClick={() => handleSelectPost(post)}
              className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all cursor-pointer overflow-hidden group"
            >
              <div className="p-6">
                <div className="mb-3">
                  <span className="text-xs font-medium text-pink-600 bg-pink-50 px-2 py-1 rounded-full">
                    {post.category}
                  </span>
                </div>

                <h2 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-pink-600 transition-colors">
                  {post.title}
                </h2>

                <p className="text-gray-600 mb-4 line-clamp-2">
                  {post.excerpt}
                </p>

                <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                  <div className="flex items-center space-x-1">
                    <User className="w-3 h-3" />
                    <span>{post.author.split(',')[0]}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Calendar className="w-3 h-3" />
                    <span>{post.date}</span>
                  </div>
                </div>

                <div className="flex items-center space-x-4 pt-4 border-t border-gray-100">
                  <button 
                    onClick={(e) => {
                      e.stopPropagation()
                      toggleLike(post.id)
                    }}
                    className={`flex items-center space-x-1 text-sm transition-colors ${
                      likedPosts[post.id] 
                        ? 'text-pink-600' 
                        : 'text-gray-400 hover:text-pink-600'
                    }`}
                  >
                    <Heart className={`w-4 h-4 ${likedPosts[post.id] ? 'fill-pink-600' : ''}`} />
                    <span>{post.likes}</span>
                  </button>
                  <div className="flex items-center space-x-1 text-gray-400">
                    <MessageCircle className="w-4 h-4" />
                    <span>{post.comments.length}</span>
                  </div>
                  <div className="flex items-center space-x-1 text-gray-400">
                    <Eye className="w-4 h-4" />
                    <span>124</span>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="bg-gradient-to-r from-blue-600 to-pink-600 rounded-2xl p-8 text-white">
            <h3 className="text-xl font-bold mb-2">Хотите получать новые статьи?</h3>
            <p className="text-blue-100 mb-4">Подпишитесь на нашу рассылку</p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Ваш email"
                className="flex-1 px-4 py-2 rounded-lg text-gray-800 focus:outline-none"
              />
              <button className="bg-white text-pink-600 px-6 py-2 rounded-lg font-medium hover:bg-gray-100 transition-all">
                Подписаться
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CommunityPage