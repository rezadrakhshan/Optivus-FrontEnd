interface Props {
  plan: "FREE" | "PREMIUM";
}

export default function PlanBadge({ plan }: Props) {
  const isPremium = plan === "PREMIUM";

  return (
    <span
      className={`inline-flex items-center rounded-full px-2 py-1 text-xs font-medium ${
        isPremium
          ? "bg-amber-500/20 text-amber-400"
          : "bg-emerald-500/20 text-emerald-400"
      }`}
    >
      {isPremium ? "💎 Premium" : "🟢 Free"}
    </span>
  );
}