import AppCard from "@/components/shared/AppCard";

interface TableCardProps {
  number: number;
  status: "Livre" | "Ocupada" | "Reservada";
  people: number;
  total: string;
}

const statusStyles = {
  Livre: "bg-green-100 text-green-700",
  Ocupada: "bg-red-100 text-red-700",
  Reservada: "bg-yellow-100 text-yellow-700",
};

export default function TableCard({
  number,
  status,
  people,
  total,
}: TableCardProps) {
  return (
    <AppCard className="cursor-pointer transition hover:scale-[1.02]">
      <div className="space-y-4">

        <div className="flex items-center justify-between">

          <h2 className="text-xl font-bold">
            Mesa {number}
          </h2>

          <span
            className={`rounded-full px-3 py-1 text-sm font-medium ${statusStyles[status]}`}
          >
            {status}
          </span>

        </div>

        <div className="space-y-2 text-sm text-slate-600">

          <p>👥 {people} pessoas</p>

          <p>💰 {total}</p>

        </div>

      </div>
    </AppCard>
  );
}