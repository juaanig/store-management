

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const NavLayout = () => {
  return (
    <>

      <Navbar className="p-2" expand="lg"  bg="primary" variant="primary">
        <Navbar.Brand href="#home" >Navbar</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#features">Features</Nav.Link>
          <Nav.Link href="#pricing">Pricing</Nav.Link>
        </Nav>
      </Navbar>

    </>
  )
}

export default NavLayout;