"use client";

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center bg-gradient-to-b from-[#A4C8EB] to-[#DAF1F7] dark:bg-black text-white transition-colors duration-300 px-6"
    >
      <div className="max-w-6xl w-full flex flex-col md:flex-row items-center justify-between gap-10">
        
        {/* Texte */}
        <div className="flex-1 md:pr-2 text-center md:text-left">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-3">
            Salut, Je suis Mamitiana Christiano
          </h1>
          <p className="text-lg md:text-xl mb-5 max-w-md mx-auto md:mx-0">
            Un Développeur FullStack qui s'active fortement dans la création d'applications web et mobile
          </p>
          <a
            href="#projects"
            className="px-6 py-3 rounded-full bg-black text-[#847FE3] font-semibold hover:bg-white hover:text-[#A4C8EB] transition-colors duration-300"
          >
            Voir mes projets
          </a>
        </div>

        {/* Image */}
        <div className="flex-1 flex justify-center md:justify-end">
          <img
            src="/profile2.jpg"
            alt="Photo de Mamitiana Christiano"
            className="w-56 h-56 md:w-72 md:h-72 rounded-full border-4 border-white dark:border-[#847FE3] object-cover shadow-lg"
          />
        </div>
      </div>
    </section>
  );
}
