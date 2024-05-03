//import bi from "../../../src/assets/Bitcoin.png"
import payPal from "../../assets/PayPal.png"
import { BlockRadioLabe, Radio, LabelRadio, BlockImg, Img, Pagamento } from "./style"

interface PaymentProps {
  Title?: string;
  Bitcoin?: string;  
}
function Payment({Title, Bitcoin}:PaymentProps){
  return(
    <Pagamento>
      <BlockRadioLabe>
        <Radio type="radio" name="" id="" />
        <LabelRadio htmlFor="">{Title}</LabelRadio>
      </BlockRadioLabe>
      <BlockImg>
        <Img src={Bitcoin || payPal} alt="" />
      </BlockImg>
  </Pagamento>
  )
}
export default Payment