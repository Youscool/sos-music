"use client";
import { Container } from "react-bootstrap";
import NavBar from "../Navbar/Navbar";
import { FaMicrophoneAlt } from "react-icons/fa";
import Boutton from "../Button/Button";
export default function Header() {
  return (
    <>
      <header className="hero-section">
        <NavBar />
        <Container className="h-100 d-flex align-items-center">
          <div>
            <h1 className="display-5 fw-bold text-white text-uppercase">
              Studio{" "}
              <span className="text-warning">d&apos;enregistrements </span>
              <br /> moderne
            </h1>
            <p className="text-warning fs-5 mt-3">
              Rec • Mix • Master de vos sons
            </p>
            <Boutton
              title={"Réserver Session"}
              icon={<FaMicrophoneAlt />}
              handleClick={() => {
                window.open(
                  "https://wa.me/22370125600",
                  "_blank",
                  "noopener,noreferrer",
                );
              }}
            />
          </div>
        </Container>
      </header>
    </>
  );
}
