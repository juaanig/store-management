import { useContext } from "react";

import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import LogoutButton from "../Buttons/LogOut";
import AuthContext from "../../contexts/authContext/AuthContext";
import ThemeButton from "../Buttons/ThemeButton";

import Dropdown from "react-bootstrap/Dropdown";
import ThemeContext from "../../contexts/ThemeContext/ThemeContext";

const NavLayout = () => {
  const { user } = useContext(AuthContext);
  const {theme} =useContext(ThemeContext)

  return (
    <>
      <Navbar className="p-2" expand="lg" bg="primary" variant="primary">
        <Navbar.Brand className={`h1 text-${theme === "light theme" ? "dark" : "light"}`}>
          STORE MANAGMENT
        </Navbar.Brand>
        <Nav className="ms-auto">

          <Dropdown>

            <Dropdown.Toggle className="me-5" variant="success" id="dropdown-basic">
              OPCIONES
            </Dropdown.Toggle>

            <Dropdown.Menu variant={theme}>

              <Dropdown.Item key="action-1">
                <ThemeButton />
              </Dropdown.Item> 

              <Dropdown.Item key="action-2">
                {user && <LogoutButton />}
              </Dropdown.Item>

            </Dropdown.Menu>
          </Dropdown>
          
          
        </Nav>
      </Navbar>
    </>
  );
};

export default NavLayout;