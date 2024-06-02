import * as S from "./styles"
import Contatos from "../../models/Contatos"
import { useState, useEffect } from "react"
import { useDispatch } from "react-redux"
import { remover, editar } from "../../store/reducers/contatos"

type Props = Contatos

export const Contato = ({
  nome: nomeOriginal,
  numero: numeroOriginal,
  email: emailOriginal,
  id
}: Props) => {
  const dispatch = useDispatch()
  const [estaEditando, setEstaEditando] = useState(false)
  const [nome, setNome] = useState("")
  const [numero, setNumero] = useState("")
  const [email, setEmail] = useState("")

  useEffect(() => {
    if (nomeOriginal.length > 0) {
      setNome(nomeOriginal)
    }
  }, [nomeOriginal])

  useEffect(() => {
    if (numeroOriginal.length > 0) {
      setNumero(numeroOriginal)
    }
  }, [numeroOriginal])

  useEffect(() => {
    if (emailOriginal.length > 0) {
      setEmail(emailOriginal)
    }
  }, [emailOriginal])

  function cancelarEdicao() {
    setEstaEditando(false)
    setNome(nomeOriginal)
    setNumero(numeroOriginal)
    setEmail(emailOriginal)
  }

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

  function editarContato() {
    const numeroFormatado = formatarNumero(numero)

    if (numeroFormatado) {
      dispatch(
        editar({
          nome,
          numero: numeroFormatado,
          email,
          id
        })
      )
    } else {
      alert("Número inválido.")
      cancelarEdicao()
    }
    setEstaEditando(false)
  }

  function imgNome(nome: string): string {
    const palavras = nome.trim().split(/\s+/)

    if (palavras.length === 0) {
      return ""
    } else if (palavras.length === 1) {
      return palavras[0].charAt(0)
    } else {
      return palavras[0].charAt(0) + palavras[1].charAt(0)
    }
  }

  return (
    <S.ContatoContainer>
      <S.Foto id="img">{imgNome(nome)}</S.Foto>
      <div id="infos">
        <S.Nome
          value={nome}
          disabled={!estaEditando}
          onChange={(e) => setNome(e.target.value)}
        ></S.Nome>
        <S.Numero
          value={numero}
          disabled={!estaEditando}
          onChange={(e) => setNumero(e.target.value)}
        ></S.Numero>
        <S.Numero
          value={email}
          disabled={!estaEditando}
          onChange={(e) => setEmail(e.target.value)}
        ></S.Numero>
        {!estaEditando ? (
          <S.BotaoEditar onClick={() => setEstaEditando(true)}>
            Editar Contato
          </S.BotaoEditar>
        ) : (
          <>
            <S.BotaoSalvar onClick={editarContato}>Salvar</S.BotaoSalvar>
            <S.BotaoCancelar onClick={cancelarEdicao}>Cancelar</S.BotaoCancelar>
          </>
        )}
      </div>
      <div id="buttons">
        <S.BotaoLigar>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            fill="currentColor"
            className="bi bi-telephone"
            viewBox="0 0 16 16"
          >
            <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.6 17.6 0 0 0 4.168 6.608 17.6 17.6 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.68.68 0 0 0-.58-.122l-2.19.547a1.75 1.75 0 0 1-1.657-.459L5.482 8.062a1.75 1.75 0 0 1-.46-1.657l.548-2.19a.68.68 0 0 0-.122-.58zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z" />
          </svg>
        </S.BotaoLigar>
        <S.BotaoRemover onClick={() => dispatch(remover(id))}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            fill="currentColor"
            className="bi bi-trash"
            viewBox="0 0 16 16"
          >
            <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z" />
            <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z" />
          </svg>
        </S.BotaoRemover>
      </div>
    </S.ContatoContainer>
  )
}
