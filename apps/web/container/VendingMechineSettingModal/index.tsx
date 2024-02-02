import { Modal } from "@components/Modal";
import { useEffect, useState } from "react";
import { Button } from "@components/ui/button";
import { SettingsIcon } from "lucide-react";
import { HFInput } from "@components/Inputs/HFInput";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { VendingMachineQuery } from "@graphql/generated/graphql";
import { HFSelect } from "@components/Inputs/HFSelect";
import { generateTimes } from "./generateTimes";
import { Label } from "@components/ui/label";
import { useVendingMechineConfig } from "@components/updateVendingMechineHook";
import { AnimatePresence } from "framer-motion";

type SettingFormProps = {
  temperature: number;
  stockThresholds: number;
  operationalHours: {
    start: string;
    stop: string;
  };
};

export function VendingMachineSettingModal({
  config,
  id,
}: VendingMachineQuery["vendingMachine"]) {
  const [isOpen, setIsOpen] = useState(false);

  const {
    mutate,
    data: { loading: updateVendingMechineLoading },
  } = useVendingMechineConfig();
  const methods = useForm<SettingFormProps>({
    mode: "all",
    // resolver: zodResolver(CheckFormValidation),
  });

  useEffect(() => {
    if (!config) return;
    methods.setValue("temperature", config.temperature);
    methods.setValue("stockThresholds", config.stockThresholds);
    methods.setValue("operationalHours", config.operationalHours);
  }, [config]);

  const onSubmit: SubmitHandler<SettingFormProps> = async (data) => {
    await mutate({
      variables: {
        input: {
          operationalHours: {
            start: data.operationalHours.start,
            stop: data.operationalHours.stop,
          },
          temperature: Number(data.temperature),
          stockThresholds: Number(data.stockThresholds),
        },
        updateVendingMachineConfigId: id,
      },
    });
    setIsOpen(false);
  };

  return (
    <>
      <Button className="gap-2" onClick={() => setIsOpen(true)}>
        <SettingsIcon className="w-4 h-4" />
        Edit Setting
      </Button>
      <AnimatePresence mode="wait" initial={false} onExitComplete={() => null}>
        {isOpen && (
          <Modal title="Edit Setting" handleClose={() => setIsOpen(false)}>
            <FormProvider {...methods}>
              <form
                className="space-y-3"
                onSubmit={methods.handleSubmit(onSubmit)}
              >
                <div>
                  <Label htmlFor="temperature">Temperature</Label>
                  <HFInput
                    type="number"
                    name="temperature"
                    placeholder="temperature"
                  />
                </div>
                <div>
                  <Label htmlFor="temperature">Stock Thresholds</Label>
                  <HFInput
                    type="number"
                    name="stockThresholds"
                    placeholder="Stock Thresholds"
                  />
                </div>
                <div className="flex gap-3">
                  <div className="flex-1">
                    <Label htmlFor="temperature">Start Operational Hours</Label>
                    <HFSelect
                      name="operationalHours.start"
                      options={
                        generateTimes().map(({ label, value }) => ({
                          label,
                          value,
                        })) || []
                      }
                      placeholder="Start"
                    />
                  </div>
                  <div className="flex-1">
                    <Label htmlFor="temperature">Stop Operational Hours</Label>
                    <HFSelect
                      name="operationalHours.stop"
                      options={
                        generateTimes().map(({ label, value }) => ({
                          label,
                          value,
                        })) || []
                      }
                      placeholder="Start"
                    />
                  </div>
                </div>
                <div className="text-center">
                  <Button
                    loading={updateVendingMechineLoading}
                    className="mt-3"
                  >
                    Save
                  </Button>
                </div>
              </form>
            </FormProvider>
          </Modal>
        )}
      </AnimatePresence>
    </>
  );
}
