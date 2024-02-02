/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type LogMessage = {
  __typename?: 'LogMessage';
  description: Scalars['String']['output'];
  title: Scalars['String']['output'];
};

export type LogMessageInput = {
  description: Scalars['String']['input'];
  title: Scalars['String']['input'];
};

export type Mutation = {
  __typename?: 'Mutation';
  updateVendingMachineConfig?: Maybe<VendingMachine>;
};


export type MutationUpdateVendingMachineConfigArgs = {
  id: Scalars['String']['input'];
  input: UpdateVendingMachineConfigInput;
};

export enum OpenStatus {
  Close = 'CLOSE',
  Open = 'OPEN',
  PreLaunch = 'PRE_LAUNCH',
  UnderMaintenance = 'UNDER_MAINTENANCE'
}

export type OperationalHours = {
  __typename?: 'OperationalHours';
  start: Scalars['String']['output'];
  stop: Scalars['String']['output'];
};

export type OperationalHoursInput = {
  start: Scalars['String']['input'];
  stop: Scalars['String']['input'];
};

export type Query = {
  __typename?: 'Query';
  vendingMachine: VendingMachine;
  vendingMachines: VendingMachinesResponse;
};


export type QueryVendingMachineArgs = {
  id: Scalars['String']['input'];
};


export type QueryVendingMachinesArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortEnum>;
  status?: InputMaybe<OpenStatus>;
};

export enum SortEnum {
  SaleAsc = 'SALE_ASC',
  SaleDesc = 'SALE_DESC'
}

export type UpdateVendingMachineConfigInput = {
  operationalHours?: InputMaybe<OperationalHoursInput>;
  stockThresholds?: InputMaybe<Scalars['Int']['input']>;
  temperature?: InputMaybe<Scalars['Float']['input']>;
};

export type VendingMachine = {
  __typename?: 'VendingMachine';
  config: VendingMachineConfig;
  currentSales: Scalars['Int']['output'];
  description: Scalars['String']['output'];
  id: Scalars['String']['output'];
  lastBoots: Scalars['String']['output'];
  logs: Array<Maybe<LogMessage>>;
  name: Scalars['String']['output'];
  status: OpenStatus;
  statusMessage?: Maybe<Scalars['String']['output']>;
};

export type VendingMachineConfig = {
  __typename?: 'VendingMachineConfig';
  operationalHours: OperationalHours;
  stockThresholds: Scalars['Int']['output'];
  temperature: Scalars['Float']['output'];
};

export type VendingMachinesResponse = {
  __typename?: 'VendingMachinesResponse';
  nodes: Array<VendingMachine>;
  total: Scalars['Int']['output'];
};

export type UpdateVendingMechineConfigMutationVariables = Exact<{
  updateVendingMachineConfigId: Scalars['String']['input'];
  input: UpdateVendingMachineConfigInput;
}>;


export type UpdateVendingMechineConfigMutation = { __typename?: 'Mutation', updateVendingMachineConfig?: { __typename?: 'VendingMachine', id: string, name: string, description: string, currentSales: number, lastBoots: string, status: OpenStatus, statusMessage?: string | null, logs: Array<{ __typename?: 'LogMessage', title: string, description: string } | null>, config: { __typename?: 'VendingMachineConfig', temperature: number, stockThresholds: number, operationalHours: { __typename?: 'OperationalHours', start: string, stop: string } } } | null };

export type VendingMachineQueryVariables = Exact<{
  vendingMachineId: Scalars['String']['input'];
}>;


export type VendingMachineQuery = { __typename?: 'Query', vendingMachine: { __typename?: 'VendingMachine', id: string, name: string, description: string, currentSales: number, lastBoots: string, status: OpenStatus, statusMessage?: string | null, logs: Array<{ __typename?: 'LogMessage', title: string, description: string } | null>, config: { __typename?: 'VendingMachineConfig', temperature: number, stockThresholds: number, operationalHours: { __typename?: 'OperationalHours', start: string, stop: string } } } };

export type VendingMachinesQueryVariables = Exact<{
  limit?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortEnum>;
  status?: InputMaybe<OpenStatus>;
  offset?: InputMaybe<Scalars['Int']['input']>;
}>;


export type VendingMachinesQuery = { __typename?: 'Query', vendingMachines: { __typename?: 'VendingMachinesResponse', total: number, nodes: Array<{ __typename?: 'VendingMachine', id: string, name: string, description: string, currentSales: number, lastBoots: string, status: OpenStatus, statusMessage?: string | null, logs: Array<{ __typename?: 'LogMessage', title: string, description: string } | null>, config: { __typename?: 'VendingMachineConfig', temperature: number, stockThresholds: number, operationalHours: { __typename?: 'OperationalHours', start: string, stop: string } } }> } };


export const UpdateVendingMechineConfigDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"updateVendingMechineConfig"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"updateVendingMachineConfigId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UpdateVendingMachineConfigInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateVendingMachineConfig"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"updateVendingMachineConfigId"}}},{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"currentSales"}},{"kind":"Field","name":{"kind":"Name","value":"lastBoots"}},{"kind":"Field","name":{"kind":"Name","value":"logs"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}}]}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"statusMessage"}},{"kind":"Field","name":{"kind":"Name","value":"config"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"temperature"}},{"kind":"Field","name":{"kind":"Name","value":"stockThresholds"}},{"kind":"Field","name":{"kind":"Name","value":"operationalHours"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"start"}},{"kind":"Field","name":{"kind":"Name","value":"stop"}}]}}]}}]}}]}}]} as unknown as DocumentNode<UpdateVendingMechineConfigMutation, UpdateVendingMechineConfigMutationVariables>;
export const VendingMachineDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"vendingMachine"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"vendingMachineId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"vendingMachine"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"vendingMachineId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"currentSales"}},{"kind":"Field","name":{"kind":"Name","value":"lastBoots"}},{"kind":"Field","name":{"kind":"Name","value":"logs"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}}]}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"statusMessage"}},{"kind":"Field","name":{"kind":"Name","value":"config"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"temperature"}},{"kind":"Field","name":{"kind":"Name","value":"stockThresholds"}},{"kind":"Field","name":{"kind":"Name","value":"operationalHours"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"start"}},{"kind":"Field","name":{"kind":"Name","value":"stop"}}]}}]}}]}}]}}]} as unknown as DocumentNode<VendingMachineQuery, VendingMachineQueryVariables>;
export const VendingMachinesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"vendingMachines"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"limit"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"sort"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"SortEnum"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"status"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"OpenStatus"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"offset"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"vendingMachines"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"Variable","name":{"kind":"Name","value":"limit"}}},{"kind":"Argument","name":{"kind":"Name","value":"sort"},"value":{"kind":"Variable","name":{"kind":"Name","value":"sort"}}},{"kind":"Argument","name":{"kind":"Name","value":"status"},"value":{"kind":"Variable","name":{"kind":"Name","value":"status"}}},{"kind":"Argument","name":{"kind":"Name","value":"offset"},"value":{"kind":"Variable","name":{"kind":"Name","value":"offset"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"total"}},{"kind":"Field","name":{"kind":"Name","value":"nodes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"currentSales"}},{"kind":"Field","name":{"kind":"Name","value":"lastBoots"}},{"kind":"Field","name":{"kind":"Name","value":"logs"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}}]}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"statusMessage"}},{"kind":"Field","name":{"kind":"Name","value":"config"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"temperature"}},{"kind":"Field","name":{"kind":"Name","value":"stockThresholds"}},{"kind":"Field","name":{"kind":"Name","value":"operationalHours"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"start"}},{"kind":"Field","name":{"kind":"Name","value":"stop"}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode<VendingMachinesQuery, VendingMachinesQueryVariables>;