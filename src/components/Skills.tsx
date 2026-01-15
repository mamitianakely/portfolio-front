"use client";

import { motion, type Variants } from "framer-motion";

export default function Skills() {
  /* ======================
     Variants
  ====================== */
  const container: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const item: Variants = {
    hidden: {
      opacity: 0,
      y: 40,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
      },
    },
  };

  return (
    <section
      id="skills"
      className="min-h-screen flex flex-col items-center justify-center px-6
      bg-[#0A0909] text-gray-100 transition-colors duration-300"
    >
      {/* Titre */}
      <motion.div
        className="text-center mb-14"
        variants={item}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false }}
      >
        <h2 className="text-4xl font-extrabold text-white tracking-wide drop-shadow-[0_0_10px_#B30000]">
          Mes Compétences
        </h2>
        <p className="text-lg mt-4 opacity-80 text-gray-300 max-w-2xl mx-auto">
          Voici les technologies et outils que je maîtrise dans le web, le mobile et le design.
        </p>
      </motion.div>

      {/* Cartes */}
      <motion.div
        className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, margin: "-100px" }}
      >
        {/* ================= Web ================= */}
        <motion.div
          variants={item}
          whileHover={{ y: -6 }}
          className="p-8 rounded-2xl bg-[#0D0D0D]/70 border border-red-900/40
          shadow-[0_0_15px_#7A0000] hover:shadow-[0_0_20px_#B30000]
          transition-all duration-300"
        >
          <div className="flex items-center gap-3 mb-6">
            <img src="/web.png" alt="Web Icon" className="w-10 h-10" />
            <h3 className="text-2xl font-semibold text-white drop-shadow-[0_0_6px_#B30000]">
              Développement Web
            </h3>
          </div>

          <p className="mb-6 opacity-80 text-gray-300">
            Construction d'applications web modernes, performantes et sécurisées.
          </p>

          <div className="flex flex-wrap gap-5">
            {[
              "/react.png",
              "/tailwind.png",
              "/js.png",
              "/laravel.png",
              "/next.png",
              "/node.png",
              "/postgres.png",
              "/django.jpeg",
            ].map((src, i) => (
              <motion.img
                key={i}
                src={src}
                className="w-12 h-12"
                whileHover={{ scale: 1.15 }}
                transition={{ duration: 0.2 }}
              />
            ))}
          </div>
        </motion.div>

        {/* ================= Mobile ================= */}
        <motion.div
          variants={item}
          whileHover={{ y: -6 }}
          className="p-8 rounded-2xl bg-[#0D0D0D]/70 border border-red-900/40
          shadow-[0_0_15px_#7A0000] hover:shadow-[0_0_20px_#B30000]
          transition-all duration-300"
        >
          <div className="flex items-center gap-3 mb-6">
            <img src="/android.png" alt="Android Icon" className="w-10 h-10" />
            <h3 className="text-2xl font-semibold text-white drop-shadow-[0_0_6px_#B30000]">
              Développement Android
            </h3>
          </div>

          <p className="mb-6 opacity-80 text-gray-300">
            Création d'applications mobiles Android performantes avec Kotlin.
          </p>

          <div className="flex flex-wrap gap-5">
            {[
              "/kotlin.png",
              "/java.png",
              "/node.png",
              "/django.jpeg",
              "/postgres.png",
            ].map((src, i) => (
              <motion.img
                key={i}
                src={src}
                className="w-12 h-12"
                whileHover={{ scale: 1.15 }}
                transition={{ duration: 0.2 }}
              />
            ))}
          </div>
        </motion.div>

        {/* ================= UX / UI ================= */}
        <motion.div
          variants={item}
          whileHover={{ y: -6 }}
          className="p-8 rounded-2xl bg-[#0D0D0D]/70 border border-red-900/40
          shadow-[0_0_15px_#7A0000] hover:shadow-[0_0_20px_#B30000]
          transition-all duration-300"
        >
          <div className="flex items-center gap-3 mb-6">
            <img src="/uiux.png" alt="UI UX Icon" className="w-10 h-10" />
            <h3 className="text-2xl font-semibold text-white drop-shadow-[0_0_6px_#B30000]">
              Designer UX / UI
            </h3>
          </div>

          <p className="mb-6 opacity-80 text-gray-300">
            Création de maquettes modernes, ergonomiques et orientées utilisateur avec Figma.
          </p>

          <div className="flex flex-wrap gap-5">
            {["/figma.jpeg", "/ux.jpeg", "/ui.png"].map((src, i) => (
              <motion.img
                key={i}
                src={src}
                className="w-14 h-14"
                whileHover={{ scale: 1.15 }}
                transition={{ duration: 0.2 }}
              />
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
