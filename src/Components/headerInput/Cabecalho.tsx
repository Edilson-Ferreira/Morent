import { BlockTitles, BlockHeader, TitleDark, TitleClear } from "./style"

interface CabecalhoProps {
  TitleOne?: string;
  TitleTwo?: string;
  TitleThree?: string;
  estilo1?: React.CSSProperties;
}


function Cabecalho({TitleOne, TitleTwo, TitleThree, estilo1}:CabecalhoProps){
  return(
    <BlockTitles>
      <BlockHeader>
        <TitleDark>{TitleOne}</TitleDark>
        <TitleClear style={estilo1}>{TitleTwo}</TitleClear>
      </BlockHeader>
      <TitleClear>{TitleThree}</TitleClear>
    </BlockTitles>
  )
}
export default Cabecalho