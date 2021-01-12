import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box
}
body {
    padding: 0; 
    margin: 0; 
    ${
      '' /* background: no-repeat url(./paul-gilmore-KT3WlrL_bsg-unsplash.jpg); */
    }
    background: no-repeat url(./sebastian-unrau-sp-p7uut0tw-unsplash.jpg);
    background-size: cover;
}


`;
export default GlobalStyle;
