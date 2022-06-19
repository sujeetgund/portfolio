import "../styles/globals.css";
import { ThemeProvider } from "next-themes";
import Head from "next/head";
import ProgressBar from '@badrap/bar-of-progress';
import Router from 'next/router';


const progress = new ProgressBar({
  size: 4,
  color: "#FE595E",
  className: "z-50",
  delay: 100,
});

Router.events.on("routeChangeStart", progress.start)
Router.events.on("routeChangeComplete", progress.finish)
Router.events.on("routeChangeError", progress.finish)

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider defaultTheme="light" attribute="class">
      <Head>
        <link rel="shortcut icon" href="/favicon.jpg" type="image/x-icon" />
      </Head>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
