import { NotificationObjeto } from ".."
import { Block, BlockBorder, BlockCar, BlockGps, BlockGraph, BlockGtr, BlockHeader, BlockIcons, BlockIgm, BlockImagem, BlockLeft, BlockNoEdge, BlockPoint, BlockRight, BlockRodape, BlockTitle, BlockTitles, BlockTwo, Bloco, BlocoImg, Body, Car, Container, ContainerTitle, ContentCar, ContentFlex, ContentOne, ContentTWo, ContentTitle, Dashboard, IconCar, IconsLeft, Img, ImgGps, PointGraph, Pontinho, Title, TitleBlack, TitleBlue, TitleClear, TitleDark, TitleGps, TitleGrande, TitleGraph, TitleGray, TitleLarge, TitleOne, TitleSmall, TitleTwo, Titlepequeno } from "./style"
import mapa from "../../assets/Maps.png"
import carro from "../../assets/Look (2).png"
import Ponto from "../../assets/more.png"
import Grafico from "../../assets/cópia de Chart.png"
import Point from "../../assets/cópia de Mark.png"
import suv from "../../assets/suv.png"
import coupe from "../../assets/coupe.png"
import hatchback from "../../assets/hatchback.png"
import mpv from "../../assets/mpv.png"
import Icon from "../../assets/car (4).png"
import car from "../../assets/cópia de car (4).png"
import Rolls from "../../assets/car (4) cópia 2.png"
import CRV from "../../assets/car (4) cópia 3.png"

function CorpoFive(){
  return(
    <Body>
      <NotificationObjeto.cabecalho 
        IconOne="../../../src/assets/search-normal.png"
        IconTwo="../../../src/assets/Profil.png"
        Input={true}
      />
      <ContentFlex>
        <Dashboard>
          <NotificationObjeto.Nav 
              Title='M A I N  M E N U' 
              Text2="Dashboard"
              icon="../../../../src/assets/home.png"
              filter={{
                display: "flex",
                alignItems: 'center',
                background:'#3563E9',
                width: '85%',
                height: '5vh',
                borderRadius: '10px',
                marginLeft: '5%',
                paddingLeft: '5%'
              }}
              filter2={{color:'#FFFFFF'}}
              filter3={{padding:'0%'}}
              CSS={{marginLeft:'12%'}}
            />
            <NotificationObjeto.Nav
              Text2="Car Rent" 
              icon="../../../../src/assets/car 2.png"
              filter={{paddingLeft:'10%'}}
            />
            <NotificationObjeto.Nav 
              Text2="Insight" 
              icon="../../../../src/assets/chart.png"
              filter={{paddingLeft:'10%'}}
            />
            <NotificationObjeto.Nav
              Text2="Reimburse" 
              icon="../../../../src/assets/empty-wallet-change.png"
              filter={{paddingLeft:'10%'}}
            />
            <NotificationObjeto.Nav
              Text2="Inbox" 
              icon="../../../../src/assets/message.png"
              filter={{paddingLeft:'10%'}}
            />
            <NotificationObjeto.Nav
              Text2="Calender"
              icon="../../../../src/assets/calendar.png" 
              filter={{paddingLeft:'10%'}}
            />

            <NotificationObjeto.Nav 
              Title="P R E F E R E N C E S"
              Text2="Settings" 
              CSS={{marginTop:'24%', marginLeft:'12%'}}
              icon="../../../../src/assets/setting.png" 
              filter={{paddingLeft:'10%'}}
            />
            <NotificationObjeto.Nav
              Text2="Help & Center" 
              icon="../../../../src/assets/info-circle.png" 
              filter={{paddingLeft:'10%'}}
            />
              <BlockIcons>
              <NotificationObjeto.Nav
                filter={{width: '10vw'}}
                Text2="Dark Mode" 
                icon="../../../../src/assets/briefcase.png" 
                />
                  <IconsLeft>
                    <NotificationObjeto.Nav
                    icon="../../../../src/assets/Group 427320607.png" 
                    />
                    <NotificationObjeto.Nav
                      icon="../../../../src/assets/Group 427320608.png" 
                    />
                  </IconsLeft>
              </BlockIcons>

            <NotificationObjeto.Nav  
              filter={{marginTop: '60%',marginLeft:'9.5%'}}
              Text2="Log Out"
              icon="../../../../src/assets/logout.png" 
              />
        </Dashboard>
        <BlockTwo>
            <BlockRight>
              <BlockGps>
                <TitleGps>Details Rental</TitleGps>
                <ImgGps src={mapa} alt="" />
              </BlockGps>
              <BlockGtr>
                  <BlockImagem>
                    <Car src={carro} alt="" />
                  </BlockImagem>
                  <BlockTitles>
                    <TitleLarge>Nissan GT - R</TitleLarge>
                    <TitleSmall>Sport Car</TitleSmall>
                  </BlockTitles>
              </BlockGtr>
    
                <NotificationObjeto.text 
                  title="Pick - Up"  
                  text="Locations" 
                  text2="Date" 
                  text3="Time"
                  cor={{
                    position: "relative", 
                    height:'15vh', 
                    background: 'none', 
                    padding:'0', 
                    margin:'0',
                    marginTop: '4%'
                  }}
                  estilo={{gap:'5%'}}
                  Blocos={{width: '27%'}}
                  filter={{marginLeft: '2%'}}
                />
                <NotificationObjeto.text 
                  title="Pick - Up"  
                  text="Locations" 
                  text2="Date" 
                  text3="Time"
                  cor={{
                    position: "relative", 
                    width: '96%', 
                    height: '17vh', 
                    background: 'none', 
                    padding:'0', 
                    margin:'0',
                    borderBottom: '1px solid #C3D4E9',
                    borderRadius: '0px'
                   }}
                  estilo={{gap:'5%'}}
                  Blocos={{width: '27%'}}
                  filter={{marginLeft: '2%'}}
                />
                <BlockRodape>
                  <NotificationObjeto.header
                    TitleOne="Total Rental Price"
                    TitleTwo="Overall price and includes rental discount"
                    estilo1={{marginTop:'1%', width:'100%'}}
                  />
                  <Title>$80.00</Title>
                </BlockRodape>
            </BlockRight>
            <BlockLeft>
              <BlockGraph>
                <BlockHeader>
                  <TitleGraph>Top 5 Car Rental </TitleGraph>
                  <PointGraph src={Ponto} alt=""/>
                </BlockHeader>
                <Container>
                <BlocoImg>
                  <BlockTitle>
                    <TitleOne>72,030</TitleOne>
                    <TitleTwo>Rental Car</TitleTwo>
                  </BlockTitle>
                  <Img src={Grafico} alt="" />
                </BlocoImg>
                <Block>
                  <Bloco>
                    <BlockPoint>
                      <BlockIgm>
                        <Pontinho src={Point} alt="" />
                      </BlockIgm>
                      <TitleClear>Sport Car</TitleClear>
                    </BlockPoint>
                    <TitleBlack>17,439</TitleBlack>
                  </Bloco>
                  <Bloco>
                    <BlockPoint>
                      <BlockIgm>
                        <Pontinho src={suv} alt="" />
                      </BlockIgm>
                      <TitleClear>SUV</TitleClear>
                    </BlockPoint>
                    <TitleBlack>9,478</TitleBlack>
                  </Bloco>
                  <Bloco>
                    <BlockPoint>
                      <BlockIgm>
                        <Pontinho src={coupe} alt="" />
                      </BlockIgm>
                      <TitleClear>Coupe</TitleClear>
                    </BlockPoint>
                    <TitleBlack>18,197</TitleBlack>
                  </Bloco>
                  <Bloco>
                    <BlockPoint>
                      <BlockIgm>
                        <Pontinho src={hatchback} alt="" />
                      </BlockIgm>
                      <TitleClear>Hatchback</TitleClear>
                    </BlockPoint>
                    <TitleBlack>12,510</TitleBlack>
                  </Bloco>
                  <Bloco>
                    <BlockPoint>
                      <BlockIgm>
                        <Pontinho src={mpv} alt="" />
                      </BlockIgm>
                      <TitleClear>MPV</TitleClear>
                    </BlockPoint>
                    <TitleBlack>14,406</TitleBlack>
                  </Bloco>
                </Block>
                </Container>
              </BlockGraph>
              <BlockCar>
              <BlockHeader>
                  <TitleGraph>Recent Transaction</TitleGraph>
                  <TitleBlue>View All</TitleBlue>
              </BlockHeader>
              <BlockBorder>
                <ContentOne>
                    <ContentCar>
                      <IconCar src={Icon} alt="" />
                    </ContentCar>
                    <ContentTitle>
                      <TitleDark>Nissan GT - R</TitleDark>
                      <TitleGray>Sport Car</TitleGray>
                    </ContentTitle>
                  </ContentOne>
                  <ContentTWo>
                    <ContainerTitle>
                      <Titlepequeno>20 July</Titlepequeno>
                      <TitleGrande>$80.00</TitleGrande>
                    </ContainerTitle>
                  </ContentTWo>
              </BlockBorder>
              <BlockBorder>
                <ContentOne>
                    <ContentCar>
                      <IconCar src={car} alt="" />
                    </ContentCar>
                    <ContentTitle>
                      <TitleDark>Koegnigsegg</TitleDark>
                      <TitleGray>Sport Car</TitleGray>
                    </ContentTitle>
                  </ContentOne>
                  <ContentTWo>
                    <ContainerTitle>
                      <Titlepequeno>19 July</Titlepequeno>
                      <TitleGrande>$99.00</TitleGrande>
                    </ContainerTitle>
                  </ContentTWo>
                  </BlockBorder> 
               <BlockBorder>
                <ContentOne>
                    <ContentCar>
                      <IconCar src={Rolls} alt="" />
                    </ContentCar>
                    <ContentTitle>
                      <TitleDark>Rolls - Royce</TitleDark>
                      <TitleGray>Sport Car</TitleGray>
                    </ContentTitle>
                  </ContentOne>
                  <ContentTWo>
                    <ContainerTitle>
                      <Titlepequeno>20 July</Titlepequeno>
                      <TitleGrande>$96.00</TitleGrande>
                    </ContainerTitle>
                  </ContentTWo>
              </BlockBorder>  
              <BlockNoEdge>
                <ContentOne>
                    <ContentCar>
                      <IconCar src={CRV} alt="" />
                    </ContentCar>
                    <ContentTitle>
                      <TitleDark>CR - V</TitleDark>
                      <TitleGray>SUV</TitleGray>
                    </ContentTitle>
                  </ContentOne>
                  <ContentTWo>
                    <ContainerTitle>
                      <Titlepequeno>17 July</Titlepequeno>
                      <TitleGrande>$80.00</TitleGrande>
                    </ContainerTitle>
                  </ContentTWo>
              </BlockNoEdge>   
              </BlockCar>
            </BlockLeft>
        </BlockTwo>
      </ContentFlex>
    </Body>
  )
}
export default CorpoFive