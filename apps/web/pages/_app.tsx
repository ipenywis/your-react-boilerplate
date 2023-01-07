import { AppProps } from "next/app";
import "../globals.css";
import { GlobalStyles } from "twin.macro";
import { ChakraProvider } from "ui";

/* eslint-disable global-require */
if (process.env.NEXT_PUBLIC_API_MOCKING === "enabled") {
  require("../mocks");
}
/* eslint-enable global-require */

// This default export is required in a new `pages/_app.js` file.
export default function MyApp(props: AppProps) {
  const { Component, pageProps } = props;

  return (
    <>
      <GlobalStyles />
      <ChakraProvider>
        <Component {...pageProps} />;
      </ChakraProvider>
    </>
  );
}
