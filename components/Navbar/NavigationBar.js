import React from "react";
import Container from "react-bootstrap/Container";
import "bootstrap/dist/css/bootstrap.min.css";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import styles from "./NavigationBar.module.css";

export const NavigationBar = () => {
  return (
    <>
      <Navbar
        sticky="top"
        className={styles.navParent}
        bg="transparent"
        variant="dark"
      >
        <Container>
          {/* <Navbar.Brand href="#home">Navbar</Navbar.Brand> */}
          <Nav className="me-auto">
            <Nav.Link className={styles.link_nav} href="#home">
              Home
            </Nav.Link>
            <Nav.Link className={styles.link_nav} href="#features">
              Information
            </Nav.Link>
            <Nav.Link className={styles.link_nav} href="#pricing">
              Virtual Tour
            </Nav.Link>
            <Nav.Link className={styles.link_nav} href="#pricing">
              About
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};
