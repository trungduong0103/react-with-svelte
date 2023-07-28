import "@/styles/globals.css";
import type { AppProps } from "next/app";
import "../styles/globals.css";
import "svelte-project";

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
