import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "./Components/Media/Sylvia logo.png";
import About from "./Components/About";
import Experience from "./Components/Experience";
import Cards from "./Components/Cards";
import Contacts from "./Components/Contacts";
import { BrowserRouter } from "react-router-dom";
import { HashLink as Link } from "react-router-hash-link";
import cv from "./Components/Media/Sylvia cv.docx";

function App() {
  return (
    <BrowserRouter>
      <div>
        <div className="header">
          <Navbar bg="light" expand="lg">
            <Container>
              <Navbar.Brand>
                <img src={logo} alt="..." />
                Sylvia Maina
              </Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                  <Link to="#About" smooth className="Link">
                    About Me.
                  </Link>
                  <Link to="#Experience" smooth className="Link">
                    Experience.
                  </Link>

                  <Link to="#Projects" smooth className="Link">
                    Projects.
                  </Link>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
          <div className="heading">
            <h2>
              Hi there, My name is Sylvia Maina and I'm a front-end developer
            </h2>
            <button>
              <a href={cv} download="Sylvia's cv" className="Link">
                Download CV
              </a>
            </button>
          </div>
        </div>
        <About />
        <Experience />
        <Cards />
        <Contacts />
      </div>
    </BrowserRouter>
  );
}

export default App;
