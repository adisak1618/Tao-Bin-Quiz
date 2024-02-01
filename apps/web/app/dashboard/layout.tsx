"use client";

import Link from "next/link";
import { ReactNode } from "react";
import clsx from "clsx";
import { LogOutIcon, UserCircle, Package2Icon } from "lucide-react";
import { usePathname } from "next/navigation";

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
    "text-lg px-4 py-3 flex gap-3 hover:bg-foreground hover:!text-primary hover:font-bold rounded-md cursor-pointer",
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
  const pathname = usePathname();
  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="flex">
        <nav className="py-10 px-3 w-[250px] hidden md:flex flex-col border-r border-gray-200 space-y-1.5">
          <LinkMenu active={pathname === "/account"} href="/account">
            <UserCircle />
            Account
          </LinkMenu>
          <LinkMenu
            active={pathname.startsWith("/dashboard")}
            href="/dashboard"
          >
            <Package2Icon />
            Dashboard
          </LinkMenu>

          <LinkMenu active={false}>
            <LogOutIcon />
            Logout
          </LinkMenu>
        </nav>
        <div className="flex-1">{children}</div>
      </div>
    </div>
  );
}
