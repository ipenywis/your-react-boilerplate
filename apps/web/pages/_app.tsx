import { AppProps } from "next/app";
import "../globals.css";
import { GlobalStyles } from "twin.macro";

// This default export is required in a new `pages/_app.js` file.
export default function MyApp(props: AppProps) {
  const { Component, pageProps } = props;

  return (
    <>
      <GlobalStyles />
      <Component {...pageProps} />;
    </>
  );
}
