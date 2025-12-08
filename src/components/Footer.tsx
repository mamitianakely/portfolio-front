"use client";

export default function Footer() {
  return (
    <footer className="w-full bg-black text-gray-300 py-12 relative overflow-hidden">

      {/* Nuage Akatsuki en arrière-plan */}
      <img 
        src="/akatsuki-cloud.png"
        alt="Akatsuki Cloud"
        className="absolute opacity-10 -top-10 right-0 w-52 rotate-12"
      />
      <img 
        src="/akatsuki-cloud.png"
        alt="Akatsuki Cloud"
        className="absolute opacity-10 bottom-0 left-0 w-44 -rotate-6"
      />

      <div className="max-w-6xl mx-auto px-6 relative z-10">

        {/* Sections */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left">

          {/* About */}
          <div>
            <h3 className="text-2xl font-bold mb-4 text-red-500 tracking-wide">
              Mamitiana Christiano
            </h3>
            <p className="text-gray-400 leading-relaxed">
              Développeur FullStack passionné, créant des applications web et mobiles modernes
              je suis prêt à relever les nouveaux défis.
            </p>
          </div>

          {/* Liens rapides */}
          <div>
            <h3 className="text-2xl font-bold mb-4 text-red-500">Navigation</h3>
            <ul className="space-y-2">
              <li><a href="#home" className="hover:text-red-500 transition">Accueil</a></li>
              <li><a href="#about" className="hover:text-red-500 transition">À propos</a></li>
              <li><a href="#skills" className="hover:text-red-500 transition">Compétences</a></li>
              <li><a href="#projects" className="hover:text-red-500 transition">Projets</a></li>
              <li><a href="#contact" className="hover:text-red-500 transition">Contact</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-2xl font-bold mb-4 text-red-500">Contact</h3>
            <ul className="space-y-2">
              <li>
                Email :
                <a 
                  href="mailto:christamamitiana@gmail.com"
                  className="hover:text-red-500 ml-1 transition"
                >
                  christamamitiana@gmail.com
                </a>
              </li>
              <li>
                Téléphone :
                <a 
                  href="tel:+261345743444"
                  className="hover:text-red-500 ml-1 transition"
                >
                  +261 34 57 434 44
                </a>
              </li>
              <li>Fianarantsoa, Madagascar</li>
            </ul>
          </div>

        </div>

        {/* Séparateur rouge */}
        <div className="w-full h-px bg-red-800 mt-12 mb-6"></div>

        {/* Bas du footer */}
        <div className="text-center text-gray-500 text-sm">
          © {new Date().getFullYear()} —  
          <span className="text-red-500 font-semibold"> Mamitiana Christiano</span>.  
        </div>

      </div>
    </footer>
  );
}
