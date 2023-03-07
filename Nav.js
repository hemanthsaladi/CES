import React from "react";
import { Navbar,Nav,NavDropdown,Container} from "react-bootstrap";
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0" />
function Navb() {
  return (

<Navbar bg="dark" expand="lg" color="white" shadow-dark p-2 mb-3>
      <Container>
      <span class="material-symbols-outlined">

</span>
        <Navbar.Brand id="n0" href="/home">CES</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
       
          <Nav className="me-auto">
          <Nav.Link id='n1' href="/Professors">Professors</Nav.Link>
          <Nav.Link id='n3' href="/Team">Team</Nav.Link>
          <Nav.Link id='n2' href="https://alumnitdgp.in/">Alumni</Nav.Link>
          
          <NavDropdown title="Placements" id="basic-nav-dropdown">
              <NavDropdown.Item href="https://nitdgp.ac.in/uploads/userfiles/files/UG_PLACEMENT%20RECORDS_2021.pdf">Placements Stats</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="https://nitdgp.ac.in/p/placement">Career Development Cell</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="https://nitdgp.ac.in/uploads/userfiles/images/CV%20Format%20for%20UG.pdf">CV Format</NavDropdown.Item>
            </NavDropdown>

          
            <NavDropdown title="Syllabus" id="basic-nav-dropdown">
              <NavDropdown.Item href="https://nitdgp.ac.in/uploads/userfiles/files/B_%20Tech@CE%20Syllabus%20with%20CO+PO%20wef%202017-18.pdf">Syllabus</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/Sem">Sem 3</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/Sem">Sem 4</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/Sem">Sem 5</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/Sem">Sem 6</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/Sem">Sem 7</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/Sem">Sem 8</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="EVents" id="basic-nav-dropdown">
              <NavDropdown.Item href="https://youtu.be/A-h_3HHN8E0">Teachers day</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link id='n4' href="/Contact">Contact</Nav.Link>
          </Nav>
       
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navb;