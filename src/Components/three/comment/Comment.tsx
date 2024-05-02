import perfil from "../../../../src/assets/Profill (3).png"
import star from "../../../../src/assets/Review Star.png"
import { BlockProfile, Profile, BlockIconProfile, ImgProfile, BlockProfiloTitles, TitleProfileDark, TitleProfileClear, BlocoStar, TitleStar, IconStar, TextBlock, Texto, Set } from "./style"

interface CommintProps {
  TitleOne?: string;
  TitleTwo?: string;
  Text?: string;
  TextTwo?:string;
  Person?:string;
}

function Comment({TitleOne, TitleTwo, Text,TextTwo, Person}: CommintProps){
  return(
    <BlockProfile>
      <Set>
      <Profile>
        <BlockIconProfile>
          <ImgProfile src={Person || perfil} alt="" />
        </BlockIconProfile>
        <BlockProfiloTitles>
          <TitleProfileDark>{TitleOne}</TitleProfileDark>
          <TitleProfileClear>{TitleTwo}</TitleProfileClear>
        </BlockProfiloTitles>
        </Profile>
      <BlocoStar>
        <TitleStar>21 July 2022</TitleStar>
        <IconStar src={star} alt="" />
      </BlocoStar>
      </Set>
      <TextBlock>
      <Texto>
        {Text}
      </Texto>
      <Texto>
        {TextTwo}
      </Texto>
      </TextBlock>
   </BlockProfile>
  )
}
export default Comment