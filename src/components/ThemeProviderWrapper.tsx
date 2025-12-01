"use client"; // ✅ Obligatoire pour un Client Component

import { ThemeProvider } from "next-themes";
import { ReactNode } from "react";
export default function ThemeProviderWrapper({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider
      attribute="class"
      enableSystem={false}  // on contrôle entièrement le thème
      defaultTheme="light"  // clair par défaut
      disableTransitionOnChange={true} // option clé pour changement instantané
    >
      {children}
    </ThemeProvider>
  );
}

