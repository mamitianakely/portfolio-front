"use client";

import { motion } from "framer-motion";
import type { Variants } from "framer-motion";

const container: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
    },
  },
};

export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen flex flex-col items-center justify-center px-6 
      bg-[#0A0A0A] text-[#F5F5F5]
      border-b border-[#CC1E1E]/20 overflow-hidden"
    >
      <motion.div
        className="max-w-4xl text-center"
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, margin: "-100px" }}
      >
        {/* ================= TITRE ================= */}
        <motion.h2
          variants={item}
          className="text-4xl font-bold mb-6 
          text-[#CC1E1E] drop-shadow-[0_0_10px_rgba(204,30,30,0.5)]"
        >
          À propos de moi
        </motion.h2>

        {/* ================= TEXTE ================= */}
        <motion.p
          variants={item}
          className="text-lg md:text-xl mb-8 max-w-2xl mx-auto 
          text-gray-300 leading-relaxed"
        >
          Je suis{" "}
          <span className="font-semibold text-[#FF4B4B]">
            Mamitiana Christiano
          </span>
          , un développeur FullStack junior passionné par la conception
          d’applications{" "}
          <span className="text-[#FF4B4B]">web</span> et{" "}
          <span className="text-[#FF4B4B]">mobiles</span>, modernes,
          rapides et élégantes. Basé à{" "}
          <span className="text-white font-semibold">Antananarivo</span>,
          je suis motivé, disponible et prêt à me déplacer si nécessaire.
        </motion.p>

        {/* ================= BOUTON CV ================= */}
        <motion.a
          variants={item}
          href="/CV RAKOTOZANDRY Mamitiana Christiano.pdf"
          download
          whileHover={{ scale: 1.08, y: -3 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 300 }}
          className="inline-block px-6 py-3 rounded-full font-semibold text-white 
          bg-[#CC1E1E] shadow-[0_0_12px_rgba(204,30,30,0.6)] 
          hover:bg-[#FF4B4B] hover:shadow-[0_0_18px_rgba(255,75,75,0.7)]
          transition-all duration-300"
        >
          Télécharger mon CV
        </motion.a>

        {/* ================= SKILLS ================= */}
        <motion.div variants={item} className="pt-12">
          <h3
            className="text-2xl font-semibold mb-8 text-[#CC1E1E]
            drop-shadow-[0_0_10px_rgba(204,30,30,0.5)]"
          >
            Technologies que je maîtrise
          </h3>

          <motion.div
            className="flex flex-wrap justify-center gap-8"
            variants={container}
          >
            {[
              "/react.png",
              "/next.png",
              "/tailwind.png",
              "/kotlin.png",
              "/laravel.png",
              "/node.png",
              "/express.png",
              "/python.jpeg",
              "/django.jpeg",
              "/postgres.png",
              "/figma.jpeg",
            ].map((src, i) => (
              <motion.img
                key={i}
                src={src}
                alt="skill"
                variants={item}
                whileHover={{
                  scale: 1.25,
                  rotate: 3,
                }}
                transition={{ type: "spring", stiffness: 300 }}
                className="w-14 h-14 cursor-pointer
                drop-shadow-[0_0_10px_rgba(255,75,75,0.3)]"
              />
            ))}
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
