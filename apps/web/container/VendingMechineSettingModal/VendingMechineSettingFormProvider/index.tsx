"use client";
import { useForm, FormProvider, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
// import { CheckFormValidation } from "./validation/index";

type SettingFormProps = {
  temperature: number;
  stockThresholds: number;
  operationalHours: {
    start: string;
    stop: string;
  };
};

type CheckoutFormProviderProps = {
  children: React.ReactNode | JSX.Element;
};

export function VendingMechineSettingFormProvider({
  children,
}: CheckoutFormProviderProps) {
  const methods = useForm<SettingFormProps>({
    mode: "all",
    // resolver: zodResolver(CheckFormValidation),
  });

  const onSubmit: SubmitHandler<SettingFormProps> = (data) => {};

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>{children}</form>
    </FormProvider>
  );
}
