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
        <Navbar color="dark" dark expand="md" className="navbar">
          <Container>
            <NavbarBrand href="/">To-do list</NavbarBrand>
          </Container>
        </Navbar>
      </header>
    );
  }
}
