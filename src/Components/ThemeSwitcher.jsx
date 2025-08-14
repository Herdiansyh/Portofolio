import { useTheme } from "./ThemeProvider";

export function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();

  const isDark = theme === "dark";
  const handleToggle = () => setTheme(isDark ? "light" : "dark");

  return (
    <div className="flex gap-2 items-center z-[54]">
      <span
        className={`text-sm ${
          !isDark ? "text-blue-500 font-medium" : "text-slate-500"
        }`}
      >
        Light
      </span>
      <input
        type="checkbox"
        id="dark-toggle"
        className="hidden peer"
        checked={isDark}
        onChange={handleToggle}
      />
      <label htmlFor="dark-toggle" className="cursor-pointer">
        <div className="flex h-5 w-9 items-center rounded-full bg-slate-400 p-1 transition-colors duration-300 peer-checked:bg-blue-500">
          <div className="toggle-circle h-4 w-4 rounded-full bg-white transition-transform duration-300 peer-checked:translate-x-4"></div>
        </div>
      </label>
      <span
        className={`text-sm ${
          isDark ? "text-blue-500 font-medium" : "text-slate-500"
        }`}
      >
        Dark
      </span>
    </div>
  );
}
