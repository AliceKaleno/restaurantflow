import { Construction } from "lucide-react";

interface ComingSoonProps {
  title: string;
  description: string;
}

export default function ComingSoon({
  title,
  description,
}: ComingSoonProps) {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center rounded-2xl border border-dashed border-slate-300 bg-white text-center">

      <Construction
        size={56}
        className="mb-5 text-orange-500"
      />

      <h1 className="text-3xl font-bold">
        {title}
      </h1>

      <p className="mt-3 max-w-md text-slate-500">
        {description}
      </p>

    </div>
  );
}