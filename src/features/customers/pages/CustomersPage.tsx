"use client";

import { useMemo, useState } from "react";

import CustomerHeader from "../components/CustomerHeader";
import CustomerToolbar from "../components/CustomerToolbar";
import CustomerTable from "../components/CustomerTable";
import NewCustomerSheet from "../components/NewCustomerSheet";

import { useCustomerStore } from "@/store/customerStore";

import { Customer } from "@/types/customer";

export default function CustomersPage() {
  const customers = useCustomerStore((state) => state.customers);

  const removeCustomer = useCustomerStore(
    (state) => state.removeCustomer
  );

  const [search, setSearch] = useState("");

  const [sheetOpen, setSheetOpen] = useState(false);

  const filteredCustomers = useMemo(() => {
    return customers.filter((customer) =>
      customer.name
        .toLowerCase()
        .includes(search.toLowerCase())
    );
  }, [customers, search]);

  function handleView(customer: Customer) {
    console.log("Visualizar", customer);
  }

  function handleEdit(customer: Customer) {
    console.log("Editar", customer);
  }

  function handleDelete(customer: Customer) {
    const confirmed = window.confirm(
      `Deseja excluir ${customer.name}?`
    );

    if (!confirmed) return;

    removeCustomer(customer.id);
  }

  return (
    <div className="space-y-8">

      <CustomerHeader />

      <CustomerToolbar
        search={search}
        onSearchChange={setSearch}
        onNewCustomer={() => setSheetOpen(true)}
      />

      <CustomerTable
        customers={filteredCustomers}
        onView={handleView}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />

      <NewCustomerSheet
        open={sheetOpen}
        onOpenChange={setSheetOpen}
      />

    </div>
  );
}