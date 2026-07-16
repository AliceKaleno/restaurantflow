"use client";

interface Props {
  value: string;
  onChange: (value: string) => void;
}

export default function TableSection({
  value,
  onChange,
}: Props) {
  return (
    <div className="space-y-2">
      <label className="font-medium">
        Mesa
      </label>

      <input
        value={value}
        onChange={(e) =>
          onChange(e.target.value)
        }
        placeholder="Mesa 05"
        className="
          w-full
          rounded-xl
          border
          border-slate-300
          px-4
          py-3
          outline-none
          transition
          focus:border-orange-500
        "
      />
    </div>
  );
}