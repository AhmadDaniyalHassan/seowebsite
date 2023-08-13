import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "../assets/logo.png";
import "../App.css";
import Headline from "./Headline.jsx";

function Header() {
  
  return (
    <>
      <Headline/>
      <Navbar collapseOnSelect expand="lg" className="header-container">
        <Container>
          <Navbar.Brand href="#home">
            <img
              style={{ marginRight: "45px" }}
              width={192}
              height={49}
              src={logo}
            ></img>
          </Navbar.Brand>
          <Navbar.Toggle
            style={{ backgroundColor: "white" }}
            aria-controls="responsive-navbar-nav"
          />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto links">
              <Nav.Link className="links" href="#features">
                Home
              </Nav.Link>
              <Nav.Link className="links" href="#pricing">
                Services
              </Nav.Link>
              <Nav.Link className="links" href="#pricing">
                About Us
              </Nav.Link>
              <Nav.Link className="links" href="#pricing">
                Portfolio
              </Nav.Link>
              <Nav.Link className="links" href="#pricing">
                Blog
              </Nav.Link>
              <Nav.Link className="links" href="#pricing">
                Contact Us
              </Nav.Link>
              <button className="btn-header">Get In Touch</button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;
