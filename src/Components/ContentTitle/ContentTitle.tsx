import arrow from "../../assets/arrow-down.png"
import { Arrow, BlockSon, BlockUp, LittleBlock, TitleBlack, TitleClear } from "./style"

interface ContentTitleProps {
  text?: string;
  seta?: string;
  Cor?: React.CSSProperties; 
}
function ContentTitle({text, seta, Cor}: ContentTitleProps){
  return(
    <BlockUp style={Cor}>
    <LittleBlock>
      <TitleBlack>{text}</TitleBlack>
      <BlockSon>
        <TitleClear>Select your city</TitleClear>
      <Arrow  src={seta || arrow} alt="" />
      </BlockSon>
    </LittleBlock>
  </BlockUp>
  )
}
export default ContentTitle