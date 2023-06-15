import styled from 'styled-components';
import theme from './theme';

export const InputContainer = styled.div`
  width: 30%
`;

export const Input = styled.input`
  padding: 10px;
  border: 1px solid ${theme.primaryColor};
  border-radius: 4px;
  width: 90%
`;
