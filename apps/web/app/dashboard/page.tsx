"use client";

import { useQuery } from "@apollo/client";
import { VendingMachineCard } from "@components/VendingMachineCard";
import { VendingMachinesDocument } from "@graphql/generated/graphql";
import Link from "next/link";

export default function DashboardPage() {
  const { data: vendingMachines } = useQuery(VendingMachinesDocument);
  return (
    <>
      <h1 className="font-bold text-3xl text-gray-900 px-10 py-4">Dashboard</h1>
      <hr className="m3-10" />
      <div className="p-10 max-w-screen-xl mx-auto">
        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-4">
          {vendingMachines?.vendingMachines.map((vm) => (
            <Link key={vm.id} href={`/dashboard/${vm.id}`}>
              <VendingMachineCard {...vm} />
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
