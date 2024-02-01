import { VendingMachinesQuery } from "@graphql/generated/graphql";
import { StatusLabel } from "./status";
import TimeCounter from "@components/TimeCounter";

export function VendingMachineCard({
  id,
  name,
  description,
  config,
  currentSales,
  lastBoots,
  status,
}: VendingMachinesQuery["vendingMachines"][0]) {
  return (
    <div className="border border-gray-100 bg-white rounded-md p-6 shadow-sm space-y-1.5 flex flex-col transform-gpu duration-200 hover:scale-[103%]">
      <p className="text-xl flex gap-2 flex-wrap">
        <span className="uppercase font-bold">#{id}</span>
        {name}
      </p>

      <div className="flex items-center gap-3">
        <StatusLabel status={status} />
        <div className="flex flex-1 justify-end gap-3">
          <span>
            <b>OPEN:</b> {config.operationalHours.start}
          </span>
          <span>
            <b>CLOSE:</b> {config.operationalHours.stop}
          </span>
        </div>
      </div>

      <p className="line-clamp-2 flex-1">{description}</p>
      <div className="flex justify-between">
        <p>
          <b>Sales:</b> {currentSales}
        </p>
        <div className="flex gap-1">
          <p className="font-bold">Uptime: </p>

          <TimeCounter bootTime={new Date(Number(lastBoots))} />
        </div>
      </div>
    </div>
  );
}
