import styled from 'styled-components';
import theme from './theme';

export const Button = styled.button`
  padding: 10px 20px;
  background: linear-gradient(45deg, ${theme.tertiaryColor} 18%, ${theme.varFourColor} 58%);
  border: none;
  border-radius: 4px;
  color: ${theme.colorWhite};
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    background: linear-gradient(45deg, ${theme.varFourColor} 18%, ${theme.tertiaryColor} 58%);
  }
`;
