import { styled } from "styled-components"

export const Input = styled.input`
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
