import { ContatosContainer } from "./styles"
import { Contato } from "../../components/Contato"
import { useSelector } from "react-redux"
import { RootReducer } from "../../store"
export const Contatos = () => {
  const { itens } = useSelector((state: RootReducer) => state.contatos)
  const { termo } = useSelector((state: RootReducer) => state.filtro)

  const filtraContatos = () => {
    let contatosFiltrados = itens
    if (termo !== undefined) {
      contatosFiltrados = contatosFiltrados.filter((item) => {
        const nome = item.nome.toLowerCase()
        const numero = item.numero
        const email = item.email.toLowerCase()
        const termoBusca = termo.toLowerCase()
        return (
          nome.includes(termoBusca) ||
          numero.includes(termoBusca) ||
          email.includes(termoBusca)
        )
      })

      return contatosFiltrados
    } else {
      return itens
    }
  }

  const contatos = filtraContatos()

  return (
    <ContatosContainer>
      <ul>
        {contatos.map((c) => (
          <li key={c.numero}>
            <Contato
              nome={c.nome}
              numero={c.numero}
              email={c.email}
              id={c.id}
            ></Contato>
          </li>
        ))}
      </ul>
    </ContatosContainer>
  )
}
