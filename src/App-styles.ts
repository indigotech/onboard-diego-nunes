import styled from "styled-components";
import { Color, FontSize, Padding } from "./styles/constants";

export const Wrapper = styled.div`
  background: ${Color.colorBackground};
  color: ${Color.white};
  justify-content: center;
  text-align: center;
  min-height: 100vh;
  display: flex;
  font-size: ${FontSize.small};
  img {
    padding: ${Padding.small};
  }
`;
export const ButtonLoginStyled = styled.button`
  background: ${Color.blue};
  padding: ${Padding.small};
  font-size: ${FontSize.small};
  border-radius: 10px;
  border: transparent;
  color: ${Color.white};
  &:hover {
    color: ${Color.white};
    background-color: blue;
    cursor: pointer;
  }
`;
