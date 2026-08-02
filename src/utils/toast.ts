import { toast } from "sonner";

export type ToastType =
  | "success"
  | "error"
  | "warning"
  | "info";

export function showToast(
  type: ToastType,
  message: string
) {
  toast[type](message);
}