import styled from 'styled-components';
import SearchResults from './components/SearchResults';


const Container=styled.div`
    width:100%;
    max-width:1200px;
    margin-inline:auto;
    height:100vh;
    border-radius:8px;
    margin-top:10px;
    margin-bottom:10px;
    border:1px solid #a8fcff;
    box-shadow: rgba(136, 215, 218, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
`
const Header=styled.div`
    text-align:center;
    padding-top:28px;
`
function App() {

  const handleSearch=()=>{
      fetch("")




  }


  return (
    <Container>
      <Header>Weather Application</Header>
      <SearchResults />

    </Container>
  );
}

export default App;
