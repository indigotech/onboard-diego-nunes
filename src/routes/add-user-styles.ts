import styled from "styled-components";
import { Color, Padding } from "../styles/constants";

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
