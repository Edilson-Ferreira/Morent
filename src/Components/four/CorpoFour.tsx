import { NotificationObjeto } from ".."
import NotificationRoot from "../Root/NotificationRoot"
import NotificationHeader from "../header/NotificationHeader"
import { BlockCar } from "../three/style"
import {Block, BlockCinza, BlockGray, BlockGreyHeader, BlockIconGtr, BlockInput, BlockInputOne,BlockLastInput,BlockLayer,BlockLeft, BlockPenultimate, BlockRight, BlockRodape, BlockRound, BlockSmall, BlockStarTitle, BlockTitleValue, BlockTypeCard, BlockWhite, BlockWhiteTwo, Blocklast, Bloco, Body, Card, Content, ContentFlex, IconGtr, IconLayer, Input, InputCheckbox, Label, Star, TitleBlack, TitleBlockRound, TitleCinza, TitleGtr, TitleStar, TitleValue, TituloValor, ValueTitle} from "./style"
import Visa from "../../assets/Visa_Inc._logo 1.png"
import Master from "../../assets/mc.png"
import Layer from "../../assets/Layer.png"
import GTR from "../../assets/Look.png"
import estrela from "../../assets/Review Star.png"

function CorpoFour(){
  return(
    <Body>
      <NotificationRoot>
        <NotificationHeader 
          Input=""
          IconOne=""
          IconTwo=""
          bloco={{border:'none'}}
        />
        <Block> 
          <ContentFlex>
           <BlockRight>
            <BlockWhite>
              <NotificationObjeto.header 
                TitleOne="Billing Info"
                TitleTwo="Please enter your billing info"
                TitleThree="Step 1 of 4"
              />
                <BlockInput>
                  <BlockInputOne>
                    <Label htmlFor="">Name</Label>
                    <Input type="text" name="" id="" placeholder="Your name"/>
                    <Label htmlFor="" style={{marginTop:'4%'}}>Address</Label>
                    <Input type="text" name="" id="" placeholder="Address"/>
                  </BlockInputOne>
                  <BlockInputOne>
                    <Label htmlFor="">Phone Number</Label>
                    <Input type="number" name="" id="" placeholder="Phone number"/>
                    <Label htmlFor="" style={{marginTop:'4%'}}>Town / City</Label>
                    <Input type="text" name="" id="" placeholder="Town or city"/>
                  </BlockInputOne>
                </BlockInput>
            </BlockWhite>
            <BlockWhiteTwo>
              <NotificationObjeto.header 
                TitleOne="Rental Info"
                TitleTwo="Please select your rental date"
                TitleThree="Step 2 of 4"
              />
              <NotificationObjeto.BolaTitulo 
                Title="Pick - Up"
              />
              <NotificationObjeto.select />
              <NotificationObjeto.BolaTitulo 
                Title="Drop - Off"
              />
              <NotificationObjeto.select />
            </BlockWhiteTwo>
            <BlockPenultimate>
              <NotificationObjeto.header
                TitleOne="Payment Method"
                TitleTwo="Please enter your payment method"
                TitleThree="Step 3 of 4"
              />
              <BlockGray>
                <BlockGreyHeader>
                <NotificationObjeto.BolaTitulo
                  Title="Credit Card"
                  font={{width:'18%', gap:'10px'}}
                />
                <BlockTypeCard>
                  <BlockCar>
                    <Card src={Visa} alt="" />
                  </BlockCar>
                  <BlockCar>
                    <Card src={Master} alt="" />
                  </BlockCar>
                </BlockTypeCard>
                </BlockGreyHeader>
                <BlockInput style={{marginLeft: '3.2%'}}>
                    <BlockInputOne>
                      <Label htmlFor="">Card Number</Label>
                      <Input style={{background:'#FFFFFF'}}  type="text" name="" id="" placeholder="Card number"/>
                      <Label htmlFor="" style={{marginTop:'4%'}}>Card Holder</Label>
                      <Input style={{background:'#FFFFFF'}} type="text" name="" id="" placeholder="Card holder"/>
                    </BlockInputOne>
                    <BlockInputOne>
                      <Label htmlFor="">Expration Date</Label>
                      <Input style={{background:'#FFFFFF'}}  type="number" name="" id="" placeholder="DD / MM / YY"/>
                      <Label htmlFor="" style={{marginTop:'4%'}}>CVC</Label>
                      <Input style={{background:'#FFFFFF'}}  type="text" name="" id="" placeholder="CVC"/>
                    </BlockInputOne>
                  </BlockInput>
              </BlockGray>
             <NotificationObjeto.PayPay 
              Title="PayPal"
             />
             <NotificationObjeto.PayPay 
              Title=" Bitcoin"
              Bitcoin="../../../src/assets/Bitcoin.png"
             />
            </BlockPenultimate> 
            <Blocklast>
              <NotificationObjeto.header 
                TitleOne="Confirmation"
                TitleTwo="We are getting to the end. Just few clicks and your rental is ready!"
                TitleThree="Step 4 of 4"
                estilo1={{marginTop:'2%'}}
              />
              <BlockLastInput>
                <BlockRound>
                  <InputCheckbox type="checkbox" name="" id="" />
                  <TitleBlockRound>I agree with sending an Marketing and newsletter emails. No spam, promissed!</TitleBlockRound>
                </BlockRound>
                <BlockRound>
                  <InputCheckbox type="checkbox" name="" id="" />
                  <TitleBlockRound>I agree with our terms and conditions and privacy policy.</TitleBlockRound>
                </BlockRound>
              </BlockLastInput>
              <NotificationObjeto.botao 
                Title="Rent Now"
                Filter={{width:'18%', marginTop:'4.5%'}}
                estilo={{textAlign:'left'}}
              />
              <BlockLayer>
                <IconLayer src={Layer} alt="" />
              </BlockLayer>
              <NotificationObjeto.header 
                TitleOne="Confirmation"
                TitleTwo="the end. Just few clicks and your rental is ready!"
              />
            </Blocklast>  
           </BlockRight>
           <BlockLeft>
              <NotificationObjeto.header
                TitleOne="Rental Summary"
                TitleTwo="Prices may change depending on the length of the rental and the price of your rental car."
                estilo1={{marginTop:'1%', width:'83%'}}
              />
              <BlockSmall>
               <Bloco>
                  <BlockIconGtr>
                    <IconGtr src={GTR} alt="" />
                  </BlockIconGtr>
                  <Content>
                    <TitleGtr>Nissan GT - R</TitleGtr>
                    <BlockStarTitle>
                      <Star src={estrela} alt="" />
                      <TitleStar>440+ Reviewer</TitleStar>
                    </BlockStarTitle>
                  </Content>
               </Bloco>
              </BlockSmall>
              <BlockTitleValue>
                <TitleValue>Subtotal</TitleValue>
                <ValueTitle>$80.00</ValueTitle>
              </BlockTitleValue>
              <BlockTitleValue>
                <TitleValue>Tax</TitleValue>
                <ValueTitle>$0</ValueTitle>
              </BlockTitleValue>
              <BlockCinza>
                <TitleCinza>Apply promo code</TitleCinza>
                <TitleBlack>Apply now</TitleBlack>
              </BlockCinza>
              <BlockRodape>
                <NotificationObjeto.header
                  TitleOne="Rental Summary"
                  TitleTwo="Overall price and includes rental discount"
                  estilo1={{marginTop:'1%', width:'100%'}}
                />
                <TituloValor>$80.00</TituloValor>
              </BlockRodape>
           </BlockLeft>
          </ContentFlex>
          <NotificationObjeto.Rodape/>
        </Block>
      </NotificationRoot>
    </Body>
  )
}
export default CorpoFour