"use client";

import { useState, useEffect } from "react";
import { motion, type Variants } from "framer-motion";

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
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  /* ======================
     Animations
  ====================== */
  const container: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
  };

  const card: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  /* ======================
     Fetch
  ====================== */
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

  /* ======================
     Filter
  ====================== */
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
      <motion.div
        className="text-center mb-14"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: false }}
      >
        <h2 className="text-4xl font-extrabold text-white drop-shadow-[0_0_12px_#B30000]">
          Mes Projets
        </h2>
        <p className="text-lg mt-4 opacity-80 text-gray-300">
          Projets réalisés en Web et Mobile Android
        </p>
      </motion.div>

      {/* Onglets */}
      <div className="flex justify-center gap-6 mb-10">
        {["web", "android"].map((tab) => (
          <motion.button
            key={tab}
            whileTap={{ scale: 0.95 }}
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
          </motion.button>
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
        <motion.div
          key={activeTab}
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, margin: "-100px" }}
          className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              variants={card}
              whileHover={{ y: -6 }}
              className="
                p-4 rounded-2xl bg-[#0D0D0D]/70 backdrop-blur-xl
                border border-red-900/50
                shadow-[0_0_12px_#7A0000]
                hover:shadow-[0_0_16px_#B30000]
                transition-all duration-300
                max-w-sm mx-auto
              "
            >
              {/* Image */}
              {project.image && (
                <motion.div className="overflow-hidden rounded-lg mb-3 border border-red-900/40">
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-32 object-cover"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                  />
                </motion.div>
              )}

              {/* Titre */}
              <h3 className="text-xl font-semibold text-white drop-shadow-[0_0_4px_#B30000] mb-1">
                {project.title}
              </h3>

              {/* Description */}
              <p className="mb-2 text-sm opacity-80 text-gray-300 line-clamp-4">
                {project.description}
              </p>

              {/* Tech */}
              <div className="flex flex-wrap gap-2 mb-3">
                {project.tech.map((tech, i) => (
                  <motion.span
                    key={i}
                    whileHover={{ scale: 1.05 }}
                    className="
                      px-2 py-1 rounded text-xs
                      bg-red-700 text-white
                      shadow-[0_0_6px_#7A0000]
                    "
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>

              {/* GitHub */}
              <div className="flex gap-2">
                <a
                  href={project.githubFront}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    px-2 py-1 rounded text-xs transition-colors duration-300
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
                    px-2 py-1 rounded text-xs transition-colors duration-300
                    bg-black text-red-400 border border-red-800
                    hover:bg-red-700 hover:text-white
                  "
                >
                  Back GitHub
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      )}
    </section>
  );
}
