/* eslint-disable react-refresh/only-export-components */

import { createContext, useContext, useEffect, useState } from "react";

const ThemeProviderContext = createContext({
  theme: "system",
  setTheme: () => {},
});

export function ThemeProvider({
  children,
  defaultTheme = "system",
  storageKey = "vite-ui-theme",
  ...props
}) {
  // 1. Fungsi inisialisasi yang lebih robust
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem(storageKey);
    if (savedTheme) return savedTheme;

    // Langsung apply system theme di initial render
    if (defaultTheme === "system") {
      return window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light";
    }
    return defaultTheme;
  });

  // 2. Efek untuk update DOM dan system preference listener
  useEffect(() => {
    const root = document.documentElement;
    const body = document.body;

    // Tambahkan transition CSS
    // Di ThemeProvider, ganti dengan timing function Tailwind yang persis:
    body.style.transition =
      "background-color 300ms cubic-bezier(0.4, 0, 0.2, 1)";
    root.style.transition =
      "background-color 300ms cubic-bezier(0.4, 0, 0.2, 1)";
    const applyTheme = (themeToApply) => {
      root.classList.remove("light", "dark");
      root.classList.add(themeToApply);

      // Tambahkan background ke body
      if (themeToApply === "dark") {
        body.style.backgroundColor = "#18181b"; // zinc-900
        root.style.backgroundColor = "#18181b";
      } else {
        body.style.backgroundColor = "#f3f4f6"; // gray-100
        root.style.backgroundColor = "#f3f4f6";
      }
    };

    if (theme === "system") {
      const handleSystemThemeChange = (e) => {
        applyTheme(e.matches ? "dark" : "light");
      };

      const systemTheme = window.matchMedia("(prefers-color-scheme: dark)");
      applyTheme(systemTheme.matches ? "dark" : "light");

      systemTheme.addEventListener("change", handleSystemThemeChange);
      return () =>
        systemTheme.removeEventListener("change", handleSystemThemeChange);
    } else {
      applyTheme(theme);
    }
  }, [theme]);

  // 3. Validasi nilai theme sebelum disimpan
  const setThemeSafe = (newTheme) => {
    if (!["light", "dark", "system"].includes(newTheme)) {
      console.warn(`Invalid theme: ${newTheme}`);
      return;
    }
    localStorage.setItem(storageKey, newTheme);
    setTheme(newTheme);
  };

  return (
    <ThemeProviderContext.Provider
      {...props}
      value={{ theme, setTheme: setThemeSafe }}
    >
      {children}
    </ThemeProviderContext.Provider>
  );
}

export const useTheme = () => {
  const context = useContext(ThemeProviderContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};
