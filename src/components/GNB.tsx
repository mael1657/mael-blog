import styled from "@emotion/styled";
import Link from "next/link";

const GNB = () => {
  return (
    <Container>
      <Logo>gnb</Logo>
      <ButtonWrap>
        <Link href={"/"}>
          <Button>button1</Button>
        </Link>
        <Link href={"/about"}>
          <Button>button2</Button>
        </Link>
      </ButtonWrap>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 3rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  top: 0;
  left: 0;
  background-color: #fff;
  padding: 0 2rem;
`;

const Logo = styled.div``;

const ButtonWrap = styled.div``;

const Button = styled.a`
  width: auto;
  height: 2rem;
  background-color: #eee;
  border: none;
  margin-left: 1rem;
  cursor: pointer;
`;

export default GNB;
