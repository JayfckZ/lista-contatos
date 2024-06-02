import styled from "styled-components"
import { Botao } from "../Botao/styles"

function selecionarCorAleatoria() {
  const cores = [
    "#2ed573",
    "#1e90ff",
    "#3742fa",
    "#ff4757",
    "#eccc68",
    "#ff6b81",
    "#ff7f50"
  ]
  const corAleatoria = cores[Math.floor(Math.random() * cores.length)]

  return corAleatoria
}

export const ContatoContainer = styled.div`
  padding: 16px;
  border: 1px solid;
  border-left: 1px;
  border-right: 1px;
  border-color: #dfe4ea;
  margin: 0 20px;
  display: grid;
  grid-template-columns: 20% 70% 10%;
  color: #fff;

  #img {
    justify-self: center;
    align-self: center;
    text-transform: capitalize;
  }

  #infos {
    display: flex;
    flex-direction: column;

    @media (width <= 767px) {
      align-items: center;
    }
  }

  #buttons {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }
`
export const Foto = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 85px;
  height: 85px;

  border-radius: 50%;

  background-color: ${selecionarCorAleatoria};

  font-weight: bold;
  font-size: 24px;
`

export const Numero = styled.textarea`
  resize: none;
  height: 30px;
  background-color: transparent;
  border: none;
  font-size: 18px;
  color: #fff;

  @media (width <= 767px) {
    text-align: center;
  }
`
export const Nome = styled(Numero)`
  font-size: 24px;
  font-weight: bold;
`

export const BotaoLigar = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid green;
  width: 40px;
  height: 40px;
  cursor: pointer;
  border-radius: 50%;

  color: green;

  transition: all 0.2s;

  &:hover {
    background-color: green;
    border-color: transparent;
    color: #2f3542;
  }
`

export const BotaoRemover = styled(BotaoLigar)`
  color: red;
  border-color: red;

  &:hover {
    background-color: red;
  }
`

export const BotaoEditar = styled(Botao)`
  background-color: orange;
  border: 2px solid transparent;
  width: 50%;
  align-self: center;

  &:hover {
    background-color: transparent;
    border: 2px solid orange;
    color: orange;
  }

  @media (width <= 767px) {
    width: 80%;
  }
`

export const BotaoSalvar = styled(BotaoEditar)`
  background-color: green;

  &:hover {
    background-color: transparent;
    border: 2px solid green;
    color: green;
  }
`

export const BotaoCancelar = styled(BotaoEditar)`
  background-color: red;

  &:hover {
    background-color: transparent;
    border: 2px solid red;
    color: red;
  }
`
