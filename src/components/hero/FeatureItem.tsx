import { CheckCircle2 } from "lucide-react";

interface FeatureItemProps {
  children: React.ReactNode;
}

export default function FeatureItem({ children }: FeatureItemProps) {
  return (
    <div className="flex items-center gap-3 text-zinc-300">
      <CheckCircle2
        size={18}
        className="text-blue-500 shrink-0"
      />

      <span>{children}</span>
    </div>
  );
}