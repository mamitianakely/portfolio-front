"use client";

export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen flex flex-col items-center justify-center px-6 bg-gradient-to-b from-[#DAF1F7] to-[#A4C8EB] dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300"
    >
      <div className="max-w-4xl text-center">
        <h2 className="text-4xl font-bold mb-6">À propos de moi</h2>
        <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
          Je suis Mamitiana Christiano, un développeur FullStack junior passionné par la création
          d'applications web et mobiles modernes et performantes. J'aime travailler sur des
          projets qui apportent de la valeur et qui offrent une expérience utilisateur optimale.
          j'habite à Fianarantsoa, mais je suis disponible à se déplacer quand c'est nécessaire.
        </p>
        <a
          href="/CV1.pdf"
          download
          className="inline-block px-6 py-3 rounded-full bg-[#847FE3] text-white font-semibold hover:bg-[#6f6ad1] transition-colors duration-300"
        >
          Télécharger mon CV
        </a>

        {/* Skills */}
        <div className="pt-10">
          <h3 className="text-2xl font-semibold mb-6">Technologies que je maîtrise</h3>

          <div className="flex flex-wrap justify-center gap-6">
            {/* Exemple de logos → mets les tiens dans public/skills/ */}
            <img src="/react.png" alt="React" className="w-14 h-14 hover:scale-110 transition-transform duration-300" />
            <img src="/next.png" alt="Next.js" className="w-14 h-14 hover:scale-110 transition-transform duration-300" />
            <img src="/tailwind.png" alt="Tailwind" className="w-14 h-14 hover:scale-110 transition-transform duration-300" />
            <img src="/kotlin.png" alt="Kotlin" className="w-14 h-14 hover:scale-110 transition-transform duration-300" />
            {/* <img src="/js.png" alt="Javascript" className="w-14 h-14 hover:scale-110 transition-transform duration-300" /> */}
            <img src="/laravel.png" alt="Laravel" className="w-14 h-14 hover:scale-110 transition-transform duration-300" />
            <img src="/node.png" alt="NodeJS" className="w-14 h-14 hover:scale-110 transition-transform duration-300" />
            <img src="/express.png" alt="Epress" className="w-14 h-14 hover:scale-110 transition-transform duration-300" />
            <img src="/python.jpeg" alt="Python" className="w-14 h-14 hover:scale-110 transition-transform duration-300" />
            <img src="/django.jpeg" alt="Django" className="w-14 h-14 hover:scale-110 transition-transform duration-300" />
            <img src="/postgres.png" alt="PostgreSQL" className="w-14 h-14 hover:scale-110 transition-transform duration-300" />
            <img src="/figma.jpeg" alt="Figma" className="w-14 h-14 hover:scale-110 transition-transform duration-300" />
          </div>
        </div>
      </div>
    </section>
  );
}
