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
    const fetchProjects = async () => {
      try {
        const res = await fetch("/api/projects");
        if (!res.ok) throw new Error("Erreur lors du chargement des projets");
        const data: Project[] = await res.json();
        setProjects(data);
      } catch (err: any) {
        setError(err.message || "Erreur inconnue");
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  const filteredProjects = projects.filter((p) =>
    activeTab === "web"
      ? p.description.toLowerCase().includes("web")
      : p.description.toLowerCase().includes("android")
  );

  return (
    <section
      id="projects"
      className="min-h-screen flex flex-col items-center justify-center px-6
      bg-[#0A0909] text-gray-100 transition duration-300"
    >
      {/* Titre */}
      <div className="text-center mb-14">
        <h2 className="text-4xl font-extrabold text-white drop-shadow-[0_0_12px_#B30000]">
          Mes Projets
        </h2>
        <p className="text-lg mt-4 opacity-80 text-gray-300">
          Projets réalisés en Web et Mobile Android
        </p>
      </div>

      {/* Onglets Akatsuki */}
      <div className="flex justify-center gap-6 mb-10">
        {["web", "android"].map((tab) => (
          <button
            key={tab}
            className={`
              px-6 py-2 rounded-full font-semibold transition-all duration-300
              border border-red-800
              ${
                activeTab === tab
                  ? "bg-red-700 text-white shadow-[0_0_15px_#B30000]"
                  : "bg-[#0D0D0D] text-gray-300 hover:shadow-[0_0_10px_#7A0000]"
              }
            `}
            onClick={() => setActiveTab(tab as "web" | "android")}
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
          </button>
        ))}
      </div>

      {/* Contenu */}
      {loading ? (
        <p>Chargement...</p>
      ) : error ? (
        <p className="text-red-500">{error}</p>
      ) : filteredProjects.length === 0 ? (
        <p>Aucun projet trouvé.</p>
      ) : (
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="
                p-6 rounded-2xl bg-[#0D0D0D]/70 backdrop-blur-xl
                border border-red-900/50
                shadow-[0_0_15px_#7A0000]
                hover:shadow-[0_0_20px_#B30000]
                transition-all duration-300 hover:-translate-y-1
              "
              suppressHydrationWarning
            >
              {/* Image du projet */}
              {project.image && (
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-40 object-cover rounded-lg mb-4 border border-red-900/40"
                />
              )}

              {/* Titre */}
              <h3 className="text-2xl font-semibold text-white drop-shadow-[0_0_6px_#B30000] mb-2">
                {project.title}
              </h3>

              {/* Description */}
              <p className="mb-3 opacity-80 text-gray-300">
                {project.description}
              </p>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="
                      px-2 py-1 rounded text-sm 
                      bg-red-700 text-white
                      shadow-[0_0_8px_#7A0000]
                    "
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Liens GitHub */}
              <div className="flex gap-3">
                <a
                  href={project.githubFront}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    px-3 py-2 rounded transition-colors duration-300
                    bg-black text-red-400 border border-red-800
                    hover:bg-red-700 hover:text-white
                  "
                >
                  Front GitHub
                </a>

                <a
                  href={project.githubBack}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    px-3 py-2 rounded transition-colors duration-300
                    bg-black text-red-400 border border-red-800
                    hover:bg-red-700 hover:text-white
                  "
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
