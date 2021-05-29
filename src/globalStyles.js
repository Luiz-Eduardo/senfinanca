import { createGlobalStyle } from "styled-components";
import styled from "styled-components";

export const GlobalStyle = createGlobalStyle`
 * {
     box-sizing: border-box;
     margin: 0;
     padding: 0;
     font-family: 'Arial', sans-serif;
 }`;

export const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80vh;
`;
