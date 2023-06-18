import Link from 'next/link';
import NavbarStyles from '../styles/NavbarStyles';
import Icon from './icon';

function Navbar() {
  return (
    <NavbarStyles.Nav className='header'>
      <figure>
      <Icon fill='#fff'/>
      </figure>
      <NavbarStyles.Ul>
        <NavbarStyles.Li>
          <Link href='/'>Home</Link>
        </NavbarStyles.Li>
        <NavbarStyles.Li>
          <Link href='/'>Agenda</Link>
        </NavbarStyles.Li>
        <NavbarStyles.Li>
          <Link href='/pages/users'>Psicologos</Link>
        </NavbarStyles.Li>
        <NavbarStyles.Li>
          <Link href='/'>Meu Perfil</Link>
        </NavbarStyles.Li>
      </NavbarStyles.Ul>
    </NavbarStyles.Nav>
  );
}

export default Navbar;
