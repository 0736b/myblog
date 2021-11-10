import React from "react";
import Router from "next/router";
import Link from "next/link";
import NProgress from "nprogress"; // Progression loading bar
import { APP_NAME } from "../config";
import { useState } from "react";
import { signout, isAuth } from "../actions/auth";
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

import ".././node_modules/nprogress/nprogress.css";
// import Search from './blog/Search';

// NProgress
Router.onRouteChangeStart = (url) => NProgress.start();
Router.onRouteChangeComplete = (url) => NProgress.done();
Router.onRouteChangeError = (url) => NProgress.done();

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    // <div className="container-fluid">
    <>
      <Navbar color="black" container="md" dark expand="md">
        <Link href="/">
          <NavbarBrand className="fw-bolder">{APP_NAME}</NavbarBrand>
        </Link>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav navbar>
            <>
              <NavItem>
                <Link href="/blogs">
                  <NavLink style={{ cursor: "pointer" }} className="fw-lighter">
                    Blogs
                  </NavLink>
                </Link>
              </NavItem>
            </>

            {!isAuth() && (
              <>
                <NavItem>
                  <Link href="/signin">
                    <NavLink
                      style={{ cursor: "pointer" }}
                      className="fw-lighter"
                    >
                      Sign In
                    </NavLink>
                  </Link>
                </NavItem>
                <NavItem>
                  <Link href="/signup">
                    <NavLink
                      style={{ cursor: "pointer" }}
                      className="fw-lighter"
                    >
                      Sign Up
                    </NavLink>
                  </Link>
                </NavItem>
              </>
            )}

            {/* Admin Dashboard */}
            {isAuth() && isAuth().role === 1 && (
              <NavItem>
                <NavLink
                  style={{ cursor: "pointer" }}
                  onClick={() => Router.replace(`/admin`)}
                  className="fw-lighter"
                >
                  {`${isAuth().name}'s Dashboard`}
                </NavLink>
              </NavItem>
            )}

            {/* User Dashboard */}
            {isAuth() && isAuth().role !== 1 && (
              <NavItem>
                <NavLink
                  style={{ cursor: "pointer" }}
                  onClick={() => Router.replace(`/user`)}
                  className="fw-lighter"
                >
                  {`${isAuth().name}'s Dashboard`}
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

            {/* Check user login */}
            {isAuth() && (
              <NavItem>
                <NavLink
                  style={{ cursor: "pointer" }}
                  onClick={() => signout(() => Router.replace(`/signin`))}
                  className="fw-lighter"
                >
                  Signout
                </NavLink>
              </NavItem>
            )}

            <NavItem>
              <Link href="/user/crud/blog">
                <NavLink style={{ cursor: "pointer" }} className="fw-lighter btn btn-primary">
                  Write a blog
                </NavLink>
              </Link>
            </NavItem>

          </Nav>
        </Collapse>
      </Navbar>
      {/* <Search/> */}
      {/* </div> */}
    </>
  );
};

export default Header;
