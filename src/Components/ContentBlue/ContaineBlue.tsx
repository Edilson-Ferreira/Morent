import img from "../../assets/Swap.png"
import { BlockBlue, IconBlockBlue } from "./style"

interface ContenteBlueProps {
  icon?: string;
}

function ContainerBlue({icon}: ContenteBlueProps){
  return(
    <BlockBlue>
      <IconBlockBlue src={icon || img} alt="" />
    </BlockBlue>
  )
}
export default ContainerBlue