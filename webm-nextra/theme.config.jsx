import { useRouter } from "next/router";
import { useConfig } from "nextra-theme-docs";

export default {
  useNextSeoProps() {
    const { asPath } = useRouter();
    if (asPath !== "/") {
      return {
        titleTemplate: "%s – Web Monetization",
      };
    } else {
      return {
        title: "Web Monetization",
      };
    }
  },
  head: () => {
    const { asPath, defaultLocale, locale } = useRouter();
    const { frontMatter } = useConfig();
    const url =
      "https://webmonetization.org" +
      (defaultLocale === locale ? asPath : `/${locale}${asPath}`);

    return (
      <>
        <meta
          name="description"
          content={
            frontMatter.description ||
            "The Web Monetization API allows websites to automatically and passively receive payments from Web Monetization-enabled visitors."
          }
        />
        <meta
          property="og:description"
          content={
            frontMatter.description ||
            "The Web Monetization API allows websites to automatically and passively receive payments from Web Monetization-enabled visitors."
          }
        />
        <meta property="og:url" content={url} />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicons/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicons/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicons/favicon-16x16.png"
        />
        <link rel="manifest" href="/favicons/site.webmanifest" />
        <link
          rel="mask-icon"
          href="/favicons/safari-pinned-tab.svg"
          color="#5bbad5"
        />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff"></meta>
      </>
    );
  },
  logo: (
    <>
      <svg fill="none" viewBox="0 0 326 220" height="32">
        <path
          fill="#FF7A7F"
          d="M256.555 178.726v19.37H21.395V66.866l31.17.01.01-21.24-52.41-.02v.03h-.01v172.42h.01v1.27h256.39v.01h21.24v-40.62h-21.24Z"
        />
        <path fill="#FFC8DC" d="M21.395 198.096h58.91v21.4h-58.91v-21.4Z" />
        <path fill="#A3BEDC" d="M21.4 160.583v58.91H0v-58.91h21.4Z" />
        <path fill="#56B7B5" d="M21.406 101.669v58.91H.006v-58.91h21.4Z" />
        <path fill="#FF9852" d="M80.035 198.096h58.91v21.4h-58.91v-21.4Z" />
        <path fill="#98E1D0" d="M139.105 198.096h58.91v21.4h-58.91v-21.4Z" />
        <path fill="#8075B3" d="M198.015 198.096h58.91v21.4h-58.91v-21.4Z" />
        <path fill="#8075B3" d="M277.798 168.732v50.75h-21.4v-50.75h21.4Z" />
        <path fill="#98E1D0" d="M325.225 173.72H47.585V0h277.64v173.72Z" />
        <path
          fill="#fff"
          d="M86.025 100.276h18.66c2.29 0 4.14-1.85 4.14-4.14v-18.65c0-2.29-1.85-4.14-4.14-4.14h-18.66c-2.29 0-4.14 1.85-4.14 4.14v18.66c0 2.28 1.85 4.13 4.14 4.13ZM186.405 130.676c23.881 0 43.24-19.359 43.24-43.24 0-23.88-19.359-43.24-43.24-43.24s-43.24 19.36-43.24 43.24c0 23.881 19.359 43.24 43.24 43.24ZM268.095 100.276h18.66c2.29 0 4.14-1.85 4.14-4.14v-18.65c0-2.29-1.85-4.14-4.14-4.14h-18.66c-2.29 0-4.14 1.85-4.14 4.14v18.66c0 2.28 1.85 4.13 4.14 4.13Z"
        />
      </svg>
      <span style={{ marginLeft: "0.5em", fontWeight: 700 }}>
        Web Monetization
      </span>
    </>
  ),
  project: {
    link: "https://github.com/WICG/webmonetization",
  },
  footer: {
    text: (
      <span>
        Copyright © {new Date().getFullYear()} Interledger Foundation.
      </span>
    ),
  },
};
