import Head from "next/head";
import { StoreProvider } from "../stores/StoreProvider";
import { useDarkMode } from "../hooks/useDarkMode";
import { lightTheme, darkTheme } from "../styles/theme";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "../styles/global-styles";
import Layout from "../components/basics/Layout";
import { AppProps } from "next/app";

function App({ Component, pageProps }: AppProps) {
  const [theme, toggleTheme, componentMounted] = useDarkMode();

  if (!componentMounted) {
    return <div></div>;
  }

  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="성경 읽기 사이트입니다." />
        <title>성경 앱</title>
        {/* favicon tags */}
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        {/* OG tags */}
        <meta property="og:url" content="http://histime.ga" />
        <meta property="og:title" content="Bible App" />
        <meta property="og:description" content="아름다운 성경 앱입니다." />
        <meta
          property="og:image"
          content="https://cdn.histime.ga/android-chrome-512x512.png"
        />
      </Head>
      <StoreProvider {...pageProps}>
        <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
          <GlobalStyle />
          <Layout onToggleTheme={toggleTheme}>
            <Component {...pageProps} />
          </Layout>
        </ThemeProvider>
      </StoreProvider>
    </>
  );
}

export default App;
