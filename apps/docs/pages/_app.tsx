import { AppProps } from "next/app";

export default function MyApp(props: AppProps) {
  const { Component, pageProps } = props;

  return (
    <>
      <Component {...pageProps} />;
    </>
  );
}
