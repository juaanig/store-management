import { useContext } from 'react';

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import LogoutButton from '../Buttons/LogOut';
import AuthContext from "../../contexts/authContext/authContext";

const NavLayout = () => {
  const {info} = useContext(AuthContext)
  let logUser = localStorage.getItem("USER")
  return (
    <>

      <Navbar className="p-2" expand="lg"  bg="primary" variant="primary">
        <Navbar.Brand href="#home" >STORE MANAGMENT</Navbar.Brand>
        <Nav className="ms-auto">
          <Nav.Link href="#home">---</Nav.Link>
          <Nav.Link href="#features">----</Nav.Link>
          {info.status||logUser ? <LogoutButton/> : <p>----</p>}
        </Nav>
      </Navbar>

    </>
  )
}

export default NavLayout;