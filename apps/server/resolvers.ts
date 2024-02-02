import { VendingMachine, LogMessage, OpenStatus, UpdateVendingMachineConfigArgs } from './types';
import { vendingMachinesData } from "./VendingMachineData";
// in-memory data store
let vendingMachines: VendingMachine[] = [...vendingMachinesData];


interface VendingMachinesArgs {
    limit?: number;
    offset?: number;
    status?: OpenStatus;
    sort?: 'SALE_ASC' | 'SALE_DESC';
}

const resolvers = {
    Query: {
        vendingMachines: (_: any, args: VendingMachinesArgs): VendingMachine[] => {
            let result = vendingMachines;

            // Filter by status if provided
            if (args.status) {
                result = [...result.filter(machine => machine.status === args.status)];
            }

            // Sort by currentSales if sort argument is provided
            if (args.sort) {
                result = result.sort((a, b) => {
                    if (args.sort === 'SALE_ASC') {
                        return a.currentSales - b.currentSales;
                    } else {
                        return b.currentSales - a.currentSales;
                    }
                });
            }

            if (args.status) {
               
                result = [...result.filter(machine => machine.status === args.status)];
               
            }

            // Apply pagination
            if (typeof args.offset === 'number' && typeof args.limit === 'number') {
                result = result.slice(args.offset, args.offset + args.limit);
            }

            return result;
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
              ...vendingMachines[index].config,
              ...args.input,
            } };
            return vendingMachines[index];
        }
    },
};

export { resolvers };