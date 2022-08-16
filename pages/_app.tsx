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

// Router.onRouteChangeStart = () => NProgress.start();
// Router.onRouteChangeComplete = () => NProgress.done();
// Router.onRouteChangeError = () => NProgress.done();


function GimwaApp({ Component, pageProps, router }: AppProps) {
  // console.log(router.pathname);
  return (
    <main>
      {router.pathname=="/" && (
        <Loading router={router} />
      )}
      <Logo />
      <Header />
      <Transition location={router.pathname}>
        <Component {...pageProps} />
      </Transition>
    </main>
  )
}

export default GimwaApp
