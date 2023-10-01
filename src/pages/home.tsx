import styled from "styled-components";


const Wrap = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const Header = styled.header`
  font-size: 36px;
  font-weight: bold;
  color: rgb(170, 36, 236);
`

const Container = styled.div`
  width: 840px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-items: center;
  align-items: center;
`

const Home = () => {
  return (
    <Wrap>
      <Header>Voca</Header>
      <Container>
        <h1>test</h1>
        <h1>new</h1>
        <h1>study</h1>
        <h1>review</h1>
      </Container>
    </Wrap>
  )
}

export default Home;