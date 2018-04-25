import React, { Component } from "react";
import { Link } from "react-router-dom";
import {
  Container,
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from "reactstrap";

export default class Header extends Component {
  render() {
    return (
      <header className="header">
        <Navbar className="header__navbar" expand="xl">
          <Container>
            <NavbarBrand tag={Link} to="/" className="header__brand">
              <span className="header__wlogo">To-do list</span>
            </NavbarBrand>
          </Container>
        </Navbar>
      </header>
    );
  }
}
