import { type ReactNode } from "react";
import Card from "../ui/Card";

interface Props {
  children: ReactNode;
}

export default function AuthCard({ children }: Props) {
  return (
    <Card className="w-full max-w-md p-8">
      {children}
    </Card>
  );
}