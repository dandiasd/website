"use client";

import { motion } from "framer-motion";

const stats = [
  { value: "3+", label: "Project Selesai" },
  { value: "5+", label: "Tahun Pengalaman" },
  { value: "100%", label: "Client Satisfaction" },
  { value: "24 Jam", label: "Respon Cepat" },
];

export default function StatsBar() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
      {stats.map((stat, i) => (
        <motion.div
          key={stat.label}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: i * 0.1 }}
          className="text-center"
        >
          <p className="font-heading text-3xl md:text-4xl font-bold text-slate-900">{stat.value}</p>
          <p className="text-slate-500 text-sm mt-1">{stat.label}</p>
        </motion.div>
      ))}
    </div>
  );
}
