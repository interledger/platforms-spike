const withNextra = require("nextra")({
  theme: "nextra-theme-docs",
  themeConfig: "./theme.config.jsx",
});

const nextConfig = {
  rewrites: async () => {
    return [
      {
        source: "/specification",
        destination: "/specification/index.html",
      },
      {
        source: "/specification/CG-DRAFT-web-monetization-20210317",
        destination:
          "/specification/versions/CG-DRAFT-web-monetization-20210317.html",
      },
      {
        source: "/working-spec",
        destination: "/specification/specification-respec.html",
      },
    ];
  },
  transpilePackages: [
    "swagger-ui-react",
    "swagger-client",
    "react-syntax-highlighter",
  ],
};

module.exports = {
  ...withNextra(nextConfig),
  images: {
    unoptimized: true,
  },
};
