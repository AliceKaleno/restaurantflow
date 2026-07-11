interface EmptyStateProps {
  title: string;
  description: string;
}

export default function EmptyState({
  title,
  description,
}: EmptyStateProps) {
  return (
    <div className="flex flex-col items-center justify-center rounded-2xl border border-dashed border-slate-300 bg-white p-12">

      <h2 className="text-xl font-semibold">
        {title}
      </h2>

      <p className="mt-2 text-center text-slate-500">
        {description}
      </p>

    </div>
  );
}