import AppCard from "@/components/shared/AppCard";

const orders = [
  {
    table: "Mesa 08",
    value: "R$ 180",
  },
  {
    table: "Mesa 04",
    value: "R$ 240",
  },
  {
    table: "Delivery",
    value: "R$ 95",
  },
];

export default function RecentOrders() {
  return (
    <AppCard>
      <h2 className="mb-5 text-lg font-semibold">
        Pedidos Recentes
      </h2>

      <div className="space-y-4">
        {orders.map((order) => (
          <div
            key={order.table}
            className="flex items-center justify-between rounded-xl bg-slate-50 p-4"
          >
            <span>{order.table}</span>

            <strong>{order.value}</strong>
          </div>
        ))}
      </div>
    </AppCard>
  );
}