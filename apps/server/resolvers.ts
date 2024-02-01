import { VendingMachine, LogMessage, OpenStatus, UpdateVendingMachineConfigArgs } from './types';
import { vendingMachinesData } from "./VendingMachineData";
// in-memory data store
let vendingMachines: VendingMachine[] = [...vendingMachinesData];

const resolvers = {
    Query: {
        vendingMachines: (): VendingMachine[] => {
            return vendingMachines;
        },
        vendingMachine: (_: any, args: { id: string }): VendingMachine | undefined => {
            return vendingMachines.find(machine => machine.id === args.id);
        },
    },
    Mutation: {
        updateVendingMachineConfig: (_: any, args: { id: string, input: UpdateVendingMachineConfigArgs }): VendingMachine | null => {
            const index = vendingMachines.findIndex(machine => machine.id === args.id);
            if (index === -1) return null;
            vendingMachines[index] = { ...vendingMachines[index], config: {
              ...args.input
            } };
            return vendingMachines[index];
        }
    },
};

export { resolvers };