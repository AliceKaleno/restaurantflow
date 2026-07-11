import Image from "next/image";

import AppCard from "@/components/shared/AppCard";
import Badge from "@/components/ui/badge";

import { formatCurrency } from "@/utils/formatCurrency";
import { MenuItem } from "@/types/menu";

interface Props {
  item: MenuItem;
  priority?: boolean;
}

export default function MenuCard({
  item,
  priority = false,
}: Props) {
  return (
    <AppCard
      className="
        overflow-hidden
        p-0
        transition-all
        duration-300
        hover:-translate-y-1
        hover:shadow-xl
      "
    >
      {/* Imagem */}
      <div className="relative h-52">
        <Image
          src={item.image}
          alt={item.name}
          fill
          priority={priority}
          className="object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>

      {/* Conteúdo */}
      <div className="space-y-5 p-5">
        <div>
          <h2 className="text-xl font-semibold text-slate-900">
            {item.name}
          </h2>

          <p className="mt-2 text-sm leading-relaxed text-slate-500">
            {item.description}
          </p>

          <div className="mt-4 flex flex-wrap gap-2">
            <Badge variant="info">
              {item.category}
            </Badge>

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
        </div>

        {/* Rodapé */}
        <div className="flex items-center justify-between border-t border-slate-200 pt-4">
          <strong className="text-2xl font-bold text-orange-600">
            {formatCurrency(item.price)}
          </strong>

          <button
            className="
              rounded-lg
              px-4
              py-2
              text-sm
              font-medium
              text-orange-600
              transition
              hover:bg-orange-50
            "
          >
            Editar
          </button>
        </div>
      </div>
    </AppCard>
  );
}