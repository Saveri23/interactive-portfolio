import { useState } from "react";

export default function VideoIntro() {
  const [open, setOpen] = useState(false);

  return (
    <section className="py-20 px-6 bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">
          Why Should You Hire Me?
        </h2>

        {/* Button */}
        <button
          onClick={() => setOpen(true)}
          className="px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition"
        >
          ▶ Watch Video
        </button>

        <p className="text-gray-600 dark:text-gray-400 mt-4">
          A short introduction showcasing my skills and mindset.
        </p>
      </div>

      {/* Black Screen + Video */}
      {open && (
        <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50">
          <div className="relative w-full max-w-4xl aspect-video">
            {/* Close Button */}
            <button
              onClick={() => setOpen(false)}
              className="absolute -top-10 right-0 text-white text-2xl"
            >
              ✕
            </button>

            <iframe
              className="w-full h-full rounded-lg"
              src="https://drive.google.com/file/d/14I7W85Fwqh4HGtWPMtDkOv6WCfvyOE1Q/preview"
              title="Introduction Video"
              allowFullScreen
            />
          </div>
        </div>
      )}
    </section>
  );
}
