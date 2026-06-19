import { GitBranch, Globe, Music } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-400 py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <p className="font-heading text-lg font-bold text-white">
              Dandi<span className="text-amber-500">.</span>
            </p>
            <p className="text-sm mt-1">
              Custom web applications for small businesses
            </p>
          </div>

          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-amber-500 transition-colors duration-200" aria-label="LinkedIn">
              <Globe size={20} />
            </a>
            <a href="#" className="hover:text-amber-500 transition-colors duration-200" aria-label="TikTok">
              <Music size={20} />
            </a>
            <a href="#" className="hover:text-amber-500 transition-colors duration-200" aria-label="GitHub">
              <GitBranch size={20} />
            </a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-slate-800 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} Dandi. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
