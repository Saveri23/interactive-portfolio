export default function Hero() {
  return (
    <section className="min-h-screen pt-24 flex flex-col items-center justify-center 
      bg-gradient-to-br from-gray-100 to-white 
      dark:from-black dark:to-gray-900 
      text-gray-900 dark:text-white text-center px-6 transition-colors">

      <h1 className="text-5xl md:text-6xl font-bold mb-4">
        Hi, I’m <span className="text-blue-600 dark:text-blue-500">Saveri</span>
      </h1>

      <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
        Full Stack Developer 
      </p>

      <button
        onClick={() =>
          document.getElementById("projects")
            ?.scrollIntoView({ behavior: "smooth" })
        }
        className="px-8 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition shadow-lg"
      >
        See My Work
      </button>
    </section>
  );
}
