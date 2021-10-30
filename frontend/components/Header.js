import React from "react";
import { useState } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarToggler,
  Collapse,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  NavbarText,
  DropdownToggle,
  DropdownItem,
  DropdownMenu,
} from "reactstrap";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <Navbar color="dark" container="md" dark expand="md" fixed="top">
        <NavbarBrand href="/">0736b</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="me-auto" navbar>
            <NavItem>
              <NavLink href="/">Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://github.com/0736b">
                Portfolio
              </NavLink>
            </NavItem>
            <UncontrolledDropdown inNavbar nav>
              <DropdownToggle caret nav>
                Socials
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>Github</DropdownItem>
                <DropdownItem>LinkedIn</DropdownItem>
                <DropdownItem>Dev.to</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default Header;
