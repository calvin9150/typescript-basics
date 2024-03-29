import "../styles/globals.scss";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <div style={{ border: "1px solid white" }}>Header</div>
      <Component {...pageProps} />
    </>
  );
}
