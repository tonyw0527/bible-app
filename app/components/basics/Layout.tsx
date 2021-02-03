import { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";
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
    <Header onToggleTheme={onToggleTheme} />
    {children}
    <Footer />
  </Container>
);

export default Layout;
