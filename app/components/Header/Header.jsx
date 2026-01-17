
"use client"
import { Button, Container } from "react-bootstrap";
import NavBar from "../Navbar/Navbar"
import Link from "next/link";
import { FaMicrophoneAlt } from "react-icons/fa";
export default function Header() {
  return (
    <>
      <header className="hero-section">
          <NavBar/>
        <Container className="h-100 d-flex align-items-center">
          <div>
            <h1 className="display-5 fw-bold text-white text-uppercase">
             Studio <span className="text-warning">d&apos;enregistrements </span><br/> moderne
            </h1>
            <p className="text-warning fs-5 mt-3">
              Rec • Mix • Master de vos sons
            </p>
            <Link  
            href="https://wa.me/22370125600" 
            target="_blank" 
            rel="noopener noreferrer"
            className="mt-4 btn btn-warning btn-lg">
             <FaMicrophoneAlt />  Réserver une Session
              </Link>
          </div>
        </Container>
      </header>
    </>
  );
}
