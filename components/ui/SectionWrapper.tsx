import { ReactNode } from "react";

interface SectionWrapperProps {
  children: ReactNode;
  className?: string;
  id?: string;
  dim?: boolean;
  padding?: string;
}

export default function SectionWrapper({
  children,
  className = "",
  id,
  dim = false,
  padding = "py-32",
}: SectionWrapperProps) {
  return (
    <section
      id={id}
      className={`relative ${padding} px-6 md:px-12 lg:px-20 ${
        dim ? "bg-transparent text-ink" : "bg-transparent text-ink"
      } ${className}`}
    >
      <div className="mx-auto max-w-7xl">{children}</div>
    </section>
  );
}
