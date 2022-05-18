import styled from "styled-components";
import { Color, FontSize, Padding } from "./styles/constants";

export const Container = styled.div`
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
  label {
    display: flex;
    flex-direction: row;
    padding: ${Padding.small};
    justify-content: center;
  }
  button {
    background: ${Color.blue};
    padding: ${Padding.small};
    font-size: ${FontSize.xSmall};
    border-radius: 10px;
    border: transparent;
    color: ${Color.white};
  }
`;
export const Error = styled.p`
  font-size: ${FontSize.medium};
`;
