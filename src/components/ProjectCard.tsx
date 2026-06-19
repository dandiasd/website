"use client";

import { motion } from "framer-motion";
import { Play } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  tech: string[];
  index: number;
  videoId?: string;
  onPlay: () => void;
}

export default function ProjectCard({ title, description, tech, index, videoId, onPlay }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.15 }}
      className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden hover:shadow-md transition-all duration-300 cursor-pointer"
      onClick={onPlay}
    >
      <div className="aspect-video bg-slate-200 relative flex items-center justify-center group overflow-hidden">
        {videoId && (
          <img
            src={`https://img.youtube.com/vi/${videoId}/hqdefault.jpg`}
            alt={title}
            className="absolute inset-0 w-full h-full object-cover"
            loading="lazy"
          />
        )}
        <div className="absolute inset-0 bg-slate-900/30 group-hover:bg-slate-900/50 transition-colors duration-200" />
        <div className="w-16 h-16 bg-amber-500/90 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-200 z-10">
          <Play size={28} className="text-slate-900 ml-1" />
        </div>
      </div>
      <div className="p-5">
        <h3 className="font-heading text-lg font-semibold text-slate-900 mb-2">{title}</h3>
        <p className="text-slate-500 text-sm mb-3">{description}</p>
        <div className="flex flex-wrap gap-2">
          {tech.map((t) => (
            <span key={t} className="text-xs bg-slate-100 text-slate-600 px-2.5 py-1 rounded-lg">
              {t}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
