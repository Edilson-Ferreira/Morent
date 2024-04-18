import Searh from "../../assets/search-normal.png"
import Filter from "../../assets/filter.png"
import Logo from "../../assets/Logo.png"
import Like from "../../assets/Like.png"
import Notification from "../../assets/Notification.png"
import Settings from "../../assets/Settings.png"
import Profil from "../../assets/Profil.png"
import { Block, BlockHeader, BlockInputIcon, BlockLogo, BlockOne, BlockRound, BlockTwo, IconFilter, IconLike, IconLogo, IconNotification, IconProfil, IconSearh, IconSetings, InputSearh } from "./style"


function NotificationHeader(){
  return(
    <BlockHeader>
          <Block>   
            <BlockOne>
              <BlockLogo> 
                <IconLogo src={Logo} alt="" />
              </BlockLogo>
              <BlockRound>
                <BlockInputIcon>
                  <IconSearh src={Searh} alt="" />
                  <InputSearh type="text" style={{width:'74%', height:'44px'}}/>
                </BlockInputIcon>
                  <IconFilter src={Filter} alt="" />
              </BlockRound>
            </BlockOne>

            <BlockTwo>
              <IconLike src={Like} alt="" />
              <IconNotification src={Notification} alt="" />
              <IconSetings src={Settings} alt="" />
              <IconProfil src={Profil} alt="" />
            </BlockTwo>
          </Block>
        </BlockHeader>
  )
}
export default NotificationHeader