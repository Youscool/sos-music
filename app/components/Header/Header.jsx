
"use client"
import Image from "next/image";
import { Container, Navbar, Nav, Button } from "react-bootstrap";

export default function Header() {
  return (
    <>
    <Navbar expand="lg" variant="dark" className="py-3">
        <Container>
          <Navbar.Brand>
            <Image src="/Logo.png" width={40} height={40} alt="SOS Music" />
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse>
            <Nav className="ms-auto gap-3">
              <Nav.Link href="#about">About</Nav.Link>
              <Nav.Link href="#services">Services</Nav.Link>
              <Nav.Link href="#pricing">Pricing</Nav.Link>
              <Nav.Link href="#contact">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div
        style={{
          backgroundImage: "url('/hero.jpeg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: "90vh",
          position: "relative",
        }}
      >
        <div
          style={{
            background: "rgba(0,0,0,0.75)",
            position: "absolute",
            inset: 0,
          }}
        />
        <Container className="h-100 d-flex align-items-center position-relative">
          <div>
            <h1 className="display-4 fw-bold text-white">
              Professional Recording Studio
            </h1>
            <p className="text-light fs-5 mt-3">
              Record • Mix • Master your sound
            </p>
            <Button className="btn-gold mt-4">Book a Session</Button>
          </div>
        </Container>
      </div>
    </>
  );
}
