import React from "react";
import Link from 'next/link';
import {APP_NAME} from "../config";
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
      <Navbar color="dark" container="md" dark expand="md">
        <Link href="/">
        <NavbarBrand className="font-weight-bold">{APP_NAME}</NavbarBrand>
        </Link>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="me-auto" navbar>
            <NavItem>
                <Link href="/signin">
                <NavLink>
                  Sign In
                 </NavLink>
                  </Link>
            </NavItem>
            <NavItem>
              <Link href="/signup">
              <NavLink>
                Sign Up
              </NavLink>
              </Link>
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
