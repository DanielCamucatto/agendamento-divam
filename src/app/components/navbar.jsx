import Link from 'next/link';
import NavbarStyles from '../styles/NavbarStyles';

function Navbar() {
  return (
    <NavbarStyles.Nav className='header'>
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
