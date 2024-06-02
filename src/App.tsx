import { Provider } from "react-redux"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { EstiloGlobal, Container } from "./styles/indext"
import { Home } from "../src/pages/Home"
import store from "./store"
import { Form } from "./pages/Form"

const rotas = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/novocontato",
    element: <Form />
  }
])
function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <EstiloGlobal />
        <Container>
          <RouterProvider router={rotas} />
        </Container>
      </Provider>
    </div>
  )
}

export default App
