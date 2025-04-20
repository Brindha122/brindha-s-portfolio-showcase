
import { cn } from "@/lib/utils";

interface SectionTitleProps {
  children: React.ReactNode;
  className?: string;
}

const SectionTitle = ({ children, className }: SectionTitleProps) => {
  return (
    <h2 className={cn("text-3xl font-bold mb-8 text-center", className)}>
      {children}
    </h2>
  );
};

export default SectionTitle;
