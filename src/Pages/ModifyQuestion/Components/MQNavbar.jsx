import React from 'react'
import MphasisLogo from '../../../assets/mphasis-logo-trans.png';
import {Navbar, Container, Nav} from 'react-bootstrap';

function MQNavbar() {
  return (
    <div>
        <Navbar fixed="top" bg="dark" variant="dark">
            <Container>
              <Navbar.Brand href="/">
                  <img
                  alt="mphasis-logo"
                  src={MphasisLogo}
                  width="30"
                  height="30"
                  className="d-inline-block align-top"
                  />{' '}
                  ChatBot Admin
              </Navbar.Brand>
            </Container>
            <Nav>
              <Nav.Link href="/add">Add Intents</Nav.Link>
              <Nav.Link active href="/modify">Modify Intents</Nav.Link>
            </Nav>
        </Navbar>
    </div>
  )
}

export default MQNavbar