import styled from "styled-components";

export const Block = styled.div`
  display: flex;
`
export const Content = styled.div`
 position: relative;
`

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  margin-left: 2.5%;
  margin-top: 2%;
  gap: 20px;
`

export const TitleOne = styled.p`
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-weight: 600;
  font-size: 32px;
  line-height: 48px;
  color: #FFFFFF;
  width: 58%;
`
export const TitleTwo = styled.p`
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-weight: 500;
  font-size: 16px;
  color: #FFFFFF;
  width: 53%;
`
export const Button = styled.button`
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-weight: 600;
  font-size: 16px;
  width: 120px;
  height: 44px;
  border-radius: 4px;
  border: none;
  background: #3563E9;
  color: #ffffff;
`
export const Car = styled.img`
  background: #54A6FF;
  border-radius: 10px;
`