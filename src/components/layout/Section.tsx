interface SectionProps {
  id: string;
  children: React.ReactNode;
  className?: string;
}

export function Section({ id, children, className }: SectionProps) {
  return (
    <section
      id={id}
      className={`min-h-screen flex items-center justify-center px-6 md:px-12 ${className}`}
    >
      <div className="max-w-6xl w-full">{children}</div>
    </section>
  );
}
