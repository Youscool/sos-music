"use client"
import { Container, Row, Col } from "react-bootstrap";
import Image from "next/image";
import AboutCard from "./AboutCard";
export default function About() {
  return (
    <section id="about" className="section">
      <Container>
        <h2 className="section-title text-uppercase">à propos</h2>
        <Row className="align-items-center">
         
<Col md={6}>
  <p>
             <span className="text-warning text-uppercase">$o$</span> Music est un <span className="text-warning">studio d’enregistrement</span> professionnel équipé de matériel de dernière génération, 
             nous mettons notre expérience et notre expertise au service des artistes et créateurs. 
             De <span className="text-warning">l’enregistrement au mastering</span>, nous garantissons un rendu sonore précis, 
             moderne et fidèle à votre identité musicale.

            </p>
</Col>
 <Col md={6}>
            <AboutCard/>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
