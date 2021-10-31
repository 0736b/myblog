import React from "react";
import Router from "next/router";
import Link from 'next/link';
import {APP_NAME} from "../config";
import { useState } from "react";
import {signout, isAuth} from '../actions/auth';
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
        <NavbarBrand className="fw-bolder">{APP_NAME}</NavbarBrand>
        </Link>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav navbar>
            {!isAuth() && <>
              <NavItem>
                <Link href="/signin">
                <NavLink style={{cursor: 'pointer'}} className="fw-lighter">
                  Sign In
                 </NavLink>
                  </Link>
            </NavItem>
            <NavItem>
              <Link href="/signup">
              <NavLink style={{cursor: 'pointer'}} className="fw-lighter">
                Sign Up
              </NavLink>
              </Link>
            </NavItem>
             </>}

            {/* Check user login */}
            {isAuth() && (
                          <NavItem>
                          <NavLink style={{cursor: 'pointer'}} onClick={() => signout(() => Router.replace(`/signin`))} className="fw-lighter">
                            Signout
                          </NavLink>
                        </NavItem>
            )}

            <UncontrolledDropdown inNavbar nav>
              <DropdownToggle nav className="fw-lighter">
                Socials
              </DropdownToggle>
              <DropdownMenu end>
                <DropdownItem className="fw-lighter">Github</DropdownItem>
                <DropdownItem className="fw-lighter">LinkedIn</DropdownItem>
                <DropdownItem className="fw-lighter">Dev.to</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default Header;
