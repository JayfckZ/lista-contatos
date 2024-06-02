import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import Contatos from "../../models/Contatos"

type ContatosState = {
  itens: Contatos[]
}

const initialState: ContatosState = {
  itens: [
    {
      id: 1,
      nome: "Primeiro Contato",
      numero: "(21) 91234-5678",
      email: "primeiro@email.com"
    }
  ]
}
const contatosSlice = createSlice({
  name: "contatos",
  initialState,
  reducers: {
    remover: (state, action: PayloadAction<number>) => {
      state.itens = [
        ...(state.itens = state.itens.filter(
          (contato) => contato.id !== action.payload
        ))
      ]
    },
    editar: (state, action: PayloadAction<Contatos>) => {
      const indexDoContato = state.itens.findIndex(
        (c) => c.id === action.payload.id
      )

      if (indexDoContato >= 0) {
        state.itens[indexDoContato] = action.payload
      }
    },
    adicionar: (state, action: PayloadAction<Omit<Contatos, "id">>) => {
      const contatoExiste = state.itens.find(
        (contato) => contato.numero === action.payload.numero
      )

      if (contatoExiste) {
        alert("Já existe um contato com esse número.")
      } else {
        const ultimoContato = state.itens[state.itens.length - 1]

        const novoContato = {
          ...action.payload,
          id: ultimoContato ? ultimoContato.id + 1 : 1
        }
        state.itens.push(novoContato)
      }
    }
  }
})

export const { remover, editar, adicionar } = contatosSlice.actions

export default contatosSlice.reducer
