import OrdersHeader from "@/components/orders/OrderHeader";
import OrdersFilters from "@/components/orders/OrdersFilters";
import OrdersList from "@/components/orders/OrdersList";

export default function OrdersPage() {
  return (
    <div className="space-y-8">
      <OrdersHeader />

      <OrdersFilters />

      <OrdersList />
    </div>
  );
}