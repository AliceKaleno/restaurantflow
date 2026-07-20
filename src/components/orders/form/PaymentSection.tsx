"use client";

import { PaymentMethod } from "@/types/order";

interface Props {
  value: PaymentMethod;
  onChange: (value: PaymentMethod) => void;
}

const methods: PaymentMethod[] = [
  "PIX",
  "Cartão",
  "Dinheiro",
];

export default function PaymentSection({
  value,
  onChange,
}: Props) {
  return (
    <div className="space-y-3">

      <label className="font-medium">
        Forma de pagamento
      </label>

      <div className="grid grid-cols-3 gap-3">

        {methods.map((method) => {

          const active = value === method;

          return (

            <button
              key={method}
              type="button"
              onClick={() => onChange(method)}
              className={`
                rounded-xl
                border
                py-3
                font-medium
                transition-all
                ${
                  active
                    ? "border-orange-500 bg-orange-500 text-white"
                    : "border-slate-300 hover:border-orange-400"
                }
              `}
            >
              {method}
            </button>

          );

        })}

      </div>

    </div>
  );
}