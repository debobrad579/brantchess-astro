// @ts-check
import { defineConfig, fontProviders } from "astro/config"
import tailwind from "@astrojs/tailwind"

import react from "@astrojs/react"

// https://astro.build/config
export default defineConfig({
  integrations: [react(), tailwind()],
  devToolbar: {
    enabled: false,
  },
  fonts: [
    {
      provider: fontProviders.fontsource(),
      name: "Roboto",
      cssVariable: "--font-roboto",
      weights: [500, 900],
    },
  ],
})
