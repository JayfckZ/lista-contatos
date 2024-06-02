import { useNavigate } from "react-router-dom"
import { Input } from "../../components/Input/styles"
import { Botao } from "../../components/Botao/styles"
import { BarraTopo } from "./styles"
import { useDispatch, useSelector } from "react-redux"
import { alteraTermo } from "../../store/reducers/filtro"
import { RootReducer } from "../../store"

export const Topo = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { termo } = useSelector((state: RootReducer) => state.filtro)
  return (
    <BarraTopo>
      <Input
        placeholder="Buscar contato..."
        value={termo}
        onChange={(e) => dispatch(alteraTermo(e.target.value))}
      />
      <Botao onClick={() => navigate("/novocontato")}>Adicionar contato</Botao>
    </BarraTopo>
  )
}
