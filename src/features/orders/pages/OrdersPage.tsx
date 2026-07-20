import OrdersHeader from "@/components/orders/OrderHeader";
import OrdersList from "@/components/orders/OrdersList";
import HistorySection from "@/services/orders/history/HistorySection";

export default function OrdersPage() {
  return (
    <div className="space-y-8">
      <OrdersHeader />

      <OrdersList />

      <HistorySection />
    </div>
  );
}