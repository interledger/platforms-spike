import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: "Rafiki",
      logo: {
        src: "./src/assets/logo.svg",
        replacesTitle: true,
      },
      social: {
        github:
          "https://github.com/interledger/rafiki/tree/main/packages/documentation",
      },
      sidebar: [
        {
          label: "Docs",
          items: [
            {
              label: "Introduction",
              items: [
                { label: "Overview", link: "introduction/overview" },
                { label: "Architecture", link: "introduction/architecture" },
              ],
            },
            {
              label: "Concepts",
              items: [
                {
                  label: "Interledger Protocol",
                  items: [
                    {
                      label: "Overview",
                      link: "concepts/interledger-protocol/overview",
                    },
                    {
                      label: "Connector",
                      link: "concepts/interledger-protocol/connector",
                    },
                    {
                      label: "Peering",
                      link: "concepts/interledger-protocol/peering",
                    },
                  ],
                },
                {
                  label: "Open Payments",
                  items: [
                    {
                      label: "Overview",
                      link: "concepts/open-payments/overview",
                    },
                    {
                      label: "Key Registry",
                      link: "concepts/open-payments/key-registry",
                    },
                    {
                      label: "Grants Interaction Flow",
                      link: "concepts/open-payments/grant-interaction",
                    },
                  ],
                },
                {
                  label: "Accounting",
                  items: [
                    {
                      label: "Accounts and Transfers",
                      link: "concepts/accounting/accounts-and-transfers",
                    },
                    {
                      label: "TigerBeetle",
                      link: "concepts/accounting/tigerbeetle",
                    },
                  ],
                },
                {
                  label: "Account Servicing Entity",
                  link: "concepts/account-servicing-entity",
                },
                {
                  label: "Asset",
                  link: "concepts/asset",
                },
              ],
            },
            {
              label: "Integration",
              items: [
                {
                  label: "Getting Started",
                  link: "integration/getting-started",
                },
                { label: "Deployment", link: "integration/deployment" },
                { label: "Management", link: "integration/management" },
              ],
            },
            {
              label: "Local Playground",
              autogenerate: { directory: "playground" },
            },
            {
              label: "Reference",
              autogenerate: { directory: "reference" },
            },
          ],
        },
        { label: "Schema", link: "schema" },
        {
          label: "API",
          autogenerate: { directory: "api" },
        },
      ],
    }),
  ],

  // Process images with sharp: https://docs.astro.build/en/guides/assets/#using-sharp
  image: { service: { entrypoint: "astro/assets/services/sharp" } },
  server: {
    port: 1101,
  },
});
