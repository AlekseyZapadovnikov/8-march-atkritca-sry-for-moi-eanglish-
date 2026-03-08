import { motion } from "motion/react";
import { CalendarDays, Users, Globe, Flag } from "lucide-react";

const historyEvents = [
  {
    year: "1857",
    title: "Марш пустых кастрюль",
    description: "Работницы текстильных фабрик в Нью-Йорке вышли на улицы, требуя улучшения условий труда, 10-часового рабочего дня и равной оплаты с мужчинами.",
    icon: <Users className="w-6 h-6 text-rose-500" />,
    image: "/images/history1.jpg"
  },
  {
    year: "1908",
    title: "Новый протест в Нью-Йорке",
    description: "Более 15 000 женщин прошли маршем через весь город, требуя сокращения рабочего дня, лучших условий оплаты и предоставления права голоса.",
    icon: <Flag className="w-6 h-6 text-rose-500" />,
    image: "/images/history2.jpg"
  },
  {
    year: "1910",
    title: "Инициатива Клары Цеткин",
    description: "На Международной конференции женщин-социалисток в Копенгагене Клара Цеткин предложила учредить Международный женский день для привлечения внимания к борьбе женщин за свои права.",
    icon: <Globe className="w-6 h-6 text-rose-500" />,
    image: "/images/history3.jpg"
  },
  {
    year: "1917",
    title: "Начало перемен в России",
    description: "Забастовка текстильщиц в Петрограде (23 февраля по старому стилю, 8 марта по новому) стала одним из катализаторов Февральской революции, после которой женщины получили право голоса.",
    icon: <CalendarDays className="w-6 h-6 text-rose-500" />,
    image: "/images/history4.jpg"
  }
];

export default function History() {
  return (
    <section className="py-24 md:py-32 px-6 bg-white relative overflow-hidden">
      <div className="max-w-4xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="font-serif text-4xl md:text-6xl text-ink mb-6">Как всё начиналось</h2>
          <p className="text-lg text-ink/70 max-w-2xl mx-auto font-light leading-relaxed">
            8 Марта — это не просто праздник весны и цветов. Это день солидарности женщин во многих странах в борьбе за равные права и эмансипацию.
          </p>
        </motion.div>

        <div className="relative mx-auto max-w-3xl">
          {/* Vertical Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-rose-200 -translate-x-1/2"></div>

          {historyEvents.map((event, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`relative flex items-center justify-between mb-16 w-full ${
                index % 2 === 0 ? 'md:flex-row-reverse' : 'md:flex-row'
              } flex-row`}
            >
              {/* Timeline dot */}
              <div className="absolute left-8 md:left-1/2 w-12 h-12 bg-rose-50 rounded-full border border-rose-200 flex items-center justify-center -translate-x-1/2 z-10">
                {event.icon}
              </div>
              
              {/* Empty space for alternating layout on desktop */}
              <div className="hidden md:block w-5/12"></div>

              {/* Content Card */}
              <div className="w-full md:w-5/12 pl-20 md:pl-0">
                <div className={`bg-paper p-6 md:p-8 rounded-2xl shadow-sm border border-rose-100 hover:shadow-md hover:-translate-y-1 transition-all duration-300 ${
                  index % 2 === 0 ? 'md:text-right' : 'md:text-left'
                }`}>
                  <span className="inline-block text-rose-600 font-serif text-3xl md:text-4xl mb-3">{event.year}</span>
                  <h3 className="text-xl md:text-2xl font-medium text-ink mb-4">{event.title}</h3>
                  <img src={event.image} alt={event.title} className="w-full h-48 object-cover rounded-xl mb-4 shadow-sm" />
                  <p className="text-ink/70 leading-relaxed font-light">{event.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
