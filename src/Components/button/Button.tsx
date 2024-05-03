import { BlockButton, Botao } from "./style"

interface ButtonPropos {
  Filter?: React.CSSProperties;
  Title?: string;
  estilo?: React.CSSProperties;
}

function Button({Filter, Title, estilo}: ButtonPropos){
  return(
    <BlockButton style={estilo}>
      <Botao style={Filter} type="submit">{Title}</Botao>
    </BlockButton>
  )
}
export default Button