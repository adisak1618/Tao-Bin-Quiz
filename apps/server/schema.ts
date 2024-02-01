import { gql } from 'apollo-server';

export const typeDefs = gql`
  enum OpenStatus {
    OPEN
    CLOSE
    UNDER_MAINTENANCE
    PRE_LAUNCH
  }

  type LogMessage {
    title: String!
    description: String!
  }

  type VendingMachineConfig {
    temperature: Float!
    stockThresholds: Int!
    operationalHours: OperationalHours!
  }

  type VendingMachine {
    id: String!
    name: String!
    description: String!
    status: OpenStatus!
    statusMessage: String
    currentSales: Int!
    logs: [LogMessage]!
    lastBoots: String!
    config: VendingMachineConfig!
  }

  type OperationalHours {
    start: String!
    stop: String!
  }

  type Query {
    vendingMachines: [VendingMachine]!
    vendingMachine(id: String!): VendingMachine
  }

  type Mutation {
    updateVendingMachineConfig(id: String!, input: UpdateVendingMachineConfigInput!): VendingMachine
  }

  input UpdateVendingMachineConfigInput {
    temperature: Float
    stockThresholds: Int
    operationalHours: OperationalHoursInput
  }

  input LogMessageInput {
    title: String!
    description: String!
  }

  input OperationalHoursInput {
    start: String!
    stop: String!
  }
`;