import { useState } from "react";
import {
  Menu,
  X,
  Sun,
  Moon,
} from "lucide-react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(
  document.documentElement.classList.contains("dark")
);

  const toggleDarkMode = () => {
  setDarkMode((prev) => {
    const newMode = !prev;
    document.documentElement.classList.toggle("dark", newMode);
    return newMode;
  });
};
  const navItems = [
    { name: "Home", id: "home" },
    { name: "About", id: "about" },
    { name: "Skills", id: "skills" },
    { name: "Projects", id: "projects" },
    { name: "Contact", id: "contact" },
  ];

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });

    setMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 lg:px-8 pt-4">
      <nav className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between px-5 py-3 rounded-2xl border border-slate-200/70 dark:border-white/10 bg-white/75 dark:bg-slate-900/75 backdrop-blur-xl shadow-lg shadow-slate-900/5">

          {/* Logo */}
          <button
            onClick={() => scrollToSection("home")}
            className="flex items-center gap-3 group"
          >
            <span className="flex items-center justify-center w-9 h-9 rounded-xl bg-gradient-to-br from-violet-500 to-cyan-500 text-white font-bold">
              SP
            </span>

            <span className="hidden sm:block font-semibold text-slate-800 dark:text-white">
              sumatra.
            </span>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="px-4 py-2 rounded-lg text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-violet-600 dark:hover:text-violet-400 hover:bg-slate-100 dark:hover:bg-white/5 transition-all"
              >
                {item.name}
              </button>
            ))}
          </div>

          {/* Right Controls */}
          <div className="flex items-center gap-2">

            {/* Theme Toggle */}
            <button
              onClick={toggleDarkMode}
              aria-label="Toggle dark mode"
              className="w-10 h-10 rounded-xl flex items-center justify-center text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-white/5 transition-all"
            >
              {darkMode ? (
                <Sun size={18} />
              ) : (
                <Moon size={18} />
              )}
            </button>

            {/* Mobile Menu */}
            <button
              onClick={() => setMenuOpen((prev) => !prev)}
              className="md:hidden w-10 h-10 rounded-xl flex items-center justify-center text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-white/5 transition-all"
              aria-label="Toggle menu"
            >
              {menuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>

          </div>
        </div>

        {/* Mobile Navigation */}
        {menuOpen && (
          <div className="md:hidden mt-2 p-3 rounded-2xl border border-slate-200/70 dark:border-white/10 bg-white/90 dark:bg-slate-900/90 backdrop-blur-xl shadow-xl">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="w-full text-left px-4 py-3 rounded-xl text-sm font-medium text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-white/5 hover:text-violet-500 transition-all"
              >
                {item.name}
              </button>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;