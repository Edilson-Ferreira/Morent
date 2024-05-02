import { PlinthWhite, BlockLine, BlockOne, TitleOne, TextOne, TowBlock, BlockTwo, TitleBlack, Title, PlinthOne, TitlePlinth, TwoPlinth, TwoTitle, Rodape } from "./style"

interface PlinthProps {
  font?: React.CSSProperties;
}

function Plinth({font}:PlinthProps){
  return(
    <PlinthWhite style={font}>
    <BlockLine>
      <BlockOne>
        <TitleOne>MORENT</TitleOne>
        <TextOne>Our vision is to provide convenience and help increase your sales business.</TextOne>
      </BlockOne>
     <TowBlock>
        <BlockTwo>
          <TitleBlack>About</TitleBlack>
          <Title>How it works</Title>
          <Title>Featured</Title>
          <Title>Partnership</Title>
          <Title>Bussiness Relation</Title>
        </BlockTwo>
        <BlockTwo>
          <TitleBlack>Community</TitleBlack>
          <Title>Events</Title>
          <Title>Blog</Title>
          <Title>Podcast</Title>
          <Title>Invite a friend</Title>
        </BlockTwo>
        <BlockTwo>
          <TitleBlack>Socials</TitleBlack>
          <Title>Discord</Title>
          <Title>Instagram</Title>
          <Title>Twitter</Title>
          <Title>Facebook</Title>
        </BlockTwo>
     </TowBlock>
    </BlockLine>
    <Rodape>
      <PlinthOne>
        <TitlePlinth>©2022 MORENT. All rights reserved</TitlePlinth>
      </PlinthOne>
      <TwoPlinth>
        <TwoTitle>Privacy & Policy</TwoTitle>
        <TwoTitle>Terms & Condition</TwoTitle>
      </TwoPlinth>
    </Rodape>
  </PlinthWhite>
  )
}
export default Plinth