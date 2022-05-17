import styled from "styled-components";
import { Color, Padding } from "../styles/constants";

export const Container = styled.div`
  background: ${Color.colorBackground};
  color: ${Color.white};
  display: flex;
  min-height: 100vh;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  text-alight: center;
  label {
    display: flex;
    flex-direction: row;
    padding: ${Padding.small};
    justify-content: center;
  }
  input {
    padding: ${Padding.small};
  }
  select {
    display: flex;
    width: -webkit-fill-available;
  }
  div {
    justify-content: center;
    padding: ${Padding.small};
  }
`;
