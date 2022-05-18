import styled from "styled-components";
import { Color, FontSize, Padding } from "../styles/constants";

export const UserDetailContainerStyled = styled.div`
  background: ${Color.colorBackground};
  min-height: 100vh;
  display: flex;
  font-size: ${FontSize.small};
  flex-direction: column;
  div {
    display: flex;
    justify-content: center;
  }
`;
export const UserDetailTableStyled = styled.table`
  display: flex-root;
  flex-direction: column;
  color: ${Color.white};
  padding: ${Padding.large};
  th {
    background: black;
    padding: ${Padding.small};
    border: 1px solid ${Color.white};
  }
  td {
    border: 1px solid ${Color.white};
    padding: ${Padding.small};
    text-align: center;
  }
`;
export const PositionButtonStyled = styled.div`
  display: flex;
  justify-content: center;
`;
