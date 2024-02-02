"use client";

import { useQuery } from "@apollo/client";
import { ArrowLeftIcon } from "lucide-react";
import { VendingMachineDocument } from "@graphql/generated/graphql";
import Link from "next/link";
import { notFound } from "next/navigation";
import { StatusLabel } from "@components/VendingMachineCard/status";
import TimeCounter from "@components/TimeCounter";
import { VendingMachineSettingModal } from "@container/VendingMechineSettingModal";

export default function DashboardPage({
  params,
}: {
  params: { vmID: string };
}) {
  const { data: vendingMachine, loading } = useQuery(VendingMachineDocument, {
    variables: {
      vendingMachineId: params.vmID,
    },
  });

  const vendingMachineData = vendingMachine?.vendingMachine;
  if (!vendingMachineData && !loading) return notFound();
  return (
    <>
      <div className="font-bold text-3xl text-gray-900 px-10 py-6 flex gap-3 items-center">
        <Link
          href="/dashboard"
          className="px-3 py-1.5 bg-foreground/80 hover:bg-foreground rounded-md"
        >
          <ArrowLeftIcon />
        </Link>
        <p className="flex gap-2 text-primary">
          #{vendingMachineData?.id} -{vendingMachineData?.name}
        </p>
      </div>
      <hr className="m3-10" />
      <div className="px-6">
        <div className="p-10 max-w-screen-lg md:mx-auto bg-white mt-10 rounded-md shadow-md border border-gray-100 space-y-3">
          <div className="mb-6">
            <h2 className="text-center text-xl text-gray-500">Total Sales</h2>
            <p className="text-center text-[72px] font-bold leading-[1em]">
              {vendingMachineData?.currentSales}
            </p>
          </div>
          <div className="!mt-10">
            <p className="text-2xl font-bold leading-[1em]">Detail</p>
          </div>
          <hr className="!mt-2" />
          <div className="grid md:grid-cols-2">
            <div>
              <p className="text-sm text-gray-500">Name:</p>
              <p className="text-lg">{vendingMachineData?.name}</p>
            </div>
            <div className="">
              <p className="text-sm text-gray-500">Uptime:</p>
              <div className="text-lg">
                {vendingMachineData?.lastBoots && (
                  <TimeCounter
                    bootTime={new Date(Number(vendingMachineData?.lastBoots))}
                  />
                )}
              </div>
            </div>
          </div>
          <div className="grid md:grid-cols-2">
            <div>
              <p className="text-sm text-gray-500">Vending Machine ID:</p>
              <p className="uppercase text-lg">{vendingMachineData?.id}</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Status:</p>
              <div className="flex">
                <StatusLabel status={vendingMachineData?.status!} />
              </div>
            </div>
          </div>
          <div>
            <p className="text-sm text-gray-500">Description</p>
            <p>{vendingMachineData?.description}</p>
          </div>
          <div className="!mt-10">
            <p className="text-2xl font-bold leading-[1em]">Setting</p>
          </div>
          <hr className="!mt-2" />
          <div className="grid md:grid-cols-2">
            <div>
              <p className="text-sm text-gray-500">Temperature:</p>
              <p className="text-lg">
                {vendingMachineData?.config.temperature}
              </p>
            </div>
            <div className="">
              <p className="text-sm text-gray-500">Stock Thresholds:</p>
              <p className="text-lg">
                {vendingMachineData?.config.stockThresholds}
              </p>
            </div>
          </div>
          <div className="grid md:grid-cols-2">
            <div>
              <p className="text-sm text-gray-500">Operational Start:</p>
              <p className="text-lg">
                {vendingMachineData?.config.operationalHours.start}
              </p>
            </div>
            <div className="">
              <p className="text-sm text-gray-500">Operational End:</p>
              <p className="text-lg">
                {vendingMachineData?.config.operationalHours.stop}
              </p>
            </div>
          </div>

          <VendingMachineSettingModal {...vendingMachineData!} />
        </div>
      </div>
    </>
  );
}
