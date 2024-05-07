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
  icon?: string;
  filter?: React.CSSProperties;
  filter2?: React.CSSProperties;
  filter3?: React.CSSProperties;
}

function NavBar({Title, Text, Text2, CSS, Price, TitleRodapr, Top, icon, filter, filter2, filter3 }:NavBarProps){
  return(
     <Container style={filter3}>
        <Titletype style={CSS}>{Title}</Titletype>
        <BlockRadio style={filter}>
          {icon ? <img src={icon} alt="Icon" /> : <Input type="checkbox" name="" id="" />}
          <Label htmlFor="">{Text} <Strong style={filter2} >{Text2}</Strong></Label>
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