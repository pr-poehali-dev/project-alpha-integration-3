export function Benefits() {
  const benefits = [
    {
      icon: "🎯",
      title: "Индивидуальные уроки",
      description: "Программа и темп обучения адаптируются под ваш уровень и цели",
    },
    {
      icon: "📋",
      title: "Подготовка к TOEFL и IELTS",
      description: "Разбираем все секции экзамена: Speaking, Writing, Listening, Reading",
    },
    {
      icon: "🇬🇧",
      title: "Английский и немецкий",
      description: "Два языка у одного преподавателя — удобно и эффективно",
    },
    {
      icon: "⏰",
      title: "Гибкое расписание",
      description: "Занятия онлайн в любое удобное для вас время",
    },
    {
      icon: "📈",
      title: "Гарантированный прогресс",
      description: "Видите рост уровня языка уже после первых занятий",
    },
    {
      icon: "📚",
      title: "Учебные материалы в подарок",
      description: "Получаете все необходимые материалы, упражнения и практические тесты",
    },
  ]

  return (
    <section id="benefits" className="bg-background py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-accent font-semibold text-sm uppercase tracking-wide">Почему мы</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 text-balance">
            Всё для вашего результата
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Комплексный подход к изучению языков и успешной сдаче международных экзаменов
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-card border border-border rounded-xl p-8 hover:shadow-lg transition">
              <div className="text-4xl mb-4">{benefit.icon}</div>
              <h3 className="text-xl font-semibold text-foreground mb-2">{benefit.title}</h3>
              <p className="text-muted-foreground">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}