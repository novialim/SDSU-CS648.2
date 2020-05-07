import React from 'react'
import { Navbar, Nav, NavItem, Grid } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

function Navigation() {
  const head = 'My Company Inventory'
  return (
    <Navbar fluid>
      <Navbar.Header>
        <Navbar.Brand>{head}</Navbar.Brand>
      </Navbar.Header>
      <Nav>
        <LinkContainer exact to="/products">
          <NavItem>Products</NavItem>
        </LinkContainer>
      </Nav>
    </Navbar>
  )
}

export default Navigation