import Image from "next/image";

import AppCard from "@/components/shared/AppCard";
import Badge from "@/components/ui/Badge";

import { formatCurrency } from "@/utils/formatCurrency";

import { MenuItem } from "@/types/menu";

interface Props {
  item: MenuItem;
}

export default function MenuCard({
  item,
}: Props) {
  return (
    <AppCard className="overflow-hidden p-0">

      <div className="relative h-52">

        <Image
          src={item.image}
          alt={item.name}
          fill
          className="object-cover"
        />

      </div>

      <div className="space-y-4 p-5">

        <div className="flex items-start justify-between">

          <div>

            <h2 className="text-xl font-semibold">
              {item.name}
            </h2>

            <p className="mt-1 text-sm text-slate-500">
              {item.description}
            </p>

          </div>

          <Badge
            variant={
              item.available
                ? "success"
                : "danger"
            }
          >
            {item.available
              ? "Disponível"
              : "Indisponível"}
          </Badge>

        </div>

        <div className="flex items-center justify-between">

          <strong className="text-xl text-orange-600">
            {formatCurrency(item.price)}
          </strong>

          <button className="font-medium text-orange-600 hover:underline">
            Editar
          </button>

        </div>

      </div>

    </AppCard>
  );
}