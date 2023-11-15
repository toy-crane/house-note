import type { cookies } from "next/headers";
import { createServerClient } from "@supabase/ssr";

import { env } from "~/env.mjs";

export const createClient = (cookieStore: ReturnType<typeof cookies>) => {
  return createServerClient(
    env.NEXT_PUBLIC_SUPABASE_URL,
    env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
    {
      cookies: {
        get(name: string) {
          return cookieStore.get(name)?.value;
        },
      },
    },
  );
};
