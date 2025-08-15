import { useEffect, useState } from "react";
import { ThemeSwitcher } from "./ThemeSwitcher";
import { useTheme } from "./ThemeProvider";

const Navbar = () => {
  const [active, setActive] = useState(false);
  const { theme } = useTheme(); // Dapatkan tema saat ini

  useEffect(() => {
    const handleScroll = () => {
      setActive(window.scrollY > 150);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  // Warna untuk dark/light mode
  const h1Color =
    theme === "dark" ? "text-white" : "text-black hover:text-gray-50";
  const navbarSm =
    theme === "dark"
      ? "bg-white/30 lg:-ml-15 menu flex items-center sm:gap-10 gap-4 fixed left-1/2 -translate-x-1/2 md:-translate-x-0 md:static md:opacity-100  backdrop-blur-md p-4 rounded-br-2xl rounded-bl-2xl md:bg-transparent transition-all md:transition-none z-50"
      : "bg-black/30 lg:-ml-15 menu flex items-center sm:gap-10 gap-4 fixed left-1/2 -translate-x-1/2 md:-translate-x-0 md:static md:opacity-100  backdrop-blur-md p-4 rounded-br-2xl rounded-bl-2xl md:bg-transparent transition-all md:transition-none z-50";

  return (
    <div>
      <div className={`navbar py-7 flex items-center justify-between `}>
        <div className="logo">
          <h1 className={`text-3xl font-bold  p-1 ${h1Color}`}>Portofolio</h1>
        </div>
        <ul
          className={` ${
            active ? "top-0 opacity-100" : "-top-10 opacity-20"
          } ${navbarSm}`}
        >
          <li>
            <a
              href="#home"
              className={`sm:text-lg text-base font-medium hover:text-gray-600 ${h1Color}`}
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#about"
              className={`sm:text-lg text-base font-medium hover:text-gray-600 ${h1Color}`}
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#projects"
              className={`sm:text-lg text-base font-medium hover:text-gray-600 ${h1Color}`}
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className={`sm:text-lg text-base font-medium hover:text-gray-600 ${h1Color}`}
            >
              Contact
            </a>
          </li>
        </ul>
        <ThemeSwitcher />
      </div>
    </div>
  );
};

export default Navbar;
