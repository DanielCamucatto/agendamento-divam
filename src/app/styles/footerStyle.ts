import styled from 'styled-components';
import theme from './theme';

export const FooterNav = styled.footer`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${theme.colorBlack};
    padding: 20px 0;
`;

export const Ul = styled.ul`
  list-style: none;
  display: flex;
  justify-content: center;
  align-items:center;
  gap: 10px;
`;

export const Li = styled.li`
  a {
    text-decoration: none;
    color: ${theme.colorWhite};
    padding: 5px;
    border-radius: 5px;

    &:hover {
      color:${theme.colorGrey};
    }
  }
`;

const FooterStyles = {
  FooterNav,
  Ul,
  Li,
};

export default FooterStyles;