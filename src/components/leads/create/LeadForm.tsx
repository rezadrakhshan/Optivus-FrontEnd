import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  leadFormSchema,
  type LeadFormValues,
} from "../../../schemas/leads/create/lead-form.schema";
import CategorySelect from "../../form/CategorySelect";
import { categories } from "../../../mock/categories";

type Props = {
  mode: "create" | "edit";
  defaultValues?: Partial<LeadFormValues>;
  onSubmit: (data: LeadFormValues) => void | Promise<void>;
};

export default function LeadForm({ mode, defaultValues, onSubmit }: Props) {
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm<LeadFormValues>({
    resolver: zodResolver(leadFormSchema),
    defaultValues: {
      trackingCode: undefined,
      categoryId: "",
      type: "THIRDPARTY",
      status: "WON",
      tag: "RENEWED",
      nextFollowUp: "",
      notes: "",
      ...defaultValues,
    },
  });

  const type = watch("type");
  const status = watch("status");
  const tag = watch("tag");
  const categoryId = watch("categoryId");

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6"
    >
      <div className="grid gap-6 xl:grid-cols-2">
        <Field label="کد رهگیری" error={errors.trackingCode?.message}>
          <input
            type="number"
            {...register("trackingCode")}
            className="w-full rounded-xl border border-zinc-700 bg-zinc-950 px-4 py-3 text-white outline-none transition focus:border-blue-500"
            placeholder="1223456"
          />
        </Field>

        <Field label="دسته‌بندی" error={errors.categoryId?.message}>
          <CategorySelect
            categories={categories}
            value={categoryId}
            onChange={(value) =>
              setValue("categoryId", value, {
                shouldValidate: true,
              })
            }
          />
        </Field>

        <Field label="نوع" error={errors.type?.message}>
          <div className="grid grid-cols-2 gap-3">
            <ChoiceButton
              active={type === "THIRDPARTY"}
              onClick={() => setValue("type", "THIRDPARTY")}
            >
              شخص ثالث
            </ChoiceButton>

            <ChoiceButton
              active={type === "CARBODY"}
              onClick={() => setValue("type", "CARBODY")}
            >
              بدنه
            </ChoiceButton>
          </div>
        </Field>

        <Field label="وضعیت" error={errors.status?.message}>
          <div className="grid grid-cols-2 gap-3">
            <ChoiceButton
              active={status === "WON"}
              onClick={() => setValue("status", "WON")}
            >
              برنده
            </ChoiceButton>

            <ChoiceButton
              active={status === "LOST"}
              onClick={() => setValue("status", "LOST")}
            >
              از دست رفته
            </ChoiceButton>
          </div>
        </Field>

        <Field label="تگ" error={errors.tag?.message}>
          <div className="grid grid-cols-2 gap-3">
            <ChoiceButton
              active={tag === "RENEWED"}
              onClick={() => setValue("tag", "RENEWED")}
            >
              تمدید
            </ChoiceButton>

            <ChoiceButton
              active={tag === "FOLLOWUP"}
              onClick={() => setValue("tag", "FOLLOWUP")}
            >
              پیگیری
            </ChoiceButton>
          </div>
        </Field>

        <Field label="پیگیری بعدی" error={errors.nextFollowUp?.message}>
          <input
            type="datetime-local"
            {...register("nextFollowUp")}
            className="w-full rounded-xl border border-zinc-700 bg-zinc-950 px-4 py-3 text-white outline-none transition focus:border-blue-500"
          />
        </Field>

        <div className="xl:col-span-2">
          <Field label="یادداشت" error={errors.notes?.message}>
            <textarea
              rows={5}
              {...register("notes")}
              className="w-full rounded-xl border border-zinc-700 bg-zinc-950 px-4 py-3 text-white outline-none transition focus:border-blue-500"
              placeholder="یادداشت مرتبط با لید..."
            />
          </Field>
        </div>
      </div>

      <div className="mt-8 flex items-center justify-end gap-3">
        <button
          type="button"
          onClick={() => history.back()}
          className="rounded-xl border border-zinc-700 px-5 py-3 text-zinc-300 transition hover:bg-zinc-800 hover:text-white"
        >
          انصراف
        </button>

        <button
          type="submit"
          disabled={isSubmitting}
          className="rounded-xl bg-blue-600 px-5 py-3 font-medium text-white transition hover:bg-blue-500 disabled:opacity-60"
        >
          {mode === "create" ? "ایجاد لید" : "ذخیره تغییرات"}
        </button>
      </div>
    </form>
  );
}

function Field({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="space-y-2">
      <label className="block text-sm text-zinc-300">{label}</label>
      {children}
      {error ? <p className="text-sm text-red-400">{error}</p> : null}
    </div>
  );
}

function ChoiceButton({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`rounded-xl border px-4 py-3 text-sm transition ${
        active
          ? "border-blue-500 bg-blue-500/15 text-blue-300"
          : "border-zinc-700 bg-zinc-950 text-zinc-300 hover:bg-zinc-800"
      }`}
    >
      {children}
    </button>
  );
}
