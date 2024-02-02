"use client";

import { Tabs, TabsList, TabsTrigger } from "@components/ui/tabs";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@components/ui/select";
import { useQuery } from "@apollo/client";
import { VendingMachineCard } from "@components/VendingMachineCard";
import {
  VendingMachinesDocument,
  OpenStatus,
  SortEnum,
} from "@graphql/generated/graphql";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Button } from "@components/ui/button";
import clsx from "clsx";

const PageLimit = 6;

export default function DashboardPage() {
  const [page, setPage] = useState(1);
  const [status, setStatus] = useState("all");
  const [sort, setSort] = useState("default");
  const { data: vendingMachines } = useQuery(VendingMachinesDocument, {
    variables: {
      limit: PageLimit,
      offset: (page - 1) * PageLimit,
      sort: sort === "default" ? undefined : (sort as any),
      status: status === "all" ? undefined : (status as any),
    },
  });
  // reset page everytime when filter query happend
  useEffect(() => {
    setPage(1);
  }, [status, sort]);
  return (
    <div className="w-full overflow-x-hidden">
      <div className="px-4 md:px-10 py-4 flex items-center gap-4">
        <h1 className="font-bold text-2xl md:text-3xl text-gray-900 flex-1">
          Dashboard
        </h1>

        <div className="flex items-center gap-3">
          <p className="hidden md:block">Sort:</p>
          <Select
            name="sort"
            value={sort}
            onValueChange={(value) => setSort(value)}
          >
            <SelectTrigger className="">
              <SelectValue placeholder="Default" />
            </SelectTrigger>
            <SelectContent
            // onChange={input.onChange} onBlur={input.onBlur}
            >
              <SelectItem value="default">Default</SelectItem>
              <SelectItem value={SortEnum.SaleAsc}>Sale ASC</SelectItem>
              <SelectItem value={SortEnum.SaleDesc}>Sale DESC</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <hr className="m3-10" />

      <div className="overflow-hidden w-full">
        <Tabs
          defaultValue="all"
          className="flex justify-center flex-1 mt-6 mx-3"
          onValueChange={(tab) => setStatus(tab)}
        >
          <TabsList>
            <TabsTrigger value="all">All</TabsTrigger>
            <TabsTrigger value={OpenStatus.Open}>Open</TabsTrigger>
            <TabsTrigger value={OpenStatus.Close}>Close</TabsTrigger>
            <TabsTrigger value={OpenStatus.UnderMaintenance}>
              Maintenance
            </TabsTrigger>
            <TabsTrigger value={OpenStatus.PreLaunch}>Pre Launch</TabsTrigger>
          </TabsList>
        </Tabs>
      </div>
      <div className="py-10 px-3 md:p-10 max-w-screen-xl mx-auto">
        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-4">
          {vendingMachines?.vendingMachines.nodes.map((vm) => (
            <Link key={vm.id} href={`/dashboard/${vm.id}`}>
              <VendingMachineCard {...vm} />
            </Link>
          ))}
        </div>

        <div className="flex justify-between mt-6">
          <Button
            className={clsx(page === 1 && "invisible")}
            onClick={() => setPage((prev) => prev - 1)}
          >
            Prev
          </Button>
          <Button
            className={clsx(
              PageLimit * page >= vendingMachines?.vendingMachines.total! &&
                "invisible"
            )}
            onClick={() => setPage((prev) => prev + 1)}
          >
            Next
          </Button>
        </div>
      </div>
    </div>
  );
}
