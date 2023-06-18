import React, { useState, useEffect } from "react";
import {
  Container,
  Nav,
  NavDropdown,
  Navbar,
  Form,
  Button,
  FormControl,
} from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";


function MyNavbar() {
  let navigate = useNavigate();

  const logOutAction = () => {
    localStorage.removeItem("loginStatus");
    navigate("/login", { replace: true });
  };

  // Assistance of LocalStorage
  let loginStatus = localStorage.getItem("loginStatus");
  if (!loginStatus) {
    return <></>;
  }
  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container fluid>
          <Navbar.Brand href="#" className="ms-5 ps-5">
            CCAT-PREPARATION
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="ms-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link as={Link} to={"/Home"}>
                Home
              </Nav.Link>
              <Nav.Link as={Link} to={"/ExamSyllabus"}>
                Exam Syllabus
              </Nav.Link>
              <Nav.Link as={Link} to={"/CourseEligibility"}>
                Course Eligibility
              </Nav.Link>
              <Nav.Link as={Link} to={"/Counselling"}>
                Counselling
              </Nav.Link>
              <Nav.Link onClick={logOutAction}>Log Out</Nav.Link>
            </Nav>
            {/* <Form className="d-flex">
              <Link onClick={logOutAction}>
                <Button variant="outline-success">Log Out</Button>
              </Link>
            </Form> */}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default MyNavbar;
