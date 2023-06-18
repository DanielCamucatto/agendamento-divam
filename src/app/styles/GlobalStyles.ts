import { createGlobalStyle } from 'styled-components';
import theme from './theme';
import Navbar from '../components/navbar';

const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: "Helvetica Neue", Georama, sans-serif
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

  .footer {
    background-color: #d9d9d9;
  }
`;

export default GlobalStyles;
