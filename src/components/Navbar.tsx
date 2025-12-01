"use client";
import { useState, useEffect } from "react";
import { HiBars3 as HiMenu, HiXMark as HiX } from "react-icons/hi2";
import DarkModeToggle from "./DarkModeToggle";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("hero");

  const sections = ["hero", "about", "skills", "projects", "contact"];

  const handleClick = (section: string) => {
    setActiveLink(section);
    setMenuOpen(false);

    const el = document.getElementById(section);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  // 🔥 ActiveLink change automatiquement selon le scroll
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 3;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (!element) continue;

        const top = element.offsetTop;
        const bottom = top + element.offsetHeight;

        if (scrollPosition >= top && scrollPosition < bottom) {
          setActiveLink(section);
          break;
        }
      }

      // ferme le menu mobile en scrollant
      if (menuOpen) setMenuOpen(false);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [menuOpen]);

  const linkClass = (section: string) =>
    `relative cursor-pointer transition 
     hover:text-[#847FE3]
     ${activeLink === section ? "text-[#847FE3]" : ""}
     after:content-[''] after:absolute after:left-0 after:-bottom-1 
     after:h-[2px] after:w-full after:rounded-full 
     after:bg-[#847FE3] after:transition-all after:duration-300
     ${activeLink === section ? "after:opacity-100" : "after:opacity-0"}
    `;

  return (
    <nav className="fixed top-0 w-full flex justify-between items-center px-8 py-4 
      bg-white/60 dark:bg-black/50 backdrop-blur-xl shadow-lg z-50 transition-colors duration-500">

      <div className="text-2xl font-bold text-[#847FE3] dark:text-white">
        Mamitiana C.
      </div>

      {/* Menu Desktop */}
      <div className="hidden md:flex items-center gap-6 font-medium text-gray-800 dark:text-gray-200">
        {sections.map((section) => (
          <a
            key={section}
            className={linkClass(section)}
            onClick={() => handleClick(section)}
          >
            {section === "hero" ? "Accueil" :
             section === "about" ? "A propos" :
             section === "skills" ? "Compétences" :
             section === "projects" ? "Projets" :
             "Contact"}
          </a>
        ))}
        <DarkModeToggle />
      </div>

      {/* Icon menu mobile */}
      <button
        className="md:hidden text-3xl text-[#847FE3] dark:text-white"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <HiX /> : <HiMenu />}
      </button>

      {/* Menu Mobile */}
      {menuOpen && (
        <div
          className="absolute top-20 right-6 w-60 p-6 rounded-xl
          bg-white/90 dark:bg-black/80 shadow-xl md:hidden border border-white/20
          animate-slideDown"
        >
          <div className="flex flex-col gap-4 text-gray-800 dark:text-gray-200 text-lg">
            {sections.map((section) => (
              <a
                key={section}
                className={linkClass(section)}
                onClick={() => handleClick(section)}
              >
                {section === "hero" ? "Accueil" :
                 section === "about" ? "A propos" :
                 section === "skills" ? "Compétences" :
                 section === "projects" ? "Projets" :
                 "Contact"}
              </a>
            ))}

            <div className="pt-2 border-t border-white/20">
              <DarkModeToggle />
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
