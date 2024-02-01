import { OpenStatus } from "@graphql/generated/graphql";
import clsx from "clsx";

function StatusLabelMap({ status }: { status: OpenStatus }) {
  switch (status) {
    case OpenStatus.Open:
      return {
        text: "OPEN",
        className: "bg-green-500",
      };
    case OpenStatus.Close:
      return {
        text: "CLOSE",
        className: "bg-red-500",
      };
    case OpenStatus.UnderMaintenance:
      return {
        text: "Maintenance",
        className: "bg-amber-500",
      };
    case OpenStatus.PreLaunch:
      return {
        text: "Pre-Launch",
        className: "bg-amber-500",
      };
    default:
      return {
        text: "",
        className: "",
      };
  }
}

export function StatusLabel({ status }: { status: OpenStatus }) {
  const statusLabel = StatusLabelMap({ status });
  return (
    <div
      className={clsx(
        "px-2 py-1  rounded-md whitespace-nowrap text-white text-sm",
        statusLabel.className
      )}
    >
      {statusLabel.text}
    </div>
  );
}
