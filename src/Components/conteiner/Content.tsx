import ball from "../../assets/mark.png"
import {  Arrow, BlockDate, BlockSon, BlockTime, BlockTitle, BlockUp, BlockWhite, Blocks, Container, Icon, LittleBlock, Title, TitleBlack, TitleClear } from "./style"
import arrow from "../../assets/arrow-down.png"

interface ContentProps {
  title: string;
  bola?: string;
  cor?: React.CSSProperties; 
  text?: string;
  text2?: string;
  text3?: string;
  seta?: string;
  Cor?: React.CSSProperties;
  estilo?:React.CSSProperties;
  Blocos?:React.CSSProperties;
  width?:React.CSSProperties;  
  filter?:React.CSSProperties;  
}

function Content({title, bola, cor, seta, Cor, text, text2, text3, estilo, Blocos, width, filter}: ContentProps){
  return(
    <BlockWhite style={cor}>
    <Container>
      <Icon src={bola || ball} alt=""/>
      <Title style={filter}>{title}</Title>
    </Container>
   <BlockTitle>
   <BlockUp style={Cor}>
      <Blocks style={width}>
        <LittleBlock style={Blocos}> 
          <TitleBlack>{text}</TitleBlack>
          <BlockSon style={estilo}>
            <TitleClear>Select your city</TitleClear>
            <Arrow src={seta || arrow} alt="" />
          </BlockSon>
        </LittleBlock>
        <BlockDate style={Blocos}>
          <TitleBlack>{text2}</TitleBlack>
          <BlockSon style={estilo}>
            <TitleClear>Select your city</TitleClear>
            <Arrow  src={seta || arrow} alt="" />
          </BlockSon>
        </BlockDate>
        <BlockTime style={Blocos}>
          <TitleBlack>{text3}</TitleBlack>
          <BlockSon style={estilo}>
            <TitleClear>Select your city</TitleClear>
            <Arrow  src={seta || arrow} alt="" />
          </BlockSon>
        </BlockTime>
      </Blocks>
    </BlockUp>
   </BlockTitle>
  </BlockWhite>
  )
}
export default Content