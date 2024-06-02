import { EstiloGlobal, Container } from "./styles/indext"
import { Topo } from "./containers/Topo"
import { Contatos } from "./containers/Contatos"

function App() {
  return (
    <div className="App">
      <EstiloGlobal />
      <Container>
        <Topo></Topo>
        <Contatos></Contatos>
      </Container>
    </div>
  )
}

export default App
