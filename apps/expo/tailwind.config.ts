// @ts-expect-error - no types
import baseConfig from "@house-note/tailwind-config";
import nativewind from "nativewind/preset";
import type { Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{ts,tsx}"],
  presets: [baseConfig, nativewind],
} satisfies Config;
