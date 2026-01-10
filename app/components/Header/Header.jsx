
"use client"
import { Container, Button } from "react-bootstrap";
import NavBar from "../Navbar/Navbar"
export default function Header() {
  return (
    <>
      <div
        style={{
          backgroundImage: "url('/hero.webp')",
          backgroundAttachment: "fixed",
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: "100vh",
          position: "relative",
        }}
      >
        <div
          style={{
            background: "rgba(0, 0, 0, 0.55)",
            position: "absolute",
            inset: 0,
          }}
        >
          <NavBar/>
        </div>
        <Container className="h-100 d-flex align-items-center position-relative">
          <div style={{
           marginTop: "300px"
            }}>
            <h1 className="display-4 fw-bold text-white text-uppercase">
             Studio <span className="text-warning">d'enregistrement </span><br/> moderne
            </h1>
            <p className="text-warning fs-5 mt-3">
              Rec • Mix • Master de vos sons
            </p>
            <Button className="btn-gold mt-4">Réserver une Session</Button>
          </div>
        </Container>
      </div>
    </>
  );
}
