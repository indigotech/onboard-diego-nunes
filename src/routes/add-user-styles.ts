import styled from "styled-components";
import { Color, FontSize, Padding } from "../styles/constants";

export const AddUserContainerStyled = styled.div`
  background: ${Color.colorBackground};
  color: ${Color.white};
  display: flex;
  min-height: 100vh;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;
export const InputFormStyled = styled.div`
  display: flex;
  flex-direction: column;
  padding: ${Padding.small};
  justify-content: center;
`;
export const AddUserGroupButton = styled.div`
  justify-content: center;
  display: flex;
  padding: ${Padding.small};
`;
export const ErrorFormStyled = styled.p`
  font-size: ${FontSize.xSmall};
  color: ${Color.error};
  width: 100px;
  height: auto;
  margin: auto;
  padding: ${Padding.small};
`;
