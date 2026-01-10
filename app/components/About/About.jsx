"use client"
import { Container, Row, Col } from "react-bootstrap";
import Image from "next/image";
export default function About() {
  return (
    <section id="about" className="section">
      <Container>
        <h2 className="section-title text-uppercase">à propos</h2>
        <Row className="align-items-center">
          <Col md={6}>
            <p>
             $0$ Music est un studio d’enregistrement professionnel équipé de matériel de dernière génération, 
             nous mettons notre expérience et notre expertise au service des artistes et créateurs. 
             De l’enregistrement au mastering, nous garantissons un rendu sonore précis, 
             moderne et fidèle à votre identité musicale.

            </p>
          </Col>
<Col md={6} className="about-img-wrapper position-relative">
  <Image
    src="/about.webp"
    alt="about-img"
    fill
    className="object-fit-cover w-100 h-100 rounded"
  />
</Col>

        </Row>
      </Container>
    </section>
  );
}
