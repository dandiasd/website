"use client";

/* eslint-disable @next/next/no-img-element */
import { motion } from "framer-motion";
import { Images, Smartphone } from "lucide-react";

export interface Demo {
  slug: string;
  name: string;
  niche: string;
  tagline: string;
  about: string;
  features: { title: string; text: string }[];
  platform: "web" | "android";
  cover: string;
  images: string[];
  thumbs: string[];
}

interface DemoCardProps {
  demo: Demo;
  onOpen: () => void;
}

export default function DemoCard({ demo, onOpen }: DemoCardProps) {
  return (
    <motion.button
      type="button"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3 }}
      onClick={onOpen}
      className="text-left bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden hover:shadow-md transition-shadow duration-300 cursor-pointer"
    >
      <div className="aspect-[16/10] bg-slate-100 relative overflow-hidden">
        <img
          src={demo.cover}
          alt={`Tampilan ${demo.name}`}
          className="absolute inset-0 w-full h-full object-cover object-top"
          loading="lazy"
        />
        <span className="absolute bottom-2 right-2 inline-flex items-center gap-1 bg-slate-900/70 text-white text-xs px-2 py-1 rounded-lg">
          <Images size={12} /> {demo.images.length}
        </span>
      </div>
      <div className="p-4">
        <h3 className="font-heading text-base font-semibold text-slate-900">{demo.name}</h3>
        <p className="text-xs text-slate-500 mt-1">{demo.niche}</p>
        {demo.tagline && <p className="text-sm text-slate-500 mt-2 line-clamp-2">{demo.tagline}</p>}
        {demo.platform === "android" && (
          <span className="mt-3 inline-flex items-center gap-1 text-xs bg-slate-100 text-slate-600 px-2.5 py-1 rounded-lg">
            <Smartphone size={12} /> Aplikasi HP
          </span>
        )}
      </div>
    </motion.button>
  );
}
