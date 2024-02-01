import { MutationHookOptions, useMutation } from "@apollo/client";
import {
  UpdateVendingMechineConfigDocument,
  UpdateVendingMechineConfigMutationVariables,
  UpdateVendingMechineConfigMutation,
} from "@graphql/generated/graphql";

export const useVendingMechineConfig = (
  options?: MutationHookOptions<
    UpdateVendingMechineConfigMutation,
    UpdateVendingMechineConfigMutationVariables
  >
) => {
  const [mutate, data] = useMutation(UpdateVendingMechineConfigDocument, {
    ...options,
  });

  return {
    mutate,
    data,
  };
};
