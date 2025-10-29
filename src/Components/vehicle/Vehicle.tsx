
//import heart from "../../assets/heart.png"
import carrinho from "../../assets/car.png"
import Gas from "../../assets/gas-station.png"
import profil from "../../assets/profile-2user.png"
import { Block, BlockHeader, BlockOne, BlockPlinth, BlockPlinthkOne, BlockThree, BlockTitle, BlockTitleTwo, BlockTwo, BlockValue, BlockWhite, BlokoTitleOne, BlokoTitleThree, ButtonPlinth, Car, Container, Heart, IconOne, IconThree, IconTwo, Plinthk, Title, TitleOne, TitlePlinthOne, TitlePlinthTwo, TitleTwo, Value } from "./style"
import valor from "../../assets/$100.00.png"
import React from "react"

interface VehicleProps {
  valores?: string;
  nome?: string;
  modelo?: string;
  titulo?: string;
  coracao?: boolean; 
  carro?: string;
  litro?: string;
  pessoas?: string;
  value?: string;
  filter?: React.CSSProperties;
  width?: React.CSSProperties;
  bloco?: React.CSSProperties;
  block?: React.CSSProperties;
  imgCss?: React.CSSProperties;
  onpress?: any;
}

function Vehicle({valores, nome, modelo, titulo, coracao, carro, litro, pessoas, value, filter, width, bloco, block, imgCss, onpress}: VehicleProps){
  return(
    <Container onClick={onpress} style={bloco}>
      <Title>{titulo}</Title>
      <BlockWhite style={width}>
        <BlockHeader>
          <BlockTitle>
            <TitleOne>{nome}</TitleOne>
            <TitleTwo>{modelo}</TitleTwo>
            </BlockTitle>
          <Heart src={coracao ? "../../../src/assets/heart 2.png": "../../../src/assets/heart.png"} alt="" />
        </BlockHeader>
        <Car style={imgCss} src={carro || carrinho} alt="" />
        <Block style={block}>
          <BlockOne>
            <IconOne src={Gas} alt="" />
            <BlokoTitleOne>{litro}</BlokoTitleOne>
          </BlockOne>
          <BlockTwo>
            <BlockTitleTwo>Manual</BlockTitleTwo>
          </BlockTwo>
          <BlockThree>
            <IconThree src={profil} alt="" />
            <BlokoTitleThree>{pessoas}</BlokoTitleThree>
          </BlockThree>
        </Block>
        <BlockPlinth>
          <BlockPlinthkOne>
            <Plinthk style={filter}>
              <TitlePlinthOne>{value}/</TitlePlinthOne>
              <TitlePlinthTwo>day</TitlePlinthTwo>
            </Plinthk>
           <BlockValue><Value src={valores || valor} alt="" /></BlockValue>
          </BlockPlinthkOne>
          
          <ButtonPlinth type="submit">Rent Now</ButtonPlinth>
        </BlockPlinth>
      </BlockWhite>
    </Container>
  )
}
export default Vehicle