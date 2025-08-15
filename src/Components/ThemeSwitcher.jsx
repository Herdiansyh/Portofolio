import { FiMoon, FiSun } from "react-icons/fi";
import { useTheme } from "./ThemeProvider";

export function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();

  const isDark = theme === "dark";
  const handleToggle = () => setTheme(isDark ? "light" : "dark");

  return (
    <div className="flex gap-2 items-center z-[54] ">
      {/* Checkbox Toggle */}
      <input
        type="checkbox"
        id="dark-toggle"
        className="hidden peer"
        checked={isDark}
        onChange={handleToggle}
      />

      <button
        onClick={handleToggle}
        className="flex items-center justify-center p-2 rounded-full hover:bg-gray-200  transition-colors"
        aria-label="Toggle Theme"
      >
        {isDark ? (
          <FiSun size={27} className="text-yellow-500 hover:cursor-pointer" />
        ) : (
          <FiMoon size={27} className="text-blue-500 hover:cursor-pointer" />
        )}
      </button>
    </div>
  );
}
