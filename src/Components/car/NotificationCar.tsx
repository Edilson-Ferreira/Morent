import Carro from "../../assets/BG (1).png"
import { Block, Button, Car, Container, Content, TitleOne, TitleTwo } from "./style"

interface NotificationProps {
  titleOne: string;
  titleTwo: string;
  button?: React.CSSProperties;
  cor?: React.CSSProperties; 
  carro?: string;
}


function NotificationCar({titleOne, titleTwo, button, cor, carro}: NotificationProps){
  return(
    <Block>
      <Content>
        <Container>
          <TitleOne>{titleOne}</TitleOne>
          <TitleTwo>{titleTwo}</TitleTwo>
          <Button style={button} type="submit">Rental Car</Button>
        </Container>
        <Car src={carro || Carro} alt="" style={cor} />
      </Content>
    </Block>
  )
}
export default NotificationCar