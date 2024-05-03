import { BlockBallTitle, BlockBall, Ball, TitleBall } from "./style"
import ball from "../../assets/mark.png"

interface BallTitleProps {
  Title?: string;
  font?: React.CSSProperties;
}

function BallTitle({Title, font}:BallTitleProps){
  return(
    <BlockBallTitle style={font}>
      <BlockBall>
        <Ball src={ball} alt="" />
      </BlockBall>
      <TitleBall>{Title}</TitleBall>
    </BlockBallTitle>
  )
}
export default BallTitle