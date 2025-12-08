"use client";

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center 
      bg-[#0A0A0A] text-[#F5F5F5] transition-colors duration-300 px-6
      border-b border-[#CC1E1E]/20"
    >
      <div className="max-w-6xl w-full flex flex-col md:flex-row items-center justify-between gap-10">
        
        {/* Texte */}
        <div className="flex-1 md:pr-2 text-center md:text-left">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-3 
            drop-shadow-[0_0_15px_rgba(204,30,30,0.4)]">
            Salut, Je suis 
            <span className="text-[#CC1E1E]"> Mamitiana Christiano</span>
          </h1>

          <p className="text-lg md:text-xl mb-6 max-w-md mx-auto md:mx-0 text-gray-300">
            Un Développeur FullStack passionné par la création d’applications 
            <span className="text-[#FF4B4B] font-semibold"> Web</span> et 
            <span className="text-[#FF4B4B] font-semibold"> Mobile</span>.
          </p>

          {/* Bouton Akatsuki */}
          <a
            href="#projects"
            className="px-6 py-3 rounded-full font-semibold text-white 
            bg-[#CC1E1E] shadow-[0_0_10px_rgba(204,30,30,0.6)] 
            hover:bg-[#FF4B4B] hover:shadow-[0_0_18px_rgba(255,75,75,0.7)]
            active:scale-95 transition-all duration-300"
          >
            Voir mes projets
          </a>
        </div>

        {/* Image */}
        <div className="flex-1 flex justify-center md:justify-end">
          <img
            src="/profile2.jpg"
            alt="Photo de Mamitiana Christiano"
            className="w-56 h-56 md:w-72 md:h-72 rounded-full object-cover
            border-[4px] border-[#CC1E1E]
            shadow-[0_0_20px_rgba(204,30,30,0.4)]
            hover:shadow-[0_0_30px_rgba(255,75,75,0.6)]
            hover:scale-105 transition-all duration-500"
          />
        </div>
      </div>
    </section>
  );
}
