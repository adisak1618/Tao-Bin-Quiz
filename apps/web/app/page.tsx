"use client";

import { LoginBox } from "@components/LoginBox";

export default function SignInPages(props: {
  searchParams: {
    callbackUrl?: string;
  };
}) {
  return (
    <div className="bg-gradient-to-t from-primary/50 to-foreground/100">
      <div className="container max-w-screen-sm min-h-screen py-20 mx-auto">
        <p className="font-bold text-center text-[48px] mb-10">เข้าสู่ระบบ</p>
        <LoginBox callbackUrl="/dashboard" />
        <div>
          <div className="py-20 px-4 text-center">
            <p className="text-[120px] font-bold">HI👋</p>

            <p className="text-2xl text-gray-700">
              Use any email + password to login
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
