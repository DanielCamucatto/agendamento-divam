import { createGlobalStyle } from 'styled-components';
import theme from './theme';

const GlobalStyles = createGlobalStyle`

  *::-webkit-scrollbar {
    width: 10px;
  } 

  *::-webkit-scrollbar-track{
    background: ${theme.colorWhite};
    width: 10px;
    border: 2px solid ${theme.colorWhite}; 
  }

  *::-webkit-scrollbar-thumb {
    background: linear-gradient(to bottom, ${theme.primaryColor}, ${theme.secondColor}, ${theme.varFourColor});
    border: 1px solid #f1f1f1;
    border-radius: 30px
  }

  body {
    margin: 0;
    padding: 0;
    font-family: "Helvetica Neue", Georama, sans-serif;
    display: grid;
    grid-template-rows: 1fr 3fr 1fr;
    height: 100vh
  }

  .content-wrapper{
    padding-bottom: 2.5rem;
  }

  .grid-container {
    display: grid;
    grid-template-rows: calc(10% - 10px) calc(80% - 10px) calc(10% - 10px);
    grid-gap: 10px;
    height: 100vh;
  }

  .header {
    background: linear-gradient( 90deg, ${theme.primaryColor}10%, ${theme.secondColor} 90%);
    padding: 20px 0;
  }

  .main {
    background-color: #e6e6e6;
  }

  .footer {

  }

  .main-title {
    font-size: 3rem;
    font-weight:bold;
    padding: 2rem;
    background-image: linear-gradient(to bottom, ${theme.primaryColor}, ${theme.secondColor}, ${theme.varFourColor});
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    color: black;
    text-transform:uppercase;
  }

  .invalid-input{
    color: ${theme.dangerColor};
    font-size: 12px;
    font-weight:bold;
    margin: 0 auto;
    display: block;
    width: 38%;
  }

  .input-box {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .accept {
    color: ${theme.colorAccept}
  }

  .decline {
    color: ${theme.dangerColor}
  }

  .text-color-primary {
    color: ${theme.primaryColor};
    font-weight: bold;
  }

`;

export default GlobalStyles;
