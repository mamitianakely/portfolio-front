"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center 
      bg-[#0A0A0A] text-[#F5F5F5] px-6
      border-b border-[#CC1E1E]/20 overflow-hidden"
    >
      <div className="max-w-6xl w-full flex flex-col md:flex-row items-center justify-between gap-10">

        {/* ================= TEXTE ================= */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="flex-1 md:pr-2 text-center md:text-left"
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-5xl md:text-6xl font-extrabold mb-3 
            drop-shadow-[0_0_15px_rgba(204,30,30,0.4)]"
          >
            Salut, Je suis{" "}
            <span className="text-[#CC1E1E]">Mamitiana Christiano</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-lg md:text-xl mb-6 max-w-md mx-auto md:mx-0 text-gray-300"
          >
            Un Développeur FullStack passionné par la création d’applications{" "}
            <span className="text-[#FF4B4B] font-semibold">Web</span> et{" "}
            <span className="text-[#FF4B4B] font-semibold">Mobile</span>.
          </motion.p>

          <motion.a
            href="#projects"
            whileHover={{ scale: 1.08, y: -3 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="inline-block px-6 py-3 rounded-full font-semibold text-white 
            bg-[#CC1E1E] shadow-[0_0_10px_rgba(204,30,30,0.6)] 
            hover:bg-[#FF4B4B] hover:shadow-[0_0_18px_rgba(255,75,75,0.7)]
            transition-all duration-300"
          >
            Voir mes projets
          </motion.a>
        </motion.div>

        {/* ================= IMAGE ================= */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: false }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="flex-1 flex justify-center md:justify-end"
        >
          <motion.img
            src="/profile2.jpg"
            alt="Photo de Mamitiana Christiano"
            className="w-56 h-56 md:w-72 md:h-72 rounded-full object-cover
            border-[4px] border-[#CC1E1E]
            shadow-[0_0_20px_rgba(204,30,30,0.4)]"
            animate={{ y: [0, -10, 0] }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            whileHover={{ scale: 1.08 }}
          />
        </motion.div>

      </div>
    </section>
  );
}
