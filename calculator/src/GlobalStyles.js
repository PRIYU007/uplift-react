import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
*{
  margin:0;
  box-sizing:border-box;
  padding:0;
}
body{
  display:flex;
  justify-content:center;
  align-items:center;
}

`;
export default GlobalStyle;
