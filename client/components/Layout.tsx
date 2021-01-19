import { ReactNode } from "react";
import Head from "next/head";
import Header from "./Header";

const layoutStyle = {
  margin: 20,
  padding: 20,
  border: "1px solid #DDD",
};

type LayoutProps = {
  children: ReactNode;
  onToggleTheme: () => void;
};

const Layout = ({ children, onToggleTheme }: LayoutProps) => (
  <div style={layoutStyle}>
    <Head>
      <meta charSet="utf-8" />
      <link rel="icon" href="/favicon.ico" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta
        name="description"
        content="Tony West's Next.js App Boilder Plate"
      />
      <title>Next App</title>
    </Head>

    <Header onToggleTheme={onToggleTheme} />
    {children}
  </div>
);

export default Layout;
