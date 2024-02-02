"use client";

import * as z from "zod";
import { useForm, FormProvider, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { signIn } from "next-auth/react";
import { HFInput } from "@components/Inputs/HFInput";
import { Button } from "@components/ui/button";

type LoginModalType = {
  email: string;
  password: string;
};

export const LoginModalValidation = z.object({
  email: z.string().email().min(1),
  password: z.string().min(8),
});

export function LoginBox({ callbackUrl }: { callbackUrl?: string }) {
  const methods = useForm<LoginModalType>({
    mode: "all",
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: zodResolver(LoginModalValidation),
  });

  const onSubmit: SubmitHandler<LoginModalType> = async (data) => {
    try {
      await signIn("credentials", {
        callbackUrl,
        redirect: true,
        email: data.email,
        password: data.password,
      });
    } catch (error) {}
  };

  return (
    <FormProvider {...methods}>
      <form
        className="bg-white p-6 rounded-md shadow-md"
        onSubmit={methods.handleSubmit(onSubmit)}
      >
        <div className="space-y-3 py-6">
          <HFInput placeholder="อีเมล" name="email" />
          <HFInput type="password" placeholder="รหัสผ่าน" name="password" />
          <div className="flex justify-center mt-3">
            <Button className="w-[250px]">เข้าสู่ระบบ</Button>
          </div>
        </div>
      </form>
    </FormProvider>
  );
}
