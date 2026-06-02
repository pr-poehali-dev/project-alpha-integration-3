import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function FAQ() {
  const faqs = [
    {
      question: "С какого уровня можно начать обучение?",
      answer:
        "Принимаю студентов с любым уровнем — от полного нуля до продвинутого. На первом уроке определяем ваш уровень и составляем план занятий.",
    },
    {
      question: "Сколько времени нужно для подготовки к TOEFL/IELTS?",
      answer:
        "В среднем 2–4 месяца при занятиях 2–3 раза в неделю. Срок зависит от вашего текущего уровня и желаемого балла. Обсудим конкретно на первой встрече.",
    },
    {
      question: "Какой формат занятий?",
      answer:
        "Все занятия проходят онлайн через Zoom или Google Meet. Длительность — 60 минут. Записи уроков остаются у вас.",
    },
    {
      question: "Можно ли перенести урок?",
      answer:
        "Да, урок можно перенести бесплатно при уведомлении минимум за 24 часа. Просто напишите мне заранее.",
    },
    {
      question: "Чем TOEFL IBT отличается от IELTS?",
      answer:
        "TOEFL IBT чаще требуется для поступления в американские университеты, IELTS — для учёбы и эмиграции в Великобританию, Канаду, Австралию. Помогу выбрать нужный экзамен под вашу цель.",
    },
    {
      question: "Есть ли пакетные предложения?",
      answer:
        "Да! Предлагаю пакеты из 5 и 10 уроков со скидкой. Свяжитесь со мной для уточнения актуальных условий.",
    },
  ]

  return (
    <section id="faq" className="bg-muted/30 py-20 md:py-32">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-accent font-semibold text-sm uppercase tracking-wide">Вопросы?</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 text-balance">
            Частые вопросы
          </h2>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="bg-card border border-border rounded-lg px-6">
              <AccordionTrigger className="text-foreground font-semibold hover:text-accent">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}