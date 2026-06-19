"use client";

import { motion } from "framer-motion";
import { Code2, Layout, BarChart3, Bot } from "lucide-react";

const iconMap: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  Layout,
  Code2,
  BarChart3,
  Bot,
};

interface ServiceCardProps {
  iconName: string;
  title: string;
  description: string;
  index: number;
}

export default function ServiceCard({ iconName, title, description, index }: ServiceCardProps) {
  const Icon = iconMap[iconName] || Layout;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 cursor-pointer"
    >
      <div className="w-12 h-12 bg-slate-100 rounded-xl flex items-center justify-center mb-4">
        <Icon size={24} className="text-slate-900" />
      </div>
      <h3 className="font-heading text-lg font-semibold text-slate-900 mb-2">{title}</h3>
      <p className="text-slate-500 text-sm leading-relaxed">{description}</p>
    </motion.div>
  );
}
