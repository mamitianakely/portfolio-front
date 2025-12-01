"use client";
import { useState, useEffect } from "react";

interface Project {
  id: number;
  title: string;
  description: string;
  tech: string[];
  image: string;
  githubFront: string;
  githubBack: string;
}

export default function Projects() {
  const [activeTab, setActiveTab] = useState<"web" | "android">("web");
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Fonction async directement dans useEffect
    const fetchProjects = async () => {
      try {
        const res = await fetch("/api/projects");
        if (!res.ok) throw new Error("Erreur lors de la récupération des projets");
        const data: Project[] = await res.json();
        setProjects(data);
      } catch (err: any) {
        console.error(err);
        setError(err.message || "Erreur inconnue");
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  

  // Filtrage des projets selon la tab active
  const filteredProjects = projects.filter((p) =>
   activeTab === "web"
        ? p.description.toLowerCase().includes("web")
        : p.description.toLowerCase().includes("android")
  );

  return (
    <section id="projects" className="min-h-screen flex flex-col items-center justify-center px-6 bg-[#A4C8EB] dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300">
      {/* Titre */}
      <div className="text-center mb-14">
        <h2 className="text-4xl font-extrabold">Mes Projets</h2>
        <p className="text-lg mt-4 opacity-80">
          Projets que j'ai réalisés côté Web et Mobile Android
        </p>
      </div>

      {/* Tabs */}
      <div className="flex justify-center gap-6 mb-10">
        {["web", "android"].map((tab) => (
          <button
            key={tab}
            className={`px-6 py-2 rounded-full font-semibold transition ${
              activeTab === tab
                ? "bg-[#847FE3] text-white"
                : "bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-100"
            }`}
            onClick={() => setActiveTab(tab as "web" | "android")}
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
          </button>
        ))}
      </div>

      {/* Contenu */}
      {loading ? (
        <p>Chargement des projets...</p>
      ) : error ? (
        <p className="text-red-500">{error}</p>
      ) : filteredProjects.length === 0 ? (
        <p>Aucun projet trouvé pour cette catégorie.</p>
      ) : (
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="p-6 rounded-2xl backdrop-blur-xl bg-white/10 dark:bg-white/5 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              suppressHydrationWarning
            >
              {/* Image */}
              {project.image && (
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-40 object-cover rounded-lg mb-4"
                />
              )}

              {/* Infos */}
              <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
              <p className="mb-3 opacity-80">{project.description}</p>

              {/* Tech */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="px-2 py-1 rounded bg-[#847FE3] text-white text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Liens */}
              <div className="flex gap-3">
                <a
                  href={project.githubFront}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-2 rounded bg-black text-[#847FE3] hover:bg-[#847FE3] hover:text-black transition-colors duration-300"
                >
                  Front GitHub
                </a>
                <a
                  href={project.githubBack}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-2 rounded bg-black text-[#847FE3] hover:bg-[#847FE3] hover:text-black transition-colors duration-300"
                >
                  Back GitHub
                </a>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
