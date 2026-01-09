import { Container, Navbar, Nav, Button } from "react-bootstrap";

import Image from "next/image";

export default function Header() {
  return (
    <>
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
