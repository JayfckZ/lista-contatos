import { createGlobalStyle, styled } from "styled-components"

export const EstiloGlobal = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: Roboto, sans-serif;
  }
  body {
    background-color: #111;
  }
`

export const Container = styled.div`
  max-width: 700px;
  width: 100%;
  margin: 0 auto;
`
