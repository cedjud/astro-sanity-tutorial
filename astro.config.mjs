// @ts-check
import { defineConfig } from "astro/config";

import sanity from "@sanity/astro";
import react from "@astrojs/react";

import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
  integrations: [
    sanity({
      projectId: "r49y78bi",
      dataset: "production",
      useCdn: false,
      apiVersion: "2024-10-07",
      studioBasePath: "/studio",
      stega: {
        studioUrl: "/studio",
      },
    }),
    react(),
  ],

  output: "server",
  adapter: vercel(),
});