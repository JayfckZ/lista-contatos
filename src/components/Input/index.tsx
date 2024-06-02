import * as S from "./styles"

type Props = {
  placeholder?: string
}
export const Input = ({ placeholder }: Props) => (
  <S.Input placeholder={placeholder} />
)
