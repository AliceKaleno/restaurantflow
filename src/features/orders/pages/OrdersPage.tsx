import OrdersHeader from "@/components/orders/OrderHeader";
import OrdersList from "@/components/orders/OrdersList";

export default function OrdersPage() {
  return (
    <div className="space-y-8">
      <OrdersHeader />

      <OrdersList />
    </div>
  );
}