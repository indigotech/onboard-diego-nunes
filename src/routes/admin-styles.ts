import styled from "styled-components";
import { Color, FontSize, Padding } from "../styles/constants";

export const AdminContainerStyled = styled.div`
  background: ${Color.colorBackground};
  padding: 24px;
`;
export const GroupButton = styled.div`
  display: flex;
  justify-content: center;
`;
export const AdminTableStyled = styled.table`
  display: flex-root;
  flex-direction: column;
  color: ${Color.white};
  th {
    background: black;
    padding: ${Padding.small};
    border: 1px solid ${Color.white};
  }
  td {
    border: 1px solid ${Color.white};
    padding: 10px;
  }
`;
export const PageNumberStyled = styled.p`
  font-size: ${FontSize.small};
  color: ${Color.white};
`;
export const ButtonSeparator = styled.div`
  width: 20px;
`;
