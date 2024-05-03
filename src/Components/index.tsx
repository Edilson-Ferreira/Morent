import ContainerBlue from "./ContentBlue/ContaineBlue";
import NotificationRoot from "./Root/NotificationRoot";
import BallTitle from "./TitleBall/BallTitle";
import Button from "./button/Button";
import NotificationCar from "./car/NotificationCar";
import Content from "./conteiner/Content";
import Header from "./header/NotificationHeader";
import Cabecalho from "./headerInput/Cabecalho";
import Payment from "./payment/Payment";
import Plinth from "./plinth/Plinth";
import SelectOption from "./select/SelectOption";
import Comment from "./three/comment/Comment";
import NavBar from "./two/NavBarSite/NavBar";
import Vehicle from "./vehicle/Vehicle";

export const NotificationObjeto = {
  Root: NotificationRoot,
  cabecalho: Header,
  Car: NotificationCar,
  text: Content,
  ContentBlue: ContainerBlue,
  Carro: Vehicle,
  botao: Button,
  Rodape: Plinth,
  Nav: NavBar,
  Comment: Comment,
  header: Cabecalho,
  BolaTitulo: BallTitle,
  select: SelectOption,
  PayPay: Payment,
}