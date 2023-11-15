import "~/styles/globals.css";

import { cookies } from "next/headers";

import { TRPCReactProvider } from "~/trpc/react";

/**
 * Since we're passing `headers()` to the `TRPCReactProvider` we need to
 * make the entire app dynamic. You can move the `TRPCReactProvider` further
 * down the tree (e.g. /dashboard and onwards) to make part of the app statically rendered.
 */
export const dynamic = "force-dynamic";

export default function Layout(props: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="bg-background text-foreground">
        <main className="flex min-h-screen flex-col items-center">
          <TRPCReactProvider cookies={cookies().toString()}>
            {props.children}
          </TRPCReactProvider>
        </main>
      </body>
    </html>
  );
}
