import ContainerBlue from "./ContentBlue/ContaineBlue";
import NotificationRoot from "./Root/NotificationRoot";
import Button from "./button/Button";
import NotificationCar from "./car/NotificationCar";
import Content from "./conteiner/Content";
import Header from "./header/NotificationHeader";
import Plinth from "./plinth/Plinth";
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
}