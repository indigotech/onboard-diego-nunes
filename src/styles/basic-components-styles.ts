import styled from "styled-components";
import { Color, Padding } from "./constants";

export const H2 = styled.h2`
  display: flex;
  justify-content: center;
  padding: 32px 10px 10px 10px;
  color: ${Color.white};
`;
export const Button = styled.button`
  padding: ${Padding.small};
  width: 70px;
  height: auto;
  border-radius: ${Padding.small};
  border: none;
`;
