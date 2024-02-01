"use client";

import { useQuery } from "@apollo/client";
import { VendingMachinesDocument } from "@graphql/generated/graphql";

export default function DashboardPage() {
  const { data: vendingMachines } = useQuery(VendingMachinesDocument);
  return (
    <div className="p-10 max-w-screen-xl">
      <h1 className="font-bold text-3xl text-gray-900">Dashboard</h1>
      <div>
        {vendingMachines?.vendingMachines.map((vm) => (
          <div key={vm.id}>{vm?.name}</div>
        ))}
      </div>
    </div>
  );
}
