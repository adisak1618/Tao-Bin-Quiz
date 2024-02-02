export enum OpenStatus {
  OPEN = "OPEN",
  CLOSE = "CLOSE",
  UNDER_MAINTENANCE = "UNDER_MAINTENANCE",
  PRE_LAUNCH = "PRE_LAUNCH"
}

export enum SortEnum {
  SALE_ASC = "SALE_ASC",
  SALE_DESC = "SALE_DESC"
}
export interface LogMessage {
  title: string;
  description: string;
}

export interface VendingMachine {
  id: string;
  name: string;
  description: string;
  status: OpenStatus;
  statusMessage?: string;
  currentSales: number;
  logs: LogMessage[];
  lastBoots: Date; // this field is use for current uptime of machine
  config: {
    temperature: number;
    stockThresholds: number;
    operationalHours: {
      start: string;
      stop: string;
    };
  }
}

export interface UpdateVendingMachineConfigArgs {
  temperature: number;
  stockThresholds: number;
  operationalHours: {
    start: string;
    stop: string;
  };
}