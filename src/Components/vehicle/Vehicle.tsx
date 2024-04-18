
import heart from "../../assets/heart.png"
import car from "../../assets/car.png"
import Gas from "../../assets/gas-station.png"
import volante from "../../assets/cópia de Car.png"
import profil from "../../assets/profile-2user.png"
import { Block, BlockHeader, BlockOne, BlockPlinth, BlockPlinthkOne, BlockThree, BlockTitle, BlockTitleTwo, BlockTwo, BlockValue, BlockWhite, BlokoTitleOne, BlokoTitleThree, ButtonPlinth, Car, Container, Heart, IconOne, IconThree, IconTwo, Plinthk, Title, TitleOne, TitlePlinthOne, TitlePlinthTwo, TitleTwo, Value } from "./style"
import valor from "../../assets/$100.00.png"
import React from "react"

interface VehicleProps {
  valores?: string;
  nome?: string;
  modelo?: string;
  titulo?: string;
  coracao?: string; 
  carro?: string;
  litro?: string;
  pessoas?: string;
  value?: string;
  filter?: React.CSSProperties;
  width?: React.CSSProperties;
  bloco?: React.CSSProperties;
  block?: React.CSSProperties;
  imgCss?: React.CSSProperties;
}

function Vehicle({valores, nome, modelo, titulo, coracao, carro, litro, pessoas, value, filter, width, bloco, block, imgCss}: VehicleProps){
  return(
    <Container style={bloco}>
      <Title>{titulo}</Title>
      <BlockWhite style={width}>
        <BlockHeader>
          <BlockTitle>
            <TitleOne>{nome}</TitleOne>
            <TitleTwo>{modelo}</TitleTwo>
            </BlockTitle>
          <Heart src={coracao || heart} alt="" />
        </BlockHeader>
        <Car style={imgCss} src={carro || car} alt="" />
        <Block style={block}>
          <BlockOne>
            <IconOne src={Gas} alt="" />
            <BlokoTitleOne>{litro}</BlokoTitleOne>
          </BlockOne>
          <BlockTwo>
            <IconTwo src={volante} alt="" />
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