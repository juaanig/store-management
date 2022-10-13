

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const NavLayout = () => {
  return (
    <>

      <Navbar className="p-2" expand="lg"  bg="primary" variant="primary">
        <Navbar.Brand href="#home" >STORE MANAGMENT</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="#home">---</Nav.Link>
          <Nav.Link href="#features">----</Nav.Link>
          <Nav.Link href="#pricing"></Nav.Link>
        </Nav>
      </Navbar>

    </>
  )
}

export default NavLayout;