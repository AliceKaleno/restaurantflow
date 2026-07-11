interface PageHeaderProps {
  title: string;
  description?: string;
  children?: React.ReactNode;
}

export default function PageHeader({
  title,
  description,
  children,
}: PageHeaderProps) {
  return (
    <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
      <div>
        <h1 className="text-3xl font-bold text-slate-900">
          {title}
        </h1>

        {description && (
          <p className="mt-2 text-slate-500">
            {description}
          </p>
        )}
      </div>

      {children}
    </div>
  );
}