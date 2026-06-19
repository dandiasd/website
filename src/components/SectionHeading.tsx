import ScrollReveal from "./ScrollReveal";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
}

export default function SectionHeading({ title, subtitle, centered = true }: SectionHeadingProps) {
  return (
    <ScrollReveal>
      <div className={`mb-12 ${centered ? "text-center" : ""}`}>
        <h2 className="font-heading text-3xl md:text-4xl font-semibold text-slate-900">
          {title}
        </h2>
        {subtitle && (
          <p className="mt-3 text-lg text-slate-500 max-w-2xl mx-auto">
            {subtitle}
          </p>
        )}
      </div>
    </ScrollReveal>
  );
}
