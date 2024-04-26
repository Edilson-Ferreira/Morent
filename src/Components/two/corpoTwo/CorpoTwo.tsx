
import { NotificationObjeto } from "../.."
import { Block, BlockNavBar, BlockPai, BlockSegundario, Body, Container, Content, Three, Two } from "../corpoTwo/style"

function CorpoTwo(){
  return(
    <Body>
     <NotificationObjeto.Root>
      <NotificationObjeto.cabecalho />
       
      <Block>
        <BlockPai>
        <BlockNavBar>
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
        </BlockNavBar>

          <BlockSegundario>
            <Content>
              <Two>
                <NotificationObjeto.text 
                  title="Pick - Up"  
                  text="Locations" 
                  text2="Date" 
                  text3="Time"
                  cor={{position: "relative", width:'42.2%'}}
                  estilo={{gap:'5%'}}
                  Blocos={{width: '25%'}}
                />
                <NotificationObjeto.ContentBlue estilo={{marginLeft: '38.3%', marginTop:'4%',position:"absolute"}}/>
                <NotificationObjeto.text 
                  title="Drop - Off" 
                  text="Locations" 
                  text2="Date" 
                  text3="Time"
                  cor={{marginLeft: '5%', width:'42.2%'}}
                  estilo={{gap:'5%'}}
                  Blocos={{width: '30%'}}
                  width={{width:'100%'}}
                  Cor={{width:'100%'}}
                />
              </Two>
              <Three>
              <Container>
                <NotificationObjeto.Carro
                    nome="Koenigsegg"
                    modelo="Sport"
                    width={{width: '87%',height:'50vh'}}
                    imgCss={{marginLeft:'9%'}}
                    block={{gap:'12%', marginTop:'25.5%'}}
                    value="$99.00"
                    valores="/"
                    litro="90L"
                    pessoas="2 People"
                  />
                  <NotificationObjeto.Carro
                    nome="Nissan GT - R"
                    modelo="Sport"
                    width={{width:'87%',height:'50vh'}}
                    carro="../../../src/assets/car-GT.png"
                    imgCss={{marginLeft:'13%'}}
                    block={{gap:'12%',marginTop:'28%'}}
                    value="$80.00"
                    litro="80L"
                    pessoas="2 People"
                  />
                  <NotificationObjeto.Carro
                    nome="Rolls-Royce"
                    modelo="Sport"
                    width={{width:'87%',height:'50vh'}}
                    carro="../../../src/assets/Car-Rolls.png"
                    imgCss={{marginLeft:'11%'}}
                    block={{gap:'12%',marginTop:'25.5%'}}
                    value="$70.00"
                    valores="/"
                    litro="70L"
                    pessoas="4 People"
                  />
              </Container>
              <Container>
                <NotificationObjeto.Carro
                    nome="All New Rush"
                    modelo="SUV"
                    width={{width: '87%', height:'50vh'}}
                    imgCss={{marginLeft:'9%'}}
                    block={{gap:'12%'}}
                    value="$72.00"
                    valores="../../../src/assets/$80.00.png"
                    litro="70L"
                    pessoas="6 People"
                    carro="./../../src/assets/Car-Rus.png"
                  />
                  <NotificationObjeto.Carro
                    nome="CR  - V"
                    modelo="SUV"
                    width={{width:'87%', height:'50vh'}}
                    carro="../../../src/assets/Car-CRV.png"
                    imgCss={{marginLeft:'6.5%'}}
                    block={{gap:'12%'}}
                    value="$80.00"
                    litro="80L"
                    pessoas="6 People"
                    valores="/"
                  />
                  <NotificationObjeto.Carro
                    nome="All New Terios"
                    modelo="SUV"
                    width={{width:'87%', height:'50vh'}}
                    carro="../../../src/assets/Car-Terior.png"
                    imgCss={{marginLeft:'11%'}}
                    block={{gap:'12%'}}
                    value="$74.00"
                    valores="/"
                    litro="74L"
                    pessoas="6 People"
                  />
              </Container>
              <Container>
                <NotificationObjeto.Carro
                    nome="MG ZX Exclusice"
                    modelo="Hatchback"
                    width={{width: '87%', height:'50vh'}}
                    block={{gap:'12%'}}
                    value="$76.00"
                    valores="../../../src/assets/$80.00.png"
                    litro="70L"
                    pessoas="4 People"
                    carro="../../../src/assets/Car-MG (3).png"
                  />
                  <NotificationObjeto.Carro
                    nome="New MG ZS"
                    modelo="SUV"
                    width={{width:'87%', height:'50vh'}}
                    carro="../../../src/assets/Car-ZS.png"
                    imgCss={{marginLeft:'0'}}
                    block={{gap:'12%'}}
                    value="$80.00"
                    litro="80L"
                    pessoas="6 People"
                    valores="/"
                  />
                  <NotificationObjeto.Carro
                    nome="MG ZX Excite"
                    modelo="Hatchback"
                    width={{width:'87%', height:'50vh'}}
                    carro="../../../src/assets/Car-MG (3).png"
                    block={{gap:'12%'}}
                    value="$74.00"
                    valores="/"
                    litro="90L"
                    pessoas="4 People"
                  />
              </Container>
              <NotificationObjeto.botao />
              </Three>
            </Content>
          </BlockSegundario>
        </BlockPai>
        <NotificationObjeto.Rodape />
      </Block>
     </NotificationObjeto.Root>
    </Body>
  )
}
export default CorpoTwo