import ball from "../../assets/mark.png"
import ContentTitle from "../ContentTitle/ContentTitle";
import {  BlockTitle, BlockWhite, Container, Icon, Title } from "./style"

interface ContentProps {
  title: string;
  bola?: string;
  cor?: React.CSSProperties; 
}

function Content({title, bola, cor}: ContentProps){
  return(
    <BlockWhite style={cor}>
    <Container>
      <Icon src={bola || ball} alt=""/>
      <Title>{title}</Title>
    </Container>
   <BlockTitle>
     <ContentTitle text="Locations" />
      <ContentTitle text="Date" Cor={{borderLeft: '1px solid #C3D4E9', paddingLeft: '20px'}}/>
      <ContentTitle text="Time" Cor={{borderLeft: '1px solid #C3D4E9', paddingLeft: '20px'}}/>
   </BlockTitle>
  </BlockWhite>
  )
}
export default Content