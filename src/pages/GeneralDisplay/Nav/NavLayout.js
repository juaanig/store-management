import { useContext } from 'react';

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import LogoutButton from '../Buttons/LogOut';
import AuthContext from "../../../contexts/authContext/authContext";

const NavLayout = () => {
  const {info} = useContext(AuthContext)
  return (
    <>

      <Navbar className="p-2" expand="lg"  bg="primary" variant="primary">
        <Navbar.Brand href="#home" >STORE MANAGMENT</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="#home">---</Nav.Link>
          <Nav.Link href="#features">----</Nav.Link>
          {info.status && <LogoutButton/>}
        </Nav>
      </Navbar>

    </>
  )
}

export default NavLayout;