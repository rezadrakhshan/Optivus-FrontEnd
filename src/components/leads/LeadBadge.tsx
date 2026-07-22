interface Props {
  color: string;
  children: React.ReactNode;
}

export default function LeadBadge({
  color,
  children,
}: Props) {
  return (
    <span
      className={`inline-flex rounded-full px-2.5 py-1 text-xs font-medium ${color}`}
    >
      {children}
    </span>
  );
}