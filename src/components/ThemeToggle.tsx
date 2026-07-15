import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

const ThemeToggle = () => {
  const [theme, setTheme] = useState<"light" | "dark">("dark");

  useEffect(() => {
    // Check for saved theme preference or default to dark (always dark by default)
    const savedTheme = localStorage.getItem("theme") as "light" | "dark" | null;
    
    // Default to dark mode always, only use light if explicitly saved
    const initialTheme = savedTheme || "dark";
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
      root.style.setProperty("--primary", "165 76% 34%");
      root.style.setProperty("--primary-foreground", "0 0% 100%");
      root.style.setProperty("--secondary", "210 40% 96%");
      root.style.setProperty("--secondary-foreground", "222 47% 11%");
      root.style.setProperty("--muted", "210 40% 96%");
      root.style.setProperty("--muted-foreground", "215 16% 47%");
      root.style.setProperty("--accent", "196 82% 43%");
      root.style.setProperty("--accent-foreground", "0 0% 100%");
      root.style.setProperty("--destructive", "0 84% 60%");
      root.style.setProperty("--destructive-foreground", "0 0% 100%");
      root.style.setProperty("--border", "214 32% 91%");
      root.style.setProperty("--input", "214 32% 91%");
      root.style.setProperty("--ring", "165 76% 34%");
      
      // Add light class to body
      document.body.classList.remove("dark");
      document.body.classList.add("light");
    } else {
      // Dark mode colors - original
      root.style.setProperty("--background", "225 30% 6%");
      root.style.setProperty("--foreground", "210 40% 98%");
      root.style.setProperty("--card", "224 25% 10%");
      root.style.setProperty("--card-foreground", "210 40% 98%");
      root.style.setProperty("--popover", "220 20% 12%");
      root.style.setProperty("--popover-foreground", "210 40% 98%");
      root.style.setProperty("--primary", "165 82% 48%");
      root.style.setProperty("--primary-foreground", "225 30% 6%");
      root.style.setProperty("--secondary", "220 18% 16%");
      root.style.setProperty("--secondary-foreground", "210 40% 98%");
      root.style.setProperty("--muted", "220 15% 20%");
      root.style.setProperty("--muted-foreground", "215 16% 65%");
      root.style.setProperty("--accent", "196 94% 60%");
      root.style.setProperty("--accent-foreground", "225 30% 6%");
      root.style.setProperty("--destructive", "0 84% 60%");
      root.style.setProperty("--destructive-foreground", "210 40% 98%");
      root.style.setProperty("--border", "220 15% 20%");
      root.style.setProperty("--input", "220 15% 20%");
      root.style.setProperty("--ring", "165 82% 48%");
      
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
      className="fixed bottom-24 right-5 sm:right-8 z-50 icon-button bg-card shadow-xl group"
      aria-label="Toggle theme"
      title={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
    >
      {theme === "dark" ? (
        <Sun className="w-5 h-5" />
      ) : (
        <Moon className="w-5 h-5" />
      )}
    </button>
  );
};

export default ThemeToggle;
