import styled from "@emotion/styled";
import type { NextPage } from "next";
import MainList from "../components/MainList";

const dummy = [
  { id: 1, title: "title" },
  { id: 2, title: "title" },
  { id: 3, title: "title" },
  { id: 4, title: "title" },
  { id: 5, title: "title" },
  { id: 6, title: "title" },
  { id: 7, title: "title" },
  { id: 8, title: "title" },
  { id: 9, title: "title" },
  { id: 10, title: "title" },
  { id: 11, title: "title" },
  { id: 12, title: "title" },
];

const Home: NextPage = () => {
  return (
    <Container>
      <Text>helloooooo</Text>
      <ListWrap>
        {dummy?.map((item) => (
          <MainList key={item.id} id={item.id} title={item.title} />
        ))}
      </ListWrap>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: auto;
  background-color: #e3e3e3;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Text = styled.h2`
  margin: 0;
`;

const ListWrap = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default Home;
