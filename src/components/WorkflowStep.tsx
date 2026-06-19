"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

interface WorkflowStepProps {
  number: number;
  title: string;
  description: string;
  icon: React.ReactNode;
  isLast?: boolean;
  index: number;
}

export default function WorkflowStep({
  number,
  title,
  description,
  icon,
  isLast,
  index,
}: WorkflowStepProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      className="flex items-start gap-4 relative"
    >
      {/* Step Number & Icon */}
      <div className="flex flex-col items-center shrink-0">
        <div className="w-14 h-14 bg-amber-500 rounded-2xl flex items-center justify-center text-slate-900 font-heading font-bold text-lg shadow-sm">
          {icon}
        </div>
        {!isLast && (
          <div className="w-0.5 h-16 bg-slate-200 mt-2 hidden md:block" />
        )}
      </div>

      {/* Content */}
      <div className="pb-8 md:pb-12">
        <div className="flex items-center gap-3 mb-2">
          <span className="text-xs font-semibold text-amber-600 bg-amber-100 px-2.5 py-1 rounded-full">
            Step {number}
          </span>
        </div>
        <h3 className="font-heading text-lg font-semibold text-slate-900 mb-2">
          {title}
        </h3>
        <p className="text-slate-500 text-sm leading-relaxed">{description}</p>
      </div>

      {/* Arrow for desktop horizontal layout */}
      {!isLast && (
        <div className="hidden md:flex items-center absolute -right-6 top-7 text-slate-300">
          <ArrowRight size={20} />
        </div>
      )}
    </motion.div>
  );
}
