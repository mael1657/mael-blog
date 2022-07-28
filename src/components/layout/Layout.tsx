import styled from "@emotion/styled";

import GNB from "../GNB";

type AppLayoutProps = {
  children: React.ReactNode;
};

const Layout = ({ children }: AppLayoutProps) => {
  return (
    <>
      <GNB />
      <Container>{children}</Container>
    </>
  );
};

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  padding-top: 3rem;
`;

export default Layout;
