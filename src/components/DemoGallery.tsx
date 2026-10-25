"use client";

/* eslint-disable @next/next/no-img-element */
import { useCallback, useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import TrackedWhatsAppLink from "@/components/TrackedWhatsAppLink";
import type { Demo } from "@/components/DemoCard";

interface DemoGalleryProps {
  demo: Demo | null;
  onClose: () => void;
}

export default function DemoGallery({ demo, onClose }: DemoGalleryProps) {
  const strip = useRef<HTMLDivElement>(null);
  const [current, setCurrent] = useState(0);

  const goTo = (i: number) =>
    strip.current?.scrollTo({ left: i * strip.current.clientWidth, behavior: "smooth" });
  const step = useCallback(
    (dir: 1 | -1) => strip.current?.scrollBy({ left: dir * strip.current.clientWidth, behavior: "smooth" }),
    []
  );

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    },
    [onClose, step]
  );

  useEffect(() => {
    if (!demo) return;
    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [demo, handleKeyDown]);

  // Thumbnail aktif ikut terlihat di strip thumbnail.
  useEffect(() => {
    document.getElementById(`demo-thumb-${current}`)?.scrollIntoView({ block: "nearest", inline: "center", behavior: "smooth" });
  }, [current]);

  return (
    <AnimatePresence onExitComplete={() => setCurrent(0)}>
      {demo && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] bg-black/80 flex items-center justify-center p-4"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            className="bg-white rounded-2xl overflow-hidden max-w-4xl w-full max-h-[92vh] flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between p-4 border-b border-slate-100 shrink-0">
              <div>
                <h3 className="font-heading text-lg font-semibold text-slate-900">{demo.name}</h3>
                <p className="text-xs text-slate-500">{demo.niche}</p>
              </div>
              <button
                onClick={onClose}
                className="p-1 text-slate-400 hover:text-slate-900 transition-colors duration-200 cursor-pointer"
                aria-label="Close"
              >
                <X size={20} />
              </button>
            </div>

            <div className="overflow-y-auto min-h-0">
              <div className="relative bg-slate-900">
                <div
                  ref={strip}
                  onScroll={(e) => setCurrent(Math.round(e.currentTarget.scrollLeft / e.currentTarget.clientWidth))}
                  className="flex overflow-x-auto snap-x snap-mandatory [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
                >
                  {demo.images.map((src, i) => (
                    <div key={src} className="snap-center shrink-0 w-full flex items-center justify-center">
                      <img
                        src={src}
                        alt={`${demo.name} — tampilan ${i + 1}`}
                        className="h-[50vh] sm:h-[58vh] w-auto max-w-full object-contain"
                        loading={i < 2 ? "eager" : "lazy"}
                      />
                    </div>
                  ))}
                </div>
                {demo.images.length > 1 && (
                  <>
                    <button
                      onClick={() => step(-1)}
                      className="absolute left-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/80 hover:bg-white text-slate-900 cursor-pointer"
                      aria-label="Gambar sebelumnya"
                    >
                      <ChevronLeft size={20} />
                    </button>
                    <button
                      onClick={() => step(1)}
                      className="absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/80 hover:bg-white text-slate-900 cursor-pointer"
                      aria-label="Gambar berikutnya"
                    >
                      <ChevronRight size={20} />
                    </button>
                    <span className="absolute bottom-2 right-3 bg-slate-900/70 text-white text-xs px-2 py-1 rounded-lg">
                      {current + 1} / {demo.images.length}
                    </span>
                  </>
                )}
              </div>

              {demo.images.length > 1 && (
                <div className="flex gap-2 overflow-x-auto p-3 bg-slate-50 border-b border-slate-100">
                  {demo.thumbs.map((src, i) => (
                    <button
                      key={src}
                      id={`demo-thumb-${i}`}
                      onClick={() => goTo(i)}
                      aria-label={`Lihat gambar ${i + 1}`}
                      className={`shrink-0 h-12 w-16 rounded-md overflow-hidden border-2 cursor-pointer ${
                        i === current ? "border-amber-500" : "border-transparent opacity-70 hover:opacity-100"
                      }`}
                    >
                      <img src={src} alt="" className="w-full h-full object-cover object-top" loading="lazy" />
                    </button>
                  ))}
                </div>
              )}

              <div className="p-5">
                <h4 className="font-heading text-sm font-semibold text-slate-900">Sistem apa ini?</h4>
                <p className="mt-1 text-sm text-slate-600 leading-relaxed">{demo.about}</p>

                {demo.features.length > 0 && (
                  <>
                    <h4 className="mt-5 font-heading text-sm font-semibold text-slate-900">Fitur penting</h4>
                    <ul className="mt-2 grid sm:grid-cols-2 gap-3">
                      {demo.features.map((f) => (
                        <li key={f.title} className="rounded-xl border border-slate-100 bg-slate-50 p-3">
                          <p className="text-sm font-semibold text-slate-900">{f.title}</p>
                          <p className="mt-1 text-xs text-slate-600 leading-relaxed">{f.text}</p>
                        </li>
                      ))}
                    </ul>
                  </>
                )}
                <p className="mt-4 text-xs text-slate-400">Tampilan memakai data contoh.</p>
              </div>
            </div>

            <div className="p-4 border-t border-slate-100 shrink-0 flex justify-end">
              <TrackedWhatsAppLink
                ctaLabel="Mau sistem seperti ini?"
                ctaLocation="demo_gallery"
                message={`Halo saya tertarik dengan demo ${demo.name} (${demo.niche}) dan ingin diskusi`}
                className="inline-flex items-center justify-center bg-amber-500 text-slate-900 px-5 py-2.5 rounded-xl text-sm font-semibold hover:bg-amber-400 transition-colors duration-200"
              >
                Mau sistem seperti ini?
              </TrackedWhatsAppLink>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
