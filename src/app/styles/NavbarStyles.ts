import styled from 'styled-components';
import theme from './theme';

export const Nav = styled.nav`
    background-color: linear-gradient(90deg, ${theme.primaryColor}10%, ${theme.secondColor} 90%);
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

const NavbarStyles = {
  Nav,
  Ul,
  Li,
};

export default NavbarStyles;
