"use client";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function DarkModeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  return (
    <button
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      className="p-2 rounded-lg bg-[#847FE3] text-white dark:bg-black dark:text-[#847FE3] transition-colors duration-200"
    >
      {theme === "light" ? "🌙" : "☀️"}
    </button>
  );
}
