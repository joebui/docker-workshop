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

import ComponentAuthorization from "Pages/ComponentAuthorization.jsx";
import { Admin } from "../utils/constants";

export default class Header extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = { collapsed: false };
  }

  toggle() {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }

  render() {
    return (
      <header className="header">
        <Navbar className="header__navbar" expand="xl">
          <Container>
            <NavbarBrand tag={Link} to="/" className="header__brand">
              <span className="header__wlogo">To-do list</span>
            </NavbarBrand>
            <NavbarToggler onClick={this.toggle} className="header__toggle" />
            <Collapse isOpen={this.state.collapsed} navbar>
              <Nav className="header__nav ml-auto">
                {localStorage.auth_username ? (
                  <NavItem className="header__navItem">
                    <NavLink className="header__navLink" tag={Link} to="#">
                      {`Welcome, ${localStorage.auth_username}`}
                    </NavLink>
                  </NavItem>
                ) : null}
                {ComponentAuthorization(Admin)(
                  <NavItem className="header__navItem">
                    <NavLink
                      className="header__navLink"
                      tag={Link}
                      to="/admin/projects"
                    >
                      Projects
                    </NavLink>
                  </NavItem>
                )}
                <NavItem className="header__navItem">
                  {localStorage.auth_token ? (
                    <NavLink
                      className="header__navLink"
                      tag={Link}
                      to="#"
                      onClick={() => this.logout()}
                    >
                      Logout
                    </NavLink>
                  ) : (
                    <NavLink
                      className="header__navLink"
                      tag={Link}
                      to="/signin"
                    >
                      Sign In
                    </NavLink>
                  )}
                </NavItem>
              </Nav>
            </Collapse>
          </Container>
        </Navbar>
      </header>
    );
  }

  logout() {
    localStorage.removeItem("auth_token");
    localStorage.removeItem("auth_role");
    localStorage.removeItem("auth_username");
  }
}
