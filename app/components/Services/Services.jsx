"use client"
import { Container, Row, Col, Card } from "react-bootstrap";
import Image from "next/image"

const services = [
 {id: 1, title:"Enregistrement", img: "/recording.webp", alt: "recording-img"},
  {id: 2, title:"Mixage", img: "/mixing.webp", alt: "mixing-img"},
   {id: 3, title:"Mastering", img: "/mastering.webp", alt: "mastering-img"},
];

export default function Services() {
  return (
    <section id="services" className="section bg-dark">
      <Container>
        <h2 className="section-title">Nos Services</h2>
        <Row>
          {services.map((service) => (
            <Col md={4} className="mb-2" key={service.id}>
  <Card className="bg-dark text-white text-center h-100 overflow-hidden service-card">
    <div className="service-img position-relative">
      <Image
        src={service.img}
        alt={service.alt}
        fill
        className="w-100 h-100"
      />
    </div>

    <Card.Body>
      <Card.Title className="text-warning">
        {service.title}
      </Card.Title>
    </Card.Body>
  </Card>
</Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}
