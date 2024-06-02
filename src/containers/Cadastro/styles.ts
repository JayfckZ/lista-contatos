import styled from "styled-components"
import { BotaoSalvar } from "../../components/Contato/styles"

export const Area = styled.div`
  height: 500px;
  background-color: #2f3542;
  border-radius: 0 0 25px 25px;

  form {
    max-width: 500px;
    width: 100%;
    margin: 0 auto;
    padding-top: 50px;

    input {
      margin-bottom: 24px;
    }
  }

  div {
    display: flex;
    flex-direction: column;
  }
`

export const Label = styled.label`
  text-align: center;
  font-weight: bold;
  font-size: 18px;
  color: #fff;
`

export const Campo = styled.input`
  width: 100%;

  border: none;
  border: 1px solid #f1f2f6;
  border-radius: 25px;

  padding: 12px;

  background-color: #111;
  color: #f1f2f6;
  text-align: center;

  transition: all 0.1s ease;

  &:hover {
    outline: 5px solid rgba(164, 176, 190, 0.5);
  }
`
