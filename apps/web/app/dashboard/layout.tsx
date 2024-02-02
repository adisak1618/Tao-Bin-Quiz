"use client";

import Link from "next/link";
import { ReactNode } from "react";
import clsx from "clsx";
import { LogOutIcon, UserCircle, Package2Icon } from "lucide-react";
import { usePathname } from "next/navigation";
import { useTablet } from "@components/useTabletHook";
import { signOut, useSession } from "next-auth/react";

function LinkMenu({
  active,
  href,
  children,
}: {
  href?: string;
  active: boolean;
  children: ReactNode;
}) {
  const buttonClass = clsx(
    "text-lg px-3 md:px-4 py-2 md:py-3 flex gap-3 hover:bg-foreground hover:!text-primary hover:font-bold rounded-md cursor-pointer",
    active && "font-bold !text-primary bg-foreground"
  );
  if (href)
    return (
      <Link href={href} className={buttonClass}>
        {children}
      </Link>
    );
  return <div className={buttonClass}>{children}</div>;
}

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { data } = useSession();
  const { isTablet } = useTablet();
  const pathname = usePathname();
  return (
    <div className="bg-gray-50 min-h-screen transition duration-150">
      <div className="flex">
        <nav className="py-10 px-2 md:px-3 md:w-[250px] flex flex-col border-r border-gray-200 space-y-1.5">
          {isTablet && (
            <p className="text-2xl text-center font-bold pt-10 pb-4">
              {data?.user?.name}
            </p>
          )}
          <LinkMenu
            active={pathname.startsWith("/dashboard")}
            href="/dashboard"
          >
            <Package2Icon />
            {isTablet && "Dashboard"}
          </LinkMenu>

          <div
            onClick={() =>
              signOut({
                redirect: true,
                callbackUrl: "/",
              })
            }
          >
            <LinkMenu active={false}>
              <LogOutIcon />
              {isTablet && "Logout"}
            </LinkMenu>
          </div>
        </nav>
        <div className="flex-1 relative">{children}</div>
      </div>
    </div>
  );
}
