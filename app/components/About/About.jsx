"use client"
import { Container, Row, Col } from "react-bootstrap";

export default function About() {
  return (
    <section id="about" className="section">
      <Container>
        <h2 className="section-title">About Us</h2>
        <Row className="align-items-center">
          <Col md={6}>
            <p>
              SOS Music Studio is a professional recording studio offering
              high-quality sound production for artists, podcasters, and
              content creators.
            </p>
          </Col>
          <Col md={6}>
            <p>
              Our studio is equipped with modern gear, soundproof rooms, and
              experienced engineers to bring your vision to life.
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
