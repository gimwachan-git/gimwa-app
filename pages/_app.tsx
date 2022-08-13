import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ThemeProvider } from "next-themes";
import router from "next/router";
import "styles/nprogress.css";
import { Transition } from "components/Layout/Transition";

function MyApp({ Component, pageProps,router }: AppProps) {
  // console.log(pageProps);
  // const [location, setLocation] = useLocation();

  return (
    <ThemeProvider>
      <Transition location={router.pathname}>
        <Component {...pageProps} />
      </Transition>
    </ThemeProvider>
  )
}

export default MyApp
