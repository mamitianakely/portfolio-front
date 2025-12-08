"use client";
import { useState, useEffect } from "react";
import { HiBars3 as HiMenu, HiXMark as HiX } from "react-icons/hi2";
// import DarkModeToggle from "./DarkModeToggle";

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

      if (menuOpen) setMenuOpen(false);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [menuOpen]);

  // 🔴⚫ Style Akatsuki pour les liens
  const linkClass = (section: string) =>
    `relative cursor-pointer font-semibold transition 
     hover:text-[#FF4B4B]
     ${activeLink === section ? "text-[#CC1E1E]" : "text-[#F5F5F5]"}
     after:content-[''] after:absolute after:left-0 after:-bottom-1 
     after:h-[2px] after:w-full after:rounded-full 
     after:bg-[#CC1E1E] after:transition-all after:duration-300
     ${activeLink === section ? "after:opacity-100" : "after:opacity-0"}
    `;

  return (
    <nav
      className="fixed top-0 w-full flex justify-between items-center px-8 py-4 
      bg-[#0A0A0A]/95 backdrop-blur-xl shadow-[0_2px_10px_rgba(204,30,30,0.3)]
      border-b border-[#CC1E1E]/20 z-50 transition-colors duration-500"
    >
      <div className="text-2xl font-bold text-[#F5F5F5]">
        Mamitiana C.
      </div>

      {/* Menu Desktop */}
      <div className="hidden md:flex items-center gap-6 font-medium text-[#F5F5F5]">
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
        {/* <DarkModeToggle /> */}
      </div>

      {/* Icon menu mobile */}
      <button
        className="md:hidden text-3xl text-[#CC1E1E]"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <HiX /> : <HiMenu />}
      </button>

      {/* Menu Mobile */}
      {menuOpen && (
        <div
          className="absolute top-20 right-6 w-60 p-6 rounded-xl
          bg-[#0A0A0A]/95 border border-[#CC1E1E]/30 shadow-2xl
          animate-slideDown md:hidden"
        >
          <div className="flex flex-col gap-4 text-[#F5F5F5] text-lg">
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

            {/* <div className="pt-2 border-t border-[#CC1E1E]/20">
              <DarkModeToggle />
            </div> */}
          </div>
        </div>
      )}
    </nav>
  );
}
