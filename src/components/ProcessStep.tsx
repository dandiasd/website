"use client";

import { motion } from "framer-motion";

interface ProcessStepProps {
  number: string;
  title: string;
  description: string;
  index: number;
}

export default function ProcessStep({ number, title, description, index }: ProcessStepProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.15 }}
      className="flex gap-4 items-start"
    >
      <div className="flex-shrink-0 w-10 h-10 bg-amber-500 text-slate-900 rounded-xl flex items-center justify-center font-heading font-bold text-sm">
        {number}
      </div>
      <div>
        <h4 className="font-heading font-semibold text-slate-900">{title}</h4>
        <p className="text-slate-500 text-sm mt-1">{description}</p>
      </div>
    </motion.div>
  );
}
