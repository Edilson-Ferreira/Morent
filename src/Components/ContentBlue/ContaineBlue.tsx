import img from "../../assets/Swap.png"
import { BlockBlue, IconBlockBlue } from "./style"

interface ContenteBlueProps {
  icon?: string;
  estilo?:React.CSSProperties;
}

function ContainerBlue({icon, estilo}: ContenteBlueProps){
  return(
    <BlockBlue style={estilo} >
      <IconBlockBlue src={icon || img} alt="" />
    </BlockBlue>
  )
}
export default ContainerBlue