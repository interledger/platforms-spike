import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

import react from "@astrojs/react";
import overrideIntegration from "./src/overrideIntegration.mjs";

// https://astro.build/config
export default defineConfig({
  site: "https://webmonetization.org",
  integrations: [
    overrideIntegration(),
    starlight({
      title: "Web Monetization",
      locales: {
        root: {
          label: "English",
          lang: "en", // lang is required for root locales
        },
        zh: {
          label: "简体中文",
          lang: "zh-CN",
        },
      },
      social: {
        github: "https://github.com/WICG/webmonetization",
      },
      sidebar: [
        { label: "Web Monetization API", link: "/docs" },
        { label: "JavaScript API", link: "/docs/api" },
        {
          label: "Content-Security-Policy",
          items: [
            { label: "Overview", link: "/docs/csp" },
            { label: "CSP: monetization-src", link: "/docs/monetization-src" },
          ],
        },
        {
          label: "Concepts",
          items: [{ label: "Web Monetization", link: "/docs/explainer" }],
        },
      ],
    }),
    react(),
  ],
  // Process images with sharp: https://docs.astro.build/en/guides/assets/#using-sharp
  image: {
    service: {
      entrypoint: "astro/assets/services/sharp",
    },
  },
  server: {
    port: 1100,
  },
});
