import { Heart } from 'lucide-react';

export function Footer() {
  return (
    <footer className="py-8 bg-gray-900 text-white">
      <div className="container mx-auto px-6">
        <div className="text-center">
          <p className="flex items-center justify-center gap-2 text-gray-400">
            Made with <Heart size={16} className="text-red-500 fill-current" /> by Unity Game Developer
          </p>
          <p className="text-gray-500 text-sm mt-2">
            © 2026 All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
}
