import { BlockButton, Botao } from "./style"

interface ButtonPropos {
  Filter?: React.CSSProperties;
  Title?: string;
}

function Button({Filter, Title}: ButtonPropos){
  return(
    <BlockButton>
      <Botao style={Filter} type="submit">{Title}</Botao>
    </BlockButton>
  )
}
export default Button