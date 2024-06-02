import { FormEvent, useState } from "react"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import * as S from "./styles"
import { BotaoSalvar, BotaoCancelar } from "../../components/Contato/styles"
import { adicionar } from "../../store/reducers/contatos"

export const Cadastro = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [nome, setNome] = useState("")
  const [numero, setNumero] = useState("")
  const [email, setEmail] = useState("")

  const formatarNumero = (numero: string) => {
    const numeroLimpo = numero.replace(/\D/g, "")

    if (numeroLimpo.length === 10) {
      return numeroLimpo.replace(/(\d{2})(\d{4})(\d{4})/, "($1) $2-$3")
    } else if (numeroLimpo.length === 11) {
      return numeroLimpo.replace(/(\d{2})(\d{5})(\d{4})/, "($1) $2-$3")
    } else {
      return null
    }
  }

  const adicionarContato = (evento: FormEvent) => {
    evento.preventDefault()
    const numeroFormatado = formatarNumero(numero)

    if (numeroFormatado) {
      dispatch(
        adicionar({
          nome,
          numero: numeroFormatado,
          email
        })
      )
      navigate("/")
    } else {
      alert("Número inválido.")
    }
  }

  return (
    <S.Area>
      <form onSubmit={adicionarContato}>
        <S.Label>Nome do contato</S.Label>
        <S.Campo
          placeholder="Nome do contato"
          onChange={(e) => setNome(e.target.value)}
        />
        <S.Label>Número do contato</S.Label>
        <S.Campo
          placeholder="Número do contato"
          onChange={(e) => setNumero(e.target.value)}
        />
        <S.Label>Email do contato</S.Label>
        <S.Campo
          placeholder="Email do contato"
          type="email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <div>
          <BotaoSalvar type="submit">Salvar</BotaoSalvar>
          <BotaoCancelar onClick={() => navigate("/")}>Voltar</BotaoCancelar>
        </div>
      </form>
    </S.Area>
  )
}
