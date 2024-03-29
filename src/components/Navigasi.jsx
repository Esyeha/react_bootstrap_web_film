import { Navbar, Container, Nav } from "react-bootstrap"

const Navigasi = () => {
    return (
      <div>
        <Navbar variant="dark">
          <Container>
            <Navbar.Brand className="fw-bold" href="/">SYHFILMS</Navbar.Brand>
            <Nav>
              <Nav.Link href="#trending">TRENDING</Nav.Link>
              <Nav.Link href="#superhero">SUPERHERO</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
      </div>
    )
}

export default Navigasi