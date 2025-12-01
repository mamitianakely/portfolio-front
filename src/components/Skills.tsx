"use client";

export default function Skills() {
  return (
    <section
      id="skills"
      className="min-h-screen flex flex-col items-center justify-center px-6 bg-[#A4C8EB] dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300"
    >
      <div className="text-center mb-14">
        <h2 className="text-4xl font-extrabold">Mes Compétences</h2>
        <p className="text-lg mt-4 opacity-80">
          Voici les technologies et outils que je maîtrise dans le web, le mobile et le design.
        </p>
      </div>

      {/* Cartes */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">

        {/* Développement Web */}
        <div
          className="p-8 rounded-2xl backdrop-blur-xl bg-white/10 dark:bg-white/5 shadow-lg
          hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
        >
          <div className="flex items-center gap-3 mb-6">
            <img src="/web.png" alt="Web Icon" className="w-10 h-10" />
            <h3 className="text-2xl font-semibold">Développement Web</h3>
          </div>

          <p className="mb-6 opacity-80">
            Construction d'applications web modernes, performantes et sécurisées.
          </p>

          <div className="flex flex-wrap gap-5">
            <img src="/react.png" className="w-12 h-12 hover:scale-110 transition" />
            <img src="/tailwind.png" className="w-12 h-12 hover:scale-110 transition" />
            <img src="/js.png" className="w-12 h-12 hover:scale-110 transition" />
            <img src="/laravel.png" className="w-12 h-12 hover:scale-110 transition" />
            <img src="/next.png" className="w-12 h-12 hover:scale-110 transition" />
            <img src="/node.png" className="w-12 h-12 hover:scale-110 transition" />
            <img src="/postgres.png" className="w-12 h-12 hover:scale-110 transition" />
            <img src="/django.jpeg" className="w-12 h-12 hover:scale-110 transition" />
          </div>
        </div>

        {/* Développement Mobile */}
        <div
          className="p-8 rounded-2xl backdrop-blur-xl bg-white/10 dark:bg-white/5 shadow-lg
          hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
        >
          <div className="flex items-center gap-3 mb-6">
            <img src="/android.png" alt="Android Icon" className="w-10 h-10" />
            <h3 className="text-2xl font-semibold">Développement Android</h3>
          </div>

          <p className="mb-6 opacity-80">
            Création d'applications mobiles Android performantes avec Kotlin.
          </p>

          <div className="flex flex-wrap gap-5">
            <img src="/kotlin.png" className="w-12 h-12 hover:scale-110 transition" />
            <img src="/java.png" className="w-12 h-12 hover:scale-110 transition" />
            <img src="/node.png" className="w-12 h-12 hover:scale-110 transition" />
            <img src="/django.jpeg" className="w-12 h-12 hover:scale-110 transition" /> 
            <img src="/postgres.png" className="w-12 h-12 hover:scale-110 transition" />
          </div>
        </div>

        {/* UX / UI Design */}
        <div
          className="p-8 rounded-2xl backdrop-blur-xl bg-white/10 dark:bg-white/5 shadow-lg
          hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
        >
          <div className="flex items-center gap-3 mb-6">
            <img src="/uiux.png" alt="Figma Icon" className="w-10 h-10" />
            <h3 className="text-2xl font-semibold">Designer UX / UI</h3>
          </div>

          <p className="mb-6 opacity-80">
            Création de maquettes modernes, ergonomiques et orientées utilisateur avec Figma.
          </p>

          <div className="flex flex-wrap gap-5">
            <img src="/figma.jpeg" className="w-14 h-14 hover:scale-110 transition" />
            <img src="/ux.jpeg" className="w-14 h-14 hover:scale-110 transition" />
            <img src="/ui.png" className="w-14 h-14 hover:scale-110 transition" />
          </div>
        </div>

      </div>
    </section>
  );
}
