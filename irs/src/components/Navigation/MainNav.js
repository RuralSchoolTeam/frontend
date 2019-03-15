import React from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';

class MainNav extends React.Component {
  constructor() {
    super();
    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState(prevState => ({ isOpen: !prevState.isOpen }));
  }

  clearAuth() {
    localStorage.removeItem('token');
    localStorage.removeItem('authLevel');
  }

  render() {
    return (
      <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">International Rural School</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              {!localStorage.getItem('token') ? (
                <>
                  <NavItem>
                    <NavLink>
                      <Link to="/login">Login</Link>
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink>
                      <Link to="/register">Register</Link>
                    </NavLink>
                  </NavItem>
                </>
              ) : (
                <NavLink onClick={this.clearAuth}>
                  <Link to="/login">Logout</Link>
                </NavLink>
              )}
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

export default MainNav;
