import type { AppProps } from "next/app";
import GlobalStyles from "../styles/components/globalStyles";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Component {...pageProps}>
      <GlobalStyles />
    </Component>
  );
}

export default MyApp;
