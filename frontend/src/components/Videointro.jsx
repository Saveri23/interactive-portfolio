export default function VideoIntro() {
  return (
    <section className="py-20 px-6 bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white transition-colors">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">Why Should You Hire Me?</h2>

        <div className="aspect-video rounded-lg overflow-hidden border dark:border-gray-700">
          <iframe className="w-full h-full" allowFullScreen />
        </div>

        <p className="text-gray-600 dark:text-gray-400 mt-4">
          A short introduction showcasing my skills and mindset.
        </p>
      </div>
    </section>
  );
}
