import styled from "styled-components";
import { Color, FontSize, Padding } from "../styles/constants";

export const Container = styled.div`
  background: ${Color.colorBackground};
  padding: 24px;
  h2 {
    display: flex;
    justify-content: center;
    padding: 32px 10px 10px 10px;
  }
  h2 {
    color: ${Color.white};
  }
  table {
    display: flex-root;
    flex-direction: column;
    color: ${Color.white};
  }
  th {
    background: black;
    padding: ${Padding.small};
    border: 1px solid ${Color.white};
  }
  td {
    border: 1px solid ${Color.white};
    padding: 10px;
  }
  div {
    display: flex;
    justify-content: center;
  }
  p {
    font-size: ${FontSize.small};
    color: ${Color.white};
  }
  button {
    border-radius: 10px;
    border: transparent;
  }
`;
export const ButtonSeparator = styled.div`
  width: 20px;
`;
