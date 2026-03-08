import { motion } from "motion/react";
import { Heart } from "lucide-react";

export default function Message() {
  return (
    <section className="py-24 md:py-32 px-6 bg-rose-50 relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] max-w-[800px] max-h-[800px] rounded-full bg-white/60 blur-3xl"></div>
      </div>

      <div className="max-w-3xl mx-auto relative z-10">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="bg-white/80 backdrop-blur-sm p-8 md:p-16 rounded-[2rem] shadow-xl shadow-rose-100/50 border border-rose-100 text-center"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 200, delay: 0.3 }}
            className="w-16 h-16 bg-rose-100 text-rose-500 rounded-full flex items-center justify-center mx-auto mb-8 relative"
          >
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            >
              <Heart className="w-8 h-8 fill-rose-500" />
            </motion.div>
            <motion.div
              animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
              transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
              className="absolute inset-0 bg-rose-200 rounded-full -z-10"
            />
          </motion.div>

          <h2 className="font-serif text-3xl md:text-5xl text-ink mb-10">Искренние слова</h2>

          <img
            src="/images/message.jpg"
            alt="Розы"
            className="w-full h-48 md:h-64 object-cover rounded-2xl mb-8 shadow-sm"
          />

          <div className="space-y-6 text-lg md:text-xl text-ink/80 font-light leading-relaxed text-left md:text-center">
            <p>
              Я замечаю, что для девушек моего возраста, причем для очень многих, очень актуальны эти идеи, а значит все не так гладко, как мне кажется.
            </p>
            <p>
              Мне бы искренне хотелось пожелать, чтобы вас всех это волновало меньше, чтобы никто из мужского пола вас не обижал и не принижал. Хотелось бы чтобы вы чувствовали себя достойно и в безопасности.
            </p>
            <p>
              Я, если честно, очень рад что в мире есть женщины, потому что, если бы в мире были бы только мужики, я бы сошёл с ума головой от их тупости, огромного эго и тупых принципов <span className="text-ink/50 text-base">(пс отношу себя ко всем этим мужикам :) )</span>
            </p>
            <p className="font-medium text-rose-600 text-2xl md:text-3xl font-serif pt-6">
              Спасибо что вы есть. С 8 марта!
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
