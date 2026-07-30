import type { Category } from "../../types/category";

interface Props {
  categories: Category[];
  value: string;
  onChange: (value: string) => void;
}

export default function CategorySelect({ categories, value, onChange }: Props) {
  return (
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="
        w-full
        rounded-xl
        border
        border-zinc-700
        bg-zinc-950
        px-4
        py-3
        text-white
        outline-none
        transition
        focus:border-blue-500
      "
    >
      <option value="">انتخاب دسته‌بندی</option>

      {categories.map((category) => (
        <option key={category.id} value={category.id}>
          {category.name}
        </option>
      ))}
    </select>
  );
}
