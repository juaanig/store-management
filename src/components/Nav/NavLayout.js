import { useContext } from 'react';

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import LogoutButton from '../Buttons/LogOut';
import AuthContext from "../../contexts/authContext/AuthContext";
import ThemeButton from '../Buttons/ThemeButton';

const NavLayout = () => {

  const {user} = useContext(AuthContext)
  
  return (
    <>
      <Navbar className="p-2" expand="lg"  bg="primary" variant="primary">
        <Navbar.Brand href="#home" className='h1'>STORE MANAGMENT</Navbar.Brand>
        <Nav className="ms-auto">
          <ThemeButton/>
          {user && <LogoutButton/>}
        </Nav>
      </Navbar>
    </>
  )
}

export default NavLayout;