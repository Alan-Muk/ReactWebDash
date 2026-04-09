import type { ReactNode } from "react";

type SectionCardProps = {
  title: string;
  subtitle?: string;
  action?: ReactNode;
  children: ReactNode;
};

export default function SectionCard({
  title,
  subtitle,
  action,
  children,
}: SectionCardProps) {
  return (
    <section className="rounded-3xl border border-white/10 bg-white/5 p-5 shadow-2xl">
      <div className="flex items-center justify-between mb-4 gap-4">
        <div>
          {subtitle && (
            <p className="text-sm uppercase tracking-[0.18em] text-slate-400">
              {subtitle}
            </p>
          )}
          <h2 className="text-xl font-semibold text-white mt-1">{title}</h2>
        </div>

        {action && <div>{action}</div>}
      </div>

      {children}
    </section>
  );
}