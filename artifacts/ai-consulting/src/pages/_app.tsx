import type { AppProps } from "next/app";
import Head from "next/head";
import "../styles/globals.css";
import logo from "../../../../attached_assets/image_logo.png";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link rel="icon" href={logo.src} />
        <link rel="apple-touch-icon" href={logo.src} />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
