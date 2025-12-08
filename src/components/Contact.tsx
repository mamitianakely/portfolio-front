"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function Contact() {
  const links = {
    facebookSearch:
      "https://www.facebook.com/search/top?q=" + encodeURIComponent("Christ Mamitianæ"),
    instagram: "https://instagram.com/mamytiana12",
    github: "https://github.com/mamitianakely/",
    mailto:
      "mailto:christamamitiana@gmail.com?subject=" +
      encodeURIComponent("Contact depuis portfolio"),
    linkedinSearch:
      "https://www.linkedin.com/search/results/all/?keywords=" +
      encodeURIComponent("Mamitiana Christ"),
  };

  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
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
      className="min-h-screen flex flex-col md:flex-row items-center justify-center
      px-6 py-20 bg-[#0A0A0A] text-[#E5E5E5] gap-16"
    >
      {/* ===================== BLOC GAUCHE ===================== */}
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="flex-1 flex flex-col items-center text-center gap-6"
      >
        <h2 className="text-4xl font-extrabold text-[#D90429] drop-shadow-[0_0_10px_#D90429]">
          Contactez-moi
        </h2>

        <p className="text-lg opacity-80 max-w-md">
          Une idée, un projet, un besoin ? Je suis à un message de vous.
          Construisons quelque chose d’exceptionnel ensemble.
        </p>

        <p className="text-lg opacity-80 max-w-md">Voici mes réseaux :</p>

        <div className="flex flex-wrap gap-4 justify-center mt-2">
          {[
            { icon: "/facebook.png", link: links.facebookSearch },
            { icon: "/linkedin.png", link: links.linkedinSearch },
            { icon: "/github.png", link: links.github },
            { icon: "/instagram.jpeg", link: links.instagram },
            { icon: "/gmail.png", link: links.mailto },
          ].map((s, i) => (
            <motion.a
              key={i}
              href={s.link}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.15 }}
              className="p-3 rounded-full bg-[#1A1A1A] shadow-md transition
              hover:bg-[#D90429]/30 hover:shadow-[0_0_15px_#D90429]"
            >
              <img src={s.icon} className="w-6 h-6" alt="icon" />
            </motion.a>
          ))}
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
          bg-[#1A1A1A]/60 shadow-xl border border-[#D90429]/30 
          w-full"
        >
          <motion.input
            name="name"
            value={form.name}
            onChange={handleChange}
            whileFocus={{ scale: 1.03 }}
            type="text"
            placeholder="Nom"
            className="px-4 py-3 rounded-lg bg-[#000]/40 text-white
            placeholder-[#D90429] focus:ring-2 focus:ring-[#D90429] outline-none transition"
          />

          <motion.input
            name="email"
            value={form.email}
            onChange={handleChange}
            whileFocus={{ scale: 1.03 }}
            type="email"
            placeholder="Email"
            className="px-4 py-3 rounded-lg bg-[#000]/40 text-white
            placeholder-[#D90429] focus:ring-2 focus:ring-[#D90429] outline-none transition"
          />

          <motion.textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            whileFocus={{ scale: 1.03 }}
            rows={5}
            placeholder="Message"
            className="px-4 py-3 rounded-lg bg-[#000]/40 text-white
            placeholder-[#D90429] focus:ring-2 focus:ring-[#D90429] outline-none transition"
          />

          <motion.button
            type="submit"
            whileHover={{ scale: 1.07, y: -3 }}
            whileTap={{ scale: 0.95 }}
            disabled={loading}
            className="mt-3 px-6 py-3 rounded-xl bg-gradient-to-r 
            from-[#D90429] to-[#A30000]
            text-white font-semibold shadow-lg hover:shadow-[0_0_20px_#D90429]
            transition-all"
          >
            {loading ? "Envoi..." : "Envoyer le message"}
          </motion.button>

          {success && (
            <p className="mt-2 text-center text-sm text-[#D90429] font-medium">
              {success}
            </p>
          )}
        </form>
      </motion.div>
    </section>
    
  );
}
