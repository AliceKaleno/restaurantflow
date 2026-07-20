import { Table2 } from "lucide-react";

export default function TableHeader() {
  return (
    <header className="space-y-2">

      <div className="flex items-center gap-3">

        <div
          className="
            flex
            h-12
            w-12
            items-center
            justify-center
            rounded-2xl
            bg-orange-100
          "
        >
          <Table2
            className="text-orange-500"
            size={24}
          />
        </div>

        <div>

          <h1 className="text-3xl font-bold">
            Mesas
          </h1>

          <p className="text-slate-500">
            Gerencie todas as mesas do restaurante.
          </p>

        </div>

      </div>

    </header>
  );
}