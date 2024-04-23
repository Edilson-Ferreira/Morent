import { NotificationObjeto } from ".."
import { Body } from "../corpo/style"
import NotificationHeader from "../header/NotificationHeader"


function CorpoTwo(){
  return(
    <Body>
      <NotificationObjeto.Root>
        <NotificationHeader />
      </NotificationObjeto.Root>
    </Body>
  )
}
export default CorpoTwo