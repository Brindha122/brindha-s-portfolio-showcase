
import { cn } from "@/lib/utils";

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
}

const Section = ({ children, className, id }: SectionProps) => {
  return (
    <section id={id} className={cn("py-16 px-4 md:px-6 lg:px-8", className)}>
      <div className="max-w-6xl mx-auto">{children}</div>
    </section>
  );
};

export default Section;
