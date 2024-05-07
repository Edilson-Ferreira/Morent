import { Bloc, BlockFlex, Body,Container, Content } from "./style"
import { NotificationObjeto } from ".."
import { useState } from "react"

function corpo(){
  const [curtido, setCurtido] = useState(false)

  return(
    <Body>
      <NotificationObjeto.Root>
       <NotificationObjeto.cabecalho 
        IconOne="../../../src/assets/search-normal.png"
        IconTwo="../../../src/assets/Profil.png"
        Input={true}
       />
        <Bloc>
          <NotificationObjeto.Car 
            titleOne="The Best Platform for Car Rental" 
            titleTwo="Ease of doing a car rental safely and reliably. Of course at a low price."
          />
          <NotificationObjeto.Car 
            titleOne="Easy way to rent a car at a low price" 
            titleTwo="Providing cheap car rental services and safe and comfortable facilities."
            button={{background:'#54A6FF'}}
            cor={{background:'#3563E9'}}
            carro="../../../src/assets/cópia de BG (1).png"
          />
        </Bloc>
        <BlockFlex>
          <NotificationObjeto.text 
            title="Pick - Up" 
            text="Locations" 
            text2="Date" 
            text3="Time"
          />
          <NotificationObjeto.ContentBlue />
          <NotificationObjeto.text 
            title="Drop - Off" 
            text="Locations" 
            text2="Date" 
            text3="Time" 
            cor={{marginLeft:'2.5%'}}
          />
        </BlockFlex>
        <Content>
        <Container>
          <NotificationObjeto.Carro 
            valores="/"
            titulo="Popular Car" 
            nome="Koenigsegg" 
            modelo="Sport" 
            litro="90L"
            pessoas="2 People"
            value="$99.00"
            filter={{marginTop: '6%'}}
            width={{marginTop: '10%'}}
            block={{marginTop: '25%'}}
          />
          <NotificationObjeto.Carro 
            valores="../../../src/assets/$100.00.png" 
            nome="Nissan GT - R" 
            modelo="Sport" 
            litro="80L"
            pessoas="2 People"
            value="$80.00"
            width={{marginTop: '16%'}}
            bloco={{paddingLeft: '1%'}}
           
            carro="../../../src/assets/car-GT.png"
            block={{marginTop: '28%'}}
            imgCss={{marginLeft:'10%'}}
            />
            <NotificationObjeto.Carro 
              valores="/"  
              nome="Rolls - Royce" 
              modelo="Sedan" 
              litro="90L"
              pessoas="4 People"
              value="$99.00"
              filter={{marginTop: '6%'}}
              width={{marginTop: '16%'}}
              bloco={{paddingLeft: '1%'}}
              carro="../../../src/assets/Car-Rolls.png"
              block={{marginTop: '28%'}}
              imgCss={{marginLeft:'8%'}}
            />
            <NotificationObjeto.Carro 
              valores="../../../src/assets/$100.00.png" 
              nome="Nissan GT - R" 
              modelo="Sport" 
              litro="80L"
              pessoas="2 People"
              value="$80.00"
              width={{marginTop: '16%'}}
              bloco={{paddingLeft: '1%'}}
             
              carro="../../../src/assets/car-GT.png"
              block={{marginTop: '29%'}}
              imgCss={{marginLeft:'10%'}}
            />
        </Container>
        <Container>
          <NotificationObjeto.Carro 
            valores="../../../src/assets/$80.00.png"
            titulo="Recomendation Car" 
            nome="All New Rush" 
            modelo="SUV" 
            litro="70L"
            pessoas="6 People"
            value="$72.00"
            width={{marginTop: '10%'}}
           
            carro="../../../src/assets/car-Rus.png"
          />
          <NotificationObjeto.Carro 
            valores="/" 
            nome="CR  - V" 
            modelo="SUV" 
            litro="80L"
            pessoas="6 People"
            value="$80.00"
            filter={{marginTop: '6%'}}
            width={{marginTop: '16%'}}
            bloco={{paddingLeft: '1%'}}
            carro="../../../src/assets/car-CR.png"
            />
            <NotificationObjeto.Carro 
              valores="/"  
              nome="All New Terios" 
              modelo="SUV" 
              litro="90L"
              pessoas="6 People"
              value="$74.00"
              filter={{marginTop: '6%'}}
              width={{marginTop: '16%'}}
              bloco={{paddingLeft: '1%'}}
              carro="../../../src/assets/Car-Terior.png"
              coracao={curtido}
              onpress={()=>setCurtido(!curtido)}
            />
            <NotificationObjeto.Carro 
              valores="/" 
              nome="CR  - V" 
              modelo="SUV" 
              litro="80L"
              pessoas="6 People"
              value="$80.00"
              filter={{marginTop: '6%'}}
              width={{marginTop: '16%'}}
              bloco={{paddingLeft: '1%'}}
              carro="../../../src/assets/car-CRV.png"
            />
        </Container>
        <Container>
          <NotificationObjeto.Carro 
            valores="../../../src/assets/$80.00.png"
            nome="MG ZX Exclusice" 
            modelo="Hatchback" 
            litro="70L"
            pessoas="4 People"
            value="$76.00"
            block={{marginTop:'15%'}}
            carro="../../../src/assets/Car-MG (3).png"
            imgCss={{marginLeft:'0'}}
          />
          <NotificationObjeto.Carro 
            valores="../../../src/assets/$80.00.png" 
            nome="CR  - V" 
            modelo="SUV" 
            litro="80L"
            pessoas="6 People"
            value="$80.00"
            bloco={{paddingLeft: '1%'}}
            block={{marginTop:'15%'}}
            carro="../../../src/assets/Car-ZS.png"
            coracao={true}
            imgCss={{marginLeft:'0'}}
            />
            <NotificationObjeto.Carro 
              valores="/"  
              nome="All New Terios" 
              modelo="SUV" 
              litro="90L"
              pessoas="6 People"
              value="$74.00"
              filter={{marginTop: '6%'}}
              bloco={{paddingLeft: '1%'}}
              block={{marginTop:'15%'}}
              carro="../../../src/assets/Car-MG (3).png"
              imgCss={{marginLeft:'0'}}
            />
            <NotificationObjeto.Carro 
              valores="/" 
              nome="CR  - V" 
              modelo="SUV" 
              litro="80L"
              pessoas="6 People"
              value="$80.00"
              filter={{marginTop: '6%'}}
              bloco={{paddingLeft: '1%'}}
              block={{marginTop:'15%'}}
              carro="../../../src/assets/Car-ZS.png"
              coracao={true}
              imgCss={{marginLeft:'0'}}
            />
        </Container>
         <NotificationObjeto.botao Title='Show more car'/>
        </Content>

        <NotificationObjeto.Rodape />      
      
      </NotificationObjeto.Root>
    </Body>
  )
}
export default corpo