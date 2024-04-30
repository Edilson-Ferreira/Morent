import { NotificationObjeto } from ".."
import NotificationRoot from "../Root/NotificationRoot"
import { Block, BlockFotos, BlockHeader, BlockHeaderTwo, BlockImg, BlockLeft, BlockOne, BlockRodape, BlockStarTitle, BlockText, BlockTitles, BlockTwo, BlockValor, Bloco, BloquinhosFotos, Body, ButtonHeaderTwo, Container, Content, ContentRodape, Coracao, IconCar, IconImagens, Navebar, OneBlock, Stat, Text, Title, Title1, Title2, TitleBlock, TitleBlockStar, TitleHeaderTwo, TitleValue, TitloClaro, TitloEscuro, TwoBlock, Valor, ValueCem } from "./style"
import Car from "../../assets/BG (1) cópia 2.png"
import foto from "../../assets/View 1.png"
import Interior1 from "../../assets/View 2.png"
import Interior2 from "../../assets/View 3.png"
import Heart from "../../assets/heart.png"
import estrela from "../../assets/Review Star.png"
import valor from "../../assets/$100.00.png"

function CorpoThree(){
  return(
    <Body>
      <NotificationRoot>
        <NotificationObjeto.cabecalho />
        <Block>
          <Container>
            <Navebar>
            <NotificationObjeto.Nav 
            Title='T Y P E' 
            Text="Sport" 
            Text2="(10)" 
          />
          <NotificationObjeto.Nav
            Text="SUV" 
            Text2="(12)" 
          />
           <NotificationObjeto.Nav
            Text="MPV" 
            Text2="(16)" 
          />
           <NotificationObjeto.Nav
            Text="Sedan" 
            Text2="(20)" 
          />
           <NotificationObjeto.Nav
            Text="Coupe" 
            Text2="(14)" 
          />
           <NotificationObjeto.Nav
            Text="Hatchback" 
            Text2="(14)" 
          />

          <NotificationObjeto.Nav 
            Title="C A P A C I T Y"
            Text="2 Person" 
            Text2="(10)" 
            CSS={{marginTop:'24%'}}
          />
          <NotificationObjeto.Nav
            Text="4 Person" 
            Text2="(12)" 
          />
           <NotificationObjeto.Nav
            Text="6 Person" 
            Text2="(16)" 
            />
          <NotificationObjeto.Nav
            Price='P R I C E' 
            Text="8 or More" 
            Text2="(16)"
            CSS={{display: 'Block'}}
            TitleRodapr={{display: 'Block'}}
            Top={{marginTop: '18%'}}
            />
            </Navebar>
            <BlockLeft>
              <BlockOne>
                <BlockFotos>
                  <Content>
                    <TitleBlock>
                      <Title1>Sports car with the best design and acceleration</Title1>
                      <Title2>Safety and comfort while driving a futuristic and elegant sports car</Title2>
                    </TitleBlock>
                    <IconCar src={Car} alt=""/>
                  </Content>
                  <BloquinhosFotos>
                    <IconImagens src={foto} alt="" />
                    <IconImagens src={Interior1} alt="" />
                    <IconImagens src={Interior2} alt="" />
                  </BloquinhosFotos>
                </BlockFotos>
                <Bloco>
                  <BlockHeader> 
                    <Title>Nissan GT - R</Title>
                    <Coracao src={Heart} alt="" />
                  </BlockHeader>
                  <BlockStarTitle>
                    <Stat src={estrela} alt="" />
                    <TitleBlockStar>440+ Reviewer</TitleBlockStar>
                  </BlockStarTitle>
                  <BlockText>
                    <Text>NISMO has become the embodiment of Nissan's</Text>
                    <Text>outstanding performance, inspired by the most</Text>
                    <Text>unforgiving proving ground, the "race track".</Text>
                  </BlockText>
                  <BlockTitles>
                    <OneBlock>
                      <TitloClaro>Type Car</TitloClaro>
                      <TitloEscuro>Sport</TitloEscuro>
                      <TitloClaro>Capacity</TitloClaro>
                      <TitloEscuro>2 Person</TitloEscuro>
                    </OneBlock>
                    <TwoBlock>
                      <TitloClaro>Steering</TitloClaro>
                      <TitloEscuro>Manual</TitloEscuro>
                      <TitloClaro>Gasoline </TitloClaro>
                      <TitloEscuro>70L</TitloEscuro>
                    </TwoBlock>
                  </BlockTitles>
                  <BlockRodape>
                    <ContentRodape>
                    <BlockValor>
                      <Valor>$80.00/</Valor>
                      <TitleValue>days</TitleValue>
                    </BlockValor>
                    <BlockImg>
                      <ValueCem src={valor} alt="" />
                    </BlockImg>
                    </ContentRodape>
                    <NotificationObjeto.botao 
                      Filter={{width:'32%', marginLeft: '67.8%'}}
                      Title="Rent Now"
                    />
                  </BlockRodape>
                </Bloco>
              </BlockOne>
              <BlockTwo>
                <BlockHeaderTwo>
                  <TitleHeaderTwo>Reviews</TitleHeaderTwo>
                  <ButtonHeaderTwo>13</ButtonHeaderTwo>
                </BlockHeaderTwo>
              </BlockTwo>
            </BlockLeft>
          </Container>
        </Block>
      </NotificationRoot>
    </Body>
  )
}
export default CorpoThree