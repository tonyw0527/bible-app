import { ReactNode } from "react";
import Head from "next/head";
import Header from "./Header";
import Copyright from "./Copyright";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
`;

type LayoutProps = {
  children: ReactNode;
  onToggleTheme: () => void;
};

const Layout = ({ children, onToggleTheme }: LayoutProps) => (
  <Container>
    <Head>
      <meta charSet="utf-8" />
      <link rel="icon" href="/favicon.ico" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="description" content="성경 읽기 사이트입니다." />
      <title>성경 앱</title>
    </Head>

    <Header onToggleTheme={onToggleTheme} />
    {children}
    <Copyright />
  </Container>
);

export default Layout;
