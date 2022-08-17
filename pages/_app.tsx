import '../styles/globals.css'
import '../styles/destyle.min.css'
import "styles/nprogress.css";
import type { AppProps } from 'next/app'
import React, {useEffect,useState} from 'react';
import NProgress from 'nprogress';
import Router, { withRouter , useRouter } from 'next/router';
import { Transition } from "components/Layout/Transition";
import { Header } from 'components/Layout/Header';
import { Loading } from 'components/Loading';
import { Logo } from 'components/Logo';
import { motion } from "framer-motion";

// Router.onRouteChangeStart = () => NProgress.start();
// Router.onRouteChangeComplete = () => NProgress.done();
// Router.onRouteChangeError = () => NProgress.done();


const GimwaApp : React.FC<AppProps> = ({ Component, pageProps }) => {

  const router = useRouter()

  const [state, setState] = useState({
    isRouteChanging: false,
    loadingKey: 0,
  })

  useEffect(() => {
    const handleRouteChangeStart = () => {
      setState((prevState) => ({
        ...prevState,
        isRouteChanging: true,
        loadingKey: prevState.loadingKey ^ 1,
      }))
    }

    const handleRouteChangeEnd = () => {
      setState((prevState) => ({
        ...prevState,
        isRouteChanging: false,
      }))
    }

    router.events.on('routeChangeStart', handleRouteChangeStart)
    router.events.on('routeChangeComplete', handleRouteChangeEnd)
    router.events.on('routeChangeError', handleRouteChangeEnd)

    return () => {
      router.events.off('routeChangeStart', handleRouteChangeStart)
      router.events.off('routeChangeComplete', handleRouteChangeEnd)
      router.events.off('routeChangeError', handleRouteChangeEnd)
    }
  }, [router.events])

  return (
    <>
    {router.pathname=="/" && (
    <Loading router={router} />
    )}
    <Logo isRouteChanging={state.isRouteChanging} key={state.loadingKey}  />
    <Header />
    <main>
      <Transition location={router.pathname}>
        <Component {...pageProps} />
      </Transition>
    </main>
    </>
  )
}

export default GimwaApp
