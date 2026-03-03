import { Github, Linkedin, Mail } from "lucide-react";

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900 text-white">
      <div className="container mx-auto px-6 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 p-1">
              <div className="w-full h-full rounded-full bg-gray-800 flex items-center justify-center text-5xl">
                🎮
              </div>
            </div>
          </div>

          <h1 className="text-5xl md:text-6xl mb-4">
            Unity Game Developer
          </h1>

          <p className="text-xl md:text-2xl text-purple-200 mb-8">
            Experience and Achievements since 2023 to Now.
          </p>

          <div className="flex gap-4 justify-center mb-12">
            <a
              href="#about"
              className="px-8 py-3 bg-purple-600 hover:bg-purple-700 rounded-lg transition-colors"
            >
              About Me
            </a>
            <a
              href="#portfolio"
              className="px-8 py-3 border-2 border-purple-400 hover:bg-purple-800/50 rounded-lg transition-colors"
            >
              ดูผลงาน
            </a>
          </div>

          <div className="flex gap-6 justify-center">
            <a
              href="https://github.com/Daserilz"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white/10 hover:bg-white/20 rounded-full transition-colors"
            >
              <Github size={24} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white/10 hover:bg-white/20 rounded-full transition-colors"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="mailto:contact@example.com"
              className="p-3 bg-white/10 hover:bg-white/20 rounded-full transition-colors"
            >
              <Mail size={24} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}