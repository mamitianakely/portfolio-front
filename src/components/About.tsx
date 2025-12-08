"use client";

export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen flex flex-col items-center justify-center px-6 
      bg-[#0A0A0A] text-[#F5F5F5] transition-colors duration-300
      border-b border-[#CC1E1E]/20"
    >
      <div className="max-w-4xl text-center">
        
        {/* Titre */}
        <h2
          className="text-4xl font-bold mb-6 
          text-[#CC1E1E] drop-shadow-[0_0_10px_rgba(204,30,30,0.5)]"
        >
          À propos de moi
        </h2>

        {/* Texte */}
        <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto text-gray-300 leading-relaxed">
          Je suis <span className="font-semibold text-[#FF4B4B]">Mamitiana Christiano</span>, 
          un développeur FullStack junior passionné par la conception 
          d’applications <span className="text-[#FF4B4B]">web</span> et 
          <span className="text-[#FF4B4B]"> mobiles</span>, modernes, rapides et élégantes.
          Basé à <span className="text-white font-semibold">Fianarantsoa</span>, 
          je suis motivé, disponible et prêt à me déplacer si nécessaire.
        </p>

        {/* Bouton CV */}
        <a
          href="/CV1.pdf"
          download
          className="inline-block px-6 py-3 rounded-full font-semibold text-white 
          bg-[#CC1E1E] shadow-[0_0_12px_rgba(204,30,30,0.6)] 
          hover:bg-[#FF4B4B] hover:shadow-[0_0_18px_rgba(255,75,75,0.7)]
          transition-all duration-300 active:scale-95"
        >
          Télécharger mon CV
        </a>

        {/* Skills */}
        <div className="pt-12">
          <h3
            className="text-2xl font-semibold mb-8 text-[#CC1E1E]
            drop-shadow-[0_0_10px_rgba(204,30,30,0.5)]"
          >
            Technologies que je maîtrise
          </h3>

          {/* Logos */}
          <div className="flex flex-wrap justify-center gap-8">
            <img src="/react.png"
              alt="React"
              className="w-14 h-14 hover:scale-125 transition-transform duration-300 
              hover:drop-shadow-[0_0_12px_rgba(255,75,75,0.6)]"
            />

            <img src="/next.png"
              alt="Next.js"
              className="w-14 h-14 hover:scale-125 transition-transform duration-300
              hover:drop-shadow-[0_0_12px_rgba(255,75,75,0.6)]"
            />

            <img src="/tailwind.png"
              alt="Tailwind"
              className="w-14 h-14 hover:scale-125 transition-transform duration-300
              hover:drop-shadow-[0_0_12px_rgba(255,75,75,0.6)]"
            />

            <img src="/kotlin.png"
              alt="Kotlin"
              className="w-14 h-14 hover:scale-125 transition-transform duration-300
              hover:drop-shadow-[0_0_12px_rgba(255,75,75,0.6)]"
            />

            <img src="/laravel.png"
              alt="Laravel"
              className="w-14 h-14 hover:scale-125 transition-transform duration-300
              hover:drop-shadow-[0_0_12px_rgba(255,75,75,0.6)]"
            />

            <img src="/node.png"
              alt="NodeJS"
              className="w-14 h-14 hover:scale-125 transition-transform duration-300
              hover:drop-shadow-[0_0_12px_rgba(255,75,75,0.6)]"
            />

            <img src="/express.png"
              alt="Express"
              className="w-14 h-14 hover:scale-125 transition-transform duration-300
              hover:drop-shadow-[0_0_12px_rgba(255,75,75,0.6)]"
            />

            <img src="/python.jpeg"
              alt="Python"
              className="w-14 h-14 hover:scale-125 transition-transform duration-300
              hover:drop-shadow-[0_0_12px_rgba(255,75,75,0.6)]"
            />

            <img src="/django.jpeg"
              alt="Django"
              className="w-14 h-14 hover:scale-125 transition-transform duration-300
              hover:drop-shadow-[0_0_12px_rgba(255,75,75,0.6)]"
            />

            <img src="/postgres.png"
              alt="PostgreSQL"
              className="w-14 h-14 hover:scale-125 transition-transform duration-300
              hover:drop-shadow-[0_0_12px_rgba(255,75,75,0.6)]"
            />

            <img src="/figma.jpeg"
              alt="Figma"
              className="w-14 h-14 hover:scale-125 transition-transform duration-300
              hover:drop-shadow-[0_0_12px_rgba(255,75,75,0.6)]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
