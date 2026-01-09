import { Container, Row, Col, Card } from "react-bootstrap";

const services = [
  "Recording Session",
  "Mixing & Mastering",
  "Beat Production",
  "Vocal Coaching",
];

export default function Services() {
  return (
    <section id="services" className="section bg-dark">
      <Container>
        <h2 className="section-title">Our Services</h2>
        <Row>
          {services.map((service, i) => (
            <Col md={3} key={i}>
              <Card className="bg-dark text-white border-warning text-center">
                <Card.Body>
                  <Card.Title className="text-warning">
                    {service}
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
