import styled from "styled-components";
import { Color, Padding } from "./constants";

export const H2 = styled.h2`
  display: flex;
  justify-content: center;
  padding: ${Padding.medium} ${Padding.small} ${Padding.small} ${Padding.small};
  color: ${Color.white};
`;
export const ButtonStyled = styled.button`
  padding: ${Padding.small};
  width: 70px;
  height: auto;
  border-radius: ${Padding.small};
  border: none;
  &:hover {
    background-color: ${Color.hover};
    cursor: pointer;
  }
`;
