"use client";

import { Code } from "@repo/ui/code";
import Link from "next/link";

export default function Page(): JSX.Element {
  return (
    <main>
      <div>
        <h1 className="text-3xl font-bold underline">Hello world!</h1>
        <p>
          examples/basic&nbsp;
          <Code>web</Code>
        </p>
      </div>

      <Link href="/login">Open modal</Link>
    </main>
  );
}
