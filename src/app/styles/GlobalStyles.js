import { createGlobalStyle } from 'styled-components';
import theme from '../styles/theme';
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

  .input-box {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .footer {
    background-color: #d9d9d9;
  }
`;

export default GlobalStyles;
