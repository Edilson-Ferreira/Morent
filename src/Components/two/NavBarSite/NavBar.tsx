import React from "react";
import { Titletype, BlockRadio, Input, Label, Strong, Container, InputRange, Block, TitlePrice, RodapeTitle } from "./style"

interface NavBarProps {
  Title?: string;
  Text?: string;
  Text2?: string;
  Price?: string;
  CSS?: React.CSSProperties;
  TitleRodapr?: React.CSSProperties;
  Top?: React.CSSProperties;
}

function NavBar({Title, Text, Text2, CSS, Price, TitleRodapr, Top}:NavBarProps){
  return(
     <Container>
        <Titletype style={CSS}>{Title}</Titletype>
        <BlockRadio>
          <Input type="checkbox" name="" id="" />
          <Label htmlFor="">{Text} <Strong>{Text2}</Strong></Label>
        </BlockRadio>
        <TitlePrice style={Top}>{Price}</TitlePrice>
        <Block style={CSS}>
          <InputRange type="range" />
        </Block>
        <RodapeTitle style={TitleRodapr}>Max. $100.00</RodapeTitle>
        
     </Container>
  )
}
export default NavBar