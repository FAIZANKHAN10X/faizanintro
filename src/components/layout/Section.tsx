import { cn } from "@/lib/utils";

interface SectionProps {
  id: string;
  children: React.ReactNode;
  className?: string;
}

export function Section({ id, children, className }: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        "min-h-screen flex items-center justify-center px-6 md:px-12 py-20", // Added py-20 for safety spacing
        className,
      )}
    >
      <div className="max-w-6xl w-full relative z-10">{children}</div>
    </section>
  );
}
