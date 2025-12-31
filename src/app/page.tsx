"use client";
import { PhotoCarousel } from "@/components/photo-carousel";
import { Countdown } from "@/components/countdown";
import { motion, Variants } from "framer-motion";

export default function Home() {
  const photos = [
    "/photos/1.jpg",
    "/photos/2.jpg",
    "/photos/3.jpg",
    "/photos/4.jpg",
    "/photos/5.jpg",
    "/photos/6.jpg",
  ];

  const footerContainer: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 1, // ⬅ espera antes de começar
        staggerChildren: 0.6, // intervalo entre parágrafos
      },
    },
  };

  const footerItem: Variants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  return (
    <main className="min-h-screen flex flex-col bg-gradient-to-b from-black via-zinc-900 to-black text-white">
      <motion.section
        className="flex flex-col flex-1 items-center justify-center text-center px-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4 }}
      >
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="
            text-4xl 
            leading-tight
            font-extrabold
            px-4
            sm:text-5xl
            mt-8
          "
        >
          FELIZ ANO NOVO
          <br />
          PRA NÓS 🎆
        </motion.h1>

        <Countdown />
      </motion.section>

      <section className="mt-8 px-3 pb-2">
        <PhotoCarousel images={photos} />
      </section>

      <motion.footer
        variants={footerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        className="px-6 py-8 text-center text-xl leading-relaxed text-zinc-400 space-y-4"
      >
        <motion.h1
          variants={footerItem}
          className="text-3xl font-bold text-zinc-200"
        >
          Oi Gata!
        </motion.h1>

        <motion.p variants={footerItem}>
          Chegamos ao fim de mais um ano, e quando olho para trás, vejo o quanto
          ele foi intenso para nós. Não foi um ano fácil — tivemos desafios,
          dias pesados, incertezas e momentos em que tudo parecia mais difícil
          do que deveria ser. Mas, mesmo assim, seguimos em frente. Juntos.
        </motion.p>

        <motion.p variants={footerItem}>
          Aprendemos que superar não é nunca cair, mas escolher levantar lado a
          lado. Em cada dificuldade, você esteve ali, sendo apoio, força e amor.
          E foi assim, passo a passo, que conseguimos transformar um ano difícil
          em um ano de crescimento.
        </motion.p>

        <motion.p variants={footerItem}>
          Construímos muitas coisas: sonhos mais fortes, uma parceria ainda mais
          sólida, aprendizados que vamos levar para a vida inteira e, acima de
          tudo, um amor mais maduro e verdadeiro. Tudo o que conquistamos só fez
          sentido porque fizemos juntos.
        </motion.p>

        <motion.p variants={footerItem}>
          Sou imensamente grato por você, pela nossa história e por não soltar
          minha mão nem nos momentos mais duros (Lá ele kkkk).
        </motion.p>

        <motion.p variants={footerItem}>
          Que o próximo ano venha com mais leveza, mais sorrisos e novos sonhos
          — e que, aconteça o que acontecer, continuemos assim: unidos, fortes e
          cheios de amor.
        </motion.p>

        <motion.p variants={footerItem} className="font-medium text-zinc-300">
          Te amo. Que venham novos começos, juntos. ✨❤️
        </motion.p>
      </motion.footer>
    </main>
  );
}
