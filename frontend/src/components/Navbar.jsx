import { useTheme } from "../context/ThemeContext";

export default function Navbar() {
  const { dark, toggleTheme } = useTheme();

  return (
    <nav className="fixed top-0 w-full bg-white dark:bg-black shadow z-50 transition-colors">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        <h1 className="text-xl font-bold text-blue-600 dark:text-blue-500">
          Saveri.dev
        </h1>

        <button
          onClick={toggleTheme}
          className="text-2xl p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-700"
        >
          {dark ? "☀️" : "🌙"}
        </button>
      </div>
    </nav>
  );
}
