import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LogoutIcon from "@mui/icons-material/Logout";
import { Link } from "react-router-dom";
import "./NavBar.css";

const NavBar = ({ user, handleLogout }) => {
  return (
    <>
      {user ? (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Container>
            <Navbar.Brand href="/">EriBooks</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="/home">Home</Nav.Link>
                <Nav.Link href="/books">Books</Nav.Link>
                <Nav.Link href="/add-books">Add Books</Nav.Link>
                <Nav.Link href="/add-posts">Add Posts</Nav.Link>
                <Nav.Link href="/members">Members</Nav.Link>
                <NavDropdown title="About" id="collasible-nav-dropdown">
                  <NavDropdown.Item href="/about-us">About Us</NavDropdown.Item>
                  <NavDropdown.Item href="/contact-us">
                    Contact Us
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
              <Nav>
                <Nav.Link href="/profile">Welcome,{user.name}</Nav.Link>
                <Nav.Link href="#deets">
                  <Link to="" onClick={handleLogout}>
                    <LogoutIcon />
                  </Link>
                </Nav.Link>
                <Nav.Link href="">
                  <DarkModeIcon />
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      ) : (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Container>
            <Navbar.Brand href="/">EriBooks</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto"> </Nav>
              <Nav>
                <Nav.Link>
                  <Link to="/login">Log In</Link>
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      )}
    </>
  );
};

export default NavBar;
