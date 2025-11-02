import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

const ThemeToggle = () => {
  const [theme, setTheme] = useState<"light" | "dark">("dark");

  useEffect(() => {
    // Check for saved theme preference or default to dark
    const savedTheme = localStorage.getItem("theme") as "light" | "dark" | null;
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    
    const initialTheme = savedTheme || (prefersDark ? "dark" : "light");
    setTheme(initialTheme);
    applyTheme(initialTheme);
  }, []);

  const applyTheme = (newTheme: "light" | "dark") => {
    const root = document.documentElement;
    
    if (newTheme === "light") {
      // Light mode colors - bright and clean
      root.style.setProperty("--background", "0 0% 98%");
      root.style.setProperty("--foreground", "222 47% 11%");
      root.style.setProperty("--card", "0 0% 100%");
      root.style.setProperty("--card-foreground", "222 47% 11%");
      root.style.setProperty("--popover", "0 0% 100%");
      root.style.setProperty("--popover-foreground", "222 47% 11%");
      root.style.setProperty("--primary", "195 100% 39%");
      root.style.setProperty("--primary-foreground", "0 0% 100%");
      root.style.setProperty("--secondary", "210 40% 96%");
      root.style.setProperty("--secondary-foreground", "222 47% 11%");
      root.style.setProperty("--muted", "210 40% 96%");
      root.style.setProperty("--muted-foreground", "215 16% 47%");
      root.style.setProperty("--accent", "195 100% 39%");
      root.style.setProperty("--accent-foreground", "0 0% 100%");
      root.style.setProperty("--destructive", "0 84% 60%");
      root.style.setProperty("--destructive-foreground", "0 0% 100%");
      root.style.setProperty("--border", "214 32% 91%");
      root.style.setProperty("--input", "214 32% 91%");
      root.style.setProperty("--ring", "195 100% 39%");
      
      // Add light class to body
      document.body.classList.remove("dark");
      document.body.classList.add("light");
    } else {
      // Dark mode colors - original
      root.style.setProperty("--background", "220 26% 8%");
      root.style.setProperty("--foreground", "210 40% 98%");
      root.style.setProperty("--card", "220 20% 12%");
      root.style.setProperty("--card-foreground", "210 40% 98%");
      root.style.setProperty("--popover", "220 20% 12%");
      root.style.setProperty("--popover-foreground", "210 40% 98%");
      root.style.setProperty("--primary", "195 100% 50%");
      root.style.setProperty("--primary-foreground", "220 26% 8%");
      root.style.setProperty("--secondary", "220 18% 16%");
      root.style.setProperty("--secondary-foreground", "210 40% 98%");
      root.style.setProperty("--muted", "220 15% 20%");
      root.style.setProperty("--muted-foreground", "215 16% 65%");
      root.style.setProperty("--accent", "195 100% 50%");
      root.style.setProperty("--accent-foreground", "220 26% 8%");
      root.style.setProperty("--destructive", "0 84% 60%");
      root.style.setProperty("--destructive-foreground", "210 40% 98%");
      root.style.setProperty("--border", "220 15% 20%");
      root.style.setProperty("--input", "220 15% 20%");
      root.style.setProperty("--ring", "195 100% 50%");
      
      // Add dark class to body
      document.body.classList.remove("light");
      document.body.classList.add("dark");
    }
  };

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    applyTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  return (
    <button
      onClick={toggleTheme}
      className="fixed bottom-24 right-8 z-50 w-12 h-12 bg-primary hover:bg-primary/90 text-primary-foreground rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group hover:scale-110"
      aria-label="Toggle theme"
      title={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
    >
      {theme === "dark" ? (
        <Sun className="w-6 h-6 group-hover:rotate-180 transition-transform duration-500" />
      ) : (
        <Moon className="w-6 h-6 group-hover:-rotate-12 transition-transform duration-500" />
      )}
    </button>
  );
};

export default ThemeToggle;
