"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function Contact() {
  const links = {
    facebookSearch:
      "https://www.facebook.com/search/top?q=" + encodeURIComponent("Christ Mamitianæ"),
    instagram: "https://instagram.com/mamytiana12",
    github: "https://github.com/mamitianakely/",
    mailto: "mailto:christamamitiana@gmail.com?subject=" + encodeURIComponent("Contact depuis portfolio"),
    linkedinSearch:
      "https://www.linkedin.com/search/results/all/?keywords=" + encodeURIComponent("Mamitiana Christ"),
  };

  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setSuccess("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        setSuccess("Message envoyé avec succès !");
        setForm({ name: "", email: "", message: "" });
      } else {
        setSuccess("Erreur lors de l’envoi du message.");
      }
    } catch (err) {
      setSuccess("Erreur serveur.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className="min-h-screen flex flex-col md:flex-row items-center justify-center px-6 py-20 
      bg-[#A4C8EB] dark:from-black dark:to-gray-900 gap-16"
    >
      {/* ===================== BLOC GAUCHE ===================== */}
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="flex-1 flex flex-col items-center text-center gap-6"
      >
        <h2 className="text-4xl font-extrabold">Contactez-moi</h2>
        <p className="text-lg opacity-80 max-w-md">
          Une idée, un projet, un besoin ? Je suis à un message de vous.  
          Construisons quelque chose d’exceptionnel ensemble.
        </p>

        <p className="text-lg opacity-80 max-w-md">Voici mes réseaux :</p>

        <div className="flex flex-wrap gap-4 justify-center mt-2">
          <motion.a
            href={links.facebookSearch}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.12 }}
            className="p-3 rounded-full bg-white/20 backdrop-blur-lg hover:bg-white/40 shadow-md hover:shadow-xl transition"
          >
            <img src="/facebook.png" className="w-6 h-6" alt="Facebook" />
          </motion.a>

          <motion.a
            href={links.linkedinSearch}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.12 }}
            className="p-3 rounded-full bg-white/20 backdrop-blur-lg hover:bg-white/40 shadow-md hover:shadow-xl transition"
          >
            <img src="/linkedin.png" className="w-6 h-6" alt="LinkedIn" />
          </motion.a>

          <motion.a
            href={links.github}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.12 }}
            className="p-3 rounded-full bg-white/20 backdrop-blur-lg hover:bg-white/40 shadow-md hover:shadow-xl transition"
          >
            <img src="/github.png" className="w-6 h-6" alt="GitHub" />
          </motion.a>

          <motion.a
            href={links.instagram}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.12 }}
            className="p-3 rounded-full bg-white/20 backdrop-blur-lg hover:bg-white/40 shadow-md hover:shadow-xl transition"
          >
            <img src="/instagram.jpeg" className="w-6 h-6" alt="Instagram" />
          </motion.a>

          <motion.a
            href={links.mailto}
            whileHover={{ scale: 1.12 }}
            className="p-3 rounded-full bg-white/20 backdrop-blur-lg hover:bg-white/40 shadow-md hover:shadow-xl transition"
          >
            <img src="/gmail.png" className="w-6 h-6" alt="Email" />
          </motion.a>
        </div>
      </motion.div>

      {/* ===================== FORMULAIRE ===================== */}
      <motion.div
        initial={{ opacity: 0, x: 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="flex-1 w-full max-w-lg flex justify-center"
      >
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-4 p-8 rounded-2xl backdrop-blur-2xl 
          bg-white/10 dark:bg-white/5 shadow-xl border border-white/10 w-full"
        >
          <motion.input
            name="name"
            value={form.name}
            onChange={handleChange}
            whileFocus={{ scale: 1.02 }}
            type="text"
            placeholder="Nom"
            className="px-4 py-3 rounded-lg bg-white/20 dark:bg-black/30 text-white
            placeholder-[#847FE3] focus:ring-2 focus:ring-[#847FE3] outline-none transition"
          />

          <motion.input
            name="email"
            value={form.email}
            onChange={handleChange}
            whileFocus={{ scale: 1.02 }}
            type="email"
            placeholder="Email"
            className="px-4 py-3 rounded-lg bg-white/20 dark:bg-black/30 text-white
            placeholder-[#847FE3] focus:ring-2 focus:ring-[#847FE3] outline-none transition"
          />

          <motion.textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            whileFocus={{ scale: 1.02 }}
            rows={5}
            placeholder="Message"
            className="px-4 py-3 rounded-lg bg-white/20 dark:bg-black/30 text-white
            placeholder-[#847FE3] focus:ring-2 focus:ring-[#847FE3] outline-none transition"
          />

          <motion.button
            type="submit"
            whileHover={{ scale: 1.05, y: -3 }}
            whileTap={{ scale: 0.95 }}
            disabled={loading}
            className="mt-3 px-6 py-3 rounded-xl bg-gradient-to-r from-[#847FE3] to-[#A4C8EB]
            text-white font-semibold shadow-lg hover:shadow-2xl transition-all"
          >
            {loading ? "Envoi..." : "Envoyer le message"}
          </motion.button>

          {success && (
            <p className="mt-2 text-center text-sm text-white font-medium">{success}</p>
          )}
        </form>
      </motion.div>
    </section>
  );
}
